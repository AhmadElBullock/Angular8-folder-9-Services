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
          this.accounts.push({name: name, status:status})
      }
}