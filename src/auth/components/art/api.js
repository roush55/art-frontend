import axios from 'axios'
import apiUrl from '../../../apiConfig'

export const index = (user) => {
return axios({url:apiUrl + "/items",
method: "get",
headers:{"Authorization":`Bearer ${user.token}`}
})
}

export const create = (user,newItem) => {
    return axios({
        method:'post',
        url:apiUrl + '/items',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            item:newItem
        }
    })
}