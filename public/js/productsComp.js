Vue.component('products', {
    data(){
        return {
            filtered: [],
            products: [],
            catalogUrl: '/catalogData.json'
        }
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
template: `<div class="container product-flex">
                <product v-for="(product, index) in filtered" v-if="index <= 7" :key="product.id_product" :product="product"></product>
            </div>`
});

Vue.component('product', {
    props: ['product'],
    template: `<div class="product">
            <a :href="product.page"><img class="product-img" :src="product.img" alt="photo product 1"></a>
            <div class="product-text">
                <a class="product-name" :href="product.page">{{ product.name }}</a>
                <p class="product-price">{{product.price}}</p>
            </div>
            <button class="product-add" @click="$root.$refs.cart.addProduct(product)"><i class="fas fa-shopping-cart product-add-to-cart"></i>&nbsp;&nbsp;add to cart</button>
        </div>`
})