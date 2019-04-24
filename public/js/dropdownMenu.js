// компонент выпадающего меню (у поля Browse в верхней панели магазина)
Vue.component('drop-down-menu', {
    data(){
        return {
            menuItemsFem: ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories',],
            menuItemsMale: ['Tees/Tank tops', 'Shirts/Polos', 'Sweaters', 'Sweatshirts/Hoodies', 'Blazers', 'Jackets/vests'],
        }
    },
    template: `<div class="dropdown-menu menu" aria-labelledby="btnGroupDrop1">
                <div class="drop-flex drop-browse"><h3 class="drop-h3">WOMEN</h3>
                    <ul class="drop-ul">
                        <li v-for="item of menuItemsFem"><a href="#" class="drop-link">{{item}}</a></li>
                    </ul>
                </div>
                <div class="drop-flex drop-browse"><h3 class="drop-h3">MEN</h3>
                <ul class="drop-ul">
                    <li v-for="item of menuItemsMale"><a href="#" class="drop-link">{{item}}</a></li>
                </ul>
                </div></div>`
});

//компонент Аккаунт (здесь хранятся ссылки на все страницы магазина)
Vue.component('account-button', {
    data(){
        return {
            links: [
                {link: 'checkout.html', title: 'Check Out'},
                {link: 'single-page.html', title: 'Single Page'},
                {link: 'product.html', title: 'Products'},
                {link: 'shopping-cart.html', title: 'Shopping Cart'},
            ],
        }
    },
    template: `<div class="btn-group" role="group">
                    <button id="btnGroupDrop2" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account</button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a v-for="item in links" :key="item.title" class="dropdown-item" :href="item.link">{{ item.title }}</a></div>
                </div>`
});