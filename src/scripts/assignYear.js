/**
 * Assigns the current year to a target element with the class "current-year".
 */
export function assignYear(selector) {
    /**
     * The target <span> element with the class "current-year".
     * @type {HTMLElement}
     */
    const targetSpan = document.querySelector(selector);

    /**
     * The current year as a string.
     * @type {string}
     */
    const currentYear = new Date().getFullYear().toString();

    /**
     * Updates the inner HTML of the target element with the current year if it exists.
     */
    if (targetSpan) {
        targetSpan.innerHTML = currentYear;
    };
};