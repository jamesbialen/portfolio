function displayClock() {
        var display = document.getElementById("clock");
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        var currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
        display.innerHTML = currentTime;
        setTimeout(displayClock, 1000);
      }
   

const hamburger = document.getElementsByClassName("hamburger")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]
hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})


'<jamesbialen>.github.io/' + '<https://github.com/jamesbialen/file-C-Users-logical-Desktop-portfolio-index.html.git>/'
