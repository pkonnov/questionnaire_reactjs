import React from 'react'
import classes from './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => {

  const styles = {pointerEvents: props.pointerEvent}

  return (
    <ul
      className={classes.AnswersList}
      style={styles}
    >
      {props.answers.map((answer, index) =>{
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
            notRight={props.notRight}
          />
        )
      })}
      {props.notRight}
    </ul>
  )
}

export default AnswersList
