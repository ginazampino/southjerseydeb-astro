/**
 * Toggles both the mobile-navigation menu's visibility and the body's scrolling behavior.
 * 
 * @param {string} tag 
 */
export function toggleMobileNav(tag) {
    /**
     * The <body> element of the document.
     * @type {HTMLElement}
     */
    const body = document.querySelector('body');

    /**
     * The mobile navigation menu element.
     * @type {HTMLElement}
     */
    const nav = document.querySelector('#mobileNav');

    /**
     * The elements that trigger the navigation toggle.
     * @type {NodeListOf<Element>}
     */
    const toggleElements = document.querySelectorAll(`${tag}`);

    /**
     * Attaches click event listeners to the toggle elements.
     *
     * @param {Event} event - The click event object.
     */
    [...toggleElements].forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            /**
             * Toggles the "no-scroll" class on the body element.
             */
            body.classList.toggle('no-scroll');

            /**
             * Toggles the "active" class on the mobile navigation menu.
             */
            nav.classList.toggle('active');
        });
    });
};