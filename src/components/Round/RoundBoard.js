import React, { Component } from 'react'
import { Header, Grid, List, Button, Segment } from 'semantic-ui-react'

import { getColor } from '../../helpers/color'

export default class RoundBoard extends Component {
    handleChooseQuestion = (e) => {
        this.props.choose_question(e.target.value)
    }

    render() {        
        const { categories } = this.props

        return (
            <Segment inverted>
                <Header textAlign="center" as="h1">The Board</Header>
                <Grid textAlign="center" divided="vertically">
                    <Grid.Row columns={categories.length}>
                        {categories.map((c, ci) => {
                            return (
                                <Grid.Column key={ci + c.name} color={getColor(ci)}>
                                    <Header as="h3">{c.name}</Header>
                                </Grid.Column>
                            )
                        })}
                    </Grid.Row>
                    <Grid.Row columns={categories.length}>
                        {categories.map((c, ci) => {
                            return (
                                <Grid.Column key={ci + c.name} color={getColor(ci)}>
                                    <List divided relaxed>
                                        {c.questions.map((q, qi) => {
                                            return (
                                                <List.Item key={qi + q.points}>
                                                    <Button onClick={this.handleChooseQuestion} value={q.id} basic color="black" disabled={q.done}>{q.points}</Button>
                                                </List.Item>
                                            )
                                        })}
                                    </List>
                                </Grid.Column>
                            )
                        })}
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}