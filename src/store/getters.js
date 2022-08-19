export default {
    authToken: state => {
        return state.token;
    },
    menulv1: state => {
        return state.menu_lv1;
    },
    menulv2: state => {
        return state.menu_lv2;
    },
    curpath: state => {
        return state.curpath;
    },
    title: state => {
        return state.pagetitle;
    },
    authuser: state => {
        return state.userid;
    }
}
  