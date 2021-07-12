import React, { Component } from 'react';
import QuestionInfo from '../components/QuestionInfo'
import Question from '../components/Question'
import { connect } from 'react-redux'

class Questions extends Component {

  render() {
    return (
      <div>
        <QuestionInfo />
        <Question questions={this.props.questions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {questions: state.questions.selectedQuestions}
}

export default connect(mapStateToProps)(Questions)