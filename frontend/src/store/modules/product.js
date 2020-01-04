import axios from 'axios'
// använder axios package för att skicka HTTP request till backend
const url = process.env.VUE_APP_BACKEND_URL+'/';

//define state
const state = {
  totalPages: 0,
  totalCount: 0,
  currentPage: 1,
  posts: [],
  post:[]
}

// getters
const getters = {

}
// mutations
const mutations = {
    /**
     * 
     * mutationer hanterar states.
     * Kallas genom actions. All data kommer att bindas via parameter
     */
    getPosts(state, data) {
      // Denna mutation ändrar alla state som inlägg, totala sidor, totalantal och nuvarande sida och kallas på första sidan

      if (!data) { //om det inte finns någon data
        state.posts = []; // initializing state- posts
        state.totalCount = 0;// initializing state- totalCount
        state.currentPage = 1;// initializing state- currentPage
      }
      else { // Om parameter-data existerar
        let list=[];
        data.data.forEach((item) => {
          if (item['images']) {
            for (let i=0; i<item['images'].length; i++) {
              item['images'][i] =  {src: item['images'][i]}; // Skapar array med bilder
            }
          }
          list.push(item);
        });
        state.posts = list; //binder array till state-post 
        if (data.total)
        {
          state.totalCount = data.total;  // input state- totalCount
          state.totalPages = Math.ceil(data.total/10);  //input state- totalPages
        }
        state.currentPage = 1;  //set the state- currentPage
      }
    },
    getPost(state, data) { //Den här mutationen ändrar state-post. Och den kallas från individuell sida  
      if (!data) 
        state.post = null;
      else {
        let item = data;
        if (item['images']) {
          for (let i=0; i<item['images'].length; i++) {
            item['images'][i] = item['images'][i];
          }
        }
        state.post = item; // Binder datan till state-post binding the data to the state-post
      }
    },
    searchPost(state, data) {// denna mutation ändrar alla state och kallas på söksidan.
      if (!data) {
        state.posts = [];
        state.totalPages = 0;
        state.totalCount = 0;
        state.currentPage = 1;
      }
      else {
        let list=[];
        data.data.forEach((item) => {
          if (item['images']) {
            for (let i=0; i<item['images'].length; i++) {
              item['images'][i] =  {src: item['images'][i]};
            }
          }
          list.push(item);
        });
        state.posts = list;
        if (data.total)
        {
          state.totalCount = data.total;
          state.totalPages = Math.ceil(data.total/10);
        }
        state.currentPage = 1;
      }
    }
};
// actions
/**
 *Actions hanterar begäran från backend
 */
const actions = {
    getPosts({commit}, params) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'product?page='+params.page).then((response) => { //Skickar request till backend och får svar, kallar på mutation via 'commit' 
            commit('getPosts', response.data); // Kallar på mutation med datan 
        });
    },
    getPost({commit}, params) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'product'+params.type+'/'+params.id).then((response) => {
            commit('getPost', response.data);
        });
    },
    searchPost({commit}, params) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'product?page='+params.page+'&location='+params.location+'&area='+params.area+'&type='+params.type+'&bedroom='+params.bedrooms+'&ref_key='+params.ref+'&from_price='+params.price_from+'&to_price='+params.price_to).then((response) => {
            commit('searchPost', response.data);
        });
    }    
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}