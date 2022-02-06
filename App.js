// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'

class Info extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'David',
      rate: 100
    }
    this.clickedButton = this.clickedButton.bind(this)
  }


  clickedButton() {
    this.setState({
      rate: this.state.rate - 25
    }, function () {
      console.log('Your health is now' + this.state.rate)
    })
  }

  render() {
    return (
      <div className='body'>
        <h1>My app</h1>
        <form className='form'>
          <label>Type here</label>
          <input type="text"></input>
        </form>
        <MyApp sweet={this.clickedButton} rate={this.state.rate}/>
      </div>
    )
  }
}

class MyApp extends React.Component {
  constructor() {
    super()
    this.state = {
      userDone: "You're done!"
    }
  }

  render() {
    return (
      <div className='data'>
        <div className='you' onClick={this.props.sweet}
        >Go!</div>
        <h3>Rate: {(this.props.rate <= 0) ? this.state.userDone : this.props.rate}</h3>
      </div>
    )
  }
}

export default Info;

// function App() {


//       return(
//         <div className='body'>
//           <h1>My app</h1>
//           <form className='form'>
//             <label>Type here</label>
//           <input type="text"></input>
//           <button>Go!</button>
//         </form>
//         </div>

//       )


// }


