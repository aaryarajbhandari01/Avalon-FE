import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Star , StarHalfOutlined, StarOutline} from '@mui/icons-material';

function Rating({value,text,color}) {
    return (
        <div className="rating">
            {/* <span className={value===1? <ThumbUpIcon/> : value===0 ?  <ThumbDownAltIcon/> : "no rating"}>
                <ThumbUpIcon/>
            </span> */}

            {/* <span>
                <ThumbDownAltIcon/>
            </span> */}


            
        <span>
           <i style={{color}} className={
               value >=1?<Star/> //solid star
               :value>=0.5?<StarHalfOutlined/>:<StarOutline/>
           }></i>   
              
        </span>  
        <span>
           <i style={{color}} className={
               value >=2?<Star/> //solid star
               :value>=1.5?<StarHalfOutlined/>:<StarOutline/>
           }></i>   
              
        </span>  
        <span>
           <i style={{color}} className={
               value >=3?<Star/> //solid star
               :value>=2.5?<StarHalfOutlined/>:<StarOutline/>
           }></i>   
              
        </span>  
        <span>
           <i style={{color}} className={
               value >=4?<Star/> //solid star
               :value>=3.5?<StarHalfOutlined/>:<StarOutline/>
           }></i>   
              
        </span>  
        <span>
           <i style={{color}} className={
               value >=5?<Star/> //solid star
               :value>=4.5?<StarHalfOutlined/>:<StarOutline/>
           }></i>   
              
        </span>  
        <span>{text && text}</span>
        </div>
    )
}

export default Rating