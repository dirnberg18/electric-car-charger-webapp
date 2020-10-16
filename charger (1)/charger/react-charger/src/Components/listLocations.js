import json from './data/charging_Data.json';
import React from 'react';
import SearchView from './SearchView.js';



class ListLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: json.features,
            productSearchString: ""}
    }
 
    onSearchFieldChange = (event) => {

        console.log(event.target.value);
        this.setState({ productSearchString: event.target.value });
      }
  

      render()
      {
        return (

            <div>
                <div>
                    <h2>Search</h2> <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
                </div>
            <SearchView items={ this.state.items.filter((item) => item.properties.location.includes(this.state.productSearchString)) }
                />
            </div>
        )
         
    }
}
  
  

export default ListLocations;
