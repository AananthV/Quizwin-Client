import React, { Component } from 'react'
import { Grid, Sidebar, Menu } from 'semantic-ui-react'
import { HamburgerButton } from 'react-hamburger-button'

import Quiz from '../components/Quiz'
import Round from '../components/Round/Round'
import Question from '../components/Question/Question'
import SideMenu from '../components/SideMenu'

import HostSocket from '../helpers/socket'

const styles = {
    'fullHeightGrid': {
        'height': '100vh'
    },
    'burger': {
        'position': 'absolute',
        'left': '8px',
        'top': '8px',
        'zIndex': 1
    }
}

class Room extends Component {
    constructor(props, context) {
        super(props, context)
        this.socket = null
        this.state = {
            sidebar_visible: false,
            active_tab: 'quiz',
            room_id: undefined,
            quiz: undefined,
            round: undefined,
            question: undefined,
            participants: [],
            buzzer: undefined
        }
    }

    static getDerivedStateFromProps = (props, state) => {            
        return { room_id: props.match.params.room_id }
    }

    componentDidMount = () => {
        this.socket = new HostSocket(this.state.room_id)
        this.socket.onOpen = this.handleSocketOpen
        this.socket.onMessage = this.handleSocketMessage
    }

    componentWillUnmount = () => {
        this.socket.close()
    }

    toggleSidebar = () => {
        this.setState({ sidebar_visible: !this.state.sidebar_visible })
    }

    handleTabChange = (e, { name }) => {
        if (this.state.active_tab !== name )
            this.setState({ active_tab: name })
    }

    handleSocketOpen = () => {
        this.socket.send('request_ping')
        setTimeout(() => {
            this.socket.send('status')
        }, 1000)
    }

    handleSocketMessage = (data) => {
        switch (data.type) {
            case 'status':
                return this.handleStatus(data.status)
            case 'quiz.round':
                return this.handleRound(data.info)
            case 'quiz.question':
                return this.handleQuestion(data.info)
            case 'buzzer.info':
                return this.handleBuzzer(data.info)
            default: 
                break
        }
    }

    handleStatus = (status) => {
        this.handleQuiz(status.quiz)
        this.handleRound(status.round)
        this.handleQuestion(status.question)
        this.handleParticipants(status.participants)
    }

    handleQuiz = (quiz) => {
        this.setState({ quiz: quiz })
    }

    handleRound = (round) => {
        this.setState({ round: round })
    }

    handleQuestion = (question) => {
        this.setState({ question: question })
    }

    handleParticipants = (participants) => {
        this.setState({ participants: participants })
    }

    handleBuzzer = (buzzer) => {
        this.setState({ buzzer: buzzer })
    }

    handlePickQuestion = (question_id) => {
        if (typeof question_id === 'undefined') {
            this.socket.send('next_question')
        } else {
            this.socket.send('choose_question', { question_id: question_id })
        }
    }

    render() {
        const { sidebar_visible, active_tab, quiz, round, question, participants, buzzer } = this.state
        return (
            <>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation="push"
                        direction="left"
                        inverted
                        vertical
                        visible={sidebar_visible}
                        width="thin"
                    >
                        <Menu.Item
                            name="quiz"
                            onClick={ this.handleTabChange }
                            active={ active_tab === 'quiz' }
                        >
                            Quiz
                        </Menu.Item>
                        <Menu.Item
                            name="round"
                            onClick={ this.handleTabChange }
                            active={ active_tab === 'round' }
                        >
                            Round
                        </Menu.Item>
                        <Menu.Item
                            name="question"
                            onClick={ this.handleTabChange }
                            active={ active_tab === 'question' }
                        >
                            Question
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <div style={styles.burger}>
                            <HamburgerButton
                                open={sidebar_visible}
                                onClick={this.toggleSidebar}
                                width={32}
                                height={24}
                                strokeWidth={3}
                                style={styles.burger}
                            />
                        </div>
                        <Grid padded style={styles.fullHeightGrid} divided>
                            <Grid.Column width="14">
                                {active_tab === "quiz" && (
                                    <Quiz quiz={quiz}/>
                                )}
                                {active_tab === "round" && (
                                    <Round
                                        round={round}
                                        pick_question={this.handlePickQuestion}
                                    />
                                )}
                                {active_tab === "question" && (
                                    <Question question={question} />
                                )}
                            </Grid.Column>
                            <Grid.Column width="2">
                                <SideMenu
                                    participants={participants}
                                    buzzer={buzzer}
                                />
                            </Grid.Column>
                        </Grid>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </>
        );
    }
}

export default Room