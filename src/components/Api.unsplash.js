import axios from "axios";
const PhototApi=(id)=>{
    let getdata=async(id)=>{
        const config={
            url:`${'https://api.unsplash.com/photos/'}?client_id=${'roBbbjSlZZ5A6UZ7xHFPNQvlAkehEhSY-dYSl2VM6mA'}&per_page=100`,
            method: 'GET',
            headers: {
                "X-Ratelimit-Limit": 1000,
                "X-Ratelimit-Remaining": 999
            }
        }
    const data= await axios(config)
    return data.data;
    }
    return getdata(id)
}

export default PhototApi