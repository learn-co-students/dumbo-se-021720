
# Write your code here!

def game_hash
 hash1 = {
      :home => {
          :team_name => "Brooklyn Nets",
          :colors => ["Black", "White"],
          :players => [{:player_name => "Alan Anderson",
                        :number => 0,
                        :shoe => 16,
                        :points => 22,
                        :rebounds => 12,
                        :assists => 12,
                        :steals => 3,
                        :blocks => 1,
                        :slam_dunks => 1},
                       {:player_name => "Reggie Evans",
                        :number => 30,
                        :shoe => 14,
                        :points => 12,
                        :rebounds => 12,
                        :assists => 12,
                        :steals => 12,
                        :blocks => 12,
                        :slam_dunks => 7},
                       {:player_name => "Brook Lopez",
                        :number => 11,
                        :shoe => 17,
                        :points => 17,
                        :rebounds => 19,
                        :assists => 10,
                        :steals => 3,
                        :blocks => 1,
                        :slam_dunks => 15},
                       {:player_name => "Mason Plumlee",
                        :number => 1,
                        :shoe => 19,
                        :points => 26,
                        :rebounds => 11,
                        :assists => 6,
                        :steals => 3,
                        :blocks => 8,
                        :slam_dunks => 5},
                       {:player_name => "Jason Terry",
                        :number => 31,
                        :shoe => 15,
                        :points => 19,
                        :rebounds => 2,
                        :assists => 2,
                        :steals => 4,
                        :blocks => 11,
                        :slam_dunks => 1}]},
       :away => {   
          :team_name => "Charlotte Hornets",
          :colors => ["Turquoise", "Purple"],
          :players => [{:player_name => "Jeff Adrien",
                        :number => 4,
                        :shoe => 18,
                        :points => 10,
                        :rebounds => 1,
                        :assists => 1,
                        :steals => 2,
                        :blocks => 7,
                        :slam_dunks => 2},
                       {:player_name => "Bismack Biyombo",
                        :number => 0,
                        :shoe => 16,
                        :points => 12,
                        :rebounds => 4,
                        :assists => 7,
                        :steals => 22,
                        :blocks => 15,
                        :slam_dunks => 10},
                       {:player_name => "DeSagna Diop",
                        :number => 2,
                        :shoe => 14,
                        :points => 24,
                        :rebounds => 12,
                        :assists => 12,
                        :steals => 4,
                        :blocks => 5,
                        :slam_dunks => 5},
                       {:player_name => "Ben Gordon",
                        :number => 8,
                        :shoe => 15,
                        :points => 33,
                        :rebounds => 3,
                        :assists => 2,
                        :steals => 1,
                        :blocks => 1,
                        :slam_dunks => 0},
                       {:player_name => "Kemba Walker",
                        :number => 33,
                        :shoe => 15,
                        :points => 6,
                        :rebounds => 12,
                        :assists => 12,
                        :steals => 7,
                        :blocks => 5,
                        :slam_dunks => 12}]}
   }
 hash1
end

def num_points_scored(name = nil)
  board = game_hash
  players = board[:home][:players] + board[:away][:players]
  score = nil
  if name 
     i = 0
     while i < players.length
         if players[i][:player_name] == name
            score = players[i][:points]
         end
         i += 1
     end
     if score
        score
     else
        puts "No such Player"
     end
   end
end

def shoe_size(name = nil)
  board = game_hash
  players = board[:home][:players] + board[:away][:players]
  if name 
     i = 0
     while i < players.length
         if players[i][:player_name] == name
            shoe = players[i][:shoe]
         end
         i += 1
     end
     if shoe
        shoe
     else
        puts "No such Player"
     end
   end
end

def team_colors(team = nil)
  board = game_hash
  if team
     if board[:home][:team_name] == team
        colors = board[:home][:colors]
     end
     if board[:away][:team_name] == team
        colors = board[:away][:colors]
     end
  end
  if colors
     colors
  else
     puts "No such Team"
  end
end

def team_names
  board = game_hash
  result_array = []
  result_array << board[:home][:team_name]
  result_array << board[:away][:team_name]
end  
  
def player_numbers(team = nil)
  board = game_hash
  numbers = []
  if team
     if board[:home][:team_name] == team
        i = 0
        while i < board[:home][:players].length
            numbers << board[:home][:players][i][:number]
            i += 1
        end
     end
     if board[:away][:team_name] == team
        i = 0
        while i < board[:away][:players].length
            numbers << board[:away][:players][i][:number]
            i += 1
        end
     end
  end
  if numbers
     numbers
  else
     puts "No such Team"
  end
  
end

def player_stats(name = nil)
  board = game_hash
  players = board[:home][:players] + board[:away][:players]
  stats = {}
  if name 
     i = 0
     while i < players.length
         if players[i][:player_name] == name
            stats = players[i]
         end
         i += 1
     end
  end
  stats.delete(:player_name)
  stats
end

def big_shoe_rebounds
  board = game_hash
  players = board[:home][:players] + board[:away][:players]
  shoes = [] 
  i = 0
  while i < players.length
      shoes << players[i][:shoe]
      i += 1
  end
  sorted_shoes = shoes.sort
  i = 0
  while i < players.length
      if players[i][:shoe] == sorted_shoes[-1]
         rebounts = players[i][:rebounds]
      end
      i += 1
  end
  rebounts 
end  

def most_points_scored
  board = game_hash
  players = board[:home][:players] + board[:away][:players]
  points = [] 
  i = 0
  while i < players.length
      points << players[i][:points]
      i += 1
  end
  sorted_points = points.sort
  i = 0
  while i < players.length
      if players[i][:points] == sorted_points[-1]
         name = players[i][:player_name]
      end
      i += 1
  end
  name
end

def winning_team
  board = game_hash
  points1 = 0
  points2 = 0
  i = 0
  while i < board[:home][:players].length
      points1 += board[:home][:players][i][:points]
      i += 1
  end
  i = 0
  while i < board[:away][:players].length
      points2 += board[:away][:players][i][:points]
      i += 1
  end
  if points1 > points2
    winning_team = board[:home][:team_name]
  end
  if points1 < points2
    winning_team = board[:away][:team_name]
  end
  if points1 == points2
    winning_team = "Overtime"
  end
  winning_team
end

def player_with_longest_name
  board = game_hash
  players = board[:home][:players] + board[:away][:players]
  names = []
  i = 0
  while i < players.length
      names << players[i][:player_name]
      i += 1
  end
  sorted_names = names.sort do |left, right|
       left.length <=> right.length
  end
  sorted_names[-1]
end

def long_name_steals_a_ton?
  board = game_hash
  players = board[:home][:players] + board[:away][:players]
  steals = []
  i = 0
  while i < players.length
      steals << players[i][:steals]
      i += 1
  end
  sorted_steals = steals.sort
  name = player_with_longest_name
  i = 0
  while i < players.length
      if players[i][:steals] == sorted_steals[-1] && name == players[i][:player_name]
        check = 1
      else
        check = 0
      end
      i += 1
  end
  if check > 0
    return false
  else
    return true
  end
end

  