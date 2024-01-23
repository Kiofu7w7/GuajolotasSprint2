import axios from "axios"

export const GetData  = async (url)=>{
    const resp = await axios.get(url)
    return resp?.data
}

export const GetDataUsersCarts = async (url,id) => {
    const resp = await axios.get(`${url}/${id}`)
    return resp?.data
}
