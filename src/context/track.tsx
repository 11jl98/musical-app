import { createContext } from "react"
import { TrackType } from "../@types/tracks"
import Track from './hooks/trackHooks'

const DEFAULT_VALUE = {
    isOpen: false,
    setIsOpen: () => {},
    sheetRef: null
}

const ContextTrack = createContext<TrackType>(DEFAULT_VALUE)

function TrackProvider({ children }: any){
    const {  isOpen, setIsOpen, sheetRef } = Track()
    return(
        <ContextTrack.Provider value={{ isOpen, setIsOpen, sheetRef }}>
            {children}
        </ContextTrack.Provider>
    )
}

export {ContextTrack, TrackProvider}