import React from 'react'
import classes from './Finished.css'
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

const Finished = props => {

  const shareUrl = 'https://www.sarinform.ru/quiz/mts-region-quiz'

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
        <h2>{props.balls} / 10</h2>
        <h3><TextYou /></h3>
        <p>{ReactHtmlParser(props.whoAreYou[4].textOnly)}</p>
        <button
        className={classes.BtnReload}
        onClick={props.showTitle}
        >Пройти еще раз</button>

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
  )
}

export default Finished
