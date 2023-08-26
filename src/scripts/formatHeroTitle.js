/**
 * Formats text within specified elements by highlighting occurrences of a search term.
 * 
 * @param {string} selector A CSS selector targeting elements to be searched.
 * @param {string} searchTerm The search term to be processed by RegEx.
 * @returns {void} Replaces the innerHTML of elements containing the search term.
 */
export function formatHeroTitle(selector, searchTerm) {
    const spanList = document.querySelectorAll(selector);

    for (const span of spanList) {
        const spanContent = span.innerHTML;
        const formattedContent = spanContent.replace(new RegExp(searchTerm, 'gi'), '<strong>$&</strong>');

        span.innerHTML = formattedContent;
    };
};