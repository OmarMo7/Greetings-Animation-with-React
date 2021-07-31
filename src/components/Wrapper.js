import React, { Component } from 'react'
import Transition from './Transition';
import Cover from './Cover';
import Shadow from './Shadow';
// import '../css/style1.css'
// import '../css/style2.css'
// import '../css/style3.css'
// import '../css/style4.css'
// import '../css/style5.css'


class Wrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      randNum: 0,
      last: 0,
      current: 0,
      indexFrom: 0,
      stylesheets: []
    }
  }




  showNext = () => {
    document.querySelector('.te-transition').classList.add('te-show')
    document.querySelector('.te-cover').classList.add('te-hide')
  }

  handleClassAdding = () => {
    document.querySelector('.te-container').addEventListener('animationend', () => {
      document.querySelector('.te-cover').classList.remove('te-hide')
      document.querySelector('.te-transition').classList.remove('te-show')
    })
  }

  // 0 -- 3 ---> flip
  // 4 -- 8 ---> rotate
  // 9 -- 11 ---> multiflip
  // 12 -- 15 ---> cube
  // 16 -- 17 ---> unfold

  componentDidMount() {

    setInterval(() => {
      var arr = [1, 4, 6, 9]
      this.setState({
        counter: (this.state.counter + 1 === arr.length) ? 0 : this.state.counter + 1,
        randNum: arr[this.state.counter]
      })

      this.showNext()
      this.handleClassAdding()
      this.importFile()
      this.updateImages()
    }, 4000)
  }

  randomNumber = (arr, arrLength) => {
    return arr[Math.floor(Math.random() * arrLength)];
  }

  updateImages = () => {
    const ImgsLength = this.props.Imgs.length
    this.state.current === ImgsLength - 1 ?
      this.setState({ current: 0, last: ImgsLength - 1 }) :
      this.setState({ last: this.state.current, current: this.state.current + 1 })
  }

  importFile = () => {
    const transName = this.props.Trans[this.state.randNum]
      .slice(0, -1);

    if (this.state.indexFrom === 0) {

      this.setState({ indexFrom: document.styleSheets.length })

    }

    if (this.state.stylesheets.length < 5) {
      import('../css/style1.css').then(() => {
        import('../css/style2.css').then(() => {
          import('../css/style3.css').then(() => {
            import('../css/style4.css').then(() => {
              import('../css/style5.css')
            })
          })
        })
      })
    }


    var styles = [...document.styleSheets]
    this.setState({
      stylesheets: styles.filter((style, index) => {
        if (index >= this.state.indexFrom) {
          return style
        }
        return null
      })
    })
    switch (transName) {
      case 'te-flip':
        this.state.stylesheets.filter((sheet, index) => {
          if (index !== 0) {
            sheet.disabled = true
          }
          else {
            sheet.disabled = false
          }
          return sheet
        })
        break;
      case 'te-rotation':
        this.state.stylesheets.filter((sheet, index) => {
          if (index !== 1) {
            sheet.disabled = true
          }
          else {
            sheet.disabled = false
          }
          return sheet
        })
        break;
      case 'te-multiflip':
        this.state.stylesheets.filter((sheet, index) => {
          if (index !== 2) {
            sheet.disabled = true
          }
          else {
            sheet.disabled = false
          }
          return sheet
        })
        break;
      case 'te-cube':
        this.state.stylesheets.filter((sheet, index) => {
          if (index !== 3) {
            sheet.disabled = true
          }
          else {
            sheet.disabled = false
          }
          return sheet
        })
        break;
      case 'te-unfold':
        this.state.stylesheets.filter((sheet, index) => {
          if (index !== 4) {
            sheet.disabled = true
          }
          else {
            sheet.disabled = false
          }
          return sheet
        })
        break;

      default:
        break;
    }

    this.state.stylesheets.forEach(sheet => { console.log(sheet.disabled) })

  }

  componentDidUpdate() {

  }
  render() {

    const Trans = this.props.Trans
    const Imgs = this.props.Imgs
    const ImgsLength = Imgs.length

    const transName = Trans[this.state.randNum]
      .slice(0, -1);

    return (
      <div className="te-wrapper">

        <Cover Imgs={Imgs} current={this.state.current} />
        <Shadow />
        <Transition lenth={ImgsLength} transName={transName} randNum={this.state.randNum}
          transType={Trans[this.state.randNum].slice(-1, Trans.length)} Trans={Trans} Imgs={Imgs} last={this.state.last} current={this.state.current} />
      </div>
    )
  }
}

export default Wrapper