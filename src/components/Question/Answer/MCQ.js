import React, { Component } from 'react'
import SlideList from '../Slide/SlideList'

export default class MCAnswer extends Component {
    render() {
        const { choices, answer } = this.props

        return (
            <SlideList slides={[choices[answer - 1]]} number_prop="choice_number"/>
        )
    }
}