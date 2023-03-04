import { CompanyAccount } from './class/CompanyAccount'
import { GoldAccount } from './class/GoldAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(123, 'Pablwo', 1)
const companyAccount: CompanyAccount = new CompanyAccount('Mattheus', 2)
const goldAccount: GoldAccount = new GoldAccount('Araujo', 3)

console.log(peopleAccount)

console.log(`Nome: ${peopleAccount.getName()}`)
console.log(`Saldo: ${peopleAccount.getBalance()}`)
peopleAccount.deposit(500)
console.log(`Saldo: ${peopleAccount.getBalance()}`)
peopleAccount.withdraw(100)
console.log(`Saldo: ${peopleAccount.getBalance()}`)

console.log('##########################')
console.log(companyAccount)

console.log(`Nome: ${companyAccount.getName()}`)
console.log(`Saldo: ${companyAccount.getBalance()}`)
companyAccount.deposit(500)
console.log(`Saldo: ${companyAccount.getBalance()}`)
companyAccount.withdraw(100)
console.log(`Saldo: ${companyAccount.getBalance()}`)
companyAccount.getLoan(500)
console.log(`Saldo: ${companyAccount.getBalance()}`)

console.log('##########################')
console.log(goldAccount)

console.log(`Nome: ${goldAccount.getName()}`)
console.log(`Saldo: ${goldAccount.getBalance()}`)
goldAccount.deposit(500)
console.log(`Saldo: ${goldAccount.getBalance()}`)
goldAccount.withdraw(100)
console.log(`Saldo: ${goldAccount.getBalance()}`)
