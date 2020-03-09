require 'pry'
class String

  def is_palindrome?
    String.strip_unimportant_details(self.reverse) == String.strip_unimportant_details(self)
  end

  private

  def self.strip_unimportant_details(input)
    input.to_s.downcase.gsub(" ", "")
  end

end