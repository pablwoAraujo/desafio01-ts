import { DioAccount } from "./DioAccount"

export class GoldAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getDeposit(amount: number) {
    this.deposit(amount + 10)
  }
}
