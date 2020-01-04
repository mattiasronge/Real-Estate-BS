<template>
    <div class="wrapper presentation-page">
        <div class="page-header clear-filter">
            <div class="rellax-header" data-rellax-speed="0">
                <video width="100%" preload="true" autoplay muted loop poster="video/video.jpg" id="video-tag" style="background-color: rgba(0, 0, 0, 0); object-position: center center; object-fit: cover; width: 100%; height: 100%;">
                    <source src="video/video.mp4" type="video/mp4">
                </video>
            </div>
            <div class="overlay-header"></div>

            <h3 class="h3-description rellax-text" data-rellax-speed="-1">
                <a href="#/components" class="btn btn-action" rel="tooltip" title="" data-original-title="Star on Github">
                    Search Homes
                </a>
            </h3>
            <h6 class="category category-absolute rellax-text" data-rellax-speed="-2">
                <parallax>
                    Designed by
                    <img v-lazy="'img/designer.png'" class="creative-tim-logo" alt=""/>
                </parallax>
            </h6>
        </div>
        <div class="section section-basic-components pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-7 mr-auto">
                        <h2 class="title pt-0 mt-0">About the Company</h2>
                        <h6 class="category">Coastly</h6>
                        <h5 class="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod omnis quos temporibus hic ea eos, ducimus perspiciatis libero doloremque. Tempora vero repudiandae soluta nemo eveniet. Recusandae sed repellat reiciendis?</h5>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="image-container">
                            <img class="components-macbook" src="img/presentation-page/home1.jpg" alt="ipad_img">
                            <!-- <img class="table-img" src="img/presentation-page/home2.jpg" alt="table">
                            <img class="coloured-card-btn-img" src="img/presentation-page/home4.jpg"
                                 alt="coloured card with button">
                            <img class="coloured-card-img" src="img/presentation-page/home5.jpg"
                                 alt="coloured card"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section-content pt-0">
            <div class="container">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="section-description text-center">
                        <!-- <h2 class="title">Homes</h2> -->
                        <p class="pb-2"><a href="#/components" class="btn btn-primary btn-round">Search Homes</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="section-cols">
                    <div class="row" v-for="post in posts" :key="post.id">
                        <div class="card card-plain card-blog">
                            <div class="row" slot="image">
                                <div class="col-lg-8 col-md-5">
                                    <lingallery :height="420" :width="800" :mobileHeight="190" :showThumbnails="false" :items=post.images />
                                </div>
                                <div class="col-lg-4 col-md-7">
                                    <h3 class="card-title" v-if="post.model_type=='api'">
                                        <router-link v-bind:to="'/item/' + post._id">{{post.title}}</router-link>
                                    </h3>
                                    <h3 class="card-title" v-else>
                                        <router-link v-bind:to="'/manual/' + post._id">{{post.title}}</router-link>
                                    </h3>
                                    <p class="home-location">{{post.location.title}}</p>
                                    <p class="room-price">€{{post.price | formatNumber}}</p>
                                    <p class="room-stats">
                                        <!-- <span class="mr-3 pl-0"><b>{{post.ref_key}}</b></span> -->
                                        <span class="mr-3 pl-0"><i class="fa fa-bed"></i> : {{post.bedroom}} </span>
                                        <span class="mr-3"><i class="fa fa-bath"></i> : {{post.bathroom}} </span>
                                        <span class="mr-3"><i class="fa fa-home"></i> : {{post.square}} m²</span>
                                        <span><i class="fa fa-info"></i> : {{post.outside}} m²</span>
                                    </p>
                                    <div class="card-description" v-html="post.description.slice(0, 252)+'...'"></div>
                                    <router-link class="readmore" v-bind:to="'/item/' + post._id">Read More</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section-content" data-background-color="black">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="image-container">
                            <img class="img img-raised rounded img-comments rellax" data-rellax-speed="1"
                                 src="img/presentation-page/home4.jpg" alt="content 1">
                            <img class="img img-raised rounded img-blog rellax" data-rellax-speed="4"
                                 src="img/presentation-page/home5.jpg" alt="content 4">
                        </div>
                    </div>
                    <div class="col-md-4 ml-auto mr-auto">
                        <div class="section-description">
                            <h2 class="title">Company</h2>
                            <h6 class="category">For Areas that Need More Space</h6>
                            <h5 class="description">We took into consideration multiple use cases and came up with some
                                specific areas for you. If you need elements such as tables, comments, description
                                areas, tabs and many others, we've got you covered. They're beautiful and easy to use
                                for the end user navigating your website. </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section-content">
            <div class="container">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="section-description text-center">
                        <h2 class="m-0 p-0"><i class="fab fa-instagram"></i></h2>
                        <p class="text-center">
                            Instagram
                        </p>
                        <h2 class="sub-title">With Loves</h2>
                        <p>My Instagram photos</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="instagram-wrapper">
                    <div id="sb_instagram" class="sbi sbi_col_3  sbi_width_resp desktop sbi_disable_mobile">
                        <div id="sbi_images" style="padding: 10px;">
                            <div class="sbi_item sbi_type_image" v-for="(item,i) in [5,4,3,6,4,6,8,4,3,5,4,6]" :key="i">
                                <div class="sbi_photo_wrap">
                                    <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="#" target="_blank" rel="noopener">
                                        <img v-lazy="'img/examples/f'+item+'.jpg'" alt="facebook image">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapState } from "vuex";
  import { InfoSection } from '@/components';
  import { Carousel, CarouselItem, Tooltip } from 'element-ui';
  import Lingallery from 'lingallery';
  var numeral = require("numeral");
  export default {
    name: 'presentation',
    bodyClass: 'presentation-page',
    components: { // inkluderar externa komponenter för återanvändning.
      Lingallery,
      InfoSection,
      [Carousel.name]: Carousel,
      [CarouselItem.name]: CarouselItem,
      [Tooltip.name]: Tooltip
    },
    filters: {
        formatNumber(value) {
            return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
        }
    },
    created() {
        this.getPosts(1);// när instansen skapas, hämtas en sida i db. eftersom den home-sidan bara behöver visa upp några få produkter.
    },
    mounted: function(){ //kallas efter att  instansen blivit mounted
        let video = document.getElementById('video-tag');
        video.src = "/video/video.mp4";
        video.play();
    },
    computed: {
        ...mapState({// Efter modifierat state i store så kan datan skickas direkt till en komponent.
            posts: state => state.product.posts
        })
    },
    methods: {
        getPosts(p) {// Den här metoden kallar på action i store 
            this.$store.dispatch('product/getPosts', {page: p});
        }
    }
  }
</script>
<style lang="scss">
    #video-tag {
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
    }
    .lingallery figure {
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    @media screen and (min-width:1980px) {
        .page-header {
            min-height: 75vh;
        }
    }
    @media screen and (max-width: 640px) {
        .room-stats span {
            font-size:11px;
            padding-right: 0 !important;
        }
    }
    @media screen and (max-width: 991px) and (min-width: 768px) {
        .lingallery figure {
            height: 220px !important;
        }
    }  
    @media screen and (max-width: 480px) and (min-width: 320px) {
        .lingallery figure {
            height: 290px !important;
        }
    }  
    @media screen and (max-width: 320px) {
        .lingallery figure {
            height: 195px !important;
        }
    }
    .lingallery figure a.control {
        color:#fff !important;
    }
</style>
<style scoped lang="scss">
    .presentation-page .thumb-img {
        max-height: 270px;
        height:270px;
        overflow: hidden;
    }
    .sub-title {
        font-family: 'Muli', sans-serif;
        font-size: 40px;
        letter-spacing: 4px;
        margin-top: 30px;
        margin-bottom:10px;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 1;
        text-align: center;
    }
    .github-buttons {
        display: flex;
        align-content: center;
    }
#sb_instagram {
    width:100%;
    margin:0 auto;
    padding:0;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box
}
#sb_instagram:after {
    content:"";
    display:table;
    clear:both
}
#sb_instagram.sbi_fixed_height {
    overflow:hidden;
    overflow-y:auto;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box
}
#sb_instagram #sbi_images {
    width:100%;
    float:left;
    line-height:0;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box
}
#sb_instagram #sbi_images .sbi_item {
    display:-moz-inline-stack;
    display:inline-block;
    float:left;
    vertical-align:top;
    zoom:1;
    max-height:1000px;
    padding:inherit!important;
    margin:0!important;
    text-decoration:none;
    opacity:1;
    overflow:hidden;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    -webkit-transition:all .5s ease;
    -moz-transition:all .5s ease;
    -o-transition:all .5s ease;
    -ms-transition:all .5s ease;
    transition:all .5s ease
}
#sb_instagram #sbi_images .sbi_item:hover {
    opacity:0.8;
}
#sb_instagram #sbi_images .sbi_item.sbi_transition {
 opacity:0;
 max-height:0
}
#sb_instagram.sbi_col_3 #sbi_images .sbi_item {
 width:33.33%
}
#sb_instagram .sbi_photo_wrap {
 position:relative
}
#sb_instagram .sbi_photo {
 display:block;
 text-decoration:none;
 background-size: cover;
 background-position: center center;
 background-repeat: no-repeat;
 opacity: 1;
 overflow: hidden;
}
#sb_instagram .sbi_photo img {
 width:100%;
 height:auto
}
#sb_instagram .sbi_no_js img {
 display:none
}
#sb_instagram a,
#sb_instagram a:active,
#sb_instagram a:focus,
#sb_instagram a:hover {
 outline:0
}
#sb_instagram img {
 display:block;
 padding:0!important;
 margin:0!important;
 max-width:100%!important;
 opacity:1!important
}
#sb_instagram .sbi_link {
 display:none;
 position:absolute;
 bottom:0;
 right:0;
 width:100%;
 padding:10px 0;
 background:rgba(0,0,0,.5);
 text-align:center;
 color:#fff;
 font-size:12px;
 line-height:1.1
}
#sb_instagram .sbi_link a {
 padding:0 6px;
 text-decoration:none;
 color:#fff;
 font-size:12px;
 line-height:1.1;
 display:-moz-inline-stack;
 display:inline-block;
 vertical-align:top;
 zoom:1
}
#sb_instagram .sbi_link .sbi_lightbox_link {
 padding-bottom:5px
}
#sb_instagram .sbi_link a:focus,
#sb_instagram .sbi_link a:hover {
 text-decoration:underline
}
#sb_instagram .sbi_photo_wrap:focus .sbi_link,
#sb_instagram .sbi_photo_wrap:hover .sbi_link {
 display:block
}
#sb_instagram svg:not(:root).svg-inline--fa {
 height:1em;
 display:inline-block
}
#sb_instagram .sbi_type_carousel .sbi_playbtn,
#sb_instagram .sbi_type_carousel .svg-inline--fa.fa-play,
#sb_instagram .sbi_type_video .sbi_playbtn,
#sb_instagram .sbi_type_video .svg-inline--fa.fa-play,
.sbi_type_carousel .fa-clone {
 display:block!important;
 position:absolute;
 z-index:1;
 color:#fff;
 color:rgba(255,255,255,.9);
 font-style:normal!important;
 text-shadow:0 0 8px rgba(0,0,0,.8)
}
#sb_instagram .sbi_type_carousel .sbi_playbtn,
#sb_instagram .sbi_type_video .sbi_playbtn {
 z-index:2;
 top:50%;
 left:50%;
 margin-top:-24px;
 margin-left:-19px;
 padding:0;
 font-size:48px
}
#sb_instagram .sbi_type_carousel .fa-clone {
 right:12px;
 top:12px;
 font-size:24px;
 text-shadow:0 0 8px rgba(0,0,0,.3)
}
#sb_instagram .sbi_type_carousel .svg-inline--fa.fa-play,
#sb_instagram .sbi_type_video .svg-inline--fa.fa-play,
.sbi_type_carousel svg.fa-clone {
 -webkit-filter:drop-shadow( 0 0 2px rgba(0,0,0,.4) );
 filter:drop-shadow( 0 0 2px rgba(0,0,0,.4) )
}
#sb_instagram .sbi_loader {
 width:20px;
 height:20px;
 position:relative;
 top:50%;
 left:50%;
 margin:-10px 0 0 -10px;
 background-color:#000;
 background-color:rgba(0,0,0,.5);
 border-radius:100%;
 -webkit-animation:sbi-sk-scaleout 1s infinite ease-in-out;
 animation:sbi-sk-scaleout 1s infinite ease-in-out
}
#sb_instagram br {
 display:none
}
#sbi_load p {
 display:inline;
 padding:0;
 margin:0
}
#sb_instagram #sbi_load .sbi_loader {
 position:absolute;
 margin-top:-11px;
 background-color:#fff;
 opacity:1
}
@-webkit-keyframes sbi-sk-scaleout {
 0% {
  -webkit-transform:scale(0)
 }
 100% {
  -webkit-transform:scale(1);
  opacity:0
 }
}
@keyframes sbi-sk-scaleout {
 0% {
  -webkit-transform:scale(0);
  -ms-transform:scale(0);
  transform:scale(0)
 }
 100% {
  -webkit-transform:scale(1);
  -ms-transform:scale(1);
  transform:scale(1);
  opacity:0
 }
}
#sb_instagram .fa-spin,
#sbi_lightbox .fa-spin {
 -webkit-animation:fa-spin 2s infinite linear;
 animation:fa-spin 2s infinite linear
}
#sb_instagram .fa-pulse,
#sbi_lightbox .fa-pulse {
 -webkit-animation:fa-spin 1s infinite steps(8);
 animation:fa-spin 1s infinite steps(8)
}
@-webkit-keyframes fa-spin {
 0% {
  -webkit-transform:rotate(0);
  transform:rotate(0)
 }
 100% {
  -webkit-transform:rotate(359deg);
  transform:rotate(359deg)
 }
}
@keyframes fa-spin {
 0% {
  -webkit-transform:rotate(0);
  transform:rotate(0)
 }
 100% {
  -webkit-transform:rotate(359deg);
  transform:rotate(359deg)
 }
}
.sbi-screenreader {
 text-indent:-9999px!important;
 display:block!important;
 width:0!important;
 height:0!important;
 line-height:0!important
}
#sb_instagram .sb_instagram_header {
 float:left;
 clear:both;
 margin:0 0 15px 0;
 padding:0;
 line-height:1.2;
 width:100%
}
#sb_instagram .sb_instagram_header a {
 float:left;
 display:block;
 text-decoration:none;
 transition:color .5s ease
}
@media all and (min-width:480px) {
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_img {
  width:80px;
  height:80px;
  border-radius:40px
 }
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_img img {
  width:80px;
  height:80px;
  border-radius:40px
 }
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_text h3 {
  font-size:20px
 }
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_text .sbi_bio,
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_text .sbi_bio_info {
  font-size:14px
 }
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_text .sbi_bio,
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_text .sbi_bio_info,
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_text h3 {
  margin-left:95px!important;
  line-height:1.4
 }
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_text h3 {
  margin-right:-85px!important
 }
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_text .sbi_bio_info {
  margin-top:4px!important
 }
 #sb_instagram .sb_instagram_header.sbi_medium .sbi_header_text.sbi_no_bio h3 {
  padding-top:20px!important
 }
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_img {
  width:120px;
  height:120px;
  border-radius:60px
 }
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_img img {
  width:120px;
  height:120px;
  border-radius:60px
 }
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_text h3 {
  font-size:28px
 }
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_text .sbi_bio,
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_text .sbi_bio_info {
  font-size:16px
 }
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_text .sbi_bio,
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_text .sbi_bio_info,
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_text h3 {
  margin-left:140px!important;
  line-height:1.5
 }
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_text h3 {
  margin-right:-120px!important
 }
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_text .sbi_bio_info {
  margin-top:12px!important
 }
 #sb_instagram .sb_instagram_header.sbi_large .sbi_header_text.sbi_no_bio h3 {
  padding-top:32px!important
 }
}
#sb_instagram .sb_instagram_header .sbi_header_img {
    float:left;
    position:relative;
    width:50px;
    margin:0 0 0 -100%!important;
    overflow:hidden;
    -moz-border-radius:40px;
    -webkit-border-radius:40px;
    border-radius:40px
}
#sb_instagram .sb_instagram_header .sbi_header_img img {
    float:left;
    margin:0!important;
    padding:0!important;
    border:none!important;
    -moz-border-radius:40px;
    -webkit-border-radius:40px;
    border-radius:40px
}
#sb_instagram .sb_instagram_header .sbi_header_img_hover {
    opacity:0;
    position:absolute;
    width:100%;
    top:0;
    bottom:0;
    left:0;
    text-align:center;
    color:#fff;
    background:rgba(0,0,0,.75)
}
#sb_instagram .sb_instagram_header .sbi_header_img_hover .sbi_new_logo {
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-12px;
    margin-left:-12px;
    width:24px;
    height:24px;
    font-size:24px
}
#sb_instagram .sb_instagram_header .sbi_header_img_hover {
    z-index:2;
    transition:opacity .4s ease-in-out
}
#sb_instagram .sb_instagram_header .sbi_fade_in {
    opacity:1;
    transition:opacity .2s ease-in-out
}
#sb_instagram .sb_instagram_header .sbi_header_img_hover {
    position:absolute;
    width:100%;
    top:0;
    bottom:0;
    left:0;
    text-align:center;
    color:#fff;
    background:rgba(0,0,0,.75);
    -moz-opacity:0;
    -khtml-opacity:0;
    opacity:0;
    border-radius:40px;
    transition:opacity .2s
}
#sb_instagram .sb_instagram_header a:focus .sbi_header_img_hover,
#sb_instagram .sb_instagram_header a:hover .sbi_header_img_hover {
 opacity:1
}
#sb_instagram .sb_instagram_header .sbi_header_text {
    float:left;
    width:100%;
    padding-top:5px
}
#sb_instagram .sb_instagram_header a {
 text-decoration:none
}
#sb_instagram .sb_instagram_header .sbi_header_text .sbi_bio,
#sb_instagram .sb_instagram_header .sbi_header_text h3 {
    float:left;
    clear:both;
    width:auto;
    margin:0 0 0 60px!important;
    padding:0!important
}
#sb_instagram .sb_instagram_header h3 {
    font-size:16px;
    line-height:1.3
}
#sb_instagram .sb_instagram_header p {
    font-size:13px;
    line-height:1.3;
    margin:0;
    padding:0
}
#sb_instagram p:empty {
 display:none
}
#sb_instagram .sb_instagram_header .sbi_header_text img.emoji {
 margin-right:3px!important
}
#sb_instagram .sb_instagram_header .sbi_header_text.sbi_no_bio h3 {
 padding-top:9px!important
}
#sb_instagram .sb_instagram_header .sbi_header_text.sbi_no_bio .sbi_bio_info {
 clear:both
}
#sb_instagram #sbi_load {
 float:left;
 clear:both;
 width:100%;
 text-align:center
}
#sb_instagram #sbi_load .fa-spinner {
 display:none;
 position:absolute;
 top:50%;
 left:50%;
 margin:-8px 0 0 -7px;
 font-size:15px
}
#sb_instagram #sbi_load {
 opacity:1;
 transition:all .5s ease-in
}
#sb_instagram .sbi_load_btn .sbi_btn_text,
#sb_instagram .sbi_load_btn .sbi_loader {
 opacity:1;
 transition:all .1s ease-in
}
#sb_instagram .sbi_hidden {
 opacity:0!important
}
#sb_instagram #sbi_load .sbi_load_btn,
#sb_instagram .sbi_follow_btn a {
    display:-moz-inline-stack;
    display:inline-block;
    vertical-align:top;
    zoom:1;
    padding:7px 14px;
    margin:5px auto 0 auto;
    background:#333;
    color:#eee;
    border:none;
    color:#fff;
    text-decoration:none;
    font-size:13px;
    line-height:1.5;
    -moz-border-radius:4px;
    -webkit-border-radius:4px;
    border-radius:4px;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box
}
#sb_instagram #sbi_load .sbi_load_btn {
 position:relative
}
#sb_instagram .sbi_follow_btn {
 display:-moz-inline-stack;
 display:inline-block;
 vertical-align:top;
 zoom:1;
 text-align:center
}
#sb_instagram .sbi_follow_btn.sbi_top {
 display:block;
 margin-bottom:5px
}
#sb_instagram .sbi_follow_btn a {
 background:#408bd1;
 color:#fff
}
#sb_instagram #sbi_load .sbi_load_btn,
#sb_instagram .sbi_follow_btn a {
 transition:all .1s ease-in
}
#sb_instagram #sbi_load .sbi_load_btn:hover {
 outline:0;
 box-shadow:inset 0 0 20px 20px rgba(255,255,255,.25)
}
#sb_instagram .sbi_follow_btn a:focus,
#sb_instagram .sbi_follow_btn a:hover {
 outline:0;
 box-shadow:inset 0 0 10px 20px #359dff
}
#sb_instagram #sbi_load .sbi_load_btn.sbi_custom:hover,
#sb_instagram .sbi_follow_btn.sbi_custom a:focus,
#sb_instagram .sbi_follow_btn.sbi_custom a:hover {
 box-shadow:inset 0 0 20px 20px rgba(255,255,255,.15)
}
#sb_instagram #sbi_load .sbi_load_btn:active,
#sb_instagram .sbi_follow_btn a:active {
 box-shadow:inset 0 0 10px 20px rgba(0,0,0,.3)
}
#sb_instagram .sbi_follow_btn .fa,
#sb_instagram .sbi_follow_btn svg {
 margin-bottom:-1px;
 margin-right:7px;
 font-size:15px
}
#sb_instagram .sbi_follow_btn svg {
 vertical-align:-.125em
}
#sb_instagram #sbi_load .sbi_follow_btn {
 margin-left:5px
}
#sb_instagram .sb_instagram_error {
 width:100%;
 text-align:center;
 line-height:1.4
}
#sbi_mod_error {
 display:none;
 border:1px solid #ddd;
 background:#eee;
 color:#333;
 margin:10px 0 0;
 padding:10px 15px;
 font-size:13px;
 text-align:center;
 clear:both;
 -moz-border-radius:4px;
 -webkit-border-radius:4px;
 border-radius:4px
}
#sbi_mod_error p {
 padding:5px 0!important;
 margin:0!important;
 line-height:1.3!important
}
#sbi_mod_error ol,
#sbi_mod_error ul {
 padding:5px 0 5px 20px!important;
 margin:0!important
}
#sbi_mod_error li {
 padding:1px 0!important;
 margin:0!important
}
#sbi_mod_error span {
 font-size:12px
}
#sb_instagram.sbi_medium .sbi_photo_wrap .svg-inline--fa.fa-play,
#sb_instagram.sbi_medium .sbi_playbtn {
 margin-top:-12px;
 margin-left:-9px;
 font-size:23px
}
#sb_instagram.sbi_medium .sbi_type_carousel .sbi_photo_wrap .fa-clone {
 right:8px;
 top:8px;
 font-size:18px
}
#sb_instagram.sbi_small .sbi_photo_wrap .svg-inline--fa.fa-play,
#sb_instagram.sbi_small .sbi_playbtn {
 margin-top:-9px;
 margin-left:-7px;
 font-size:18px
}
#sb_instagram.sbi_small .sbi_type_carousel .sbi_photo_wrap .fa-clone {
 right:5px;
 top:5px;
 font-size:12px
}
@media all and (max-width:640px) {
 #sb_instagram.sbi_col_3 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_4 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_5 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_6 #sbi_images .sbi_item {
  width:50%
 }
 #sb_instagram.sbi_col_10 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_7 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_8 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_9 #sbi_images .sbi_item {
  width:25%
 }
 #sb_instagram.sbi_width_resp {
  width:100%!important
 }
}
@media all and (max-width:480px) {
 #sb_instagram.sbi_col_10 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_3 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_4 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_5 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_6 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_7 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_8 #sbi_images .sbi_item,
 #sb_instagram.sbi_col_9 #sbi_images .sbi_item {
  width:100%
 }
}
#sb_instagram.sbi_no_js #sbi_images .sbi_item .sbi_photo_wrap {
 box-sizing:border-box;
 position:relative;
 overflow:hidden
}
#sb_instagram.sbi_no_js #sbi_images .sbi_item .sbi_photo_wrap:before {
 content:"";
 display:block;
 padding-top:100%;
 z-index:-300
}
#sb_instagram.sbi_no_js #sbi_images .sbi_item .sbi_photo {
 position:absolute;
 top:0;
 left:0;
 bottom:0;
 right:0
}
#sb_instagram.sbi_no_js #sbi_images .sbi_item.sbi_transition {
 opacity:1;
 max-height:640px
}
#sb_instagram.sbi_no_js .sbi_load_btn,
#sb_instagram.sbi_no_js .sbi_photo img {
    display:none
}
#sb_instagram #sbi_images .sbi_js_load_disabled .sbi_imgLiquid_ready.sbi_photo {
    padding-bottom:0!important
}
@media screen and (min-width:1024px) {
    #sb_instagram .sbi_photo {
        height: 313px;
    }
}
</style>