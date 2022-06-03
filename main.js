const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")

// Abre e fecha o menu quando clicar nos icones
for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

//quando clicar em um item do menu, esconder ele
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

//adicionar sombra no header ao dar scroll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeader() {

    if(window.scrollY >= navHeight) {
        //scroll maior que a altura do header
        header.classList.add('scroll')
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
}


//Testimonial carousel slider swiper
const swiper = new Swiper('.swiper-container', {
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

//ScrollReveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image, 
    #about .image, #about .text,
    #services .header, #services .card,
    #testimonials .header, #testimonials .testimonials,
    #contact .text, #contact .links
    footer .brand, footer .social`,
    {interval: 100})


//Botão back to top
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if(window.scrollY >= 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

//Menu ativo conforme a seção está visível
const sections = document.querySelectorAll('main section[id]')
function activateMenu() {
    const checkpoint = window.pageYOffset + (window.innerHeight/8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else { 
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}

//Quando usar o scroll
window.addEventListener('scroll', function() {
    changeHeader()
    backToTop()
    activateMenu()
})

