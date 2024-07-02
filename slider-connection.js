var slider = null;

const onResize = (event) => {
    const width = event.target.innerWidth;

    if (width < 900) {
        if (slider === null) {
            slider = tns({
                container: '.my-slider',
                items: 1,
                slideBy: 'page',
                autoplay: true
            });
        }
    } else {
        if (slider !== null) {
            slider.destroy();

            slider = null;
        }
    }
}

window.addEventListener('resize', onResize);
