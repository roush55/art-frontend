import axios from 'axios'
import apiUrl from '../../../apiConfig'
export const index = () => {
    return axios({
        url:apiUrl + '/all',
        method: 'get'
    
})
}