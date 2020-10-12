import React, { Component } from 'react'
import { Header, Segment, Table, Button } from 'semantic-ui-react'

import { getRandomColor } from '../../helpers/color'

export default class RoundList extends Component {
    handleNextQuestion = (e) => {
        this.props.next_question()
    }

    render() {        
        const { questions } = this.props
        
        return (
            <Segment inverted>
                <Header textAlign="center" as="h1">Questions</Header>
                <Table inverted color={getRandomColor()} celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Points</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {questions.map((q, qi) => {
                            return (
                                <Table.Row key={'question-' + qi} disabled={q.done}>
                                    <Table.Cell>{q.question_number}</Table.Cell>
                                    <Table.Cell>{q.points}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
                <Button onClick={this.handleNextQuestion}>Next Question</Button>
            </Segment>
        )
    }
}