import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

import RoundBoard from './RoundBoard'
import RoundList from './RoundList'

export default class Round extends Component {
    render() {
        const { round, pick_question } = this.props
        if (typeof round === 'undefined') return <p>Round not started</p>
        return (
            <>
                <Header textAlign="center" as="h1">Round {round.round_number}</Header>
                {round.type === 'B' && (<RoundBoard categories={round.categories} choose_question={pick_question}/>)}
                {round.type === 'S' && (<RoundList questions={round.questions} next_question={pick_question}/>)}
            </>
        )
    }
}