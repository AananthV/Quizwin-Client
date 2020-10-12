import React, { Component } from 'react'
import SlideList from '../Slide/SlideList'

export default class NormalAnswer extends Component {
    render() {
        const { answer } = this.props

        return (
            <SlideList slides={[answer]}/>
        )
    }
}