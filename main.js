

// ------------JS FOR MENU BUTTON----------

const menuIcons = document.querySelector('.menu-icon')
const menuItems = document.querySelector('#MenuItems')

menuItems.style.maxHeight = "0px";

menuIcons.addEventListener('click', () => {

  if(menuItems.style.maxHeight == "0px"){
    menuItems.style.maxHeight = "200px";
  }
  else {
    menuItems.style.maxHeight = "0px";
  }
})

// -------- JS FOR PRODUCT GALLERY ----------

var productImg = document.querySelector('#product-img')
var smallImg = document.querySelectorAll('.small-img')

smallImg[0].onclick = function() {
  productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
  productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
  productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
  productImg.src = smallImg[3].src;
}