
import React,{useState}from "react"
import Star from "./Star"
import firebase from 'firebase/compat/app'
import a2f from "./a2f.jpeg"
import ParPota from "./ParPota"
import "firebase/firestore"
import firestore from "./firestore"
import { getDocs , addDoc, collection } from "firebase/firestore"
import "./index.css"

export default function useGranchild(props){



    const [open,changeopen]=useState(false);
    console.log(open)
// function handleChange(){
//     changeopen((prev)=>!prev)
// }
const handleChange=()=>{
    changeopen(!open)
}

const colref=collection(firestore, 'movies');

function handleaddfav(e){
  console.log(e.target.id)
addDoc(colref, {
  movieid: e.target.id
})

props.Gcc()
}


 return (<>
 <div onClick={handleChange}>
    <div className="con flex flex-col " >
            <div className=""><img
              src={
                `https://www.themoviedb.org/t/p/w440_and_h660_face` +
                props.imgUrl
              } width="200px" 
            ></img>
           
            </div>
        
          </div>
          <div className="block m-auto w-56">
            <h1 className="block m-auto w-fit text-center">{props.MovieTitle}</h1>
              
            </div>
  
            <Star rating={ props.MovieRating} rank={props.MovieId} />
    
        
        {/* </div> */}
        </div>
        {/* <div className="parpota"> */}
        <div className=" top add2f flex">
            <img src={a2f} width="20px" className=" cursor-pointer " onClick={handleaddfav} id={props.MovieId}></img>
            <p className="ml-4">Add to favourites</p>
            </div>
        {open && <ParPota ImgUrl={props.imgUrl} MovieDate={props.MovieDate} MovieDesc={props.MovieDesc} MovieTitle={props.MovieTitle} MovieRating={props.MovieRating} doChange={handleChange} Adult={props.Adult} Lang={props.Lang} MovieId={props.MovieId}/>}
        {/* </div> */}
        </>
 )
}


