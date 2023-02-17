import axios from 'axios'

const API_URL = '/api/users'

const register =async(UserData)=>{
    const response = await axios.put(API_URL, UserData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data)) 
    
    }
    return response.data
}

const authService={
    register
}
export default authService