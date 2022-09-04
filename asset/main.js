
$(document).ready(function(){
    $('.slider_items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      arrows: true,
      autoplaySpeed: 4000,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right-long' aria-hidden='true'></i></button>",
      dots: true,
      infinite: false,
      responsive: [{
        breakpoint: 739,
        settings:{
          // prevArrow:false,
          // nextArrow:false,
        }
      }]
    });
});


$(document).ready(function(){
  $('.facilities_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay:false,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [{
      breakpoint: 1024,
      settings:{
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        infinite: true,
      }
    },
    {
      breakpoint: 1023,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },

    {
      breakpoint: 739,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });
});







$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()){
        $('.header').addClass('active')
    }
    else{
        $('.header').removeClass('active') 
    }
      })
});





      
      const $$ = document.querySelector.bind(document)
      const $$$= document.querySelectorAll.bind(document)

      const tabs = $$$('.tab_items')
      const pane = $$$('.tab_pane')

      tabs.forEach((tab, index)=>{
        const panes = pane[index]
        tab.onclick = function(){

          $$('.tab_items.focus').classList.remove('focus')
          $$('.tab_pane.focus').classList.remove('focus')

          this.classList.add('focus')
          panes.classList.add('focus')
        }
      })




// counter number

// const counters = document.querySelectorAll('.number_items')

// counters.forEach((number_items) =>{
//   number_items.innerText = '0';

//   const updateCounter = () => {
//     const target = +number_items.getAttribute('data-target');
    
//     const c = +number_items.innerText;

//     const increment = target / 250;

//     if(c < target){
//       number_items.innerText = `${Math.ceil(c + increment)}`

//       setTimeout(updateCounter, 5);
//     } else{
//       number_items.innerText = target;
//     }
    
//   }
//   updateCounter();

// })


      const A = document.querySelector.bind(document)
      const B = document.querySelectorAll.bind(document)

      const choose = B('.choose')
      const none = A('.over_play')
      const nav = B('.nav_reponsive')
      
      nav.forEach((tab, index) =>{
        tab.onclick = function(){
          
          
          A('.over_play').classList.remove('disappear')
          none.classList.toggle('appear')
          
        }
      })

      choose.forEach((tab, index) =>{
        tab.onclick = function(){

          A('.over_play').classList.remove('appear')
          none.classList.add('disappear')
          
          
        }
      })


      // const navToggler = document.querySelector('.nav_reponsive')
      // navToggler.addEventListener("click",overPlayToggler)

      // function overPlayToggler (){
      //   document.querySelector(".over_play").classList.toggle("open")
      // }



      