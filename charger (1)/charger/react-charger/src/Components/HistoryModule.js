import React from 'react';
import ReactDOM from 'react-dom';
import {historyEntrys} from './data/Data.js';

export function getPricing(data)
{
if (data.pricing == 0) {return "Free"}
else if(data.pricing == 1) {return "20c/min"}
else if(data.pricing == 2) {return "18c/kWh"}
}

function getTime(date) {
 
  var hours = date.getHours(); //Current Hours
  var min =  date.getMinutes(); //Current Minutes
  var sec =  date.getSeconds(); //Current Seconds
  return(
  hours + ':' + min + ':' + sec
  );}
    
  var tableStyle = {
    "border": "1px solid black"
 };





class HistoryTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hisEntrys: historyEntrys}
    }
 
    
  
  getCost( data)
  {
    if (data.pricing == 0) {return 0}
    else if(data.pricing == 1) {return Number((data.duration / 60 * 0.2).toFixed(2));}
    else if(data.pricing == 2) {return Number((data.duration / data.kW * 0.18)).toFixed(2);}
    } 
  
  displayRow(historyData)
  {
    return (
   
    <tr>
    <td>{historyData.code}</td>
    <td>{historyData.location}</td> 
    
    <td>{historyData.duration} sec</td>
    <td>{historyData.kW} kW</td>
    <td>{this.getCost(historyData)}€</td>
    <td>{getPricing(historyData)}</td>
    <td>{historyData.timeStart.toLocaleDateString()}</td>
    <td>{getTime(historyData.timeStart)}</td>

    </tr>


  )
  }
    
    render() {
        return (
            <div>
        <table style={tableStyle} >
  <tr>
    <th>Code</th>
    <th>Location</th> 
    <th>Duration</th>
    <th>Power</th>
    <th>Cost</th>
    <th>Pricing</th>
    <th>Date</th>
    <th>Time</th>
  </tr>
 
  
  {this.state.hisEntrys.map( x => this.displayRow(x))}
</table>
          </div>
          
        );
      }
    }
   

export default HistoryTable;