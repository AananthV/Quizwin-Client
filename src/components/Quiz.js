import React, { Component } from 'react'

const styles = {
    centered: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    huuuuuge: {
        fontSize: '8em',
        lineHeight: '100%',
        marginBottom: '24px'
    },
    quizTitle: {
        fontSize: '4em',
        lineHeight: '100%'
    },
    quizPassword: {
        fontSize: '3em',
        lineHeight: '100%'
    }
}

export default class Quiz extends Component {
    render() {
        const { quiz } = this.props

        return (
            <div style={styles.centered}>
                { typeof quiz === 'undefined' ? (
                    <div style={styles.huuuuuge}>Loading...</div>
                ) : (
                    <>
                        <div style={styles.huuuuuge}>Quiz</div>
                        <div style={styles.quizTitle}>Your Mom's Quiz</div>
                        <div style={styles.quizPassword}>Secret: abcd</div>
                    </>
                )}
            </div>
        )
    }
}