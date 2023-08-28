/**
 * Toggles the visibility of a navigation link based on the number of listings.
 *
 * @param {string} selector - The CSS selector for the navigation link.
 */
export function toggleNavListings(selector) {
    /**
     * The number of listings stored as a data attribute in the <header> element.
     * @type {string}
     */
    const listingQuantity = document.querySelector('header').getAttribute('data-listings');

    /**
     * The navigation link element selected using the provided CSS selector.
     * @type {HTMLElement}
     */
    const navLink = document.querySelector(`${selector}`);

    /**
     * Adds the "hidden" class to the navigation link if there are no listings.
     */
    if (listingQuantity == '0') {
        navLink.classList.add('hidden');
    };
};