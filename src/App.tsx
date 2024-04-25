import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Preview />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
