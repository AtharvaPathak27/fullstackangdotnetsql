import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { CommonModule } from '@angular/common';
import { Message } from './message.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule] // <-- Add HttpClientModule here
})
export class AppComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(data => {
      this.messages = data;
    });
  }
}
