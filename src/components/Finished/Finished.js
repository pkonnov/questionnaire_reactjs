import React from 'react'
import classes from './Finished.css'
import ReactHtmlParser from 'react-html-parser'


const Finished = props => {

  const TextYou = () => {
    let text
    if(props.balls < 1 || props.balls === 1){
      text = props.whoAreYou[0].text
    } else if (props.balls === 1 || props.balls <= 4){
      text = props.whoAreYou[1].text
    } else if (props.balls === 5 || props.balls <= 7){
      text = props.whoAreYou[2].text
    } else if (props.balls >= 8){
      text = props.whoAreYou[3].text
    }
    return ReactHtmlParser(text)
  }


  return (
    <div className={classes.Finished}>
        <TextYou />

        <p>{props.balls} / 10</p>
        <button className={classes.BtnFruther}>Пройти еще раз</button>
    </div>
  )
}

export default Finished
