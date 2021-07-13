import React, { Component } from 'react';
import QuestionForm from '../components/QuestionForm'
import Question from '../components/Question'
import { connect } from 'react-redux'

class Questions extends Component {

  render() {
    return (
      <div>
        <QuestionForm />
        <Question questions={this.props.questions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {questions: state.questions.selectedQuestions}
}

export default connect(mapStateToProps)(Questions)