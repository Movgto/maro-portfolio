import { effect, inject, Injectable, signal } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';

export interface ChatMessage {
    role: 'user' | 'bot';
    content: string;
}

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {
    chat = signal<ChatMessage[]>([]);
    private _socket = inject(Socket);
    waitingResponse = signal(false)
    $onOpenChat = new Subject<void>();

    constructor() {
        // Handles the chat storage syncronization to local storage every time it gets updated
        effect(() => {
            localStorage.setItem('chat', JSON.stringify(this.chat()));
        })

        const storedChat = localStorage.getItem('chat');
        if (storedChat) {
            const storedChatParsed = JSON.parse(storedChat) as ChatMessage[];
            this.chat.set(storedChatParsed.slice(-5));
        }

        this._socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        this._socket.on('response', (res: { message: string }) => {
            const chatMessage: ChatMessage = {
                role: 'bot',
                content: res.message
            };

            console.log(`Message received: ${res.message}`);
            this.chat.update(messages => [...messages.slice(-4), chatMessage]);

            this.waitingResponse.set(false);
        });
    }

    addMessage(message: ChatMessage) {
        this.waitingResponse.set(true);
        this.chat.update(messages => [...messages.slice(-4), message]);

        this._sendMessage(this.chat());
    }

    /**
     * Sends a message to the chatbot socketio server
     */
    private _sendMessage(chat: ChatMessage[]): void {
        this._socket.emit('message', chat);
    }    
}