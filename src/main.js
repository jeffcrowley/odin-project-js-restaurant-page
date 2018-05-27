

const buildPage = () => {
   let content = document.getElementById("content")
   let header = document.createElement("header")
   let container = document.createElement("div")
   let jumbotron = document.createElement("div")
   let jumbotronTitle = document.createElement("h1")
   let jumbotronDescription = document.createElement("p")
   let nav = document.createElement("nav")
   let main = document.createElement("main")

   let contactMenuList = document.createElement("ur")
   let contactListItem = document.createElement("li")
   let contactLink = document.createElement("a")
   let menuListItem = document.createElement("li")
   let menuLink = document.createElement("a")

   header.setAttribute("style", "background-image: url(headerimg.jpg); height: 600px; background-size: 100%;")
   container.setAttribute("class", "container")
   jumbotron.setAttribute("class", "jumbotron text-white")
   jumbotron.setAttribute("style", "background-color: rgba(0, 0, 0, 0.6);")
   jumbotronTitle.setAttribute("class", "display-4")
   jumbotronTitle.textContent = "JS Lounge"
   jumbotronDescription.setAttribute("class", "lead")
   jumbotronDescription.textContent = "This is a simple restaurant page made to test my beginner's knowledge in utilizing NPM and Webpack."
   main.setAttribute("class", "container")
   main.setAttribute("id", "mainContainer")

   contactMenuList.setAttribute("class", "nav nav-pills justify-content-center mt-3")
   menuListItem.setAttribute("class", "nav-item")
   menuLink.setAttribute("href", "#")
   menuLink.setAttribute("class", "nav-link active")
   menuLink.setAttribute("id", "menuLink")
   menuLink.textContent = "Menu"
   contactListItem.setAttribute("class", "nav-item")
   contactLink.setAttribute("href", "#")
   contactLink.setAttribute("class", "nav-link")
   contactLink.setAttribute("id", "contactLink")
   contactLink.textContent = "Contact"

   content.appendChild(header)
   header.appendChild(container)
   container.appendChild(jumbotron)
   jumbotron.appendChild(jumbotronTitle)
   jumbotron.appendChild(jumbotronDescription)
   content.appendChild(nav)
   content.appendChild(main)

   nav.appendChild(contactMenuList)
   contactMenuList.appendChild(menuListItem)
   menuListItem.appendChild(menuLink)
   contactMenuList.appendChild(contactListItem)
   contactListItem.appendChild(contactLink)
}

export default buildPage
