import React from 'react'
import classes from './AnswerItem.css'

const AnswerItem = props => {

  const cls = [classes.AnswerItem]

  if(props.state){
    cls.push(classes[props.state])
  }

  // const showDes = (answerId) => {
  //   return null
  // }

  return(
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text} <br/>
    </li>

  )
}

export default AnswerItem
