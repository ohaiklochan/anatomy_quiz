import React, { Component } from 'react';
import NotificationBump from './NotificationBump'
import { connect } from 'react-redux';
import { Grid, Form, Button, Radio, Header } from 'semantic-ui-css'
import { updateUserStreak, updateHighestStreak, updateUserQuestionId, resetUserStreak} from '../actions/AllActions'
import api from '../adaptors/Api'

const styles = {
  root: {
    marginTop: "5%"
  }
}

class Game extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentQuestion: this.props.questions[0],
      userAnswer: "",
      index: 0,
      message: ""
    }

  }

  componentWillUnmount () {
    api.user.updateUser(this.props.user)
  }

  onRadioChange = (e , {value}) => this.setState({
    userAnswer: value
  });

  handleSubmitClick = () => {
    this.props.updateUserQuestionId(this.state.currentQuestion.id);

    if (this.state.userAnswer === this.state.currentQuestion.correct_answer
      && this.state.index <= (this.props.questions.length - 1) ) {
        this.props.updateUserStreak()
        this.props.updateHighestStreak(this.props.user)
        api.user.updateUser(this.props.user)
        let updatedIndex = this.state.index += 1;
        this.setState({
          currentQuestion: this.props.questions[updatedIndex],
          userAnswer: "",
          index: updatedIndex,
          message: "Correct!"
        })
      }

    else {
      if(this.state.message !== "Correct!" || this.state.message !== "") {
          this.setState({message: `Incorrect! Correct answer was ${this.state.currentQuestion.correct_answer}.`})
        }
      this.props.resetUserStreak();
      api.user.updateUser(this.props.user)
    }

  }

  handleNewGameClick = () => {
    let updatedIndex = this.state.index += 1;
    this.setState({
      currentQuestion: this.props.questions[updatedIndex],
      userAnswer: "",
      index: updatedIndex,
      message: ""
    })
  }


  render () {
      return (
        <div>
          <Grid centered style={styles.root}>
            <Grid.Column width={10}>
              <Header as='h1'>Anatomy Quiz!</Header>
                {this.state.message !== "" ? (<NotificationBump message={this.state.message}/>) : (null)}
                <div className="question">
                    <br></br>
                    <Form.Field>
                      <Header as='h3'>{this.state.currentQuestion.text}</Header>
                      <p>by {this.state.currentQuestion.user.username}</p>
                      <br></br>

                      <label style={{'color' : 'red'}}>Current Streak: {this.props.user.streak}</label>
                    </Form.Field>
                    <br></br>

                    <Form.Field>
                      <Radio
                        label={this.state.currentQuestion.first_answer}
                        name="first_answer"
                        value={this.state.currentQuestion.first_answer}
                        checked={this.state.userAnswer === this.state.currentQuestion.first_answer}
                        onChange={this.onRadioChange}
                      />
                    </Form.Field>
                    <br></br>

                    <Form.Field>
                      <Radio
                        label={this.state.currentQuestion.second_answer}
                        name="second_answer"
                        value={this.state.currentQuestion.second_answer}
                        checked={this.state.userAnswer === this.state.currentQuestion.second_answer}
                        onChange={this.onRadioChange}
                      />
                    </Form.Field>
                    <br></br>

                    <Form.Field>
                      <Radio
                        label={this.state.currentQuestion.third_answer}
                        name="third_answer"
                        value={this.state.currentQuestion.third_answer}
                        checked={this.state.userAnswer === this.state.currentQuestion.third_answer}
                        onChange={this.onRadioChange}
                      />
                    </Form.Field>
                    <br></br>

                    <Form.Field>
                      <Radio
                        label={this.state.currentQuestion.fourtj_answer}
                        name="fourth_answer"
                        value={this.state.currentQuestion.fourth_answer}
                        checked={this.state.userAnswer === this.state.currentQuestion.fourth_answer}
                        onChange={this.onRadioChange}
                      />
                    </Form.Field>
                {this.state.message !== "" && this.state.message !== "Correct!"  ?
                  (<Button onClick={this.handleNewGameClick}>Click to Restart!</Button>) :
                  (<Button onClick={this.handleSubmitClick}>Submit</Button>)}
              </div>
            </Grid.Column>
          </Grid>
        </div>
        )

    }

}


const mapStateToProps = state => {
  return {
          questions: state.questions.selectedQuestions,
          user: state.questions.user
        }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserStreak: () => dispatch(updateUserStreak()),
    updateHighestStreak: (user) => dispatch(updateHighestStreak(user)),
    updateUserQuestionId: (questionId) => dispatch(updateUserQuestionId(questionId)),
    resetUserStreak: () => dispatch(resetUserStreak())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Game)