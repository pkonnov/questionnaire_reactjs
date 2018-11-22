import React from 'react'
import classes from './AnswerItem.css'

const AnswerItem = props => {

  const cls = [classes.AnswerItem]

  if(props.state){
    cls.push(classes[props.state])
  }

  const right = {
    color: 'green'
  }


  return(
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
      style={props.showBtnFruther && props.answer.b === 1
        ? right : null
      }
    >
      {props.answer.id + '. ' + props.answer.text}
      <span className={classes.AnswerItemSpan}>
      {props.showBtnFruther ? props.answer.percentage : null}
      </span>
    </li>

  )
}

export default AnswerItem
