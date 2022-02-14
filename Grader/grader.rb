# Get information from user
puts "What is the students name?"
stuName = gets.chomp
puts "What assignment are you grading?"
assignName = gets.chomp
puts "What grade did #{stuName} get in the #{assignName} assignment?"
gradeInt = gets.chomp.to_i # convert to integer
 
#If-Elseif-Else conditional to find the correct grade
if gradeInt >= 90 and gradeInt <= 100
    puts "#{stuName} got an A on the #{assignName} assignment."
elsif gradeInt >= 80 and gradeInt <= 89
    puts "#{stuName} got a B on the #{assignName} assignment."
elsif gradeInt >= 70 and gradeInt <= 79
    puts "#{stuName} got a C on the #{assignName} assignment."
elsif gradeInt >= 60 and gradeInt <= 69
    puts "#{stuName} got a D on the #{assignName} assignment."
elsif gradeInt >= 0 and gradeInt <= 59
    puts "#{stuName} got a F on the #{assignName} assignment."
else
    puts "Invalid Input! The Grade must be between 0-100."
end