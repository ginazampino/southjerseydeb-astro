export function scrollToOffset(tag) {
    const links = document.querySelectorAll(`${tag}`);
    
    function calculateOffset() {
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        if (mediaQuery.matches) {
            return -100;
        } else {
            return -90;
        };
    };

    [...links].forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offset = calculateOffset();

                window.scrollTo({
                    top: targetElement.offsetTop + offset,
                    behavior: 'smooth'
                });
            };
        });
    });
};