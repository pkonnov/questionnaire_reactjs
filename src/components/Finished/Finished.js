import React from 'react'
import classes from './Finished.css'
import ReactHtmlParser from 'react-html-parser'


const Finished = props => {

  const TextYou = () => {
    let text
    if(props.balls < 2 || props.balls === 2){
      text = props.whoAreYou[0].text
    } else if (props.balls === 3 && props.balls < 4){
      text = props.whoAreYou[1].text
    } else if (props.balls === 4 || props.balls < 6){
      text = props.whoAreYou[2].text
    } else if (props.balls > 6 || props.balls === 6){
      text = props.whoAreYou[3].text
    }
    return ReactHtmlParser(text)
  }

  return (
    <div className={classes.Finished}>
        <TextYou />

        <p>{props.balls} / 10</p>
    </div>
  )
}

export default Finished
