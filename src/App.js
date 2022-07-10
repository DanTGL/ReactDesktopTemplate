import React, {Component, useState} from "react";
import "./App.css";
import Window from "./Window.js"

const apps = [
  {
    color: "blue",
    appId: 0
  },
  {
    color: "green",
    appId: 1
  },
  {
    color: "yellow",
    appId: 2
  }
];

function App() {
  const rndManagerRef = React.useRef({
    maxZIndex: 0,
    prevDraggedNode: null
  });

  const list = [...apps];
  
  const [appList, setAppList] = useState(list);


  const openApp = (id) => {

    const updatedList = [...appList];
    const current_index = updatedList.findIndex(item => item.appId === id);

    if (current_index != -1) {
      const [item] = updatedList.splice(current_index, 1);
      updatedList.push(item);
      setAppList(updatedList);
    }

    
    //return window_order.length() - 1;
  };

  const closeApp = (id) => {
    const updatedList = [...appList];
    const current_index = updatedList.findIndex(item => item.appId === id);

    if (current_index != -1) {
      updatedList.splice(current_index, 1);
      setAppList(updatedList);
    }
  }

  const createApp = (value, index) => {
    return <Window managerRef={rndManagerRef} color={value.color} zIndex={index} key={value.appId.toString()} onDrag={openApp} closeApp={closeApp} appId={value.appId} />
  };

  const createApps = () => {
    return appList.map(createApp)
  };

  return(
    <div className="App">
      <h1> Hello, World! </h1>
      {createApps()}
    </div>
  );
}

export default App;