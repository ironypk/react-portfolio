import React from 'react';
import {Header} from './components/Header/Header';
import {About} from './components/About/About';
import {Skills} from './components/Skills/Skills';
import {Works} from './components/Works/Works';
import {Remote} from './components/Remote/Remote';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <div className='wrapper'>
                <Header/>
                <About/>
                <Skills/>
                <Works/>
                <Remote/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}


export default App;
