/**
 * Recolors sections based on the number of listings.
 */
export function recolorSections() {
    /**
     * The <main> element of the document.
     * @type {HTMLElement}
     */
    const main = document.querySelector('main');

    /**
     * The number of listings stored as a data attribute on the main element.
     * @type {string}
     */
    const listings = main.getAttribute('data-listings');

    /**
     * Adds the 'alt' class to the main element if the number of listings is 0.
     */
    if (listings == '0') {
        main.classList.add('alt');
    };
};