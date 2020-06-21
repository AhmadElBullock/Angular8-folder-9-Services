import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

    constructor(private loggingService: LoggingService) {}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addingAccount(name: string, status: string) {
          this.accounts.push({name, status});
          this.loggingService.messageStatus(status);
      }

      updatingStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.messageStatus(newStatus);
      }
}