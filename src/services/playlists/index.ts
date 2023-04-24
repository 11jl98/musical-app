import { http } from "../../utils/Oauth";

async function getPlaylistsUser(){
    const { data } = await http.get(`/browse/featured-playlists`)
    return data
}

async function playlist(playlistId : string){
    const { data } = await http.get(`/playlists/${playlistId}`)
    return data
}

export { getPlaylistsUser, playlist }