/**
 * Applies fade-in and fade-out behavior to a list of elements.
 *
 * @param {string} selector - The CSS selector for the elements to be faded.
 */
export function fadeQuotes(selector) {
    /**
     * The list of elements selected using the provided CSS selector.
     * @type {Array<HTMLElement>}
     */
    const list = Array.from(document.querySelectorAll(selector));

    /**
     * The delay between fading in and fading out elements (in milliseconds).
     * @type {number}
     */
    const delay = 5000;

    /**
     * Applies the fade behavior to each element in the list of elements.
     */
    const fadeBehavior = () => {
        list.forEach((item, i) => {
            setTimeout(() => {
                showItem(item);
            }, delay * i);

            setTimeout(() => {
                hideItem(item);
            }, (delay * i) + delay);
        });
    };

    /**
     * Applies the "active" class to make an element visible.
     *
     * @param {HTMLElement} item - The element to be shown.
     */
    const showItem = (item) => {
        item.classList.add('active');
    };

    /**
     * Removes the "active" class to hide an element.
     *
     * @param {HTMLElement} item - The element to be hidden.
     */
    const hideItem = (item) => {
        item.classList.remove('active');
    };

    // Initial call to apply fade behavior:
    fadeBehavior();

    // Reapply fade behavior at regular intervals:
    setInterval( () => {
        fadeBehavior()
    }, delay * list.length);
};