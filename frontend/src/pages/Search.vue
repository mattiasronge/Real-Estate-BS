<template>
    <div class="wrapper">
        <div class="page-header page-header-small">
            <parallax class="page-header-image"
                 style="background-image: url('video/video.jpg')">
            </parallax>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h1 class="title">Search Homes</h1>
                        <h4>Search homes filtering by</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="section section-content py-4">
                <div class="container pb-4">
                    <div class="row">
                        <div class="col-md-3">
                            <el-select class="select-primary" placeholder="All locations" v-model="filters.location" @change="change_location()">
                                <el-option v-for="option in locations"
                                            class="select-info"
                                            :key="option._id"
                                            :value="option._id"
                                            :label="option.title">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="col-md-3">
                            <el-select class="select-primary" placeholder="All Areas" v-model="filters.area" @change="change_area()">
                                <el-option v-for="option in areas"
                                            class="select-info"
                                            :key="option._id"
                                            :value="option._id"
                                            :label="option.title">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="col-md-3">
                            <el-select class="select-primary" placeholder="All Types" v-model="filters.type" @change="change_type()">
                                <el-option v-for="option in types"
                                            class="select-info" :class="{'group-option': option.type_id=='1-1'||option.type_id=='2-1'||option.type_id=='3-1'}"
                                            :key="option._id"
                                            :value="option._id"
                                            :label="option.title">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="col-md-3">
                            <el-select class="select-primary" placeholder="Any Bedrooms" v-model="filters.bedrooms" @change="search()">
                                <el-option v-for="option in bedrooms"
                                            class="select-info"
                                            :key="option.value"
                                            :value="option.value"
                                            :label="option.label">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 pt-2">
                            <fg-input addon-left-icon="now-ui-icons users_single-02"
                                  placeholder="Enter Ref" v-model="filters.ref">
                            </fg-input>
                        </div>
                        <div class="col-md-1 text-right">
                            <h6 class="mb-0 mt-3 text-primary">Price :</h6>
                        </div>
                        <div class="col-md-7 pt-3">
                            <slider id="slider-refine" type="primary"
                                    v-model="filters.priceRange"
                                    :options={step:10000}
                                    :range="{min: 100000, max: 100000000}"
                                    :connect="true">
                            </slider>
                            <div class="clearfix"></div>
                            <span class="price-left pull-left">€{{filters.priceRange[0] | formatNumber}}</span>
                            <span class="price-right pull-right">€{{filters.priceRange[1] | formatNumber}}</span>
                        </div>
                        <div class="col-md-1">
                            <button type="button" class="btn btn-icon btn-round btn-primary" @click="search()">
                                <i class="fa fa-search"></i>
                            </button>
                            <!-- <button class="btn btn-default btn-icon btn-neutral pull-right"
                                    rel="tooltip" title="Reset Filter">
                                <i class="arrows-1_refresh-69 now-ui-icons"></i>
                            </button> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="section pt-2">
                <div class="container-fluid pl-5 pr-5" v-if="posts && posts.length">
                    <div class="container">
                        <h3 class="section-title" v-if="totalCount>0">{{totalCount}} Homes are found</h3>
                        <div class="row justify-content-center" v-if="totalPages>0">
                            <n-pagination :page-count="totalPages" class="justify-content-center" v-model="currentPage" @input="searchPost()"></n-pagination>
                        </div>
                    </div>
                    <div class="row pt-4">
                        <div class="col-md-6" v-for="post in posts" :key="post.id">
                            <div class="row-fluid">
                                <lingallery :width="960" :height="420" :mobileHeight="240" :showThumbnails="false" :items=post.images />
                            </div>
                            <div class="row-fluid">
                                <div class="details">
                                    <h5 class="room-location">{{post.location.title}}</h5>
                                    <h3 class="title" v-if="post.model_type=='api'">
                                        <router-link v-bind:to="'/item/' + post._id">{{post.title}}</router-link>
                                    </h3>
                                    <h3 class="title" v-else>
                                        <router-link v-bind:to="'/manual/' + post._id">{{post.title}}</router-link>
                                    </h3>
                                    <p class="room-stats mb-4">
                                        <span class="mr-4 pl-0">€{{post.price | formatNumber}} </span>
                                        <span class="mr-4"><i class="fa fa-bed"></i> : {{post.bedroom}} </span>
                                        <span class="mr-4"><i class="fa fa-bath"></i> : {{post.bathroom}} </span>
                                        <span class="mr-4"><i class="fa fa-home"></i> : {{post.square}} m²</span>
                                        <span><i class="fa fa-info"></i> : {{post.outside}} m²</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row justify-content-center" v-if="totalPages>0">
                            <n-pagination :page-count="totalPages" class="justify-content-center" v-model="currentPage" @input="searchPost()"></n-pagination>
                        </div>
                    </div>
                </div>
                <div class="container" v-else>
                    <h3>There is no house.</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapState } from "vuex";
  import {Button, FormGroupInput, Checkbox, Slider, Pagination } from '@/components';
  import Lingallery from 'lingallery';
  import { Select, Option, Tooltip } from 'element-ui'
  var numeral = require("numeral");

  export default {
    name: 'home',
    bodyClass: 'index-page',
    components: { // inkluderar externa komponenter för återanvändning.
      Lingallery,
      [Select.name]: Select,
      [Option.name]: Option,
      Slider,
      [Pagination.name]: Pagination,
      [Button.name]: Button,
      [Checkbox.name]: Checkbox,
      [FormGroupInput.name]: FormGroupInput,
      [Tooltip.name]: Tooltip,
    },
    filters: {
        formatNumber(value) {
            return numeral(value).format("0,0"); 
        }
    },
    data() {
      return {// definiera variabler som kan användas i templates
        currentPage:1,  
        filters: {
            location:'',
            area:'',
            type:'',
            bedrooms:'',
            ref:'',
            priceRange: [10000, 90000000],
        },
        bedrooms: [{value: "", label: "Any Bedrooms"},
            {value: "1", label: "1 Bedroom"},
            {value: "2", label: "2 Bedrooms"},
            {value: "3", label: "3 Bedrooms"},
            {value: "4", label: "4 Bedrooms"},
            {value: "5", label: "5 Bedrooms"},
            {value: "6", label: "6 Bedrooms"},
        ],
      }
    },
    created() { // när instansen skapas, måste produkter, platser, områden och typer initialiseras.
        this.getPosts(1);
        this.getLocations();
        this.getAreas();
        this.getTypes();
    },
    computed: {
        ...mapState({// Efter modifierat state i store så kan datan skickas direkt till en komponent.
            location_title() {
                if (this.filters.location=='') return '';
                return this.locations.filter(c => c._id==this.filters.location);
            },
            area_title() {
                if (this.filters.area=='') return '';
                return this.areas.filter(c => c._id==this.filters.area);
            },
            totalCount: state => state.product.totalCount,
            totalPages: state => state.product.totalPages,
            posts: state => state.product.posts,
            locations: state => state.category.locations,
            areas: state => state.category.areas,
            types: state => state.category.types
        })
    },
    methods: { // Metoden kallar på action i store via dispatch kommando 
        change_location() {
            this.search();
        },
        change_area() {
            this.search();
        },
        change_type() {
            this.search();
        },
        getLocations() {
            this.$store.dispatch('category/getLocations');
        },
        getAreas() {
            this.$store.dispatch('category/getAreas');
        },
        getTypes() {
            this.$store.dispatch('category/getTypes');
        },
        getPosts(p) {
            this.$store.dispatch('product/getPosts', {page: p});
        },
        searchPost() {
            this.$store.dispatch('product/searchPost', 
            {
                page: this.currentPage,
                location : this.filters.location,
                area : this.filters.area,
                type : this.filters.type,
                bedrooms : this.filters.bedrooms,
                ref : this.filters.ref,
                price_from: this.filters.priceRange[0],
                price_to: this.filters.priceRange[1]
            });
        },
        search() {
            this.$store.dispatch('product/searchPost', 
            {
                page: 1,
                location : this.filters.location,
                area : this.filters.area,
                type : this.filters.type,
                bedrooms : this.filters.bedrooms,
                ref : this.filters.ref,
                price_from: this.filters.priceRange[0],
                price_to: this.filters.priceRange[1]
            });
        }
    }
}
</script>
<style>
.category span {
    padding: 2px 6px;
    border: 1px solid #ddd;
    font-weight:500;
}
.el-select .el-input .el-input__inner {
    font-size:11px;
}
.price-left, .price-right {
    padding-top:10px;
    color: #F96332;
}
.section .card-plain {
    padding: 12px;
    background:#fff;
}
.group-option {
    font-weight: 700;
    border-top: 1px solid #ccc;
    font-size: 16px;
    background:#f3f3f3;
}
</style>