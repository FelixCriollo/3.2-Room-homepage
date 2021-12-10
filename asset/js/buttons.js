// DOM elements
const left = document.querySelector('.controls__left');
const right = document.querySelector('.controls__right');

const content = document.querySelector('.content');

const imgMobile = document.querySelector('.headeer__imgMobile');
const imgDesktop = document.querySelector('.headeer__imgDesk');

let value = 1
// Function to change the image

// Function to change the text content
const changeContent = () => {
  content.children[0].innerHTML = ''
  content.children[1].innerHTML = ''
  
  switch (value) {
    case 1:
      content.children[0].innerHTML = 'Discover innovative ways to decorate'
      content.children[1].innerHTML = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
      break;

    case 2:
      content.children[0].innerHTML = 'We are available all across the globe'
      content.children[1].innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
      break;
  
    case 3:
      content.children[0].innerHTML = 'Manufactured with the best materials'
      content.children[1].innerHTML = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
      break;
  
    default: 
      break;
  }
}

// DOM interactive
left.addEventListener('click', () => {
  value === 1 ? value = 3 : value--;
  
  changeContent(value);
  imgMobile.src = `images/mobile-image-hero-${value}.jpg`
  imgDesktop.srcset = `images/desktop-image-hero-${value}.jpg`
  
  console.log(value);
  console.log("left");
})

right.addEventListener('click', () => {
  value === 3 ? value = 1 : value++;

  imgMobile.src = `images/mobile-image-hero-${value}.jpg`
  imgDesktop.srcset = `images/desktop-image-hero-${value}.jpg`
  
  changeContent(value);
  console.log(value);
  console.log("right");
})



