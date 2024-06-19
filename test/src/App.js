import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Page from './component/Page';
import Footer from './component/Footer';
import NotFound from './component/NotFound';
import { Suspense } from "react";
import ErrorBoundary from './utils/ErrorBoundary';
function App() {
  const [hello, setHello] = useState('')
 
  useEffect(() => {
    axios.get('http://localhost:8080/api/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);
 
  const routeContent = () => {
    return (
      <div className='container'>
        백엔드 스프링 부트 데이터 : {hello}
        <BrowserRouter>
          <ErrorBoundary>
            <div>
              <Header/>
            </div>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/page/*" element={<Page />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          <div className='footer'>
          <Footer/>
        </div>
        </ErrorBoundary>
        </BrowserRouter>
      </div>
    );
  };
  
  return (
    <Suspense >{routeContent()}</Suspense>
  );
}
 
export default App;
