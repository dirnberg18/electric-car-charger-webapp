import React from 'react';
import {data, historyEntrys} from './data/Data.js';
import HistoryTable from './HistoryModule.js';
import {getPricing} from './HistoryModule.js';
import json from './data/charging_Data.json';

/////////////////////////////////////////////
//Charge Class
/////////////////////////////////////

class ChargeModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = { charging: false,
        value: '',
        found: null,
        startTime: new Date(),
        time: new Date(),
        timerSeconds: 0,
        items: json.features.map(x => x.properties)
        
        }
      }


/////////////////////////////////////////////
//Time functions
/////////////////////////////////////


componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date()})

      var a = (this.state.time.getTime() - this.state.startTime.getTime()) /1000;
      this.setState({ timerSeconds: Math.round(a)})
    ;
    }

/////////////////////////////////////////////
//Pricing functions
/////////////////////////////////////
//   0 = Free, 1 = 20c/minute, 2= 18c/kWh


getPrice(data)
{
if (data.pricing == 0) {return 0}
else if(data.pricing == 1) {return Number((this.state.timerSeconds / 60 * 0.2).toFixed(2));}
else if(data.pricing == 2) {return Number((this.state.timerSeconds / data.kW * 0.18)).toFixed(2);}
}


/////////////////////////////////////////////
//Charging functions
/////////////////////////////////////


handleChange = (event) =>
{
    this.setState({value: event.target.value});
}

startCharging = (event) =>
{
    
    

    let found = this.state.items.find(element => element.code == this.state.value);
    if (found != null) 
    {
        alert(found.location );
        this.setState({ found: found,
                        charging: true,
                        startTime: new Date()})
        
    }else{
        alert("code does not exist")
    }
}

  
endCharging = () => {
historyEntrys.push(
    {
        code: this.state.found.code,
        location: this.state.found.location,
        timeStart:  this.state.startTime, // need to send right date here
        duration: this.state.timerSeconds,
        kW: this.state.found.kW,
        pricing: this.state.found.pricing
    })


    
    this.setState({charging: false})
    
}

chargeModuleNormal = () => 
{
return( 
    <div>
     <input type="text" value={this.state.value}  onChange={this.handleChange}/>  
     <button onClick={this.startCharging.bind()}> Start charging </button>
     <HistoryTable/>
    </div>
 )   
}

chargeModuleCharging = () => 
{
return( 
    <div>
      <span>
        <button onClick={this.endCharging.bind()}> End charging </button>
      </span>
      <p>
      <div> <h2 style={{color:'#8BEFFC'}}>Code: {this.state.found.code}</h2></div>
      </p>
      <p>
      <h1>Time charging: {this.state.timerSeconds}</h1>
      </p>
      <p>
      <h1>Costs: {this.getPrice(this.state.found)} Euro</h1>
      </p>
      <p>
      <h1>Charging power: {this.state.found.kW} Kw</h1>
      </p>
      <p>
      <h1>Location: {this.state.found.location}</h1>
      </p>
      <p>
      <h1>Pricing: {getPricing(this.state.found)}</h1>
      </p>
      
      <HistoryTable/>

    </div>
 )   
}

    render () {
      
        if (this.state.charging)
        {
            return this.chargeModuleCharging()
        } else {
            return this.chargeModuleNormal()}
        }
    }

export default ChargeModule;

