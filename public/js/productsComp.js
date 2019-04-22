Vue.component('products', {
    props: ['featured'],
    data(){
        return {
            products: [],
        }
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
    },
template: `<div class="container product-flex">
                <product v-for="(product, index) in products" v-if="featured ? index <= 7 : index >= 12" :key="product.id_product" :product="product"></product>
            </div>`
});

Vue.component('products-suggested', {
    data(){
        return {
            products: [],
        }
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
    },
template: `<div class="container product-flex">
                <product v-for="(product, index) in products" v-if="index >= 8 && index <= 11" :key="product.id_product" :product="product"></product>
            </div>`
});

Vue.component('product', {
    props: ['product'],
    template: `<div class="product">
            <a :href="product.page"><img class="product-img" :src="product.img" alt="photo product"></a>
            <div class="product-text">
                <a class="product-name" :href="product.page">{{ product.name }}</a>
                <p class="product-price">$ {{product.price}}</p>
            </div>
            <button class="product-add" @click="$root.$refs.cart.addProduct(product)"><i class="fas fa-shopping-cart product-add-to-cart"></i>&nbsp;&nbsp;add to cart</button>
            <button class="product-repost"><i class="fas fa-retweet product-add-to-cart"></i></button>
            <button class="product-like" @click="product.liked = !product.liked" :class="{liked: product.liked}"><i class="far fa-heart product-add-to-cart"></i></button>
        </div>`
})
