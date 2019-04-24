//компонент – боковое меню на странице всех товаров магазина. При нажатии на категорию, открывается под-список (лист)
Vue.component('aside-menu', {
    template: `
    <aside class="aside-product-nav">
        <aside-details title="Category"></aside-details>
        <aside-details title="brand"></aside-details>
        <aside-details title="designer"></aside-details>
    </aside>`
});


Vue.component('aside-details', {
    props: ['title', 'open'],
    data(){ 
        return {
            isClosed: true,
        }
    },
template: `<details class="aside-details">
                <summary class="aside-summary" @click="isClosed = !isClosed"> {{title}}
                    <i v-if="isClosed" class="fas fa-caret-up"></i>
                    <i v-else class="fas fa-caret-down"></i>
                </summary>
                <aside-details-li></aside-details-li> 
            </details>`
});

Vue.component('aside-details-li', {
    props: ['title'],
    data(){ 
        return {
            titles: ['Accessories', 'Bags', 'Denim', 'Hoodies & Sweatshirts', 'Jackets & Coats', 'Pants', 'Polos', 'Shirts', 'Shoes', 'Shorts', 'Sweaters & Knits', 'T-Shirts', 'Tanks'],
        }
    },
template: ` <ul class="aside-summary-list">
                 <li v-for="item in titles" class="aside-summary-li"><a href="#" class="aside-category">{{item}}</a></li>      
            </ul>`
});