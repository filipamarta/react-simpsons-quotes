import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: '',
            counts: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputCharacterHandlerChange = this.inputCharacterHandlerChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    limitCharacter(character){
        const inputCharacters = character.length;
        this.setState({
            counts: inputCharacters <= MAX_LENGTH ? MAX_LENGTH - inputCharacters : "NN"
        })
    }

    inputCharacterHandlerChange(event) {
        const newCharacter = event.target.value;
        this.limitCharacter(newCharacter);

        this.setState({
            character: newCharacter
        });
    }

    render() {
        return (
            <form className="QuoteForm" onSubmit={this.handleSubmit}>
                <label htmlFor="character">Character:</label>
                <input
                className={this.state.counts === "NN" ? "length-maximum-reached" : "length-ok"}
                    id="name"
                    name="character"
                    type="text"
                    value={this.state.character}
                    onChange={this.inputCharacterHandlerChange}
                />
                <small>
                    {this.state.counts} remaining characters
                </small>
                <p>
                    You typed: <strong>{this.state.character}</strong>
                </p>
            </form>
        );
    }
}

export default QuoteForm;