import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';


import '../style.scss';


import {All, NotFound} from './appFiles/All.jsx';

class App extends React.Component {
    render(){
        return <All />
    }
}

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
