import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import StartPage from './pages/StartPage';

function App() {
   return (
      <>
         <Routes>
            <Route path="/" Component={StartPage} />
            <Route path="/main" Component={MainPage} />
         </Routes>
      </>
   );
}

export default App;
