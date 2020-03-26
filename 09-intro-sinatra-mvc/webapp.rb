require 'sinatra'

get "/potatoes" do
  "<html>
    <head>
      <meta charset='utf-8' />
    </head>
    <body>
      #{ "🥔" * 1000 }
    </body>
  </html>"
end

get "/cheeses" do
  "<html>
    <head>
      <meta charset='utf-8' />
    </head>
    <body>
      #{ "🧀" * 1000 }
    </body>
  </html>"
end

