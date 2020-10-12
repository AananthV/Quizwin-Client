import React, { Component } from 'react'
import SlideList from '../Slide/SlideList'

export default class OrderAnswer extends Component {
    render() {
        const { choices, answer } = this.props

        const choice_list = answer.split(',')
        const ordered_choices = []
        choice_list.forEach(c => {
            ordered_choices.push(choices[c - 1])
        });

        return (
            <SlideList slides={ordered_choices} number_prop="choice_number"/>
        )
    }
}