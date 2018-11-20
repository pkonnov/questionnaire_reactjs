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
            <strong>{props.answerNumber}. </strong>
            {props.question}
          </span>
          <small>{props.answerNumber} из {props.quizLength}</small>
        </p>

        <AnswersList
          state={props.state}
          answers={props.answers}
          onAnswerClick={props.onAnswerClick}
          notRight={props.notRight}
          pointerEvent={props.pointerEvent}
        />
      </div>
  }

  return (
    <div className={classes.ActiveQuiz}>
        {closeTitle}
        {props.classBtnFruther
         ?
         <button
         title="Следующий вопрос"
         className={classes.BtnFruther}
         onClick={props.nextQuestion}
         >Следующий вопрос
         </button>
         : null
        }
    </div>
  )
}
export default ActiveQuiz
