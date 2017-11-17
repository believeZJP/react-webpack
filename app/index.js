import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Componenta from './componentA'
import Componentb from './componentB'
import Componentc from './componentC'
import Nav from './nav'
import Error from './error'

ReactDOM.render(
    // <Router basename="demo" forceRefresh={true}>
    <Router basename="demo">
        <div>
            <Nav/>
            <Switch>
                <Redirect from="/redirect" to="/componentb"/>
                <Route exact path="/" component={Componenta}/>
                <Route path="/componentb" component={Componentb}/>
                <Route path="/componentc/:param/:a" component={Componentc}/>
                <Route component={Error}/>
            </Switch>    
        </div>
    </Router>,
    document.getElementById('app')
)








/* 
ReactDOM.render(
    <Componenta/>,
    document.getElementById('app')
) */