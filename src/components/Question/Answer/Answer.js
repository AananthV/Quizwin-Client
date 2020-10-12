import React, { Component } from 'react'
import NormalAnswer from './Normal'
import MCAnswer from './MCQ'
import OrderAnswer from './Order'

export default class Answer extends Component {
    render() {
        const { type, answer, choices } = this.props

        switch (type) {
            case 'N':
                return <NormalAnswer answer={answer}/>
            case 'C':
                return <MCAnswer choices={choices} answer={answer}/>
            case 'O':
                return <OrderAnswer choices={choices} answer={answer}/>
            default:
                return <p>Answer Invalid</p>
        }
    }
}