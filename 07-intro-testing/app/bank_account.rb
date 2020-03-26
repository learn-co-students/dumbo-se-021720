class BankAccount

  # attr_accessor :name

  def initialize(name)
    @account_holder_name = name
  end

  def name=(value)
    @account_holder_name = value
  end

  def name
    @account_holder_name
  end

end