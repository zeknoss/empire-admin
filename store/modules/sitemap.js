const state = () => ({
    nodeTree: []
});

const mutations = {
    changeTree(state,nodeData){
        state.nodeTree = nodeData;
    }
};

const getters = {
    getTree(state,getters,rootState){
        return state.nodeTree
    }
};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}