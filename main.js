(function navScrolling() {
  window.onscroll = () => {
    const nav = document.querySelector("#navbar");
    const logo = document.querySelector("#logo");

    if (this.scrollY <= 100) {
      nav.className = "";
      logo.classList.remove("scrolled-logo");
      logo.classList.add("logo-init");
    } else {
      nav.className = "scrolled-nav";
      logo.classList.remove("logo");
      logo.classList.add("scrolled-logo");
    }
  };
})();

(function pageScrolling() {
  var anchor = document.getElementById('our-offer-link'); 
    anchor.addEventListener('click', () => 
    document.querySelector('#our-offer').scrollIntoView({ behavior: 'smooth' })
  );
  var anchor = document.getElementById('promo-videos-link'); 
  anchor.addEventListener('click', () => 
    document.querySelector('#promo-videos').scrollIntoView({ behavior: 'smooth' })
  );
  var anchor = document.getElementById('about-link'); 
  anchor.addEventListener('click', () => 
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  );  
}
)();

(function timer() {
  var countDownDate = new Date("June 9, 2019, 23:59:59").getTime();

  function updateTimer() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Zapisy skończone";
    }
  }
  updateTimer();
  var x = setInterval(updateTimer, 1000);
})();

// Accordion function

(function accordionFunctionality() {
  var accordions = document.getElementsByClassName("accordion");

  let openedAccordionIndex = 0;
  openAccordion(0, accordions[0].nextElementSibling); //opening the first one for good looks

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function() {
      var content = this.nextElementSibling;
      if (!content.style.maxWidth || !content.style.maxHeight) {
        //checks if element is closed
        //if closed, close others, and open the one
        closeAccordion(openedAccordionIndex);
        openAccordion(i, content);
      }
    };
  }

  function resetAccordions() {
    for (let i = 0; i < accordions.length; i++) {
      let content = accordions[i].nextElementSibling;
      content.style.maxWidth = null;
      content.style.maxHeight = null;
      accordions[i].classList.remove("is-open");
    }
    openAccordion(0, accordions[0].nextElementSibling);
  }

  function closeAccordion(index) {
    accordions[index].classList.toggle("is-open");
    let content = accordions[index].nextElementSibling;

    if (window.innerWidth > 1000) {
      content.style.maxWidth = null;
    } else {
      content.style.maxHeight = null;
    }
  }

  function openAccordion(index, content) {
    accordions[index].classList.toggle("is-open");
    openedAccordionIndex = index;
    if (window.innerWidth > 1000) {
      content.style.maxWidth = 100 + "%";
    } else {
      content.style.maxHeight = 430 + "px";
    }
  }

  if (window.innerWidth > 500) {
    $(window).resize(function() {
      //solves responsiveness problems
      resetAccordions();
    });
  }
})();

$(document).ready(function() {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 2],
    itemsMobile: [690, 1],
    pagination: true,
    autoplay: true
  });
});