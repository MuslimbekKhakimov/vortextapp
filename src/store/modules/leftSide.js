export default {
    state: {
        items:{
            search:false,
            topMenuItemsEmpty:[],
            topMenuItems:[{name:"all"},{name:"users"},{name:"messages"},{name:"channels"},{name:"bots"},{name:"all"},{name:"users"},{name:"messages"},{name:"channels"},{name:"bots"}],
            topMenuSearchItems:[{name:"chats"},{name:"medias"},{name:"links"},{name:"files"},{name:"musics"},{name:"voices"}]
        }
    },
    getters: {
        getTopMenuItems(state){
            return state.items.topMenuItemsEmpty
        },
        getTopMenuSearchItems(state){
            return state.items.topMenuSearchItems
        }
    },  
    mutations: {
        initialLeftSide(state){
            state.items.topMenuItemsEmpty = state.items.topMenuItems
        },
        searchChanger(state, search){
            state.items.search = search
        }
    },
    actions: {
    },
}