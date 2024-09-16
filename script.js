const store = new Vuex.Store({
    state: {
        // initial state
        servers: [
            { name: 'Lorem', status: true, adr: '192.168.0.24'},
            { name: 'Ipsum', status: true, adr: '192.168.0.25', type: 'database'},
            { name: 'Dolor', status: true, adr: '192.168.0.26', type: 'database'},
            { name: 'Adipiscing', status: true, adr: '192.168.0.37'},
            { name: 'Eiusmod', status: true, adr: '192.168.0.17'},
            { name: 'Cupidatat', status: true, adr: '192.168.0.23'},
            { name: 'Reprehenderit', status: true, adr: '192.168.0.47'},
            { name: 'Typhoon', status: true, adr: '192.168.0.127'}
        ] 
    },
    mutations: {
        UPDATE_SERVER_STATUS(state, payload) {
            state.servers[payload].status ^= true;
        }
    },
    actions: {
        serverStatus ({commit}, server) {
            commit('UPDATE_SERVER_STATUS', server)
        }
    }
})

Vue.component('dashboard-clock', {
    props: {
        digital: {
