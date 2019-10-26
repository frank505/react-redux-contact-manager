import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from '../layout/home/Header'
import Login from '../components/home/Login';
import Register from '../components/home/Register'

const home = (props) => {
    console.log(props)
    return (
        <div>
        <Header props={props}/>
        <Switch>
    <Route exact path={props.match.path} component={Login} />
    <Route path={`${props.match.path}/Register`} component={Register} />
    </Switch>
        </div>
    );
}

export default home;
