import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';

class App extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (

        <BrowserRouter>
            <div className="main-wrapper">
                <main>
                    <Switch>
                        <Route exact path='/' component={Login} users={this.props.state.users} />
                        {/*{this.state.isLogged ?*/}
                            {/*/!*<Route exact path='/cinemas' component={Cinemas} />*!/*/}
                            {/*:*/}
                            {/*null}*/}
                    </Switch>
                </main>

            </div>
        </BrowserRouter >
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(App);
