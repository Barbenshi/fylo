<template>
<section class='footer main-layout'>
    <div class="logo">
        <img src="../assets/images/logo.svg" alt="">
    </div>
    <div class="content-container flex justify-between">
        <div class="location flex">
            <div class="location-container">
                <img src="../assets/images/icon-location.svg" alt="">
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div class="contact-info flex flex-column">
            <div class="phone-number flex">
                <div class="phone-container">
                    <img src="../assets/images/icon-phone.svg" alt="">
                </div>
                <span>+1-543-123-4567</span>
            </div>
            <div class="email flex">
                <div class="email-container">
                    <img src="../assets/images/icon-email.svg" alt="">
                </div>
                <span>example@fylo.com</span>
            </div>
        </div>
        <nav class="footer-nav">
            <ul class="flex flex-column">
                <li><a href="">About Us</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Terms</a></li>
                <li><a href="">Privacy</a></li>
            </ul>
        </nav>
        <div class="social-links">
            <ul class="clean-list flex">
                <li><a href="" class="fa fa-facebook"></a></li>
                <li><a href="" class="fa fa-twitter"></a></li>
                <li><a href="" class="fa fa-instagram"></a></li>
            </ul>
        </div>
    </div>
</section>
</template>
<script>
 export default {
name: 'footer',
  props: {},
  data() {
 return{}},
  created(){},
 methods: {},
 computed: {},
 components: {}
  }
 </script>