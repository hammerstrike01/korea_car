import {adminsvc} from '../lib/api'
import {reqPost} from '../lib/request'
import {cookielbl} from '../lib/consts'
import router from '../router'
export default {
    doSetPath({ commit }, payload){
        commit('SET_PATH', {...payload, curpath:router.currentRoute.path.substring(1)});
    },
    dologin({ commit }, payload) {
        commit('SET_AUTH', payload);
    },
    dologout({ commit, state }, callback) {
        reqPost(adminsvc.logout, state.token, {}, (data)=>{
            console.log(" rescode : ", data.code);
            commit('SET_AUTH', {token:null, expiresIn:0, refresh:null, refreshexpiresIn:0, userid:null, userRole:null});
            window.localStorage.setItem(cookielbl.authinf, null);
            callback(true);
        });
    },
}
