import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteForm from './components/QuoteForm';
import './App.css';
import axios from 'axios';

const defaultSimpsonsQuotes = [
  {
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: defaultSimpsonsQuotes[0].quote,
      character: defaultSimpsonsQuotes[0].character,
      image: defaultSimpsonsQuotes[0].image
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }

  getSimpsons() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(res => res.data)
      .then(data => {
        console.log(data[0].quote);
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="quotes">
          {/* <QuoteForm /> */}
          <button className="btn" type="button" onClick={this.getSimpsons}>Click to have another quote!</button>
          <QuoteCard image={this.state.image} quote={this.state.quote} character={this.state.character} />
        </div>
      </div>
    );
  }
}

export default App;
