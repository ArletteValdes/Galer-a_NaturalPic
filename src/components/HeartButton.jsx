import { useState } from "react";
import { useLikesContext } from "../Context/LikesContext";
import Heart from "react-animated-heart"

const HeartButton=({photos})=>{


    const { addFav} = useLikesContext();

    const [isClick, setClick]=useState(false);

    return(
        <div className="like">
        <Heart isClick={isClick} onClick={()=>((setClick(!isClick) , addFav(photos)))}/>
        
        </div>

    )

    
}

export default HeartButton