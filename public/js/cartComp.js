Vue.component('cart', {
    props: ['extended', 'inside'],
    data(){
        return {
            cartItems: [],
            totalSumArr: [],
            total: 0,
        }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result){
                            find.quantity++;
                            this.totalSumArr.push(find.price);
                        }
                    })
            } else {
                let prod = Object.assign({quantity: 1}, product);
                    this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result){
                            this.cartItems.push(prod);
                            this.totalSumArr.push(prod.price);
                        }
                    })
            }
            this.total = this.getTotal();
        },
        remove(product){
            if(product.quantity > 1){
                this.$parent.putJson(`/api/cart/${product.id_product}`, {quantity: -1})
                    .then(data => {
                        if(data.result){
                            product.quantity--;
                            this.totalSumArr.splice(this.totalSumArr.indexOf(product), 1);
                        }
                    })
            } else {
                this.$parent.deleteJson(`/api/cart/${product.id_product}`)
                    .then(data => {
                        if(data.result){
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                            this.totalSumArr.splice(this.totalSumArr.indexOf(product), 1);
                        }
                    })
            }
        },
        removeAllOfType(product){
            this.$parent.deleteJson(`/api/cart/${product.id_product}`)
            .then(data => {
                if(data.result){
                    this.cartItems.splice(this.cartItems.indexOf(product), 1);
                    for (let i = 0; i < product.quantity; i++){
                        this.totalSumArr.splice(this.totalSumArr.indexOf(product), 1);
                    }
                }
            })
        },
        // removeAll(){ если делать так, по второму нажатию за сессию падает весь сервер. три других варианта реализации тоже крушат соединение 
        //     this.totalSumArr = [];
        //     this.cartItems.forEach( el => {
        //         this.$parent.deleteJson(`/api/cart/${el.id_product}`)
        //         .then(data => {
        //             if(data.result){
        //                 this.cartItems.splice(this.cartItems.indexOf(el), 1);
        //             }
        //     })
        //     }); 
        // },
        getTotal(){
            return total = this.totalSumArr.reduce( (a, b) => { return a + b; }, 0);
        }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for(let el of data.contents){
                this.cartItems.push(el);
                    for(let i = 0; i < el.quantity; i++){
                        this.totalSumArr.push(el.price);
                    }
                }
            });
        
    },
   template:  `<div>
                <div v-if="extended">
                <section class="cart-product-details">
                <div class="container">
                    <div class="cart-oder-details-header-all">
                        <span class="cart-oder-details-header first-header-el">Product Details</span>
                        <span class="cart-oder-details-header second-header-el">unite Price</span>
                        <span class="cart-oder-details-header second-header-el">Quantity</span>
                        <span class="cart-oder-details-header second-header-el">shipping</span>
                        <span class="cart-oder-details-header">Subtotal</span>
                        <span class="cart-oder-details-header last-header-el">ACTION</span>
                    </div>
                    <p class="message_ext-cart__empty" v-if="!cartItems.length">Your cart appears to be empty  &nbsp; :( </p>
                    <cart-item-extended v-for="product of cartItems"  
                    :key="product.id_product"
                    :img="product.img"
                    :cart-item="product"
                    @remove="remove" 
                    @addProduct="addProduct" 
                    @removeAllOfType="removeAllOfType"></cart-item-extended>
                    <div class="flex-buttons">
                        <button class="button_continue flexed-button disabled" @click="removeAll()">CLEAR SHOPPING CART</button>
                        <a href="index.html" class="check-out__proceed"><button class="button_continue flexed-button">CONTINUE sHOPPING</button></a>
                    </div>
                </div>
                </section>
                <check-out-details :total="getTotal()"></check-out-details>
                </div>

                <div v-else-if="inside" class="drop-cart">
                    <a class="cart" href="#"><i class="fas fa-shopping-cart cart-header" :class="{cart__empty: !cartItems.length}"></i></a>
                    <div class="drop drop-cart-after">
                        <p class="message_cart__empty">Proceed to checkout, please. <br><br>Or you could continue shopping</p>
                    </div>
                </div>

                <div v-else class="drop-cart">
                    <a class="cart" href="shopping-cart.html"><i class="fas fa-shopping-cart cart-header" :class="{cart__empty: !cartItems.length}"></i></a>
                    <div  class="drop drop-cart-after">
                        <p class="message_cart__empty" v-if="!cartItems.length">Cart is empty</p>
                        <div v-else class="drop-flex">
                            <cart-item v-for="product of cartItems"  
                            :key="product.id_product"
                            :img="product.img"
                            :cart-item="product"
                            @remove="remove"
                            @addProduct="addProduct"></cart-item>
                            <div class="drop-cart-total">
                                <h3 class="drop-cart-total-h3">TOTAL</h3>
                                <h3 class="drop-cart-total-h3">$ {{ getTotal() }} </h3>
                            </div>
                            <a href="checkout.html"><button class="button_continue drop-cart-checkout">
                                Checkout
                            </button></a>
                            <a href="shopping-cart.html"><button class="button_continue drop-cart-go-to">
                                Go&nbsp;to&nbsp;cart
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            
            </div>`
});

Vue.component('check-out-details', {
    props: ['total'],
    data(){
        return {
            options: ['Bangladesh', 'India', 'Myanmar'],
        }
    },
    template: `<div>
    <div class="container">
        <div class="cart-shipping-address-flex">
            <div class="cart-shipping-address">
                <h3 class="cart-shipping-address-h3">Shipping Address</h3>
                <form class="form-shipping-address">
                    <select class="select form-control form-shipping-address" id="select-color">
                        <option v-for="option in options" value="state">&nbsp; {{option}}</option>
                    </select>
                    <input type="text" class="form-control form-shipping-address" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State" required>
                    <input type="number" class="form-control form-shipping-addressl" id="exampleInputPassword1" placeholder="Postcode / Zip" required>
                    <button class="button_continue button-get-a-quote">get a quote</button>
                </form>
            </div>
            <div class="cart-shipping-address">
                <h3 class="cart-shipping-address-h3">coupon discount</h3>
                <h5 class="cart-enter-your-coupon">Enter your coupon code if you have one</h5>
                <input type="text" class="form-control form-shipping-address" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Coupon">
                <button class="button_continue button-get-a-quote apply">Apply coupon</button>
            </div>
            <div class="cart-shipping-address address-colored">
                <h6 class="address-colored-h6">Sub total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#36;{{ total }}</h6>
                <h5 class="address-colored-h5">GRAND TOTAL&nbsp;&nbsp;<span class="address-colored-pink">&nbsp;&#36;{{ total }}</span></h5>
                <div class="button-block-decoration"> </div>
                <div class="button-block">
                    <button class="button button_checkout"><a class="check-out__proceed" href="checkout.html">proceed to checkout</a></button>
                </div>
            </div>
        </div>
    </div>
</div>`
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `<div class="drop-cart-box">
                    <a class="drop-cart-box-img" :href="cartItem.page"><img height="90" :src="cartItem.img" alt="this item is in your cart"></a>
                    <div class="drop-cart-info">
                        <a class="cart-item" :href="cartItem.page">
                            <h5 class="drop-cart-box-h5">{{cartItem.name}}</h5>
                        </a>
                        <i v-for="star in cartItem.stars" class="fas fa-star"></i>
                        <h6 class="drop-cart-box-h6">{{ cartItem.quantity }} x $ {{cartItem.price}} = $ {{cartItem.quantity*cartItem.price}}</h6>
                    </div>
                    <button class="button_delete-item circle_cart__first" @click="$emit('remove', cartItem)"> <i class="fas fa-minus-circle circle_cart"></i></button>
                    <h6 class="cart-quality-num">{{ cartItem.quantity }}</h6>
                    <button class="button_delete-item" @click="$emit('addProduct', cartItem)"><i class="fas fa-plus-circle circle_cart"></i></button>
                </div>`
});

Vue.component('cart-item-extended', {
    props: ['cartItem'],
    template: `<article class="cart-oder-details-box">
                    <a class="cart-oder-details-box-a" :href="cartItem.page"><img height="120" :src="cartItem.img" alt="this item is in your cart"></a>
                    <div class="cart-oder-details-box-para">
                        <h3 class="cart-oder-details-box-h3">{{cartItem.name}}</h3>
                        <h6 class="cart-oder-details-box-h6"><span class="bolder">Color:</span> multi</h6>
                        <h6 class="cart-oder-details-box-h6"><span class="bolder">Size:</span> one-fits-all</h6>
                    </div>
                    <h6 class="cart-oder-details-box-h6 cart-price"> $ {{cartItem.price}}</h6>
                    <button class="button_delete-item" @click="$emit('remove', cartItem)"><i class="fas fa-minus-circle"></i></button>
                    <h6 class="cart-quantity">{{cartItem.quantity}}</h6>
                    <button class="button_delete-item" @click="$emit('addProduct', cartItem)"><i class="fas fa-plus-circle"></i></button>
                    <h6 class="cart-oder-details-box-h6 cart-price">FREE</h6>
                    <h6 class="cart-oder-details-box-h6 cart-price-subtotal">$ {{cartItem.quantity*cartItem.price}} </h6>
                    <button class="button_delete-item" @click="$emit('removeAllOfType', cartItem)"><i class="fas fa-times-circle"></i></button>
                </article>`
})