//Preload
let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");

setTimeout(function () {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
}, 1280);

//script do scroll
window.addEventListener("scroll", function () {
  //Criando a variavel header e puxando a id do INDEX
  let header = document.querySelector("#header");
  //criando uma classe para o header e adicionando o efeito
  header.classList.toggle("rolar", window.scrollY > 0);
});

//script hamburguer
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../public/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../public/img/close_white_36dp.svg";
    }
}

//Carrossel
var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//+18
document.getElementById("idadeForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário e o redirecionamento da página

  // Obtém a resposta
  const idadeConfirmada = document.querySelector('input[name="confirmar_idade"]:checked');

  if (idadeConfirmada) {
      // Se o usuário confirmar que tem mais de 18 anos
      if (idadeConfirmada.value === "sim") {
          // Define o cookie para lembrar a confirmação de idade
          document.cookie = "maior_de_18=sim; path=/; max-age=86000";  // Cookie válido por 24 hora

          // Esconde a sobreposição e permite interação com o site
          document.getElementById("idade").style.display = "none";
      } else {
          // Se o usuário não tem mais de 18 anos, mostra um alerta
          alert("Você deve ter mais de 18 anos para acessar este site.");
      }
  }
});
