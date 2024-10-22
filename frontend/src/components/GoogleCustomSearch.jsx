
import React, { useEffect, useRef } from 'react';

const GoogleCustomSearch = ({ searchTerm }) => {
    const searchRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cse.google.com/cse.js?cx=83ab80fe9cde54f8a";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.google) {
                window.google.search.cse.element.render({
                    div: searchRef.current,
                    tag: 'search',
                    gname: 'gsearch',
                });
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (window.google && searchTerm) {
            const element = window.google.search.cse.element.getElement('gsearch');
            if (element) {
                element.execute(searchTerm);
            }
        }
    }, [searchTerm]);

    return <div className="gcse-search" ref={searchRef}></div>;
};

export default GoogleCustomSearch;