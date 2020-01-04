import Vue from "vue";
import Vuex from "vuex";
import 'es6-promise/auto'
import category from './modules/category'
import product from './modules/product'

// I mitten av varje Vuex-applikation ligger store. "store" är i princip en behållare som håller "applikationstillståndet" 


Vue.use(Vuex);

//skapar
export const store = new Vuex.Store({
    modules: {
        category,
        product,
       
    },
    strict: false
}); 