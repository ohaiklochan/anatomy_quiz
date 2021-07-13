import React from 'react';
import { Card, Header } from 'semantic-ui-css'

const QuestionInfo = ({question}) => {

  return(
    <div className="ui center aligned one column grid">
      <Card.Group style={{'maxWidth':'200px'}} className="ui center aligned one column grid">
        <Header as="h3">{question.text}</Header>
        <Card fluid color='purple' header={question.first_answer} />
        <Card fluid color='orange' header={question.second_answer} />
        <Card fluid color='blue' header={question.third_answer} />
        <Card fluid color='green' header={question.fourth_answer} />
      </Card.Group>
    </div>
  )
}

export default (QuestionInfo)