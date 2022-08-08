const productEl = document.getElementById("myproducts")

window.onload = getAllMyPosts



async function getAllMyPosts() {
    const url = "products.json"

    try{
        const dirtyData = await fetch(url)
        const cleanData = await dirtyData.json()


        for(let i=0; i<cleanData.length; i++){
        productEl.innerHTML +=
        `   <div class="card">
            <img src="${cleanData[i].productImage}" alt="${cleanData[i].productImage}">
            <h1> ${cleanData[i].productName} </h1>
            <p> ${cleanData[i].info} </p>
            <h3> ${cleanData[i].price} AZN</h3>

            <div class="stock">
            <h2> ${cleanData[i].inStock}</h2>
            </div>


            <button> Səbətə Əlavə Et     <i class="fa-solid fa-cart-plus"></i> </button>
        </div>
        `
    
    }
}

    catch (err) {
        console.log( "Serverdə xəta baş verdi:" + err)
    }
}

