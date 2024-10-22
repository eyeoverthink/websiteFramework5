import { create } from "zustand";

export const useRestaurantStore = create((set) => ({
    restaurants: [],
    setRestaurants: (restaurants) => set({ restaurants }),
    createRestaurant: async (newRestaurant) => {
        if (!newRestaurant.name || !newRestaurant.image) {
            return { success: false, message: "Please fill in all fields." };
        }
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/restaurants`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newRestaurant),
            });
            const data = await res.json();
            if (res.ok) {
                set((state) => ({ restaurants: [...state.restaurants, data.data] }));
                return { success: true, message: "New Restaurant created successfully" };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: error.message };
        }
    },
    fetchRestaurants: async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/restaurants`);
            const data = await res.json();
            set({ restaurants: data.data });
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    },
    deleteRestaurant: async (id) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/restaurants/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (res.ok) {
                set((state) => ({ restaurants: state.restaurants.filter((restaurant) => restaurant._id !== id) }));
                return { success: true, message: data.message };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: error.message };
        }
    },
    updateRestaurant: async (id, updatedRestaurant) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/restaurants/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedRestaurant),
            });
            const data = await res.json();
            if (res.ok) {
                set((state) => ({
                    restaurants: state.restaurants.map((restaurant) => (restaurant._id === id ? data.data : restaurant)),
                }));
                return { success: true, message: data.message };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: error.message };
        }
    },
}));