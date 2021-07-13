import React, { Component } from 'react';
import Login from './components/Login'
import MainHub from './containers/MainHub'
import Navbar from './components/Navbar'
import Game from './components/Game'
import Questions from './containers/Questions'
import Info from './components/Info'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, loadQuestions, rankedUsers, login } from './actions/AllActions'
import api from './adaptors/Api'
import './App.css'

class App extends Component {

  state = {
    questions: this.props.loadQuestions(),
    currentRankedUsers: this.props.rankedUsers()
  }

  componentDidMount () {
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(res => {
        this.props.login(res)
      });
    }
  }

  componentWillUpdate() {
    this.props.rankedUsers();
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Navbar currentUser={this.props.user} history={this.props.history}/>
          <Switch>
            <Route exact path="/" component={Info}/>
            <Route path="/main" component={MainHub}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/game" component={Game}/>
            <Route path="/questions" component={Questions}/>
            <Route path="/logout"/>
          </Switch>
        </div>
       </BrowserRouter>
    </div>
    )
  }

}

const mapStateToProps =  (state) => {
  return {user: state.questions.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    loadQuestions: () => dispatch(loadQuestions()),
    rankedUsers: () => dispatch(rankedUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)