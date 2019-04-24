Vue.component('footer-elem', {
    data() {
        return {
            decoration: ['decoration-box-lt', 'decoration-box-lt', 'decoration-box-lt',],
        };
},
template: `<footer>
<div class="subscribe">
    <div class="container">
        <div class="sub-box">
            <div><img class="sub-box-img" src="img/icon-woman.png" alt="icon woman"></div>
            <div>
                <p class="quote">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                <p class="quote-author"><span class="quote-author-span">Bin Burhan</span><br> Dhaka, Bd</p>
                <div class="decoration-box">
                    <div v-for="item in decoration" :class="item"></div>
                </div>
            </div>
        </div>
        <div class="sub-box sub-second">
            <div class="subscribe-description">
                <h3>Subscribe</h3>
                <h6>FOR OUR NEWLETTER AND PROMOTION</h6>
            </div>
            <div class="sub-form">
                <form class="form" action="#">
                    <input class="input_email" type="email" placeholder="Enter Your Email">
                    <button class="button_subscribe" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</div>
<info-block></info-block>
<footer-lowest></footer-lowest>
</footer>`,
});

Vue.component('footer-lowest', {
    data() {
        return {
            icons: [
                {link: '#', name: 'fa-facebook-f'},
                {link: '#', name: 'fa-twitter'},
                {name: 'fa-linkedin-in', class: 'no-link',},
                {link: '#', name: 'fa-pinterest'},
                {link: '#', name: 'fa-google-plus-g'},
            ]
        };
    },
    template: `<div class="footer"><div class="container">
        <div class="footer-left">
            &copy; 2017 Brand All Rights Reserved.
        </div>
        <div class="footer-right">
            <div v-for="icon in icons" :key="icon.name" class="icon-social" :class="icon.class">
            <a v-if="icon.link" class="icon-social-a" :href="icon.link">
                <i class="fab" :class="icon.name"></i>
            </a>
            <i v-else class="fab" :class="icon.name"></i>
            </div>
        </div>
    </div></div>`});

Vue.component('social-icons', {
    template: ``
});


Vue.component('info-block', {
template: `<div class="info"><div class="container">
    <div class="info-para">
        <a class="logo" href="index.html"><img class="logo-img" src="img/logo.png" alt="logo">BRAN<span class="logo-d">D</span></a>
        <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>
        <p>Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
    </div>
        <info-column title="Company"></info-column>
        <info-column-terms title="INFORMATION"></info-column-terms>
        <info-column-shop></info-column-shop>    
    </div>
    </div>`})

Vue.component('info-column', {
    props: ['title'],
    data(){
        return {
            links: [
                {link: 'index.html', title: 'Home'},
                {link: '#', title: 'Shop'},
                {link: '#', title: 'About'},
                {link: '#', title: 'How It Works'},
                {link: '#', title: 'Contact'},
            ],
        }
    },
    template: `<div class="info-column">
                    <h5 class="info-column-h5">{{title}}</h5>
                    <ul class="info-categories">
                         <li v-for="item in links" :key="item.title"><a class="info-categories-a" :href="item.link">{{ item.title }}</a></li>
                    </ul>
                </div>`
});

Vue.component('info-column-terms', {
    props: ['title'],
    data(){
        return {
            links: [
                {link: '#', title: 'Terms & Conditions'},
                {link: '#', title: 'Privacy Policy'},
                {link: '#', title: 'How to Buy'},
                {link: '#', title: 'How to Sell'},
                {link: '#', title: 'Promotion'},
            ],
        }
    },
    template: `<div class="info-column">
                    <h5 class="info-column-h5">{{title}}</h5>
                    <ul class="info-categories">
                         <li v-for="item in links" :key="item.title"><a class="info-categories-a" :href="item.link">{{ item.title }}</a></li>
                    </ul>
                </div>`
});

Vue.component('info-column-shop', {
    props: ['title'],
    data(){
        return {
            links: [
                {link: 'product.html', title: 'Men'},
                {link: 'product.html', title: 'Women'},
                {link: 'product.html', title: 'Child'},
                {link: 'product.html', title: 'Apparel'},
                {link: 'product.html', title: 'Browse All'},
            ],
        }
    },
    template: `<div class="info-column">
                    <h5 class="info-column-h5">SHOP CATEGORY</h5>
                    <ul class="info-categories">
                         <li v-for="item in links" :key="item.title"><a class="info-categories-a" :href="item.link">{{ item.title }}</a></li>
                    </ul>
                </div>`
});