/**
 * Formats text within specified elements by styling occurrences of a search term.
 * 
 * @param {string} selector - A CSS selector targeting elements to be searched.
 * @param {string} searchTerm - The search term to be processed by RegEx.
 * @returns {void} Replaces the innerHTML of elements containing the search term.
 */
export function formatHeroTitle(selector, searchTerm) {
    /**
     * The list of elements selected using the provided CSS selector.
     * @type {NodeListOf<HTMLElement>}
     */
    const spanList = document.querySelectorAll(selector);

    /**
     * Loop through each element and format its content to style occurrences of the search term.
     */
    for (const span of spanList) {
        /**
         * The HTML content of the element.
         * @type {string}
         */
        const spanContent = span.innerHTML;

        /**
         * The content after formatting the search term occurrences.
         * @type {string}
         */
        const formattedContent = spanContent.replace(new RegExp(searchTerm, 'gi'), '<strong>$&</strong>');

        // Update the element's innerHTML with the formatted content:
        span.innerHTML = formattedContent;
    };
};