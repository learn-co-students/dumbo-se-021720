require_relative '../app/string.rb'

describe String do

  describe "#is_palindrome?" do
  
    it "returns true if the string is a palindrome" do
      expect("Never odd or even".is_palindrome?).to eq(true)
    end

    # it "can tell me if a string is a palindrome or not" do
    #   expect("Able was I ere I saw Elba".is_palindrome?).to eq(true)
    # end

    # it "can tell me if a string is a palindrome or not" do
    #   expect("Never odd or even".is_palindrome?).to eq(true)
    # end

    it "returns false if the string is not a palindrome" do
      expect("banana".is_palindrome?).to eq(false)
    end

  end

end