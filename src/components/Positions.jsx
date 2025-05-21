import React, {useState,useEffect} from "react";
import {positions} from "../data/data.js";
import axios from "axios";

const Positions = () => {
  const [allPositions,setAllPositions] = useState([]);

  useEffect(()=>{
    const positions=async()=>{
      try{
        const res= await axios.get("https://zerodha-backend-5gz6.onrender.com/allpositions");
        setAllPositions(res.data);
      }catch(err){
        console.log(err.message);
      }
    }
    positions();
  }, []);
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((stock,index)=>{
            const currValue = stock.price*stock.qty;
            
            const isProfit =currValue - stock.avg*stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return(
              <tr key={index} >
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>{(currValue - stock.avg*stock.qty).toFixed(2)}</td>
             
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
