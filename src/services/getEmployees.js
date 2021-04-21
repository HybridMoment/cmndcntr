import axios from 'axios'

export default async function getEmployees (){
    const result = await axios("https://api.randomuser.me/");
    const data = await result.json()
    return data
}

//https://api.randomuser.me/

//http://localhost:3001/api/getemployees