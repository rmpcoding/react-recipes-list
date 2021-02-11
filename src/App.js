import React, { useState } from 'react';
import CounterClass from './components/Counter-Class/CounterClass';
import CounterFunction from './components/Counter-Function/CounterFunction';
import Form from './components/Form/Form';

function App() {
    const ThemeContext = React.createContext();
    const [theme, setTheme] = useState('red');

    return (

            <ThemeContext.Provider value={{ backgroundColor: theme }}>
                <CounterClass initialCount={0} />
                <CounterFunction initialCount={0} />
                <Form />
                <button onClick={() => {
                    setTheme(prevTheme => {
                        console.log(prevTheme)
                        return prevTheme === 'red' ? 'blue' : 'red';
                    })
                }}
                >
                    Theme Changer
                </button>
            </ThemeContext.Provider>
    );
}

export default App;
