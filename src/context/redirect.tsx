import { createContext } from "react"
import redirectHooks from "./hooks/redirectHooks"
import { redirectContextType } from "../@types/redirectContext"

const DEFAULT_VALUE = {
    promptAsync: () => {},
}

const ContextOauth = createContext<redirectContextType >(DEFAULT_VALUE)

function OauthProvider({ children }: any){
    const { promptAsync } = redirectHooks()
    return(
        <ContextOauth.Provider value={{ promptAsync }}>
            {children}
        </ContextOauth.Provider>
    )
}
export {ContextOauth, OauthProvider}