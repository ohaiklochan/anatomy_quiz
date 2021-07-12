import React, { Component } from 'react';
import Login from './Login'
import Dashboard from './containers/Dashboard'
import Navbar from './Navbar'
import PlayGame from './components/PlayGame'
import QuestionsContainer from './containers/QuestionsContainer'
import About from './components/About'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, loadQuestions, rankedUsers, login } from './actions/index'
import api from './adaptors/api'

class App extends Component {

  componentWillMount() {
    this.props.loadQuestions();
    this.props.rankedUsers();
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
            <Route path="/questions" component={QuestionsContainer}/>
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