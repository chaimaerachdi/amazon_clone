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
                <div class="product-cost">${(product.priceCent/100).toFixed(2 )}</div>
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
                <button class="add-to-cart-button  js-add-to-cart-button"
                        data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>    
        </div>
    </div> `;
    
});

document.querySelectorAll('.js-add-to-cart-button')
  .forEach((add_to_cart_button,index)=>{
    add_to_cart_button.addEventListener('click',()=>{
       let matchingItem;
       const productId=add_to_cart_button.dataset.productId;
      
       cart.forEach((item)=>{
        if(productId===item.productId){
            matchingItem=item;
        }
       });

       if(matchingItem){
            // element already exist in the cart =>just increase his qte
            matchingItem.quantity++;
       }
       else{
            // element does not exist in the cart =>create a new item(ibject) in the cart list 
            cart.push({productId:productId,
                        quantity:1
                      });
       }
       console.log(cart);
    });
});