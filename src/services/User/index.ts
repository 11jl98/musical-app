import { http } from "../../utils/Oauth";

async function getUser(){
    const { data } = await http.get('/me')
    return data
}

export { getUser }