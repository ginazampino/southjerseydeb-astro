export function fadeQuotes(selector) {
    const list = Array.from(document.querySelectorAll(selector));
    const delay = 5000;

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

    const showItem = (item) => {
        item.classList.add('active');
    };

    const hideItem = (item) => {
        item.classList.remove('active');
    };

    fadeBehavior();

    setInterval( () => {
        fadeBehavior()
    }, delay * list.length);
};