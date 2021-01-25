// the carousel of the banner

$('.banner .owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    loop:true,
    margin:10,
    items:1

})



// the animated counter

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updatecount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        // console.log(count)
        // const inc = target / 1; 
        if(count < target){
            counter.innerText = count + 1;
            setTimeout(updatecount,1);
        }else{
            counter.innerText = target
        }

    }


    updatecount()
})



$('.review .owl-carousel').owlCarousel({
    items:1,
    nav: false,
    dots: true,
    dotsData: true,
})



// event of scrolling for the navbar

window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
    var navbar = document.querySelector('.mainheader .navbar');
    if (currentScrollPos > 300 ) {
        navbar.style.position = 'fixed'
        navbar.style.top = '-16px';
        navbar.style.left = '0';
        navbar.style.zindex = '1000'
    }else{
        navbar.style.position = 'static';

    }
})