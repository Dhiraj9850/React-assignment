import React from 'react'
import List from './Component/List';
import items from './Itemdata/Data';

const App = () => {
  return (
    <div>
        <List items={items}/>
    </div>
  )
}

export default App