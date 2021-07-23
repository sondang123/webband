

    ///////// Animate Modules //////////
    const cardItem = document.querySelectorAll('.load-item');
    let delay = 1;


    const anime = (element, animation) => {
        if (element.offsetParent != null) {

            if (!element.classList.contains(animation)) {
                element.classList.add(animation);

                element.style.animationDelay = `${delay}` * 0.2 + "s";
                delay++;
            }
        }
    };

    const isInViewport = (element) => {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.bottom >= 0 &&
            bounding.right >= 0 &&
            bounding.top <= document.documentElement.clientHeight &&
            bounding.left <= document.documentElement.clientWidth
        )
    };

    const isItemVisible = (element, animation) => {
        if (isInViewport(element)) {
            if (window.innerWidth >= 360) {
                anime(element, animation);
            }
        }
    };


    // for viewport
    const animeItem = (item, animation) => {
        item.forEach(item => {
            isItemVisible(item, animation);
        })
        delay = 1;
    };


    // for scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 360) {
            animeItem(cardItem, "anime");
        }

    });
    // to load the animations

    animeItem(cardItem, "anime");