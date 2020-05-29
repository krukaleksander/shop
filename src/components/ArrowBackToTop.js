import React from 'react';

const ArrowBackToTop = () => {
    let arrow;
    let hideArrowTrigger = false;
    //funkcja odpowiadająca za pojawianie się strzałki szybkiego powrotu na górę
    // hide arrow trigger powstał po to by strzałka znikała po przewinięciu na górę.
    const showAnArrow = () => {
        if (window.scrollY >= 250 && !hideArrowTrigger) {
            arrow.style.display = 'block';
        } else if (hideArrowTrigger) {
            arrow.style.display = 'none';
            hideArrowTrigger = false;
        } else if (window.scrollY < 250) {
            arrow.style.display = 'none';
        }
    }

    window.addEventListener('wheel', () => {

        showAnArrow();

    });

    window.addEventListener('touchmove', () => {
        showAnArrow();
    })
    document.addEventListener('DOMContentLoaded', () => {
        arrow = document.querySelector('.arrow-back');
        showAnArrow();
        arrow.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            hideArrowTrigger = true;
            showAnArrow();
        })
    });

    return (
        <div className="arrow-back">
            <i className="fas fa-arrow-alt-circle-up arrow-back__icon"></i>
        </div>
    );

}

export default ArrowBackToTop;