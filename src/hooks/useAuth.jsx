import { useState, useEffect } from "react";

const useAuthStatus = (key) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const token = localStorage.getItem(key);

        return !!token; // Convert token presence to a boolean
    });

    useEffect(() => {
        const handleStorageChange = (event) => {
            console.log(event.key, ok);
            if (event.key === key) {
                // Update login status based on the presence of the token
                setIsLoggedIn(!!event.newValue);
            }
        };

        // Listen for storage changes
        window.addEventListener("storage", handleStorageChange);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [key]);

    return isLoggedIn;
};
export default useAuthStatus;
