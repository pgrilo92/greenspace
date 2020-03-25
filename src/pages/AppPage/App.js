import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import userService from '../../utilities/userService'
import Header from '../../components/Header/Header'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout()
    this.setState({user: null})
  }

  handleSigninOrSignup = () => {
    this.setState({user: userService.getUser()})
  }

  render() {
    return (
      <div className="App">
        <Header 
          {...this.props}
          handleLogout={this.handleLogout}
          handleSigninOrSignup={this.handleSigninOrSignup}
          user={this.state.user}
        />
        <Switch>
          <Route exact path='/' render={
            (props) => { 
              return (
                <h1>Home</h1>
            )}}
          />

          <Route exact path='/signup' render={
            ({history}) => {
              return (
                <SignupPage 
                  history={history}
                  handleSigninOrSignup={this.handleSigninOrSignup}
                />
            )}}/>

          <Route exact path='/login' render={
            ({history}) => {
              return (
                <LoginPage 
                  history={history}
                  handleSigninOrSignup={this.handleSigninOrSignup}
                />
            )}} />
        </Switch>
      </div>
    )
  }
}

export default App;
