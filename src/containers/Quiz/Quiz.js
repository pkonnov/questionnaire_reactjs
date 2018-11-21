import React, { Component } from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import Finished from '../../components/Finished/Finished'
import dq from '../../DataQuiz'

class Quiz extends Component {
  state = {
    answerState: null,
    showTitle: false,
    activeQuestion: 0,
    showBtnFruther: false,
    notRight: null,
    pointerEvent: '',
    isFinished: false,
    balls: [],
    whoAreYou: [
      {
        id:1,
        you: '1',
      },
      {
        id:2,
        you: '2',
      },
      {
        id:3,
        you: '3',
      },
      {
        id:4,
        you: '4',
      },
    ],
    titlePage: [
      {
        titleTest: 'Название опросника',
        textTest: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
      }
    ],
    quiz: dq
  }

  titleShowHandle = () => {
    this.setState({
      showTitle: !this.state.showTitle
    })
  }

  nextQuestion = () => {
    if (this.isQuizFinished()){
      console.log('fifnished')
      const reducer = (acc, crntv) => acc + crntv
      const countBall = this.state.balls.reduce(reducer)
      console.log(countBall);
      this.setState({
        isFinished: true
      })
    } else {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
        answerState: null,
        showBtnFruther: !this.state.showBtnFruther,
        notRight: null,
        pointerEvent: ''
      })
    }
  }

  onAnswerClickHandler = (answerId) => {

    const question = this.state.quiz[this.state.activeQuestion]
    const ball = this.state.balls.push(question.answers[answerId-1].id)
    console.log(this.state.balls)

    this.setState({
      showBtnFruther: true,
      notRight: question.answers[answerId-1].description,
      pointerEvent: 'none'
    })

    if (question.rightAnswerId === answerId){

      this.setState({
        answerState: {[answerId]: 'success'},
      })

    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }

  }

isQuizFinished(){
  return this.state.activeQuestion + 1 === this.state.quiz.length
}

  render() {
    return (
      <div className={classes.Quiz}>
          <div className={classes.QuizWrapper}>
            {
              this.state.isFinished
              ?
              <Finished

              />
              :
              <ActiveQuiz
                showTitle={this.state.showTitle}
                titleTest={this.state.titlePage[0].titleTest}
                textTest={this.state.titlePage[0].textTest}
                titleShowHandle={this.titleShowHandle}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                classBtnFruther={this.state.showBtnFruther}
                nextQuestion={this.nextQuestion}
                state={this.state.answerState}
                notRight={this.state.notRight}
                pointerEvent={this.state.pointerEvent}
                isQuizFinished={this.isQuizFinished()}
            />
          }
          </div>
      </div>
    )
  }
}

export default Quiz
