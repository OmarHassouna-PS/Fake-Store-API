

function Products (title, price, description, image) {

    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
}

arrayProducts = [];

function render() {

    let addProduct = document.getElementById("addProduct");
    arrayProducts.pop();
    arrayProducts.forEach( (Product) => {

        // Create div card
        let divParent = document.createElement('div');
        divParent.className = "product card ms-4 mb-4";

        let attr = document.createAttribute("data-aos");
        attr.value = "flip-left";
        divParent.setAttributeNode(attr);


        // Create and Add img in divImg
        let divImg = document.createElement('div');
        divImg.className = "mt-3 mb-3 m-auto body-card";

        let img = document.createElement('img');
        img.className = "card-img img-fluid";
        img.src = Product.image;
        img.alt = "This is Student img";

        divImg.appendChild(img);


        // Create and add information student in divInfo
        let divInfo = document.createElement('div');
        divInfo.className = "font-card";
        
        let prgName = document.createElement('p');
        let prgGender = document.createElement('p');
        let prgPhone = document.createElement('p');
        let prgMajor = document.createElement('p');

        prgName.textContent = Product.title;
        prgGender.textContent = Product.price;
        prgPhone.textContent = Product.description;

        divInfo.appendChild(prgName);
        divInfo.appendChild(prgGender);
        divInfo.appendChild(prgPhone);
        divInfo.appendChild(prgMajor);

        let button = document.createElement('button');
        button.className = "Hero-button btn mt-3";
        button.textContent = "Pay New";

        // Add divIng and divIng in the Parent div
        divParent.appendChild(divImg);
        divParent.appendChild(divInfo);
        divParent.appendChild(button);

        
        // Add Parent div in the global div
        addProduct.appendChild(divParent);
    });
}

fetch('https://fakestoreapi.com/products')

    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
            }
        return response.json()
    })
    .then(json => {
        json.forEach(obj => {
            let product = new Products(obj.title, obj.price, obj.description, obj.image);

            arrayProducts.push(product);
        });
    })
    .then(call => render())
    .catch (error => {
        console.error('There was a problem with the fetch operation:', error);
});

