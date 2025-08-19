import { Component, ElementRef, HostListener, inject, signal, SimpleChange, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChatbotService, ChatMessage as IChatMessage } from './chatbot.service';
import { CommonModule } from '@angular/common';
import { Socket } from 'ngx-socket-io';
import { ChatMessage } from './components/chat-message/chat-message';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    ChatMessage
  ]
})
export class Chatbot {
  chatOpen = signal(false);
  userMessage = new FormControl('', {validators: [Validators.required]});
  private _chatBotService = inject(ChatbotService);
  chat = this._chatBotService.chat;
  waitingResponse = this._chatBotService.waitingResponse;
  messageInput: ElementRef<HTMLInputElement> | undefined;

  @ViewChild('messageInput') set messageInputRef(ref: ElementRef<HTMLInputElement>) {
    this.messageInput = ref;

    this.messageInput.nativeElement.focus();
  }

  @ViewChild('chatBox') set chatBoxRef(ref: ElementRef<HTMLDivElement>) {
    ref.nativeElement.scrollTo({
      top: ref.nativeElement.scrollHeight,
      behavior: 'instant'
    })
  }

  constructor() {
    this._chatBotService.$onOpenChat.subscribe(() => {
      this._openChat();
    });
  }

  toggleChat() {
    this.chatOpen.set(!this.chatOpen());
  }

  private _openChat() {
    this.chatOpen.set(true);
  }
  
  sendMessage() {
    if (this.userMessage.invalid) {
      return;
    }
    const message: IChatMessage = {
      role: 'user',
      content: this.userMessage.value!
    };

    this.userMessage.reset('');

    this._chatBotService.addMessage(message);
  }

  keyDownHandler(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}
