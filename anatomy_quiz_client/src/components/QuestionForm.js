import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion, loadUserQuestions } from '../actions/AllActions'
import { Grid, Form, Button, Radio, Header } from 'semantic-ui-react'
import NotificationBump from './NotificationBump'

const styles = {
  root: {
    marginTop: "5%"
  }
}

class QuestionsForm extends Component {

  constructor() {
    super()

    this.state = {
      text: "",
      first_answer: "",
      second_answer: "",
      third_answer: "",
      fourth_answer: "",
      correct_answer: "",
      message: ""
    }

  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addQuestion(this.props.user, this.state);
    this.setState({
      message: "Question added!"
    })
  }

  onRadioChange = (e , {value}) => this.setState(
    {correct_answer: value}
  );

  handleOnChange = event => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Grid centered style={styles.root}>
        <Grid.Column width={10}>
          <Header as='h1'>Submit a Question!</Header>
          {this.state.message !== "" ? <NotificationBump message={this.state.message} /> : null }
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Question</label>
                <input
                  type="text"
                  name = "text"
                  value = {this.state.text}
                  onChange = {this.handleOnChange} />
            </Form.Field>

            <Form.Field>
              <label>First Answer:</label>
                <input
                  type="text"
                  name = "first_answer"
                  value = {this.state.first_answer}
                  onChange = {this.handleOnChange} />
            </Form.Field>

            <Form.Field>
              <label>Second Answer:</label>
                <input
                  type="text"
                  name = "second_answer"
                  value = {this.state.second_answer}
                  onChange = {this.handleOnChange} />
            </Form.Field>

            <Form.Field>
              <label>Third Answer:</label>
                <input
                  type="text"
                  name = "third_answer"
                  value = {this.state.third_answer}
                  onChange = {this.handleOnChange} />
            </Form.Field>

            <Form.Field>
              <label>Fourth Answer:</label>
                <input
                  type="text"
                  name = "fourth_answer"
                  value = {this.state.fourth_answer}
                  onChange = {this.handleOnChange} />
            </Form.Field>


                <Form.Field>
                  <label> Set Answer: </label>
                  <Radio
                    label="1"
                    name="correct_answer"
                    value={this.state.first_answer}
                    checked={this.state.correct_answer === this.state.first_answer }
                    onChange={this.onRadioChange}
                  />
                </Form.Field>


                <Form.Field>
                  <Radio
                    label="2"
                    name="correct_answer"
                    value={this.state.second_answer}
                    checked={this.state.correct_answer === this.state.second_answer}
                    onChange={this.onRadioChange}
                  />
                </Form.Field>

                <Form.Field>
                  <Radio
                    label="3"
                    name="correct_answer"
                    value={this.state.third_answer}
                    checked={this.state.correct_answer === this.state.third_answer}
                    onChange={this.onRadioChange}
                  />
                </Form.Field>

            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>

    );
  }
}
const mapStateToProps = state => {
  return { user: state.questions.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (user, state) => dispatch(addQuestion(user, state)),
    loadUserQuestions: () => dispatch(loadUserQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsForm)