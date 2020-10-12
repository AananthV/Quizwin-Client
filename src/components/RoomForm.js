import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class RoomForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            room_id: ""
        };
    }

    handleChange(e) {
        if (e.target.name === "room_id") {
            this.setState({ room_id: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const socket = new WebSocket(
            process.env.REACT_APP_WS_URL
            + 'host/'
            + this.state.room_id
            + '/'
        )
        socket.onopen = (event) => {
            console.log('connected');
        }
    }

    render() {
        return (
            <Form
                onSubmit={this.handleSubmit.bind(this)}
                onChange={this.handleChange.bind(this)}
            >
                <Form.Input
                    label="Room Code"
                    type="text"
                    placeholder="Room Code"
                    name="room_id"
                />
                <Form.Button>Submit</Form.Button>
            </Form>
        );
    }
}

export default RoomForm;
