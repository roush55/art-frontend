import axios from 'axios'
import apiUrl from '../../../apiConfig'
//to show all items
export const index = (user) => {
return axios({url:apiUrl + "/items",
method: "get",
headers:{"Authorization":`Bearer ${user.token}`}
})
}
//create  new item
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

export const update = (user,updateItem,itemId) => {
    return axios({
        method:'patch',
        url:apiUrl + `/items/${itemId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            item:updateItem
        }
    })
}
export const show=(user,itemId)=>{
return axios({
    method:"get",
    url:apiUrl+`/items/${itemId}`,
    header:{
        "Authorization":`Bearer ${user.token}`
    }

})}
 
//to delete item 
export const destroy = (user,itemId) => {
    return axios({
        method:'delete',
        url:apiUrl + `/items/${itemId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
        
    })
}


//to update item