"use client";

import { useEffect, useState } from "react";

const HeroTrailer = ({
    backdropUrl,
    trailerKey,
    children,
}) => {
    const [playTrailer, setPlayTrailer] = useState(false);

    useEffect(() => {
        if (!trailerKey) return;

        const timer = setTimeout(() => {
            setPlayTrailer(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, [trailerKey]);

    return (
        <section className="relative h-screen overflow-hidden">

            {/* Background */}
            {!playTrailer ? (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${backdropUrl})`,
                    }}
                />
            ) : (
                <iframe
                    className="
    absolute
    top-1/2 left-1/2
    min-w-full
    min-h-full
    w-[180.77vh]
    h-[56.25vw]
    -translate-x-1/2
    -translate-y-1/2
  "
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Hero Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto flex items-center px-10">
                {children}
            </div>
        </section>
    );
};

export default HeroTrailer;