import React from 'react'

function Sushi({ sushi, handleEating }) {

  function clickHandler() {
    if (!sushi.eaten) {
      handleEating(sushi)
    } else {
      alert("Ask for more sushi.")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={clickHandler}>
        { sushi.eaten ? null : <img src={sushi.img_url} width="100%" alt={sushi.name}/> }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi

