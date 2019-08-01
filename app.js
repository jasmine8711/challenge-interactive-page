const imgBox = document.getElementById("photobox");
//create more imgs
let i = 0;
const imgArray = [];
function createImg() {
  const img = document.createElement("img");
  img.style.width = "100%";
  img.style.height = "100%";
  img.src = `${i}.jpg`;
  return img;
}
while (i < 5) {
  i++;
  let newImg = createImg();
  imgArray.push(newImg);
}

//click arrow and show the img
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", showimgleft);
rightArrow.addEventListener("click", showimgright);

function showimgleft() {
  i--;
  while (imgBox.firstChild) {
    imgBox.removeChild(imgBox.firstChild);
  }
  console.log(Math.abs(i % 5));
  imgBox.appendChild(imgArray[Math.abs(i % 5)]);
}

function showimgright() {
  i++;
  while (imgBox.firstChild) {
    imgBox.removeChild(imgBox.firstChild);
  }
  //console.log(i % 5);
  imgBox.appendChild(imgArray[i % 5]);
}
setInterval(showimgright, 3000);

// three number
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
let number = parseInt(number2.innerText);
function creatnumber1() {
  if (number > 0) {
    number--;
    number1.innerHTML = number;
  } else {
    number1.innerText = "sold out!";
  }
}
setInterval(creatnumber1, 800);

function countdown(endDate) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return;
  }

  setInterval(calculate, 1000);

  //countdown

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      seconds = parseInt(timeRemaining);

      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
}

(function() {
  countdown("08/30/2019 05:00:00 PM");
})();

//button show text

const historytext = document.getElementById("historytext");
const contacttext = document.getElementById("contacttext");
const infotext = document.getElementById("infotext");
const btnbox = document.querySelectorAll(".tablinks");
const btnsArr = Array.prototype.slice.call(btnbox);
//console.log(btnsArr);

btnbox.forEach(x => {
  x.onclick = () => {
    x.parentElement.children[1].classList.remove("hidden");
    x.parentElement.children[1].classList.add("show");

    btnbox[
      (btnsArr.indexOf(x) + 2) % btnsArr.length
    ].nextElementSibling.classList.remove("show");
    btnbox[
      (btnsArr.indexOf(x) + 1) % btnsArr.length
    ].nextElementSibling.classList.remove("show");
    btnbox[
      (btnsArr.indexOf(x) + 2) % btnsArr.length
    ].nextElementSibling.classList.add("hidden");
    btnbox[
      (btnsArr.indexOf(x) + 1) % btnsArr.length
    ].nextElementSibling.classList.add("hidden");
  };
});
