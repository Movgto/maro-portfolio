import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ChatbotService } from '../../shared/components/chatbot/chatbot.service';

@Component({
  selector: 'app-contact',
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  chatService = inject(ChatbotService)

  openChat() {
    this.chatService.$onOpenChat.next();
  }
}
