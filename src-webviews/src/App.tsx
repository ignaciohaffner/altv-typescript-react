import { useEffect, useState } from 'react';
import './App.css';
import { WebViewEvents } from '../../src/core/shared/webviewEvents';
import CharacterCreation from './pages/CharacterCreation/CharacterCreation';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
    const [isVisible, setVisibility] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    function invokeEvent() {
        console.log('Test!');

        if ('alt' in window) {
            alt.emit('emitToClient');
        }
    }

    useEffect(() => {
        if (!('alt' in window)) {
            return;
        }

        alt.on(WebViewEvents.toggleVisibility, (shouldBeVisible: boolean) => {
            setVisibility(shouldBeVisible);
        });
    }, []);

    return (
        //className={isVisible ? '' : 'hide'}
        <div>
            <CharacterCreation></CharacterCreation>
            <LoginPage></LoginPage>
        </div>
    );
}

export default App;
