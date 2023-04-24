import { http } from "../../utils/Oauth";

async function favorites(url: string){
    const { data } = await http.get(url)
    console.log(JSON.stringify(data))
    return data
}

export { favorites }