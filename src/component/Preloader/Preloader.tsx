import React, { useEffect } from 'react';

export const Preloader = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const preloader = document.querySelector('.preloader') as HTMLElement | null;

            if (preloader) {
                document.body.style.overflow = ''; 
                preloader.innerHTML = ''; 
                preloader.style.display = 'none'; 
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="preloader">
            <div className="spinner"></div>
        </div>
    );
};