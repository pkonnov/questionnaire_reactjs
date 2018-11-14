import React from 'react'
import classes from './ActiveQuiz.css'
import AnswersList from '../AnswersList/AnswersList'


const ActiveQuiz = props => {
  const closeTitle = '';

  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>2. </strong>
          Как дела
        </span>
        <small>4 из 10</small>
      </p>

      <AnswersList
        answers={props.answers}
      />
    </div>
  )
}
export default ActiveQuiz
