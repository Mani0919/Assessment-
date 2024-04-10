import React, { useState, useEffect } from 'react';

const CApp = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState({});
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(json => {
        setBitcoinPrices(json.bpi);
        setLoading(false);
        console.log(json)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <h3 className=" mb-4" style={{color:"#fff"}}>Cryptocurrency Prices</h3>
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {Object.entries(bitcoinPrices).map(([currency, data]) => (
            <div key={currency} className="col-md-4 mb-4">
              <div className="card" style={{width:"275px",backgroundColor:"#000",color:"#fff"}}>
                <div className="card-body">
                  <span className="card-title" style={{marginLeft:"70px",color:"yellow",fontSize:"20px"}}>{currency}</span><span className='text-secondary'>({data.symbol})</span>
                </div>
                <div style={{marginLeft:"20px"}}>
                <span>Prices:</span>&nbsp;<span className="card-text text-info">{data.rate}</span>
                </div>
                <div style={{display:"flex",gap:"2px",marginLeft:"20px",marginTop:"10px"}}>
                  <p>Description:</p>
                  <p className="card-text text-success">{data.description}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default CApp;
