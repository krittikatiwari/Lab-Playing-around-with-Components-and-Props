import './App.css';

import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Body from './components/body';
import imageData from './components/image';



function App() {
  return (
    <div>
      <Header/>
      <Body image={imageData}/>

      
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
