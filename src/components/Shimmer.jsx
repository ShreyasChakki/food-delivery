import React, { useState } from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-line short"></div>
      <div className="shimmer-line medium"></div>
      <div className="shimmer-line short"></div>
      <div className="shimmer-rating"></div>
    </div>
  );
};


const ItrShimmer = ()=>{
    const [arr] = useState([1,2,3,4,5,6,7,8,9]); // 9 cards to fill multiple rows
    return(
        <div className="shimmer-container">
            {
                arr.map(
                    (val,idx)=>{
                        return <Shimmer key={idx}></Shimmer>
                    }
                )
            }
        </div>
    )
}

export default ItrShimmer;
