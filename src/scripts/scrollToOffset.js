/**
 * Scrolls the page to the target element when a link with a specified tag is clicked.
 *
 * @param {string} tag - The CSS selector to select links that trigger scrolling.
 */
export function scrollToOffset(tag) {
    // Select all elements matching the given tag selector.
    const links = document.querySelectorAll(`${tag}`);

    /**
     * Calculates the offset for scrolling based on the window's width.
     *
     * @returns {number} - The offset value to adjust the scroll position.
     */
    function calculateOffset() {
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        if (mediaQuery.matches) {
            return -99;
        } else {
            return -90;
        }
    }

    // Add click event listeners to each link element.
    [...links].forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Get the target element's ID from the link's href attribute.
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // If the target element exists, calculate the offset and scroll to it smoothly.
            if (targetElement) {
                const offset = calculateOffset();

                // Scroll to the target element with an adjusted offset.
                window.scrollTo({
                    top: targetElement.offsetTop + offset,
                    behavior: 'smooth',
                });
            }
        });
    });
}
