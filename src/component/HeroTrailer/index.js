"use client";

import { useEffect, useState } from "react";
import HeroMobile from "./HeroMobile";

const HeroTrailer = ({
    backdropUrl,
    trailerKey,
    children,
    title,
    overview
}) => {
    const [playTrailer, setPlayTrailer] = useState(false);
    const [iframeError, setIframeError] = useState(false);

    useEffect(() => {
        if (!trailerKey) return;

        const timer = setTimeout(() => {
            setPlayTrailer(true);
        }, 5500);

        return () => clearTimeout(timer);
    }, [trailerKey]);

    const handleIframeError = () => {
        setIframeError(true);
    };

    return (
        <section className="relative w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
                <HeroMobile title={title} overview={overview}/>
                
                {/* Background selalu ada */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${backdropUrl})`,
                    }}
                />

                {/* Iframe hanya muncul jika playTrailer true DAN tidak ada error */}
                {!iframeError && playTrailer && (
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
                        src={`https://www.youtube-nocookie.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&rel=0`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        onError={handleIframeError}
                    />
                )}

                <div className="absolute inset-0 bg-black/60" />

                <div className="hidden md:flex absolute inset-0 z-10 items-center max-w-7xl mx-auto px-10">
                    {children}
                </div>
            </div>

            <div className="md:hidden relative z-20 px-4 py-12 max-w-7xl mx-auto bg-gradient-to-b backdrop-blur-lg from-black/80 to-black">
                {children}
            </div>
        </section>
    );
};

export default HeroTrailer;