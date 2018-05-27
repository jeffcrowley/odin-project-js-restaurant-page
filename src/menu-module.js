const renderMenuModule = () => {

   let main = document.getElementById("mainContainer")

   // let contactMenuList = document.createElement("ur")
   // let contactListItem = document.createElement("li")
   // let contactLink = document.createElement("a")
   // let menuListItem = document.createElement("li")
   // let menuLink = document.createElement("a")

   let table = document.createElement("table")
   let thead = document.createElement("thead")
   let trTitle = document.createElement("tr")
   let thName = document.createElement("th")
   let thIngredients = document.createElement("th")
   let thPrice = document.createElement("th")
   let tbody = document.createElement("tbody")
   let trItem1 = document.createElement("tr")
   let tdItem1Name = document.createElement("td")
   let tdItem1Ingredients = document.createElement("td")
   let tdItem1Price = document.createElement("td")
   let trItem2 = document.createElement("tr")
   let tdItem2Name = document.createElement("td")
   let tdItem2Ingredients = document.createElement("td")
   let tdItem2Price = document.createElement("td")
   let trItem3 = document.createElement("tr")
   let tdItem3Name = document.createElement("td")
   let tdItem3Ingredients = document.createElement("td")
   let tdItem3Price = document.createElement("td")


   // contactMenuList.setAttribute("class", "nav nav-pills justify-content-center mt-3")
   // menuListItem.setAttribute("class", "nav-item")
   // menuLink.setAttribute("href", "#")
   // menuLink.setAttribute("class", "nav-link active")
   // menuLink.setAttribute("id", "menuLink")
   // menuLink.textContent = "Menu"
   // contactListItem.setAttribute("class", "nav-item")
   // contactLink.setAttribute("href", "#")
   // contactLink.setAttribute("class", "nav-link")
   // contactLink.setAttribute("id", "contactLink")
   // contactLink.textContent = "Contact"

   table.setAttribute("class", "table table-striped text-center mt-3")

   thName.textContent = "Name"
   thIngredients.textContent = "Ingredients"
   thPrice.textContent = "Price"
   tdItem1Name.textContent = "Manhattan"
   tdItem1Ingredients.textContent = "Rye, Sweet Vermouth, Bitters, Cherry"
   tdItem1Price.textContent = "$11"
   tdItem2Name.textContent = "Margarita"
   tdItem2Ingredients.textContent = "Tequila, Cointreau, Lime"
   tdItem2Price.textContent = "$10"
   tdItem3Name.textContent = "Mojito"
   tdItem3Ingredients.textContent = "Rum, Mint, Simple Syrup, Soda"
   tdItem3Price.textContent = "$12"

   // main.appendChild(contactMenuList)
   // contactMenuList.appendChild(menuListItem)
   // menuListItem.appendChild(menuLink)
   // contactMenuList.appendChild(contactListItem)
   // contactListItem.appendChild(contactLink)
   main.appendChild(table)
   table.appendChild(thead)
   thead.appendChild(trTitle)
   trTitle.appendChild(thName)
   trTitle.appendChild(thIngredients)
   trTitle.appendChild(thPrice)
   table.appendChild(tbody)
   tbody.appendChild(trItem1)
   tbody.appendChild(trItem2)
   tbody.appendChild(trItem3)
   trItem1.appendChild(tdItem1Name)
   trItem1.appendChild(tdItem1Ingredients)
   trItem1.appendChild(tdItem1Price)
   trItem2.appendChild(tdItem2Name)
   trItem2.appendChild(tdItem2Ingredients)
   trItem2.appendChild(tdItem2Price)
   trItem3.appendChild(tdItem3Name)
   trItem3.appendChild(tdItem3Ingredients)
   trItem3.appendChild(tdItem3Price)

   console.log('rendered menu')
}

export default renderMenuModule
