const imgBox = document.getElementById("imgs");
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
while (i < 4) {
  i++;
  let newImg = createImg();
  imgArray.push(newImg);
}
console.log(imgArray);

//show the img
imgBox.appendChild(imgArray[1]);

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
