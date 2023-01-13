

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            fav:[],
            data:[]
        },
        actions: {
            
            loadData : (data)=>{
                const store = getStore()
                setStore({data:store.data.concat(data)})
            },
            addFavorite:(newFav)=>{
                const store = getStore()
                setStore({fav:[...new Set([...store.fav, newFav])]})
            }
        }
    }
}

export default getState;