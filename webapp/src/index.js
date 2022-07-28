import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Apply from './views/apply';
import Header from './component/header';
import Footer from './component/footer';
import { Container } from 'react-bootstrap';

import './assets/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
            <React.StrictMode>
                <Container className='wrapper'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/*' element={<Apply />}></Route>
                    </Routes>
                </BrowserRouter>
                </Container>
            </React.StrictMode>
        <Footer />
    </div>
);