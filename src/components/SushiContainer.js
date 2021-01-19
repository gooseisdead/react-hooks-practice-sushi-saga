import React from 'react'
import MoreButton from './MoreButton'
import Sushi from './Sushi'

function SushiContainer({ api, handleMore, plateIndex, handleEating }) {

  const nextSushi = api.slice(plateIndex, plateIndex + 4)
  
  const sushiPlates = nextSushi.map((sushi, index) => <Sushi key={index} sushi={sushi} handleEating={handleEating} />)
  
  return (
    <>
      <div className="belt">
        {sushiPlates}
        <MoreButton handleMore={handleMore} />
      </div>
    </>
  )
}

export default SushiContainer
