# Read the file
#filed = File.readlines("thefile.txt")

# Read file per word (Separated by spaces)
#filed = File.read("thefile.txt").split(" ")

#filed.each{|line| puts line}

File.write("secondfile.txt", "this is a test")

puts "what is your name?"

name = gets

puts "what is your age?"

age = gets

puts "hey " + name + " your age is " + age