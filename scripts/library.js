fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log("response", response)
    return response.json()
  })
  .then((books) => {
    console.log("books", books)

    books.forEach((book) => {
      const title = book.title
      const category = book.category
      const bookImg = book.img
      const price = book.price
      const newCard = document.createElement("div")
      newCard.classList.add("col-6", "col-md-4", "mb-4")

      newCard.innerHTML = `
      <div class="card h-100">
      <img src="${bookImg}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h4 class="card-title">${title}</h4>
        <h5 class="card-text text-capitalize fs-5 mb-3">
          Category: ${category}</br>
          Price: ${price}$
          </h5>
          <a href="#" class="btn btn-primary">Shop now</a>
          <button class="btn btn-danger" >Discard</button>
        </div>
      </div>
      `
      const cardContainer = document.getElementById("cardContainer")
      cardContainer.appendChild(newCard)

      //const discardButtons = document.getElementsByTagName("button")
      //discardButtons.forEach((button) => {
      //button.addEventListener("click", (e) => {
      //const card = button.closest("card")
      //})
      //})
    })
  })
  .catch((error) => {
    console.log("error", error)
  })
