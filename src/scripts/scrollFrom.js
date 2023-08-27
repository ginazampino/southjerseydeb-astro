/**
 * Adds smooth scrolling behavior to links that point to target elements on the page.
 * @param {string} tag A CSS selector targeting links that should trigger smooth scrolling
 * @return {void}
 */
export function scrollFrom(tag) {
    /**
     * @type {NodeListOf<HTMLAnchorElement>}
     */
    const links = document.querySelectorAll(`${tag}`);

    [...links].forEach((link) => {
        /**
         * @param {Event} event - The click event object
         * @returns {void} Initiate scrolling behavior
         */
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offset = -100;

                window.scrollTo({
                    top: targetElement.offsetTop + offset,
                    behavior: 'smooth'
                });
            };
        });
    });
};