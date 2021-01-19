import React, { useState, useEffect } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

const API = "http://localhost:3001/sushis"

function App() {

    const [sushis, setSushis] = useState([])
    const [moneyInWallet, setMoneyInWallet] = useState(2000)
    const [plateIndex, setPlateIndex] = useState(0)
  

  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then((sushis) => {
      const currentSushis = sushis.map((sushi) => {
        return { ...sushi, eaten: false}
    })
    setSushis(currentSushis)
    })
  }, [])
  
  function handleEating(sushiObj) {
    if (moneyInWallet >= sushiObj.price) {
      const currentSushis = sushis.map((sushi) => {
        if (sushi.id === sushiObj.id) return { ...sushi, eaten: true };
        return sushi
      })
        setSushis(currentSushis)
        setMoneyInWallet((moneyInWallet) => moneyInWallet - sushiObj.price)
    } else {
      alert("More sushi, please")
    }
  }
  
  function handleMoreButtonClick() {
    setPlateIndex(plateIndex + 4)
  }

  const sushiEaten = sushis.filter((sushi) => sushi.eaten)

    return (
      <div className="app">
        <SushiContainer
          api={sushis}
          handleMore={handleMoreButtonClick}
          plateIndex={plateIndex} 
          handleEating={handleEating}
        />
        <Table
          moneyInWallet={moneyInWallet}
          emptyPlates={sushiEaten}
        />
      </div>
    );
  }


export default App;
