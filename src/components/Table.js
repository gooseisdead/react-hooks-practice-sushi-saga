import React from 'react'

function Table({ moneyInWallet, emptyPlates }) {

  const renderPlates = emptyPlates.map((x, index) => (
      <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    ))

  return (
    <>
      <h1 className="remaining">
        You have: ${ moneyInWallet } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          { renderPlates }
        </div>
      </div>
    </>
  )
}

export default Table