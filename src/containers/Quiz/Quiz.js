import React, { Component } from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    showTitle: false,
    activeQuestion: 0,
    titlePage: [
      {
        titleTest: 'Название опросника',
        textTest: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
      }
    ],
    quiz: [
      {
        question: 'Какого цвета неебо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Ответ 1', id:1},
          {text: 'Ответ 2', id:2},
          {text: 'Ответ 3', id:3},
          {text: 'Ответ 4', id:4}
        ]
      },
      {
        question: 'Какого хуя?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: 'Ответ 1', id:1},
          {text: 'Ответ 2', id:2},
          {text: 'Ответ 3', id:3},
          {text: 'Ответ 4', id:4}
        ]
      }
    ]
  }

  titleShowHandle = () => {
    this.setState({
      showTitle: !this.state.showTitle
    })
  }

  onAnswerClickHandler = (answerId) => {
    console.log("answer id: ", answerId)
    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
          <div className={classes.QuizWrapper}>
            <ActiveQuiz
              showTitle={this.state.showTitle}
              titleTest={this.state.titlePage.titleTest}
              textTest={this.state.titlePage.textTest}
              titleShowHandle={this.titleShowHandle}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
            />
          </div>
      </div>
    )
  }
}

export default Quiz
