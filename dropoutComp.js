Vue.component('dropout', {
    data(){ 
        return {
            menuOptions: ['HOME', 'MEN', 'WOMEN','KIDS','ACCOSERIESE','FEATURED','HOT DEALS'],
        }
    },
    props: ['title'],
   // mounted(){},
   // methods: {},
    template: `<li class="menu-list"><a href="product.html" class="menu-link">{{title}}</a>
    <div class="drop drop-second">
        <div class="drop-flex">
            <h3 class="drop-h3">WOMEN</h3>
            <ul class="drop-ul">
                <li><a href="#" class="drop-link">Dresses</a></li>
                <li><a href="#" class="drop-link">Sweaters/Knits</a></li>
                <li><a href="#" class="drop-link">Jackets/Coats</a></li>
                <li><a href="#" class="drop-link">Blazers</a></li>
                <li><a href="#" class="drop-link">Denim</a></li>
                <li><a href="#" class="drop-link">Leggings/Pants</a></li>
                <li><a href="#" class="drop-link">Skirts/Shorts</a></li>
                <li><a href="#" class="drop-link">Accessories</a></li>
                <li><a href="#" class="drop-link">Bags/Purses</a></li>
                <li><a href="#" class="drop-link">Swimwear/Underwear</a></li>
                <li><a href="#" class="drop-link">Nightwear</a></li>
            </ul>
        </div>
        <div>
            <div class="drop-flex">
                <h3 class="drop-h3">WOMEN</h3>
                <ul class="drop-ul">
                    <li><a href="#" class="drop-link">Dresses</a></li>
                    <li><a href="#" class="drop-link">Tops</a></li>
                    <li><a href="#" class="drop-link">Sweaters/Knits</a></li>
                    <li><a href="#" class="drop-link">Jackets/Coats</a></li>
                </ul>
            </div>
            <div class="drop-flex second-element">
                <h3 class="drop-h3">WOMEN</h3>
                <ul class="drop-ul">
                    <li><a href="#" class="drop-link">Dresses</a></li>
                    <li><a href="#" class="drop-link">Tops</a></li>
                    <li><a href="#" class="drop-link">Sweaters/Knits</a></li>
                </ul>
            </div>
        </div>
        <div>
            <div class="drop-flex">
                <h3 class="drop-h3">WOMEN</h3>
                <ul class="drop-ul">
                    <li><a href="#" class="drop-link">Dresses</a></li>
                    <li><a href="#" class="drop-link">Tops</a></li>
                    <li><a href="#" class="drop-link">Sweaters/Knits</a></li>
                    <li><a href="#" class="drop-link">Jackets/Coats</a></li>
                </ul>
            </div>
            <div class="second-element jello-horizontal"><a class="super-sale" href="#"><img src="img/super-sale.png" alt="super sale banner">
                    <h3 class="super-sale-text">SUPER SALE</h3>
                </a></div>
        </div>
    </div>
</li>`
});