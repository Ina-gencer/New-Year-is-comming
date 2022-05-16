gsap.from(".play", {opacity: 0, duration: 3, x: 60})
gsap.from(".pause", {opacity: 0, duration: 3, x: -60})
gsap.from(".boxTwo", {opacity: 0, duration: 0.5, delay: 1, stagger:.5})
let move = 22;
gsap.from(".block", {ease:"bounce.out",  duration: 4,  stagger: .7, repeat: -1, repeatDelay: .1, x: function(i) {
    if(i%2 === 1) {
        return -move;
    }
    else{
        return move
    }
}})
///
function countdown () {
    const newYear = new Date('January 1, 2023 00:00');
    const now = new Date();
    const result = newYear - now;
    
    const msInSecond = 1000;
    const msInMinute = 1000 * 60;
    const msInHour = 1000 * 60 * 60;
    const msInDay = 1000* 60 * 60 * 24;

    const displayDay = Math.floor(result / msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((result%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;
   
    const displayMinute = Math.floor((result%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((result%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    setInterval(countdown, 1000);
    if (result <=0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timer);
        happyNY();
    }

    
}
let timer = setInterval(countdown, 1000); 

function happyNY () {
    const heading = document.querySelector('h1');
    heading.classList.add('list');
    heading.innerHTML = 'Happy New 2022 year!<br> Let it be the year of pleasant discoveries,<br> new friends and unforgettable meetings!!!';
    document.querySelector(".container").style = "display:none";
}

countdown();


const btnOne = document.querySelector('.play');
btnOne.addEventListener('click', function(){
    const myAudio = document.querySelector('#myAudio').play();
})

const btnTwo = document.querySelector('.pause');
btnTwo.addEventListener('click', function() {
    const myAudio = document.querySelector('#myAudio').pause();
})

//search movie
const search = document.querySelector('#search');
const boxTwo = document.querySelectorAll('.boxTwo');
console.log(boxTwo)

search.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();
    boxTwo.forEach(item => {
        item.querySelector('h4').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    
    })
    
})

gsap.to(".animation", {rotation: 360, duration: 3, delay: 5})


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 3,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode":  "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 350,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 15,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.2
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });