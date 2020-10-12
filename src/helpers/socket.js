class HostSocket {
    constructor(room_id) {
        this.room_id = room_id

        this.websocket = new WebSocket(
            process.env.REACT_APP_WS_URL
            + 'host/' 
            + room_id 
            + '/'
        )
        
        this.websocket.addEventListener('open', (event) => {
            this.onOpen(event)
        })

        this.websocket.addEventListener('close', (event) => {
            this.onClose(event)
        })

        this.websocket.addEventListener('error', (event) => {
            this.onError(event)
        })

        this.websocket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            this.onMessage(data)
        })
    }

    close() {
        this.websocket.close()
    }

    send(command, data) {        
        if (typeof data == 'undefined') {
            data = {}
        }
        
        data['command'] = command
        this.websocket.send(JSON.stringify(data))
    }

    onOpen(event) {
        console.log('Connected')
    }

    onClose(event) {
        console.log('Disconnected')
    }

    onError(event) {
        console.log('Error: ', event)
    }

    onMessage(data) {
        console.log(data)
    }
}

export default HostSocket