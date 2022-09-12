//------------------- start fix nav bar ---------------

navBar = document.querySelector('.nav-bar');

sasa = false;

window.onscroll = ()=>{
    posTop = document.documentElement.scrollTop;
    // console.log(posTop)
    
    if(posTop>50) {

        navBar.classList.add('fixed')
        if(!sasa)
            fadein(navBar)
        sasa = true;

    }
    else
    {
        navBar.classList.remove('fixed')
        sasa = false;
        navBar.style.margin = "0px";

    }
}

function fadein(element){
    navBar.style.margin="15px 0px"
    var mg = 15;
    element.style.opacity = 0.5;
    var op = 0.5;
    foo = setInterval(()=>{
        element.style.opacity = op;
        element.style.margin = mg+'px 0px';
        op += 0.05;
        mg -= 1;
        if(op>1 && mg<0)
        {
            clearInterval(foo);
        }
    },2);
}



//------------------ end fix nav bar -----------------
//------------------- start sliders ------------------

const slides = document.querySelector('.slider').children;
const btn_next_slide = document.querySelector('.next-slide');
const btn_prev_slide = document.querySelector('.prev-slide');

let index_slide = 0;

btn_prev_slide.addEventListener('click',() => prevSlide());

btn_next_slide.addEventListener('click',() => nextSlide());

function nextSlide(){
    if(index_slide==slides.length-1)
    {
        index_slide = 0;
    }else
    {
        index_slide++;
    }
    changeSlide();
    resetTimer();
}

function prevSlide(){
     if(index_slide==0){
        index_slide = slides.length-1;
    }
    else
    {
        index_slide--;
    }
    changeSlide();
    resetTimer();
}

function changeSlide(){
    for(let i = 0;i<slides.length;i++)

        slides[i].classList.remove('active');

    slides[index_slide].classList.add('active');
}

function resetTimer(){
    clearInterval (timer);
    timer = setInterval(autoPlaySlide,5000);
}

function autoPlaySlide(){
    nextSlide();
}

let timer = setInterval(autoPlaySlide,3000);

//--------------------- end sliders----------------------

const bg = document.querySelector('.core');
window.addEventListener('scroll',function(){
    bg.style.opacity = 1 - +window.pageYOffset/700;
})

//------------- start counter first data-----------------
const counters = document.querySelectorAll('.counter-text-first-data');

counters.forEach(counter =>{
    counter.innerText ='0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        
        if(c<target){
            counter.innerText = c+1;
            setTimeout(updateCounter,20)
        }else{
            counter.innerText = target;
        }

    }

    updateCounter();
})

//-------------- end counter first data------------------


//-------------- start carousel first data------------------
$('.owl-carousel').owlCarousel({ 
    loop:true,
    nav:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
//-------------- end carousel first data------------------

//---------------- start second data--------------------
const tabMenu = document.querySelector('.tab-btn-second-data').children;
const itemmm = document.querySelector('.portfolio-gallery').children;

for(let i =0 ; i<tabMenu.length; i++){

    tabMenu[i].addEventListener('click',function(){
        for(let j =0; j<tabMenu.length;j++){
            tabMenu[j].classList.remove('active');
        }
        this.classList.add('active');

        const targetPortfolio = this.getAttribute('data-target');
        console.log(targetPortfolio)


        for(let gg=0;gg<itemmm.length;gg++){
            itemmm[gg].style.display = 'none';
            if(targetPortfolio == itemmm[gg].getAttribute('data-id')){
                itemmm[gg].style.display = 'block'
            }else if (targetPortfolio == 'all')
            {
                itemmm[gg].style.display = 'block';
            }       
        }  
    })
}

//--------------- start lightbox data-------------------
const gallery_light_box = document.querySelector('.portfolio-gallery');
const item_gallery_light_box = gallery_light_box.querySelectorAll('.item');
const light_box = document.querySelector('.light-box');
const light_box_img = light_box.querySelector('img');
const close_light_box = document.querySelector('.close')

light_box.addEventListener('click',function(){
    if(event.target != light_box_img){
        light_box.classList.remove('show');
    }
})

close_light_box.addEventListener('click',function(){
    light_box.classList.remove('show');
})



item_gallery_light_box.forEach(item =>{
    item.querySelector('span').addEventListener('click',function(){
        light_box.classList.add('show');
        light_box_img.src = item.querySelector('img').getAttribute('src');
    })
})

//----------------- end second data---------------------

//----------------- start counter third data---------------------
const counters_third_data = document.querySelectorAll('.counter-object-third-data');

counters_third_data.innerText = '0'

counters_third_data.forEach(counter =>{
    counter.innerText ='0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        
        if(c<target){
            counter.innerText = c+1;
            setTimeout(updateCounter,20)
        }else{
            counter.innerText = target;
        }
    }
    updateCounter();
})
//----------------- end counter third data---------------------