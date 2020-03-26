require 'pry'

class App

  def call(environment_hash)

    status_code = 218 
    header = { "Content-type" =>  "text/html" }
    if environment_hash["PATH_INFO"] == "/cheese"
      body = ["<html>
        <head>
          <meta charset=\"utf-8\" />
        </head>
        <body>#{ "🧀" * 6 }</body>
        </html>"]
      else
        body = ["<html>
        <head>
          <meta charset=\"utf-8\" />
        </head>
        <body>Hello, World!</body>
        </html>"]
      end


    return [status_code, header, body]
  end

end
