$('.banner .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplayTimeout: 4000,
    autoplay: true,
    autoplaySpeed: 400,
    paginationSpeed: 400,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

const header = {
    init: function() {
        this.scrollNavbar('#header');
        this.clickShowMenu('.icon-bar', '.menu', 'show-menu');
    },
    scrollNavbar: function(navbar) {
        let headerNav = document.querySelector(navbar);
        let getHeightNav = headerNav.offsetHeight;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > getHeightNav) {
                headerNav.classList.add('active');
            } else {
                headerNav.classList.remove('active');
            }
        });
    },
    clickShowMenu: function(iconbar, headerMenu, showMenu) {
        let iconBar = document.querySelector(iconbar);
        let navMenu = document.querySelector(headerMenu);
        iconBar.addEventListener('click', (event) => {
            event.preventDefault();
            navMenu.classList.toggle(showMenu);
        });
    },
}
header.init();
// =============counterElem===============
const amount = {
    init: function() {
        this.visualCounter('.counterElement');
    },
    visualCounter: function(counterElem) {
        let counters = document.querySelectorAll(counterElem);
        counters.forEach(counter => {
            counter.innerText = '0';
            const increment = Math.random() * 5;
            let updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const getValue = +counter.innerText;
                if (getValue < target) {
                    counter.innerText = Math.ceil(getValue + increment);
                    setTimeout(updateCounter, 25);
                } else {
                    counter.innerText = target;
                }
            }
            updateCounter();
        });
    }
}
amount.init();