import { assignYear } from '../assignYear';

describe('assignYear', () => {
    beforeEach(() => {
        document.body.innerHTML = '<span class="current-year"></span>';
    });

    test('assigns the current year to the target element', () => {
        assignYear('.current-year');

        const targetSpan = document.querySelector('.current-year');
        const currentYear = new Date().getFullYear().toString();

        // Check if innerHTML of target element is equal to the current year:
        expect(targetSpan.innerHTML).toBe(currentYear);
    });

    test('does nothing if the target element does not exist', () => {
        document.body.innerHTML = ''; // Simulates element not existing

        assignYear('.current-year');

        // Check if innerHTML of target element has not been updated:
        expect(document.querySelector('.current-year')).toBeNull();
    });
});
