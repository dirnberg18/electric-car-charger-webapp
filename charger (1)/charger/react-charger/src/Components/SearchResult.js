import React from 'react';

function tfFunction (prop) {if (prop.properties.available){return "true"} else {return "false"}}

export default function SearchResult(props) {
  return (
    <div>
      <div>_____________________</div>
        <div>
          <div >{ props.type }</div>
          <div >Code: { props.properties.PARK_ID }</div>
          <div >location: { props.properties.location }</div>
          <div >Adress: { props.properties.ADDRESS }</div>
          <div >pricing: { props.properties.ADDRESS }</div>
          <div >Available: { tfFunction(props)}</div>
          <div >Power: { props.properties.kW }kW:</div>

          <div>_____________________</div>

         
        </div>
    </div>
  )
}

/*
"fastcharge": true,
          "pricing": 2, // 0 = Free, 1 = 20c/minute, 2= 18c/kWh
          "available": true ,
          "kW": 150
*/