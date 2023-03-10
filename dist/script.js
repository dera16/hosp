
  const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () =>{
  const currentScroll = (window.pageYOffset)
   if (currentScroll <= 0){
    body.classList.remove("scroll-up")
   }

   if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
   }

   lastScroll = currentScroll
     
})


//typewriter
var i=0;
var txt = ' "Your Health,our Priority..." Book an Appointment today!';
var speed = 88;
function type(){
  document.getElementById("type").innerHTML +=txt.charAt(i);

  i++;
  setTimeout(type,speed)
}
type();

//number
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach(valueDisplay  => {
  let startValue = 0;
  let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endvalue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endvalue) {
      clearInterval(counter);
    }
  }, duration)
});


 

// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});