<template>
    <div class="wrapper ecommerce-page" v-if="post">
        <el-carousel height="100vh" v-if="post.images && post.images.length>0">
            <el-carousel-item class="image slide-img" v-for="(img, i) in post.images" :key="i">
                <div class="page-header header-filter">
                    <div class="page-header-image" v-bind:style="{ 'background-image': 'url(' + img + ')' }"></div>
                    <div class="content-center text-center">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto">
                                <h2 class="title">{{post.title}}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="main">
            <div class="section">
                <div class="container">
                    <h1 class="title text-center">{{post.title}}</h1>
                    <h3 class="price text-center">€{{post.price | formatNumber}}</h3>
                    <div class="property-main-features">
			            <div class="row justify-content-center align-items-center">
                            <div class="col-auto d-flex flex-row align-items-center">
                                <span class="alert alert-primary">{{post.ref_key}}</span>
                            </div>
                            <div class="col-auto d-flex flex-row align-items-center">
                                <i class="fa fa-bed mr-2"></i><b>bedroom:</b>&nbsp; <span>{{post.bedroom}}</span>
                            </div>
                            <div class="col-auto d-flex flex-row align-items-center">
                                <i class="fa fa-bath mr-2"></i><b>bathroom:</b>&nbsp; <span>{{post.bathroom}}</span>
                            </div>
                            <div class="col-auto d-flex flex-row align-items-center">
                                <i class="fa fa-home mr-2"></i><b>square:</b>&nbsp; <span>{{post.square}} m²</span>
                            </div>
                            <div class="col-auto d-flex flex-row align-items-center">
                                <b>outside:</b>&nbsp; <span>{{post.outside}} m²</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-9 mx-auto text-justify" v-html="post.description">
                        </div>
                    </div>
                </div>
            </div>
            <div class="section pt-0" style="z-index:1032">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-md-12 col-sm-12 mx-auto text-justify" v-if="post.images && post.images.length>0">
                            <p class="slide-actions">
                            </p>
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-6" v-for="(image, i) in post.images" :key="i">
                                    <a class="thumb-img" @click="index = i">
                                        <img class="image" :src="image" />
                                    </a>
                                </div>
                            </div>
                            <vue-gallery-slideshow :images="post.images" :index="index" @close="index = null"></vue-gallery-slideshow>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section pt-0" data-background-color="gray">
                <h3 class="text-center text-uppercase pt-5">Additional Features</h3>
                <div class="container">
                    <div class="row pf-list" v-html="post.description_2" itemscope>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { mapState } from "vuex";
  import VueGallerySlideshow from 'vue-gallery-slideshow';
  import { Button } from '@/components';
  import { Carousel, CarouselItem } from 'element-ui';
  var numeral = require("numeral");
  export default {
    name: 'item',
    bodyClass: 'ItemPage',
    props: ['id'],
    components: { // inkluderar de externa komponenterna för reuse.
      VueGallerySlideshow,
      [Button.name]: Button,
      [Carousel.name]: Carousel,
      [CarouselItem.name]: CarouselItem
    },
    data () {
        return {// definiera variabler som kan användas i templates
            images: [
            ],
            index: null
        }
    },
    created() { // när appen skapas, anropas metoden (this.getPost) automatiskt.
        this.getPost(this.$route.params.id);
    },
    computed: {
        ...mapState({// Efter modifierat state i store så kan datan skickas direkt till en komponent.
            post: state => state.product.post
        })
    },
    methods: {
        getPost(pid) { // denna metod kallar handlingen för store.

            this.$store.dispatch('product/getPost', {type: 'api', id: pid});
        },
    },
    filters: {
        formatNumber(value) {
            return numeral(value).format("0,0"); 
        }
    }
  }
</script>
<style>
.thumb-img {
    display: block;
    float: left;
    margin-top: 20px;
    height: 190px;
    background-color: #fff;
    -webkit-transition: all 1s ease 0s;
    transition: all 1s ease 0s;
    cursor: pointer;
    overflow: hidden;
}
@media (max-width:768px) {
    .thumb-img {
        height:110px;
    }
}
@media (max-width:640px) {
    .thumb-img {
        height:240px;
    }
}
.thumb-img img {
    -webkit-transition: -webkit-transform .5s ease;
    transition: -webkit-transform .5s ease;
    -o-transition: -o-transform .5s ease;
    transition: transform .5s ease;
    transition: transform .5s ease, -webkit-transform .5s ease, -o-transform .5s ease;
}
.thumb-img:hover img {
    -webkit-transform: scale(1.1) translateZ(0);
    transform: scale(1.1) translateZ(0);
}
.vgs__container {
    bottom: 0 !important;
    height: 100% !important;
    max-width: 100% !important;
}
.vgs .vgs__container {
    background:none;
    top:0;
    margin-top:0;
}
.vgs .vgs__next, .vgs .vgs__prev {
    margin-top: -36px;
    font-size: 72px;
}
.vgs .vgs__prev {
    left:15px;
}
.vgs .vgs__next {
    right:15px;
}
.vgs .vgs__close {
    right: 10px;
    font-size: 48px;
    font-weight:700;
}
.vgs .vgs__container__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.vgs .vgs__gallery__container__img {
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #fff;
    opacity: 1;
}
.vgs .vgs__gallery__container__img--active {
    border: 1px solid #F96332;
}
.property-main-features {
    font-size:18px;
}
.pf-list ul {
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    -webkit-flex-flow:row wrap;
    -ms-flex-flow:row wrap;
    flex-flow:row wrap;
    list-style:none;
    padding:0;
    margin:0
}
.pf-list li {
    width:calc(100% - 20px);
    padding:0;
    margin:5px 10px;
}
.pf-list li:before {
    display:inline-block;
    content:"\ea52";
    font: normal normal normal 14px/1 'Nucleo Outline';
    margin-right:5px
}
@media (min-width:768px) {
    .pf-list li {
        width:calc(50% - 20px)
    }
}
@media (min-width:992px) {
    .pf-list li {
        width:calc(25% - 20px)
    }
}
</style>