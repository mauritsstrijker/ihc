import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  messageService = inject(MessageService);

  //Opções disponíveis em https://primeng.org/toast > API
  private readonly defaultSeverity = 'contrast';

  constructor() {}

  notify(summary: string, detail: string, icon?: string) {
    this.messageService.add({
      severity: this.defaultSeverity,
      summary: summary,
      detail: detail,
      icon: icon,
    });
  }
}
