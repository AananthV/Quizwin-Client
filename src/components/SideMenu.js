import React, { Component } from 'react'
import { Icon, Menu, Segment } from 'semantic-ui-react'

import Participants from './Participants'
import Buzzer from './Buzzer'

export default class SideMenu extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            active: 'participants'
        }
    }

    handleItemClick = (event, { name }) => {
        this.setState({ active: name })
    }

    render() {
        const { active } = this.state
        const { participants, buzzer } = this.props
        return (
            <>
                <Menu attached="top" pointing secondary widths={2}>
                    <Menu.Item
                        name="participants"
                        active={ active === 'participants' }
                        onClick={this.handleItemClick}
                        content={<Icon name="users"/>}
                    />
                    <Menu.Item
                        name="buzzer"
                        active={ active === 'buzzer' }
                        onClick={this.handleItemClick}
                        content={<Icon name="bullhorn"/>}
                    />
                </Menu>
                <Segment attached="bottom">
                    { active === 'participants' && <Participants participants={ participants }/> }
                    { active === 'buzzer' && <Buzzer participants={ participants } buzzer={ buzzer }/> }
                </Segment>
            </>
        )
    }
}