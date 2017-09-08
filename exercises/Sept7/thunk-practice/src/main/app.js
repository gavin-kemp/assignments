import React, { Component } from 'react';

import FormContainer from './form/form-container';
import ListContainer from './list/list-container';

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