document.addEventListener('DOMContentLoaded', function () {

    // dodaje cień do nawigacji
    const nav = document.querySelector('.navbar')
    function addShadow() {
        if (window.scrollY >= 0) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addShadow)


    // skrypt naprawiający nawigację (zamyka się po kliknięciu w cokolwiek na mobilce)
    $(document).click(function (event) {
        const clickover = $(event.target);
        const _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

});