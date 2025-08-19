import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, input, ViewEncapsulation } from '@angular/core';
import { ChatMessage as IChatMessage } from '../../chatbot.service'

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.html',
  styleUrl: './chat-message.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule
  ],
})
export class ChatMessage implements AfterViewInit {
  message = input.required<IChatMessage>()
  isLast = input.required<boolean>()

  constructor(
    private ref: ElementRef<HTMLDivElement>
  ) {}

  ngAfterViewInit() {
    if (this.isLast()) {
      this.ref.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
