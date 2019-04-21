Vue.component('upper-menu', {
    data(){ 
        return {
            options: [  {name: 'MEN', class: 'drop-second'},
                            {name: 'WOMEN', class: 'drop-third'},
                            {name: 'KIDS', class: 'drop-forth'},
                            {name: 'ACCOSERIESE', class: 'drop-last-but-last-but-last-one '},
                            {name: 'FEATURED', class: 'drop-last-but-one'},
                            {name: 'HOT DEALS', class: 'drop-last'},
                          ],
        }
    },
    template: ` <ul class="menu">
                    <li class="menu-list"><a href="index.html" class="menu-link">Home</a></li>
                    <dropout v-for="item in options" :key="item.name" :item="item"></dropout>
                </ul>`
});


Vue.component('dropout', {
    props: ['item'],
    template: `<li class="menu-list"><a href="product.html" class="menu-link">{{item.name}}</a>
                <div class="drop" :class="item.class">
                    <dropout-lg-ul></dropout-lg-ul>
                    <div>
                        <dropout-ul></dropout-ul>
                        <dropout-ul class="second element"></dropout-ul>
                    </div>
                    <div>
                    <dropout-ul></dropout-ul>
                    <div class="second-element jello-horizontal">
                        <a class="super-sale" href="#"><img src="img/super-sale.png" alt="super sale banner">
                            <h3 class="super-sale-text">SUPER SALE</h3>
                        </a>
                    </div>
                </div>
                </div>
               </li>`
});


Vue.component('dropout-ul', {
    data(){
        return {
            list: ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats'],
        }
    },
    template: `<div class="drop-flex">
    <h3 class="drop-h3">WOMEN</h3>
    <ul class="drop-ul">
                <li v-for="item in list"><a href="#" class="drop-link">{{item}}</a></li>
             </ul>
             </div>`
});


Vue.component('dropout-lg-ul', {
    data(){
        return {
            list: ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories', 'Bags/Purses', 'Swimwear/Underwear', 'Nightwear'],
        }
    },
    template: `<div class="drop-flex">
    <h3 class="drop-h3">WOMEN</h3>
    <ul class="drop-ul">
                <li v-for="item in list"><a href="#" class="drop-link">{{item}}</a></li>
             </ul>
             </div>`
});
