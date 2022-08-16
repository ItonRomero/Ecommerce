
const menuIcons = document.querySelector('.menu-icon')
const MenuItems = document.querySelector('#MenuItems')

MenuItems.style.maxHeight = "0px";

menuIcons.addEventListener('click', () => {
  console.log(MenuItems)
  if(MenuItems.style.maxHeight == "0px"){
    MenuItems.style.maxHeight = "200px";
  }
  else {
    MenuItems.style.maxHeight = "0px";
  }
})