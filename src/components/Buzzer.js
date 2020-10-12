import React, { Component } from 'react'
import { List, Header } from 'semantic-ui-react'

export default class Buzzer extends Component {
    render () {
        const { participants, buzzer } = this.props
        return (
            <>
                <Header as="h4">
                    Buzzes
                </Header>
                <List divided relaxed>
                    {typeof buzzer != 'undefined' && buzzer.buzzes.map(p_id => {
                        return <List.Item>{participants[p_id].username}</List.Item>
                    })}
                </List>
            </>
        )
    }
}