class BankAccount

  attr_reader :balance # getter
  # attr_writer :name

  attr_accessor :name

  @@potato = 5 # class variable
  SALAD = "dfjkhsdfhjkds" # class constant

  def initialize(name)
    @name = name
    @balance = 0
  end

  # def balance
  #   @balance
  # end

  # # setter
  # def name=(value)
  #   @name = value
  # end

  # def name
  #   @name
  # end

  def win_the_lottery
    # add a million to the balance
    @balance += 1_000_000

    # puts something
    puts "#{ @name } won the lottery!"

    # return the new value
    @balance
  end

end