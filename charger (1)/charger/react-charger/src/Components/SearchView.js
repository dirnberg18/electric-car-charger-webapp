import React from 'react';

import SearchResult from './SearchResult';

export default function SearchView(props) {

  return (
    <div>
      <div >
      {
        props.items.map(item => <SearchResult key={item.type} {...item} />)
      }
      </div>
    </div>
  )
}
