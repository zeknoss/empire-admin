export const state = () => {
    return {
        pageTitle: process.env.defaultTitle,
        pageDescription: process.env.defaultDescription,
        sidebarVisible: true,
        userBlockVisible: false
    }
};

export const mutations = {
    setPageTitle:(state,newTitle) => state.pageTitle = newTitle,
    setPageDescription: (state,newDescription) => state.pageDescription = newDescription,
    toggleSidebar: (state) => state.sidebarVisible=!state.sidebarVisible,
    toggleUserBlock: (state) => state.userBlockVisible=!state.userBlockVisible
};

export const getters = {
    getPageTitle: state => {
        return state.pageTitle
    },
    getPageDescription: state => {
        return state.pageDescription
    }
};

export const actions = {
    updateHead({commit}, headData){
        commit('setPageTitle', headData.title);
        commit('setPageDescription', headData.description);
    }
};

export const modules = {

};
