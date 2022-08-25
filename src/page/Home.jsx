import React,{useState} from 'react'
import PhototApi from "../components/Api.unsplash"
import RecipeReviewCard from '../components/Card'
const Home = () => {
    const [postdata,setpostdata]=useState([])
    let data=PhototApi().then((data)=>{
        let value=data.map((v,i)=>{
            console.log( v.user);
            return {urls:v.urls, user:v.user,id:v.id}
        })
        setpostdata(value)
      })
  return (
    <div>
        <div className='row  d-flex justify-content-center'>
        {postdata && postdata.map((v,i)=>{
            return (
               <RecipeReviewCard img={v?.urls?.small} profile={v.user.profile_image.small} name={v.user.name} id={v.id}/>
            )
        })}
    </div>
    </div>
  )
}

export default Home