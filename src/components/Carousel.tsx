import React, {use, useEffect, useRef, useState} from "react";

interface CarouselProps {
  images: string[];
  intervalMs?: number;
  maxHeight?: number | string;
}

export default function Carousel({
  images,
  intervalMs = 3000,
  maxHeight = 400}: CarouselProps) {
    const [index, setIndex] = useState(0);
    const timerRef = useRef<number | null>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!images || images.length === 0) return;
        startAuto();
        return stopAuto;
    }, [images]);

    function startAuto() {
        stopAuto();
        timerRef.current = window.setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalMs);
    }

    function stopAuto() {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }

    function prev() {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        startAuto();
    }

    function next() {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        startAuto();
    }

    function onKeyDown(e: React.KeyboardEvent) {
        if (e.key === "ArrowLeft") {
            prev();
        } else if (e.key === "ArrowRight") {
            next();
        }
    }

    return (
        <div
            className="carousel"
            id="headshotCarousel"
            ref={rootRef}
            role="region"
            aria-label="Photo carousel"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
            style={{
                position: "relative",
                height: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
            }}
        >
            <div
                className="carousel-track"
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            >
                {images.map((src, i) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Photo ${i + 1}`}
                        className={`carousel-image${i === index ? " active" : ""}`}
                        style={{
                            display: i === index ? "inline-block" : "none",
                            maxHeight: maxHeight,
                            maxWidth: "100%",
                            borderRadius: "8px",
                            margin: "0 auto",
                            padding: "8px",
                            boxSizing: "border-box"
                        }}
                    />
                ))}
            </div>

            <button
                className="carousel-control prev"
                onClick={prev}
                aria-label="Previous photo"
                style={{
                    position:"absolute",
                    top: "50%",
                    left: "16px",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    padding: "8px",
                    borderRadius: "50%",
                    cursor: "pointer"
                }}
            >
                &#10094;
            </button>

            <button
                className="carousel-control next"
                onClick={next}
                aria-label="Next photo"
                style={{
                    position:"absolute",
                    top: "50%",
                    right: "16px",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    padding: "8px",
                    borderRadius: "50%",
                    cursor: "pointer"
                }}
            >
                &#10095;
            </button>
        </div>
        )
    }