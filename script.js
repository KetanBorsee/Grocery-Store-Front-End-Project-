let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => 
    {
     searchForm.classList.toggle('active');
     shoppingCart.classList.remove('active'); 
     userLogin.classList.remove('active');
     detailScreen.classList.remove('active');
    }



    let shoppingCart=document.querySelector('.shopping-cart');
    document.querySelector('#cart-btn').onclick = () =>
    {
     shoppingCart.classList.toggle('active'); 
     searchForm.classList.remove('active');
     userLogin.classList.remove('active');
     detailScreen.classList.remove('active');
    }



    let userLogin=document.querySelector('.login-form');
    document.querySelector('#login-btn').onclick = () =>
    {
        userLogin.classList.toggle('active');
        shoppingCart.classList.remove('active'); 
        searchForm.classList.remove('active');
        detailScreen.classList.remove('active');
    }


    let detailScreen=document.querySelector('.details');
    document.querySelector('#menu-btn').onclick = () =>
    {
        detailScreen.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active'); 
        userLogin.classList.remove('active');
    }

    window.onscroll = () =>
    {
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active'); 
        userLogin.classList.remove('active');
        detailScreen.classList.remove('active');

    }


    var swiper = new Swiper(".product-slider", {
       loop:true,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
              },
              1020: {
                slidesPerView: 3,
              },
        }
       
      });





      var swiper = new Swiper(".review-slider", {
        loop:true,
         spaceBetween: 20,
         autoplay: {
             delay: 2500,
             disableOnInteraction: false,
         },
         breakpoints: {
             0: {
               slidesPerView: 1,
             },
             768: {
                 slidesPerView: 2,
               },
               1020: {
                 slidesPerView: 3,
               },
         }
        
       });  




       