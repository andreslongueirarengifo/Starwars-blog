

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            fav:[],
            dataCharacter:[],
            dataPlanet:[]
        },
        actions: {
            
            loadDataCharacter : (data)=>{
                const store = getStore()
                setStore({dataCharacter:store.dataCharacter.concat(data)})
            },
            loadDataPlanet : (data)=>{
                const store = getStore()
                setStore({dataPlanet:store.dataPlanet.concat(data)})
            },
            addFavorite:(newFav)=>{
                const store = getStore()
                setStore({fav:[...new Set([...store.fav, newFav])]})
            }
        }
    }
}

export default getState;