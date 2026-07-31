import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ children }) {
    const carouselRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const carousel = carouselRef.current;

        updateArrows();

        carousel.addEventListener("scroll", updateArrows);

        return () => {
            carousel.removeEventListener("scroll", updateArrows);
        };
    }, []);

    function handleMouseDown(e) {
        isDragging.current = true;
        startX.current = e.pageX;
        scrollLeft.current = carouselRef.current.scrollLeft;

        carouselRef.current.style.cursor = "grabbing";
    }
    function handleMouseMove(e) {
        if (!isDragging.current) return;

        e.preventDefault();

        const walk = e.pageX - startX.current;

        carouselRef.current.scrollLeft = scrollLeft.current - walk;
    }

    function handleMouseUp() {
        isDragging.current = false;

        carouselRef.current.style.cursor = "grab";
    }

    function handleMouseLeave() {
        isDragging.current = false;

        carouselRef.current.style.cursor = "grab";
    }


    function getScrollAmount() {
        const firstCard = carouselRef.current.firstElementChild?.firstElementChild;

        if (!firstCard) return 350;

        const gap = parseFloat(getComputedStyle(carouselRef.current.firstElementChild).gap) || 0;

        return firstCard.offsetWidth + gap;
    }

    function updateArrows() {
    const carousel = carouselRef.current;

    if (!carousel) return;

    setCanScrollLeft(carousel.scrollLeft > 0);

    setCanScrollRight(
        carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 1
    );
}

    function scrollLeftButton() {
        carouselRef.current.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth",
        });
    }

    function scrollRightButton() {
        carouselRef.current.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth",
        });
    }
    return (
        <div className={styles.wrapper}>
            {canScrollLeft && (
                <button
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={scrollLeftButton}
                >
                    ←
                </button>
            )}

            <div
                ref={carouselRef}
                className={styles.carousel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>

            {canScrollRight && (
                <button
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={scrollRightButton}
                >
                    →
                </button>
            )}
        </div>
    );
}

export default Carousel;