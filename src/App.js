import React from 'react';
import Counter from './components/Counter-Class/Counter';
import Form from './components/Form/Form';

function App() {
    return (
        <div>
            <Counter initialCount={0} />
            <Form />
        </div>
    );
}

export default App;
