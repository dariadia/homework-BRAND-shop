Vue.component('aside-menu', {
    template: `
    <aside class="aside-product-nav">
        <aside-details title="Category"></aside-details>
        <aside-details title="brand"></aside-details>
        <aside-details title="designer"></aside-details>
    </aside>`
});


Vue.component('aside-details', {
    props: ['title'],
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
                        <ul class="aside-summary-list">
                            <li class="aside-summary-li"><a href="#" class="aside-category">Accessories</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Bags</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Denim</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Hoodies &amp;
                                    Sweatshirts</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Jackets &amp; Coats</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Pants</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Polos</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Shirts</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Shoes</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Shorts</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Sweaters &amp; Knits</a>
                            </li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">T-Shirts</a></li>
                            <li class="aside-summary-li"><a href="#" class="aside-category">Tanks</a></li>
                        </ul>
                    </details>`
});