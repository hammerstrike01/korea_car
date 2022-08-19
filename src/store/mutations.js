export default {
    SET_AUTH (state, {token, expiresIn, refresh, refreshexpiresIn, userid, userRole}) {
        state.token = token;
        state.expiresIn = expiresIn;
        state.refresh = refresh;
        state.refreshexpiresIn = refreshexpiresIn;
        state.userid = userid;
        state.userRole = userRole;
    },
    SET_PATH (state, {path1, path2, title, curpath}) {
        state.menu_lv1 = path1;
        state.menu_lv2 = path2;
        state.curpath = curpath;
        state.pagetitle = title;
    },
  }
  