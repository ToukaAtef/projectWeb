let Name = document.getElementById("bookId")
let bookName = document.getElementById("bookName")
let author = document.getElementById("author")
let category = document.getElementById("category")
let descriprion = document.getElementById("descriprion")
let addButton = document.getElementById("addButton")
let dataContainer = []
let data 
addButton.addEventListener('click',function(e){
    if (dataContainer = []) {
      oldData = JSON.parse(localStorage.getItem('data')) 
      dataContainer.push(oldData)
    }
    data = {
        Name: Name.value,
        bookName:bookName.value,
        author:author.value,
        category:category.value,
    }
    dataContainer.push(data)
    localStorage.setItem('data' ,JSON.stringify(dataContainer))
    window.prompt("added successfully")
})