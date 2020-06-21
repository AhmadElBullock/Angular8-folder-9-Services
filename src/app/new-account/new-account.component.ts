import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountService: AccountService) {
    this.accountService.newId.subscribe(
      (theId: number) => {
        if(theId % 2 === 0) {
          alert('btw this account is Even, its Index: ' + theId);
        } else {
          alert('btw this account is Odd, its Index: ' + theId)
        }
      }
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addingAccount(accountName, accountStatus);
  }
}
