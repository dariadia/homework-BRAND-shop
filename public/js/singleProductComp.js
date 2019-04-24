Vue.component('single-product', {
    data(){
        return {
            item: {
                quantity: 1,
                id_product: 789,
                img: 'img/model-bg.png',
                name: 'MOSCHINO CHEAP AND CHIC',
                page: 'single-page.html',
                price: 561,
                color: 'red',
                size: 'S',
            },
        }
    },
    template: `<section class="container container-absolute">
                    <h5 class="women-collection">WOMEN COLLECTION</h5>
                    <div class="decoration">
                        <div class="decoration pink-line"> </div>
                    </div>
                    <h3 class="women-collection-h3">Moschino Cheap And Chic</h3>
                    <p class="women-collection-p">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals. </p>
                    <div class="features-design">
                        <h5 class="material">MATERIAL: <span class="bold">COTTON</span></h5>
                        <h5 class="material">DESIGNER: <span class="bold">BINBURHAN</span></h5>
                    </div>
                    <div class="price">&#36;561</div>
                    <div class="decoration-line"> </div>
            <form action="#" method="#">
                <div class="column-three">
                    <div class="column-items">
                        <label for="select-color" class="material bold">CHOOSE COLOR</label>
                        <select v-model="item.color" class="select" id="select-color" required>
                            <option class="select-option-red" value="red">&nbsp; Red</option>
                            <option value="blue">&nbsp; Blue</option>
                            <option value="black">&nbsp; Black</option>
                        </select>
                    </div>
                    <div class="column-items">
                        <label for="select-size" class="material bold">CHOOSE SIZE</label>
                        <select v-model="item.size" class="select" id="select-size" required>
                            <option class="select-option" value="S">&nbsp;S</option>
                            <option value="M">&nbsp;M</option>
                            <option value="L">&nbsp;L</option>
                            <option value="XL">&nbsp;XL</option>
                            <option value="XXL">&nbsp;XXL</option>
                        </select>
                    </div>
                    <div class="column-items">
                        <label for="quantity" class="material bold">QUANTITY</label>
                        <input v-model="item.quantity" id="quantity" class="select" type="number" placeholder="2" required>
                    </div>
                </div>
            </form>
            <button-add-prod :item="item"></button-add-prod>
            </section>`
});

Vue.component('button-add-prod', {
    props: ['item'],
    template: `<button class="button_continue cart-add" @click="$root.$refs.cart.addProduct(item)"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add to Cart</button>`
    });
