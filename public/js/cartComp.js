Vue.component('cart', {
    data(){
        return {
            cartItems: [],
            totalSumArr: [],
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
   template:  ` 
                <div class="drop drop-cart-after">
                <p class="message_cart__empty" v-if="!cartItems.length">Cart is empty</p>
                <div v-else class="drop-flex">
                    <cart-item v-for="product of cartItems"  
                    :key="product.id_product"
                    :img="product.img"
                    :cart-item="product"
                    @remove="remove"></cart-item>
                    <div class="drop-cart-total">
                        <h3 class="drop-cart-total-h3">TOTAL</h3>
                        <h3 class="drop-cart-total-h3">$ {{ getTotal()}} </h3>
                    </div>
                    <a href="checkout.html"><button class="button_continue drop-cart-checkout">
                        Checkout
                    </button></a>
                    <a href="checkout.html"><button class="button_continue drop-cart-go-to">
                        Go&nbsp;to&nbsp;cart
                    </button>
                </a>
                </div>
            </div>`
});
Vue.component('cart-item', {
    props: ['cartItem'],
    // mounted(){
    //     return {
    //         productTotal: cartItem.quantity*cartItem.price,
    //     }
    // },
    template: `<div class="drop-cart-box">
                    <a class="drop-cart-box-img" :href="cartItem.page"><img height="90" :src="cartItem.img" alt="this item is in your cart"></a>
                    <div class="drop-cart-info">
                        <a class="cart-item" :href="cartItem.page">
                            <h5 class="drop-cart-box-h5">{{cartItem.name}}</h5>
                        </a>
                        <i v-for="star in cartItem.stars" class="fas fa-star"></i>
                        <h6 class="drop-cart-box-h6">{{ cartItem.quantity }} x $ {{cartItem.price}} = $ {{cartItem.quantity*cartItem.price}}</h6>
                    </div>
                    <button class="button_delete-item" @click="$emit('remove', cartItem)"> <i class="fas fa-times-circle"></i></button>
                </div>`
})