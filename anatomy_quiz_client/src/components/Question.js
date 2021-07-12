import React from 'react';
import QuestionInfo from './QuestionInfo'


const Questions = ({questions}) => {

   const selectedQuestions = questions.map( (q, i) => <QuestionInfo question={q} key={q.id} /> )

    return (
      <div>
        {selectedQuestions}
      </div>
    );

}

export default (Questions)