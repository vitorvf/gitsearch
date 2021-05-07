import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Repositories } from './components/Repositories/Repositories';
import SearchUser from './pages/SearchUser/SearchUser';
import UserProfile from './pages/Userprofile/Userprofile';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchUser />} />
          <Route path="/user/:inputBusca" element={<UserProfile />} />
          {/* <Route path="/repositories" element={<Repositories />} /> */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
