
const products = [
    'Laptop Pro',
    'Draadloze muis',
    'USB-C hub',
    'Bureaulamp',
    'Notitieboek',
    'Pennenset',
    'Koptelefoon',
    'Bluetooth speaker',
    'Webcam HD',
    'Muismat XL',
    'Monitor 27"',
    'Desk organizer',
];

let searchTerm = '';
let sorting = '';

const showProducts = (list) => {
    let producten = document.querySelector("#products");
    let counter = document.querySelector("#counter");

    producten.innerHTML = "";

    for (let product of list) {
        producten.innerHTML += `<article>${product}</article>`;
    }

    counter.innerHTML = list.length + " producten";
};

const filterProducts = () => {
    let filtered = products.filter(product =>
        product.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sorting === 'az') {
        filtered.sort((a, b) => a.localeCompare(b));
    }

    if (sorting === 'za') {
        filtered.sort((a, b) => b.localeCompare(a));
    }

    showProducts(filtered);
};

let searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("input", () => {
    searchTerm = searchBar.value;
    filterProducts();
});

let sortAzButton = document.querySelector("#sort-az");

sortAzButton.addEventListener("click", () => {
    sorting = 'az';
    filterProducts();
});

let sortZaButton = document.querySelector("#sort-za");

sortZaButton.addEventListener("click", () => {
    sorting = 'za';
    filterProducts();
});

filterProducts();
