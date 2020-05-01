class ApplicationController < ActionController::API

  def auth_header
    request.headers["Authorization"]
  end

  def encode_token(id)
    JWT.encode({ user_id: id}, "super_secret")
  end

  def decode_token
    begin
      JWT.decode(auth_header, "super_secret")[0]["user_id"]
    rescue
      nil
    end
  end

end
