import MyContext from './MyContext'
import { useState } from 'react';

function App() {


  const [data, setData] = useState (0);
  const sharedState =  {data, setData}


  return (
<>
<MyContext.Provider value={sharedState}>


</MyContext.Provider>
 
    </>
  )
}

export default App
