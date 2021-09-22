import React, { Component } from 'react'
var textIntervalID
class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: "",
      counter: 0,
      messages: ''
    }
  }

  detectUser = (username) => {
    switch (username) {
      case "Amr":
      case "amr":
        this.setState({ messages: this.props.messages.Amr })
        break;
      case "Darsh":
      case "darsh":
        this.setState({ messages: this.props.messages.Mostafa })
        break;

      default:
        break;
    }
  }

  componentDidMount() {

    this.detectUser(this.props.username)
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