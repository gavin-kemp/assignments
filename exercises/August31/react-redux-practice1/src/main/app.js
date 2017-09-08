import React, { Component } from 'react';
import ListContainer from './list/list-container';
import FormContainer from './form/form-container';

class App extends Component {
    render() {
        return (
            <div>
                <FormContainer />
                <ListContainer />
            </div>
        );
    }
}

export default App;