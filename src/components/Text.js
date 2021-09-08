import React, { Component } from 'react'
var textIntervalID
class Text extends Component {
  constructor() {
    super();
    this.state = {
      textContent: "",
      counter: 0,
      messages: ["🐱‍💻🤑💸 أيام جولد يابن عمى الهكر"
        , '😊 ماحلى اللمة والصحبة الحلوة'
        , '😔 اللى بيروح الأقصر وميقوليش.. زعلان منك '
        , '🍭😂 المصاصة لا تزال فى جيبى يا دررش'
        , '🎉 ربنا يكرمك بالنجاح كل يوم والتانى'
        , ' 🤩💞 وكل سنة وانت طيب يا ابو العظمة'
        , '😂😉 صاحب ال19 🤩.. أراهن أنك فاكر دى']
    }
  }

  componentDidMount() {

    var typeContainer = document.querySelector('.typeContainer')
    var typeWriter = document.createElement('div')
    var text = document.createElement('div')
    typeWriter.appendChild(text)
    typeContainer.appendChild(typeWriter)

    textIntervalID = setInterval(() => {
      typeWriter.removeChild(text)
      typeWriter.classList.remove('typeWriter')
      text.textContent = ""
      if (document.querySelector('.typeContainer .typeWriter div') === null) {
        typeWriter.appendChild(text)
      }
      this.setState({
        counter: this.state.counter !== this.state.messages.length - 1 ?
          this.state.counter + 1 : 0,
        textContent: this.state.messages[this.state.counter]
      })
      text.textContent = this.state.textContent
      typeWriter.classList.add('typeWriter')
    }, 4000)
  }


  componentWillUnmount() {
    clearInterval(textIntervalID)
    console.log(textIntervalID)
  }


  render() {
    return (
      <div className="typeContainer">
      </div>
    )
  }
}


export default Text