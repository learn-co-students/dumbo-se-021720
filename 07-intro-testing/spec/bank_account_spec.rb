require_relative '../app/bank_account.rb'

describe BankAccount do

  # before do
  #   @posh_spice_account = BankAccount.new("Victoria Adams")
  # end

  let(:posh_spice_account)  {
    BankAccount.new("Victoria Adams")
  }

  describe "#name" do
  
    it "can read the name on the account" do
      expect(posh_spice_account.name).to eq("Victoria Adams")
    end

  end

  describe "#name=" do
  
    it "can change the name on the account" do
      posh_spice_account.name = "Victoria Beckham"
      # expect(@posh_spice_account.instance_variable_get(:@name)).to eq("Victoria Beckham") #brittle
      expect(posh_spice_account.name).to eq("Victoria Beckham")
    end

  end

end