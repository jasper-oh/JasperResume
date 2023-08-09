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
import { ValuationData } from "../../../data/valuation";

const getDescription = (numOfData) => {
  return ValuationData[numOfData-1].description
}


const CustomTooltip = ({active, payload, label }) => {

  if(active && payload && payload.length){
    let title = payload[0].payload.title;  
    let numOfData = payload[0].payload.no;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${title}`}</p>
        {getDescription(numOfData)}
        <p className="desc"></p>
      </div>
    )
  }
  return null;
}

function Valuation() {

  const data = [
    {
      no : 1,
      name: '20s',     
      title: '20s', 
      valuation: 10,
      amt: 2400,
    },
    {
      no : 2,
      name: '',    
      title: "Customer Service",  
      valuation: 20,
      amt: 2210,
    },
    {
      no : 3,
      name: '',      
      title: "Boot Camp",  
      valuation: 15,
      amt: 2290,
    },
    {
      no : 4,
      name: '', 
      title: "Start Working",      
      valuation: 25,
      amt: 2000,
    },
    {
      no : 5,
      name: 'BCIT',  
      title: "BCIT",      
      valuation: 30,
      amt: 2000,
    },
    {
      no : 6,
      name: 'Now',
      title: "Now",      
      prediciton: 40,
      valuation: 40,
      amt: 2181,
    },
    {
      no : 7,
      name: '',
      title : "During Co-op",
      prediciton: 45,      
      amt: 2500,
    },
  
    {
      no : 8,
      name: '30s',
      title: "After Graduation",      
      prediciton: 60,      
      amt: 2100,
    },
  ];
  
  
  return (
    <div className="valuation">
      <Separator />
      <label className="section-title">Valuation</label>              
      <div className="valuation-box">
        <ResponsiveContainer width="80%" height={300}>
          <LineChart width={400} height={300} data={data}>          
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />          
            <ReferenceLine x="Now" label="Now"/>
            <Line type="monotone" dataKey="valuation" stroke="#1a48a0" strokeWidth={2} activeDot={{ r: 8 }}/>          
            <Line type="monotone" dataKey="prediciton" stroke="#1a48a0" strokeWidth={2} strokeDasharray="4 1"/>          
            <Tooltip content={<CustomTooltip/>} position={{x: 0, y:300}}/>          
          </LineChart>        
        </ResponsiveContainer>
      </div>
    </div>    
  );
}

export default Valuation;
