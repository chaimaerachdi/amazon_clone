const products=[
    {
        image:'./icons/athletic-cotton-socks-6-pairs.jpg',
        name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
        rating:{
            stars:4.5,
            count:87
        },
        priceCent:1090/*js has problems with float addition opertaions */
    },
    //2 nd prd
    {
        image:'./icons/intermediate-composite-basketball.jpg',
        name:'Intermediate Size Basketball',
        rating:{
            stars:4,
            count:127
        },
        priceCent:2095/*js has problems with float addition opertaions  1dollar=100cents*/
    },
    //3 rd prd
    {
        image:'./icons/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name:'Adults Plain Cotton T-Shirt - 2 Pack',
        rating:{
            stars:4.5,
            count:56
        },
        priceCent:799/*js has problems with float addition opertaions */
    },
    //4 th prd
    {
        image:'./icons/black-2-slot-toaster.jpg',
        name:' 2 Slot Toaster - Black',
        rating:{
            stars:5,
            count:2197
        },
        priceCent:1899/*js has problems with float addition opertaions */
    },
    //5 th prd
    {
        image:'./icons/6-piece-white-dinner-plate-set.jpg',
        name:'6 Piece White Dinner Plate Set',
        rating:{
            stars:4,
            count:37
        },
        priceCent:2067/*js has problems with float addition opertaions */
    }
];

const main_page=document.querySelector('.js-product-grid');
products.forEach((product,index)=>{
    main_page.innerHTML+=`
    <div class="product-info">
        <div>
            <div class="product-icon-container">
                <img class="product-icon"
                    src="${product.image}">
            </div>
            <div class="product-info-container">
                <div class="product-title">
                    ${product.name}
                </div>
                <div class="rating">
                <div>
                        <img src="./icons/rating-${product.rating.stars*10}.png">
                </div>
                    <div class="rating-count">${product.rating.count}</div>
                </div>
                <div class="product-cost">${product.priceCent/100}</div>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>        
                <!-- add to cart -->
                <button class="add-to-cart-button">
                    Add to Cart
                </button>
            </div>    
        </div>
    </div> `;
    
});
