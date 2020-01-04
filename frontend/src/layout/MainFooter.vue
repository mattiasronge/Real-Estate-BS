<template>
<footer class="footer footer-big" :class="{[`footer-${type}`]: type}" data-background-color="black">
    <div class="container pt-5">
        <div class="footer-container">
            <div class="footer-left">
                <div class="menu">
                    <span class="footer-title"><span>Meny</span><span class="separator"></span></span>
                        <div class="menu-sidfot-1-container menu-container">
                            <ul id="menu-sidfot-1" class="nav">
                                <li><a href="#/presentation">Home</a></li>
                                <li><a href="#/components">Search</a></li>
                                <li><a href="#/contact">Contact</a></li>
                            </ul>
                        </div>

                    </div>
                    <div class="offices">
                        <span class="footer-title">
                            <span>Contact</span>
                            <span class="separator"></span>
                        </span>
                    <div class="office">
                        <span class="address">Road X</span>
                        <span class="city">111 11 Spain, Marbella</span>
                        <span class="phone">+46 (0)0 000 000 80</span>
                    </div>
               
                </div>
            </div>
            <div class="footer-right">
                <div class="social">
                    <span class="footer-title">Följ oss</span>
                    <p>Inspireras via sociala medier, följ oss på Instagram och Facebook</p>
                    <ul class="social-links">
                        <li class="facebook">
                            <a href="https://www.facebook.com/djmattiasronge/" target="_blank">
                            <span class="icon">
                                <img src="img/icons/fb_cw.png">
                            </span>
                            </a>
                        </li>
                        <li class="instagram">
                            <a href="https://www.facebook.com/djmattiasronge/" target="_blank">
                            <span class="icon">
                                <img src="img/icons/insta_cw.png">
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>
        <div class="site-info-container">
            <div class="footer-left">
                <div class="site-info">
                    <ul>
                        <li>Copyright &copy; {{year}}</li>
                        <li class="bold">Mattias Ronge</li>
                        <li>Org. nr 556787-1941</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
