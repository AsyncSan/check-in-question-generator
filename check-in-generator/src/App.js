import React, { Component } from 'react';
import checkInQuestions from './checkInQuestions.json';
import checkOutQuestions from './checkOutQuestions.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      questionOpacity: 1,
      questions: checkInQuestions,
      tab: 'checkIn'
    };
  }

  generateQuestion = () => {
    this.setState({ questionOpacity: 0 });
    setTimeout(() => {
      const { questionIndex, questions } = this.state;
      if (questionIndex < questions.length - 1) {
        this.setState({ questionIndex: questionIndex + 1 });
      } else {
        this.setState({ questionIndex: 0 });
      }
      this.setState({ questionOpacity: 1 });
    }, 500);
  }

  switchTab = (tab) => {
    this.setState({ tab, questions: tab === 'checkIn' ? checkInQuestions : checkOutQuestions, questionIndex: 0 });
  }

  render() {
    const { questionIndex, questionOpacity, tab } = this.state;
    return (
      <div className="checkInCheckOutApp-container">
        <h1 className="checkInCheckOutApp-title">{tab === 'checkIn' ? 'Check-In' : 'Check-Out'} Fragen Generator</h1>
        <div className="checkInCheckOutApp-tab-container">
          <button onClick={() => this.switchTab('checkIn')} className={`checkInCheckOutApp-tab ${tab === 'checkIn' ? 'active' : ''}`}>Check-In</button>
          <button onClick={() => this.switchTab('checkOut')} className={`checkInCheckOutApp-tab ${tab === 'checkOut' ? 'active' : ''}`}>Check-Out</button>
        </div>
        <p className="checkInCheckOutApp-question" style={{ opacity: questionOpacity }}>{this.state.questions[questionIndex]}</p>
        <button onClick={this.generateQuestion} className="checkInCheckOutApp-button">Neue Frage generieren</button>
      </div>
    );
  }
}

export default App;