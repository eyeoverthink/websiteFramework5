// import { Route, Routes } from 'react-router-dom';
// import { Box } from "@chakra-ui/react";
// import NavBar from './components/NavBar';
// import HomePage from './pages/HomePage';
// import AttractionsPage from './pages/AttractionsPage';
// import RestaurantPage from './pages/RestaurantPage';
// import ContactPage from './pages/ContactPage';
// import AboutPage from './pages/AboutPage';
// import CreatePage from './pages/CreatePage';
// // import NewRestaurantPage from './pages/NewRestaurantPage'; // Uncomment if this component exists
//
// export function App() {
//     return (
//         <Box minHeight={"100vh"}>
//             <NavBar />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/home" element={<HomePage />} />
//                 <Route path="/create" element={<CreatePage />} />
//                 <Route path="/attractions" element={<AttractionsPage />} />
//                 <Route path="/restaurants" element={<RestaurantPage />} />
//                 { <Route path="/newRestaurant" element={<NewRestaurantPage />} /> }
//                 <Route path="/about" element={<AboutPage />} />
//                 <Route path="/contact" element={<ContactPage />} />
//             </Routes>
//         </Box>
//     );
// }
//
// export default App;


import { Route, Routes } from 'react-router-dom';
import {Box, Heading} from "@chakra-ui/react";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AttractionsPage from './pages/AttractionsPage';
import RestaurantPage from './pages/RestaurantPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CreatePage from './pages/CreatePage';
import NewRestaurantPage from './pages/NewRestaurantPage';
import CreateRestaurant from './pages/CreateRestaurant';
import ProductPage from './pages/ProductPage';
import SearchPage from "./pages/SearchPage.jsx";
import CenteredLayout, {CenteredHeader} from "./components/CenteredLayout.jsx";

export function App() {
    return (
        <Box minHeight={"100vh"}>
            <CenteredHeader />
            <Heading as="h1" mb={2} textAlign="center">
                    Welcome to Eyeoverthink Travel
            </Heading>

            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/attractions" element={<AttractionsPage />} />
                <Route path="/create-restaurant" element={<CreateRestaurant />} />
                <Route path="/restaurants" element={<RestaurantPage />} />
                <Route path="/newRestaurant" element={<NewRestaurantPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Box>
    );
}

export default App;