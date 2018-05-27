import buildPage from './main'
import renderContactModule from './contact-module'
import renderMenuModule from './menu-module'


document.addEventListener("DOMContentLoaded", (e) => {
   buildPage()
   renderMenuModule()
   let main = document.getElementById("mainContainer")
   let menuLink = document.getElementById("menuLink")
   let contactLink = document.getElementById("contactLink")

   menuLink.addEventListener('click', (e) => {
      main.innerHTML = ""
      contactLink.classList.toggle('active')
      menuLink.classList.toggle('active')
      renderMenuModule()
   })

   contactLink.addEventListener('click', (e) => {
      main.innerHTML = ""
      menuLink.classList.toggle('active')
      contactLink.classList.toggle('active')
      renderContactModule()
   })
})




