(() => {

    let docElem = document.documentElement,
        header = document.querySelector('.menu'),
        didScroll = false,
        changeHeaderOn = 280;

    let init = () => {
        scrollPage();
        window.addEventListener('scroll', (event) => {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }

    let scrollPage = () => {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            header.classList.add('menu-shrink');
        } else {
            header.classList.remove('menu-shrink');
        }
        didScroll = false;
    }

    let scrollY = () => {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();
