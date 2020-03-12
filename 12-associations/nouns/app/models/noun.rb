class Noun < ActiveRecord::Base

  # it's all for freeeeeeeee
  # def initialize(args)
  #   args.each do |key, value|
  #     self.send(key.to_sym + "=", value)
  #   end
  # end

  def self.search(query)
    where("name like ? ", "%#{ query }%")
  end

end