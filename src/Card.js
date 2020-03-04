import PropTypes from 'prop-types'
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ index, card, feedback, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

Card.prototype = {
    index : PropTypes.number.isRequired,
    card: PropTypes.string.isRequired,
    feedback : PropTypes.oneOf([
        'visible',
        'hidden',
        'justMatched',
        'justMismatched'
    ]).isRequired,
    onclick: PropTypes.func.isRequired,
}

export default Card
