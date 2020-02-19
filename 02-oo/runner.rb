require 'pry'
require_relative './models/bank_account'

#instances of a bank account
ginger_spice_bank_account = BankAccount.new("Geri Halliwell") #instantiation
posh_spice_bank_account = BankAccount.new("Victoria Adams")

p ginger_spice_bank_account.balance
# ginger_spice_bank_account.balance = 9_000
# # ginger_spice_bank_account.balance=(9_000)
# p ginger_spice_bank_account.balance

ginger_spice_bank_account.win_the_lottery

p posh_spice_bank_account.name 
posh_spice_bank_account.name = "Victoria Beckham"
p posh_spice_bank_account.name


binding.pry


# ginger_spice_bank_account = {
#   name: "Geri Halliwell",
#   balance_gbp: 9_000
# }

# posh_spice_bank_account = {
#   account_holder_name: "Victoria Adams",
#   balance: 100_000
# }

# def win_the_lottery(spice_girl)
#   spice_girl[:balance] += 1_000_000
#   puts "#{ spice_girl[:name] } won the lottery!"
# end

# # win_the_lottery(ginger_spice_bank_account)
# # win_the_lottery(posh_spice_bank_account)


# # win_the_lottery({
# #   name: "Melanie Brown",
# #   balance: 100_000_000
# # })


