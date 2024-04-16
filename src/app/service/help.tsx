import Constants from "@/models/constant/constant"

 export const checkToken = () => {
    const token =localStorage.getItem(Constants.TOKEN_KEY)
    if (!token) {
        return false
    }
    return true
}


export const getToken = () => localStorage.getItem(Constants.TOKEN_KEY)



