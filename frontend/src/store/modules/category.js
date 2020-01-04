import axios from 'axios'
const url = process.env.VUE_APP_BACKEND_URL+'/';
//definera state variabler 
const state = {
    locations: [],
    areas: [],
    types: [],
    is_contact: false
}

// getters
const getters = {

}

/**
 * 
 *  mutations hanterar states.
 *  Dem kallas via actions. All data kommer att bindas via parametrar.
*/
const mutations = {
    getLocations(state, data) {// Mutationen kallas från action via commit och binder state-location via paratmetern 
        data.forEach(item=>{
            if (item.location_id=='') {
                item._id = '';
            }
        });
        state.locations = data; //binder state-locations
    },
    getAreas(state, data) { // binder state-area med parameter
        data.forEach(item=>{
            if (item.area_id=='') {
                item._id = '';
            }
        });
        state.areas = data;
    },
    getTypes(state, data) { //binder state-types via parameter
        data.forEach(item=>{
            if (item.type_id=='') {
                item._id = '';
            }
        });
        state.types = data;
    },
    saveContact(state) { //binder state-is_contact via  parameter
        state.is_contact = true;
    }
};
// actions
/**
 *Actions hanterar begäran från backend
 */
const actions = {
    getLocations({commit}) {///Skickar request till backend och får svar, kallar på mutation via 'commit' 
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'categlocation').then((response) => {
            commit('getLocations', response.data); // Kallar på getLocations mutation som innehåller data 
        });
    },
    getAreas({commit}) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'categarea').then((response) => {
            commit('getAreas', response.data);  //Kallar på getAreas mutation som innehåller data 
        });
    },
    getTypes({commit}) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'categtype').then((response) => {
            commit('getTypes', response.data); //Kallar på getTypes mutation some innehåller data  
        });
    },    

    sendEmailToAdmin({commit}, params) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.post(url+'sendEmail1', params).then((response) => {
            commit('saveContact'); //Kallar på sendEmail mutation som innehåller data
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