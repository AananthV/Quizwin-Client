import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

import Slide from './Slide'

import { getRandomColor } from '../../../helpers/color'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const styles = {
    'slide': {
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        alignContent: 'center',
        flexWrap: "wrap"
    },
    'innerSlide': {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    },
    'number': {
        position: 'absolute',
        left: '16px',
        top: '16px',
        fontSize: '2em',
    }
}

export default class SlideList extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            current_slide: 0
        }
    }

    selectSlide = (slide_number) => {
        this.setState({ current_slide: slide_number })
    }

    getNumber = (slide, number_prop) => {
        if (typeof number_prop === 'undefined') {
            return 1
        } else if (number_prop === 'choice_number') {
            return String.fromCharCode(slide[number_prop] + 64)
        } else {
            return slide[number_prop]
        }
    }

    render () {
        const { slides, number_prop } = this.props

        const divide_factor = Math.ceil(slides.length / 2)
        const inner_width = Math.round(100 / divide_factor) + "%"
        
        return (
            <Carousel selectedItem={this.state.current_slide} showThumbs={false} showStatus={false} showIndicators={false} useKeyboardArrows>
                {slides.map(s => {
                    return (
                        <div style={{...styles.slide, backgroundColor: getRandomColor()}}>
                            <Slide slide={s.slide} key={this.getNumber(s, number_prop)}/>
                            <div style={styles.number}>{this.getNumber(s, number_prop)}</div>
                        </div>
                    )
                })}
                { slides.length > 1 && (
                    <div style={styles.slide}>
                        {slides.map((s, i) => {
                            return (
                                <div onClick={() => this.selectSlide(i)} style={{width: inner_width, height: "50%", backgroundColor: getRandomColor(), ...styles.innerSlide}}>
                                    <Slide slide={s.slide} key={this.getNumber(s, number_prop)}/>
                                    <div style={styles.number}>{this.getNumber(s, number_prop)}</div>
                                </div>
                            )
                        })}             
                    </div>
                )}
            </Carousel>
        )
    }
}