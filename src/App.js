import { useState } from 'react';
import './index.css';

function App() {
  const [color, setColor] = useState();
  // const handleColorChange = (color) => {
  //   return {backgroundColor: color};
  // }

  return (
    <div className="App">
      <div className="colorBox" style={{
        backgroundColor: color
      }}>
        <h3>{color ? color : 'Enter color name'}</h3>
      </div>

      <input type="text"
        autoFocus
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder='Enter color'
      />
    </div >
  );
}

export default App;
