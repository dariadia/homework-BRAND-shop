Vue.component('drop-down-menu', {
    data(){
        return {
            menuItemsFem: ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories',],
            menuItemsMale: ['Tees/Tank tops', 'Shirts/Polos', 'Sweaters', 'Sweatshirts/Hoodies', 'Blazers', 'Jackets/vests'],
        }
    },
    template: ` <ul class="menu">

<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <div class="drop-flex drop-browse"><h3 class="drop-h3">WOMEN</h3>
                                        <ul class="drop-ul">
                                            <li v-for="item of menuItemsFem"><a href="#" class="drop-link">{{item}}</a></li>
                                        </ul>
                                    </div>
                                    <div class="drop-flex drop-browse"><h3 class="drop-h3">MEN</h3>
                                        <ul class="drop-ul">
                                        <li v-for="item of menuItemsMale"><a href="#" class="drop-link">{{item}}</a></li>
                                        </ul>
                                    </div>
                                </div>`
});