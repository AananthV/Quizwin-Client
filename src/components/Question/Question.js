import React, { Component } from 'react'
import { Segment, Header, Menu } from 'semantic-ui-react'
import SlideList from './Slide/SlideList'
import Answer from './Answer/Answer'

export default class Question extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            active_tab: 'question_slides'
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ active_tab: name })
    }

    render () {
        const { question } = this.props
        if (typeof question === 'undefined') return <p>Question not selected</p>

        const { active_tab } = this.state

        return (
            <>
                {question.question_number != null && <Header textAlign="center">{' ' + question.question_number}</Header>}
                <Menu>
                    <Menu.Item
                        name="question_slides"
                        active={active_tab === 'question_slides'}
                        onClick={this.handleItemClick}
                        content="Question"
                    />
                    { question.type !== 'N' && (
                        <Menu.Item
                            name="choice_slides"
                            active={active_tab === 'choice_slides'}
                            onClick={this.handleItemClick}
                            content="Choices"
                        />
                    )}
                    <Menu.Item
                        name="answer_slide"
                        active={active_tab === 'answer_slide'}
                        onClick={this.handleItemClick}
                        content="Answer"
                    />
                </Menu>
                { active_tab === 'question_slides' && (
                    <Segment>
                        <Header textAlign="center">Question</Header>
                        <SlideList slides={question.slides} number_prop="slide_number"/>
                    </Segment>
                )}
                { active_tab === 'choice_slides' && question.type !== 'N' && (
                    <Segment>
                        <Header textAlign="center">Choices</Header>
                        <SlideList slides={question.choices} number_prop="choice_number"/>
                    </Segment>
                )}
                { active_tab === 'answer_slide' && (
                    <Segment>
                        <Header textAlign="center">Answer</Header>
                        <Answer type={question.type} answer={question.answer} choices={question.choices}/>
                    </Segment>
                )}
            </>
        )
    }
}