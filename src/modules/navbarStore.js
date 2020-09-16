export default {
  namespaced: true,
  state: {
    isUserLog: false,
    userName: "username",
    isFollowUser: false,
    userFollow: "No Seguido",
    btnSearchHeader: false,
    btnBackHeader: true,
    contLogoHead: true,
    userNameContent: false,
    isFollowContent: false,
  },
    mutations: {
        showFilter(state) {
            state.contLogoHead = !state.contLogoHead;
            state.btnBackHeader = !state.btnBackHeader;
            state.btnSearchHeader = !state.btnSearchHeader;
            
      },
      clearInput() {
        document.getElementById("inputSearchNews").value = ''
    }
  }
};
