const headerMMenu = document.getElementById("headerMMenu");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileLinks = document.querySelectorAll(".mobileItem a");

const toTopBtn = document.getElementById("toTopBtn");

// ----------

var swiper = new Swiper('.mySwiper', {
  loop: true,
  direction: 'horizontal',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
      el: '.swiper-scrollbar',
  },
});

var swiper = new Swiper('.CardSwiper', {
        effect: 'cards',
        grabCursor: true,
      });

// ----------

// Hamburger butona tıklayınca menüyü ve ikonu aç/kapat
headerMMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    headerMMenu.classList.toggle("hamburger");
    mobileMenu.classList.toggle("activeMenu");
});

// Menü dışına tıklanınca kapat
document.addEventListener("click", (e) => {
    if (
        mobileMenu.classList.contains("activeMenu") &&
        !mobileMenu.contains(e.target) &&
        !headerMMenu.contains(e.target)
    ) {
        mobileMenu.classList.remove("activeMenu");
        headerMMenu.classList.remove("hamburger");
    }
});

// Mobil menüdeki bir linke tıklandığında menüyü kapat
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("activeMenu");
        headerMMenu.classList.remove("hamburger");
    });
});
// ----------

//Yukarı çık butonu / Scroll olunca butonu göster/gizle
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
});
//Tıklanınca anında yukarı çık
toTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});
// ----------



const digerBtn = document.getElementById("digerHizmetlerBtn");
const hizmetlerKapsayici = document.querySelector(".hizmetler-kapsayici");

digerBtn.addEventListener("click", () => {
  hizmetlerKapsayici.classList.toggle("hepsini-goster");

  // Buton metnini durumuna göre değiştir
  if (hizmetlerKapsayici.classList.contains("hepsini-goster")) {
    digerBtn.innerHTML = 'Daha Az Göster <i class="fa-solid fa-chevron-up"></i>';
  } else {
    digerBtn.innerHTML = 'Diğer Hizmetler <i class="fa-solid fa-chevron-down"></i>';
  }
});
// ----------

// Randevu Oluşturma Butonu
//Show social networks
const showSocial = (toggleCard, socialCard) => {
    const toggle = document.getElementById(toggleCard),
        social = document.getElementById(socialCard)

    toggle.addEventListener('click', () => {
        //if the animation class exist, we add the down-animation class
        if (social.classList.contains('animation')) {
            social.classList.add('down-aniamtion')

            //we remove the down-animation class
            setTimeout(() => {
                social.classList.remove('down-aniamtion')
            }, 1000)
        }
        //We add the animation class to the div tag with the card3__social class
        social.classList.toggle('animation')
    })
}
showSocial('card3-toggle', 'card3__social')
// ----------