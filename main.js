window.cartQtd = 0;

const main = {
  init: function () {
    $('.main-slider').slick({
      dots: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 10000,
      fade: true,
      cssEase: 'linear',
      speed: 300,
      prevArrow: $('.left-angle'),
      nextArrow: $('.right-angle')
    });

    // testando se o user é mobile
    if(main.isMobile()){ 
      $('.product').slick();
    };
    main.scrollHeader();
    window.addEventListener('resize', function () {window.location.reload();});
  },

  scrollHeader: function () {
    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) header.classList.add('scroll'); // > 0 ou outro valor desejado
        else header.classList.remove('scroll');
    });
  },

  buy: function (id) {
    event.preventDefault();
    console.log('buy', id);
    main.openCloseModal('modal-compra');
    $(`#product-${id}`).addClass('hide');
    $(`#product-${id}-comprado`).removeClass('hide');
    window.cartQtd = window.cartQtd + 1;
    main.reloadCart();
  },

  comprado: function () {
    event.preventDefault();
    main.openCloseModal('modal-comprado');
  },

  reloadCart: function () {
    document.getElementById('cart-qtd').innerText = window.cartQtd;
    if (window.cartQtd > 0) $('#cart-qtd').removeClass('hide');
  },
  
  isMobile: function () {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){ 
      return true;
    }
    return false;
  },

  openCloseModal: function (modalId) {
    $(`#${modalId}`).toggleClass('hide');
  },


  openMenu: function () {
    if (main.isMobile()) {
      $('.menu-mobile').toggleClass('open');
    } else {
      console.log('else');
      $('.menu-desktop').toggleClass('hide');
    }
  }
}

main.init();