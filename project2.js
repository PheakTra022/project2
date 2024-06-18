const product = [
   {
        id: 0,
        image: 'image/nike_1.jpg',
        title: 'Z flip Foldable Mobile',
        price: 120,
   },
   {
        id: 1,
        image: 'image/nike_2.jpg',
        title: 'Z flip Foldable Mobile',
        price: 120,
   },
   {
        id: 2,
        image: 'image/nike_3.jpg',
        title: 'Z flip Foldable Mobile',
        price: 120,
   },
   {
        id: 3,
        image: 'image/nike_4.jpg',
        title: 'Z flip Foldable Mobile',
        price: 120,
   },
   {
        id: 4,
        image: 'image/nike_6.jpg',
        title: 'Z flip Foldable Mobile',
        price: 120,
   },
   {
        id: 5,
        image: 'image/nike_7.jpg',
        title: 'Z flip Foldable Mobile',
        price: 120,
   },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>{
    var {image, title ,price}= item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+
        `</div>
        </div>`
    )
}).join('')