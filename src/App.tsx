import React, { FC } from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import PrivacyPolicy from "./Screens/Pages/Agreements/PrivacyPolicy";
import Tos from "./Screens/Pages/Agreements/Tos";
import TodoUI from "./Screens/Pages/Todo/Todoheader/TodoUI";
import MainNavigation from './Screens/Navigation/MainNavigation'
import Store from './Services/Store'
const App: FC = () => {
  return (
    <Provider store={Store}>
    <BrowserRouter>
    
    <MainNavigation/>
    <Routes>
      <Route path="/" element={<TodoUI />}/>
      <Route path="/termsandconditions" element={<Tos />} />
      <Route path="/privacyandpolicy" element={<PrivacyPolicy />} />
   
        
    </Routes>
  </BrowserRouter>
  </Provider>
  );
};

export default App;
