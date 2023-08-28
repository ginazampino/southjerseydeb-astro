export function toggleNavListings(selector) {
    const listingQuantity = document.querySelector('header').getAttribute('data-listings');
    const navLink = document.querySelector(`${selector}`);

    if (listingQuantity == '0') {
        navLink.classList.add('hidden');
    };
};