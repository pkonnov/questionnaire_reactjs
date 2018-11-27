import React from 'react'
import classes from './ActiveQuiz.css'
import AnswersList from '../AnswersList/AnswersList'
import ReactHtmlParser from 'react-html-parser'
import {
  FacebookShareButton,
  TelegramShareButton,
  VKShareButton,
  OKShareButton,
} from 'react-share'
import {
  FacebookShareCount,
  VKShareCount,
  OKShareCount,
} from 'react-share'
import {
  FacebookIcon,
  TelegramIcon,
  VKIcon,
  OKIcon,
} from 'react-share'

const ActiveQuiz = props => {
  let closeTitle
  const shareUrl = 'https://sarinform.ru'
  if(props.showTitle){
    closeTitle =
      <div>
      <h3>{props.titleTest}</h3>
      <p className={classes.PrevText}>{props.prevText}</p>
      <p>{ReactHtmlParser(props.textTest)}</p>
      <button className={classes.BtnFruther}
              onClick={props.titleShowHandle}>Начать тест</button>
      <div className={classes.SocialShare}>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} />
        </FacebookShareButton>

        <VKShareButton url={shareUrl}>
          <VKIcon size={32} />
        </VKShareButton>

        <OKShareButton url={shareUrl}>
          <OKIcon size={32} />
        </OKShareButton>

        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={32} />
        </TelegramShareButton>
      </div>

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
          showBtnFruther={props.classBtnFruther}
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
         >{props.isQuizFinished ? 'Показать результат' : 'Следующий вопрос'}
         </button>
         : null
        }
    </div>
  )
}
export default ActiveQuiz
