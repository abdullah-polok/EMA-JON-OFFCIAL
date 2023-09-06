
const categoryDisplay = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/categories`)
    const data = await res.json();
    displayAllCategory(data)
}

const displayAllCategory = (content) => {
    const categoryMenu = document.getElementById('categoryMenu')
    content.forEach(element => {
        const div = document.createElement('div')

        div.innerHTML = `
     <button onclick="displayEachCategory('${element.replaceAll("'", "-")}')" class="btn btn-outline btn-error mx-3 text-xl font-semibold mt-3">${element}</button>
        `
        // <button onclick="displayEachCategory('${element.replaceAll("'", "-")}')" class="btn btn-outline btn-error mx-3 text-xl font-semibold">${element}</button>
        categoryMenu.appendChild(div)
        // console.log(element)
    });
}

const displayEachCategory = async (id) => {
    const newId = id.replaceAll("-", "'")
    // console.log(newId)
    const res = await fetch(`https://fakestoreapi.com/products/category/${newId}`)
    const data = await res.json();
    displayAllContentCategory(data)
}


// Display all content in category

const displayAllContentCategory = (content) => {
    const categoryContent = document.getElementById('categoryContent')
    categoryContent.textContent = ''
    showAllProduct.textContent = ''
    content.forEach(con => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="${con.image}" alt="Shoes" class="w-48 h-40" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
        categoryContent.appendChild(div)
    })
}


// All product content
const allProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json();
    const showAllProduct = document.getElementById('showAllProduct')
    showAllProduct.textContent = ''
    categoryContent.textContent = ''
    data.forEach(content => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="${content.image}" alt="Shoes" class="w-48 h-40" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
        showAllProduct.appendChild(div)
    })
}



allProduct()
categoryDisplay()