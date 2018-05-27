const renderContactModule = () => {

   let main = document.getElementById("mainContainer")

   // let contactMenuList = document.createElement("ur")
   // let contactListItem = document.createElement("li")
   // let contactLink = document.createElement("a")
   // let menuListItem = document.createElement("li")
   // let menuLink = document.createElement("a")
   let contactTitle = document.createElement("h1")
   let twitter = document.createElement("p")
   let email = document.createElement("p")
   let phone = document.createElement("p")

   // contactMenuList.setAttribute("class", "nav nav-pills justify-content-center mt-3")
   // menuListItem.setAttribute("class", "nav-item")
   // menuLink.setAttribute("href", "#")
   // menuLink.setAttribute("class", "nav-link")
   // menuLink.setAttribute("id", "menuLink")
   // menuLink.textContent = "Menu"
   // contactListItem.setAttribute("class", "nav-item")
   // contactLink.setAttribute("href", "#")
   // contactLink.setAttribute("class", "nav-link active")
   // contactLink.setAttribute("id", "contactLink")
   contactLink.textContent = "Contact"
   contactTitle.textContent = "Contact Us"
   twitter.textContent = "Twitter: @doesntactuallyhavetwitter"
   email.textContent = "Email: doesnotexist@fakeaccount.biz"
   phone.textContent = "Phone: 213-867-5309"

   // main.appendChild(contactMenuList)
   // contactMenuList.appendChild(menuListItem)
   // menuListItem.appendChild(menuLink)
   // contactMenuList.appendChild(contactListItem)
   // contactListItem.appendChild(contactLink)
   main.appendChild(contactTitle)
   main.appendChild(twitter)
   main.appendChild(email)
   main.appendChild(phone)

   console.log('rendered contact')

}

export default renderContactModule
