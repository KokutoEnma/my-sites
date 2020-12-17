import { server } from '../config'
export default class Socket {
    constructor(directory) {
        this.socket = new WebSocket(`ws://localhost:8000/ws/${directory}/`)
    }

    on = callback => {
        this.socket.onmessage = e => {
            const data = JSON.parse(e.data);
            callback(data['message'])
        }
    }

    emit = msg => {
        this.socket.send(JSON.stringify({
            'message': msg
        }));
    }

    connect = callback => {
        this.socket.onopen = e => {
            if (e.type === "open")
                callback('socket connection success')
        }
    }
}