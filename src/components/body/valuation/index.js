import React, {PureComponent} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import "./valuation.css";
import Separator from "../../common/separator";

const CustomTooltip = ({active, payload, label }) => {
  if(active && payload && payload.length){
    return (
      <div className="custom-tooltip">
        {/* <p className="label">{`${label} : ${payload[0].value}`}</p> */}
        <p className="intro">{"Something"}</p>
        <p className="desc"></p>
      </div>
    )
  }
  return null;
}

function Valuation() {

  const data = [
    {
      name: '20s',      
      valuation: 10,
      amt: 2400,
    },
    {
      name: '',      
      valuation: 20,
      amt: 2210,
    },
    {
      name: '',      
      valuation: 15,
      amt: 2290,
    },
    {
      name: '',      
      valuation: 25,
      amt: 2000,
    },
    {
      name: 'BCIT',      
      valuation: 30,
      amt: 2000,
    },
    {
      name: 'Now',
      prediciton: 40,
      valuation: 40,
      amt: 2181,
    },
    {
      name: '',
      prediciton: 45,      
      amt: 2500,
    },
  
    {
      name: '30s',
      prediciton: 60,      
      amt: 2100,
    },
  ];
  
  
  return (
    <div className="valuation">
      <Separator />
      <label className="section-title">Valuation</label>      
        
          <LineChart width={500} height={300} data={data}>          
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />          
          <ReferenceLine x="Now" label="Now"/>
          <Line type="monotone" dataKey="valuation" stroke="#8884d8" activeDot={{ r: 8 }}/>          
          <Line type="monotone" dataKey="prediciton" stroke="#8884d8" strokeDasharray="4 1"/>          
          <Tooltip content={<CustomTooltip/>}/>          
          </LineChart>        
    </div>    
  );
}

export default Valuation;
