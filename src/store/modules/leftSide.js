export default {
    state: {
        items:{
            search:false,
            topMenuItemsEmpty:[],
            topMenuItems:[{name:"all"},{name:"users"},{name:"messages"},{name:"groups"},{name:"channels"},{name:"bots"}],
            topMenuSearchItems:[{name:"chats"},{name:"medias"},{name:"links"},{name:"files"},{name:"musics"},{name:"voices"}],
            StorageItems:{
                animations:true
            },
            scollMenuClickIndex:0,
        }
    },
    getters: {
        getTopMenuItems(state){
            return state.items.topMenuItemsEmpty
        },
        getTopMenuSearchItems(state){
            return state.items.topMenuSearchItems
        },
        getScollMenuClickIndex(state){
            return state.items.scollMenuClickIndex
        }
    },  
    mutations: {
        initialLeftSide(state){
            state.items.topMenuItemsEmpty = state.items.topMenuItems
            let Storage = localStorage;
            if(Storage.getItem("leftSide")){
                state.items.StorageItems = JSON.parse(Storage.getItem("leftSide"))
            }
            else{
                Storage.setItem("leftSide", JSON.stringify(state.items.StorageItems))
            }
        },
        searchChanger(state, search){
            state.items.search = search
        },
        animationControl(state, animation){
            state.items.StorageItems.animations = animation
            localStorage.setItem("leftSide", JSON.stringify(state.items.StorageItems))
        },
        setScollMenuClickIndex(state, index){
            state.items.scollMenuClickIndex = index
        }
    },
    actions: {
    },
}