import React from 'react';
import PropTypes from 'prop-types';
import './QuoteCard.css';


class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavourite: false
        };
        this.clickEventHandler = this.clickEventHandler.bind(this);
    }


    clickEventHandler(event) {
        const newFavourite = !this.state.isFavourite;
        this.setState({
            isFavourite: newFavourite
        });
    };

    render() {
        return (
            <figure className="QuoteCard">
                <img src={this.props.image} alt={this.props.character} />
                <figcaption>
                    <blockquote>{this.props.quote}</blockquote>
                    <p>
                        <cite>{this.props.character}</cite>
                        <span
                            className={this.state.isFavourite ? "is-favorite" : ""}
                            onClick={this.clickEventHandler}
                        >&#9733;</span>
                    </p>
                </figcaption>
            </figure>
        );
    }
}

QuoteCard.proTypes = {
    characterFirstName: PropTypes.string.isRequired,
    characterLastName: PropTypes.string.isRequired,
}

export default QuoteCard;
