import React, { Component } from 'react'
import { Image, Header } from 'semantic-ui-react'

const styles = {
    image: { 
        maxHeight: "90%", 
        maxWidth: "90%", 
        width: "auto", 
        height: "auto" 
    },
};

export default class Slide extends Component {
    render () {
        const { slide } = this.props

        switch (slide.type) {
            case 'T':
                return <Header as="h1">{ slide.text }</Header>
            case 'I':
                return <Image size="large" style={ styles.image } src={ slide.image }/>
            case 'A':
                return <video controls><source src={ slide.audio }/></video>
            case 'V':
                return <video style={ styles.image } controls><source src={ slide.video }/></video>
            default:
                return <p>Invalid Slide</p>
        }
    }
}