import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

export default class Participants extends Component {
    render () {
        const { participants } = this.props
        return (
            <>
                <Table sortable basic="very" celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Participant</Table.HeaderCell>
                            <Table.HeaderCell>Score</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {Object.values(participants).map((p, index) => {
                            return (
                                <Table.Row key={p.username}>
                                    <Table.Cell>
                                        {p.username}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {p.score}
                                    </Table.Cell>
                                </Table.Row>  
                            )
                        })}
                    </Table.Body>
                </Table>
            </>
        )
    }
}