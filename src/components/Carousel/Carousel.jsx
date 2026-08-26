import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({
    children,
    autoplay = false,
    autoplayInterval = 5000,
    scrollItemSelector = null,
}) {
    const carouselRef = useRef(null);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);


    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        updateArrows();

        carousel.addEventListener("scroll", updateArrows);
        window.addEventListener("resize", updateArrows);

        return () => {
            carousel.removeEventListener("scroll", updateArrows);
            window.removeEventListener("resize", updateArrows);
        };
    }, []);


    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            const carousel = carouselRef.current;

            if (!carousel) return;

            const amount = getScrollAmount();

            const isAtEnd =
                carousel.scrollLeft + carousel.clientWidth >=
                carousel.scrollWidth - 1;

            if (isAtEnd) {
                carousel.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            } else {
                carousel.scrollBy({
                    left: amount,
                    behavior: "smooth",
                });
            }
        }, autoplayInterval);

        return () => {
            clearInterval(interval);
        };
    }, [autoplay, autoplayInterval]);


    function handleMouseDown(e) {
        isDragging.current = true;

        startX.current = e.pageX;

        scrollLeft.current =
            carouselRef.current.scrollLeft;

        carouselRef.current.style.cursor = "grabbing";
    }


    function handleMouseMove(e) {
        if (!isDragging.current) return;

        e.preventDefault();

        const walk = e.pageX - startX.current;

        carouselRef.current.scrollLeft =
            scrollLeft.current - walk;
    }


    function handleMouseUp() {
        isDragging.current = false;

        if (carouselRef.current) {
            carouselRef.current.style.cursor = "grab";
        }
    }


    function handleMouseLeave() {
        isDragging.current = false;

        if (carouselRef.current) {
            carouselRef.current.style.cursor = "grab";
        }
    }


    function getScrollAmount() {
        const carousel = carouselRef.current;

        if (!carousel) return 350;

        let firstItem = null;

        /*
         * Permite indicar qué elemento debe representar
         * cada paso del carrusel.
         *
         * Esto evita alterar el comportamiento de los
         * carruseles existentes.
         */
        if (scrollItemSelector) {
            firstItem =
                carousel.querySelector(
                    scrollItemSelector
                );
        } else {
            firstItem =
                carousel.firstElementChild;
        }

        if (!firstItem) return 350;

        const gap =
            parseFloat(
                getComputedStyle(firstItem.parentElement).gap
            ) || 0;

        return firstItem.offsetWidth + gap;
    }


    function updateArrows() {
        const carousel = carouselRef.current;

        if (!carousel) return;

        setCanScrollLeft(
            carousel.scrollLeft > 1
        );

        setCanScrollRight(
            carousel.scrollLeft +
            carousel.clientWidth <
            carousel.scrollWidth - 1
        );
    }


    function scrollLeftButton() {
        const carousel = carouselRef.current;

        if (!carousel) return;

        carousel.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth",
        });
    }


    function scrollRightButton() {
        const carousel = carouselRef.current;

        if (!carousel) return;

        carousel.scrollBy({
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
                    aria-label="Anterior"
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
                    aria-label="Siguiente"
                >
                    →
                </button>
            )}

        </div>
    );
}

export default Carousel;