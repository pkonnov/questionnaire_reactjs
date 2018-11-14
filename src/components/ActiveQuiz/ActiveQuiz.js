import React from 'react'
import classes from './ActiveQuiz.css'
import AnswersList from '../AnswersList/AnswersList'


const ActiveQuiz = props => {
  let closeTitle;
  if(props.showTitle){
    closeTitle =
      <div>
      <h1>{props.titleTest}</h1>
      <p>{props.textTest}</p>
      <button onClick={props.titleShowHandle}>Начать тест</button>
      </div>
  } else {
    closeTitle =
      <div>
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
  }

  return (
    <div className={classes.ActiveQuiz}>
        {closeTitle}
    </div>
  )
}
export default ActiveQuiz
