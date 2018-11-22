import React from 'react'
import classes from './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'
import ReactHtmlParser from 'react-html-parser'


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
            showBtnFruther={props.showBtnFruther}
          />
        )
      })}
      <p>{ReactHtmlParser(props.notRight)}</p>
    </ul>
  )
}

export default AnswersList
