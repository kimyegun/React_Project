import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";
import React, {useReducer, useRef, useEffect, useState} from 'react'

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action) {
  return state;
}

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    content: "mock1",
    emtionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime(),
    content: "mock2",
    emtionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime(),
    content: "mock3",
    emtionId: 3,
  },
]

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer (reducer, []);
  const idRef = useRef(0);

  useEffect(()=> {
    dispatch({
      type:"INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, content, emtionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emtionId,
      },
    });
    idRef.current +=1;
  };


  const onUpdate = (targetId, date, content, emtionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emtionId,
      }
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  function reducer(state, action) {
    switch (action.type) {
      case "INIT": {
        return action.data;
      }
      case "CREATE": {
        return [action.data, ...state];
      }
      default: {
        return state;
      }
      case "UPDATE": {
        return state.map((it)=>
          String(it.id) === String(action.data.id) ? {...action.data} : it
        );
      }
      case "DELETE": {
        return state.filter((it)=> String(it.id) !== String(action.targetId));
      }
    }
  }

 if(!isDataLoaded) {
  return <div>데이터를 불러오는 중입니다.</div>
 } else {
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}
}



export default App;
