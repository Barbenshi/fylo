<template>
    <section class='main-content'>
        <div v-for="feature in features" :key="feature.class" :class="feature.class">
            <img :src="formatSrc(feature.path)" alt="">
            <h3>{{feature.title}}</h3>
            <p>{{feature.txt}}</p>
        </div>
        <div class="main-img-container">
            <img src="../assets/images/illustration-stay-productive.png" alt="">
        </div>
        <div class="img-description flex flex-column justify-center">
            <h1>Stay productive,
                wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
                attachments required.</p>
            <a href="">See how Fylo works <img src="../assets/images/icon-arrow.svg" alt=""></a>
        </div>
        <div class="quotes-img">
            <img src="../assets/images/bg-quotes.png" alt="">
        </div>
        <div class="review first-review flex flex-column">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                become a well-oiled collaboration machine.</p>
            <div class="user-container flex">
                <div class="user-img">
                    <img src="../assets/images/profile-1.jpg" alt="">
                </div>
                <div class="user-details">
                    <h5>Satish Patel</h5>
                    <small>Founder & CEO, Huddle</small>
                </div>
            </div>
        </div>
        <div class="review second-review flex flex-column">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                become a well-oiled collaboration machine.</p>
            <div class="user-container flex">
                <div class="user-img">
                    <img src="../assets/images/profile-2.jpg" alt="">
                </div>
                <div class="user-details">
                    <h5>Bruce McKenzie</h5>
                    <small>Founder & CEO, Huddle</small>
                </div>
            </div>
        </div>
        <div class="review third-review flex flex-column">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                become a well-oiled collaboration machine.</p>
            <div class="user-container flex">
                <div class="user-img">
                    <img src="../assets/images/profile-3.jpg" alt="">
                </div>
                <div class="user-details">
                    <h5>Iva Boyd</h5>
                    <small>Founder & CEO, Huddle</small>
                </div>
            </div>
        </div>
        <div class="contact-form">
            <h1>Get early access today</h1>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div class="input-container">
                <input type="text" placeholder="email@example.com">
                <button>Get Started For Free</button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'main-content',
    props: {},
    created() { },
    methods: {
        formatSrc(path){
            return `src/assets/images/icon-${path}.svg`
        }
    },
    computed: {
        features(){
            return this.$store.getters.features
        }
    },
    components: {}
}
</script>