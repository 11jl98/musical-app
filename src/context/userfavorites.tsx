import { createContext } from "react"
import { userFavoritesType } from "../@types/redirectContext"
import userFavorites from './hooks/userFavoritsHooks'

const DEFAULT_VALUE = {
    active: [],
    getFavorites: ()=> {},
    data: [],
    isActive:""
}

const ContextFvorites = createContext< userFavoritesType >(DEFAULT_VALUE)

function FavoritesProvider({ children }: any){
    const {active, getFavorites, data, isActive } = userFavorites()
    return(
        <ContextFvorites.Provider value={{ active, getFavorites, data, isActive }}>
            {children}
        </ContextFvorites.Provider>
    )
}

export {ContextFvorites, FavoritesProvider}