import PropTypes from 'prop-types'
import React from 'react'

import './HallOfFame.css'

const HallOfFame = ({ entries }) => (
    <table className="hallOfFame">
        <tbody>
        {entries.map(({ date, guesses, id, player }) => (
            <tr key={id}>
                <td className="date">{date}</td>
                <td className="guesses">{guesses}</td>
                <td className="player">{player}</td>
            </tr>
        ))}
        </tbody>
    </table>
)

HallOfFame.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            guesses: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            player: PropTypes.string.isRequired,
        })
    )
}
export default HallOfFame