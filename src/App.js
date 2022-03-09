import Header from './Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Update from './Update';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Header />}/>
       <Route path='/Update' element={<Update />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
