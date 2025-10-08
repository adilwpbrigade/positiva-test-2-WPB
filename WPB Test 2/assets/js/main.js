$(document).ready(function () {
  $("#Navigation-btn").click(function () {
    $(".Navigation-bar").slideToggle(400);
  });

  function initTabs(buttonClass, contentClass) {
    $(buttonClass).click(function () {
      const tabId = $(this).data("tab");
      $(buttonClass).removeClass("active");
      $(contentClass).removeClass("active");
      $(this).addClass("active");
      $("#" + tabId).addClass("active");
    });
  }

  initTabs(".tab-btn", ".tab-content");
  initTabs(".evento-tab-btn", ".evento-tab-content");

  const $events = $(".event-list .event");
  const eventsPerPage = 3;
  let currentPage = 0;

  function showPage(page) {
    const start = page * eventsPerPage;
    const end = start + eventsPerPage;
    $events.hide().slice(start, end).show();
    $("#prevBtn").prop("disabled", page === 0);
    $("#nextBtn").prop("disabled", end >= $events.length);
  }

  $("#prevBtn").click(function () {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  $("#nextBtn").click(function () {
    if ((currentPage + 1) * eventsPerPage < $events.length) {
      currentPage++;
      showPage(currentPage);
    }
  });

  showPage(currentPage);
});

const bannerSwiper1 = new Swiper(".banner-slider", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".banner-next",
    prevEl: ".banner-prev",
  },
});

const breakpoint = 768;
let swiperInstance = null;

function initSwiper() {
  swiperInstance = new Swiper(".card-swipper-1", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 12,
    pagination: {
      el: ".card-swipper-1-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".card-swipper-1-next",
      prevEl: ".card-swipper-1-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
    },
  });
}

function destroySwiper() {
  if (swiperInstance !== null) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
    document.querySelector(".card-swipper-1 .swiper-wrapper")?.removeAttribute("style");
    document.querySelectorAll(".card-swipper-1 .swiper-slide").forEach(slide => {
      slide.removeAttribute("style");
    });
  }
}

function checkMode() {
  const windowWidth = window.innerWidth;
  if (windowWidth < breakpoint) {
    if (!swiperInstance) initSwiper();
  } else {
    destroySwiper();
  }
}

let avatarSwiper = null;

function initAvatarSwiper() {
  avatarSwiper = new Swiper(".avatar-cards", {
    slidesPerView: 2,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    spaceBetween: 12,
    loop: true,
    pagination: {
      el: ".avatar-cards-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".avatar-cards-next",
      prevEl: ".avatar-cards-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
    },
  });
}

function destroyAvatarSwiper() {
  if (avatarSwiper !== null) {
    avatarSwiper.destroy(true, true);
    avatarSwiper = null;
    document.querySelector(".avatar-cards .swiper-wrapper")?.removeAttribute("style");
    document.querySelectorAll(".avatar-cards .swiper-slide").forEach(slide => {
      slide.removeAttribute("style");
    });
  }
}

function checkAvatarMode() {
  const windowWidth = window.innerWidth;
  if (windowWidth < breakpoint) {
    if (!avatarSwiper) initAvatarSwiper();
  } else {
    destroyAvatarSwiper();
  }
}

checkMode();
checkAvatarMode();

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    checkMode();
    checkAvatarMode();
  }, 150);
});

const cardImageSwiper = new Swiper(".card-image-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const bannerSwiper2 = new Swiper(".banner-image-swipper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



const logoswiper = new Swiper('.logos', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 25,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.logos-swiper-pagination', 
    clickable: true,          
  },
});

