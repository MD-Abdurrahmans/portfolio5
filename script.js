document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');
  
    navLinks.forEach(function (navLink) {
      navLink.addEventListener('click', function () {
        if (window.innerWidth <= 992) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
  });
  


  // color change



document.querySelector('.switcher-btn').onclick = ()=>{


  document.querySelector('.color-switcher').classList.toggle('active');

}

let thembutton =document.querySelectorAll('.them-buttons');
thembutton.forEach(color=>{
  color.addEventListener('click', ()=>{

    let datacolor= color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--bg-black',datacolor)
  })
})

