export class AccountService {
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
          this.accounts.push({name, status})
      }

      updatingStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
      }
}