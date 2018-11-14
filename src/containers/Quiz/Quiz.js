import React, { Component } from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{
  state = {
    showTitle: true,
    quiz: [
      { titleTest: 'Название опросника',
        textTest: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
      },
      {
        answers: [
          {text: 'Вопрос 1'},
          {text: 'Вопрос 2'},
          {text: 'Вопрос 3'},
          {text: 'Вопрос 4'},
        ]
      }
    ]
  }

  titleShowHandle = () => {
    this.setState({
      showTitle: !this.state.showTitle
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
          <div className={classes.QuizWrapper}>
            <h1></h1>
            <ActiveQuiz
              answers={this.state.quiz[1].answers}
              showTitle={this.state.showTitle}
              titleTest={this.state.quiz[0].titleTest}
              textTest={this.state.quiz[0].textTest}
              titleShowHandle={this.titleShowHandle}
            />
          </div>
      </div>
    )
  }
}

export default Quiz
