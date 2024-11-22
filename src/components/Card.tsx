import React from 'react'
import "../styles/Card.css";
export const Card = () => {
  return (
    <div><div className="cardIn">
    <div className="card-image"></div>
    <div className="category"> Illustration </div>
    <div className="heading"> A heading that must span over two lines
        <div className="author"> By <span className="name">Abi</span> 4 days ago</div>
    </div>
</div></div>
  )
}
