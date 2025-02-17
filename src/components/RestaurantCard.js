import { useContext } from "react";
import { CDN_URL } from "../utils/consonents";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const{loggedInUser} = useContext(UserContext)
  
    // if (!resData || !resData.info) {
      
    //   return null; 
    // }
    const {
      name,      
      cuisines,
      avgRating,
      costForTwo,
      sla,      
    } = resData?.info;
    
  
    return (
     <div
     data-testid = "rescard"
     className="m-4 p-4 mx-5 w-[255px] h-[500px] bg-gray-200 rounded-lg shadow-xl hover:bg-gray-300"
     style={{backgroungColor: '#f0f0f0'}}
     >
        
        <img 
        className="rounded-lg"
        src={CDN_URL+resData.info.cloudinaryImageId}
        alt={"Image-not-loding"}/>

        <div className="res-card-content">
        <h3 className="font-bold pt-4">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo }</h4>
        <h4>{sla?.slaString}</h4>
        <h4>User : {loggedInUser}</h4>

        </div>
        
      </div>
    );
  };

  // higher order component (takes component as input and return another component)
  // input - RestaurantCard ==>> restaurantcardprompted

  export const withPromotion = (RestaurantCard) => {
    return(props) => {
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Prompted</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
  }

  export default RestaurantCard;