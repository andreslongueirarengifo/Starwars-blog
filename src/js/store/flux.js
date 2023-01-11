

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            fav:[]
        },
        actions: {
            /*
            loadData : ()=>{
                get
            }*/
            addFavorite:(newFav)=>{
                const store = getStore()
                setStore({fav:[...new Set([...store.fav, newFav])]})
            }
        }
    }
}

export default getState;