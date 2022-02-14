# Gather the information form the user.
stuName = raw_input("What is the students name? ")
assignName = raw_input("What assignment are you grading? ")
gradeString = raw_input("What grade did " + stuName + " get in the " + assignName + " assignment? ")

#Convert the string value to an Int variable
gradeInt = int(gradeString)

#Grader function with if-else-elseif statement.
def Grader():
    if gradeInt>=90 and gradeInt<=100:
        print( stuName + " got an A on the " + assignName + " assignment.")
    elif gradeInt>=80 and gradeInt<=89:
        print( stuName + " got a B on the " + assignName + " assignment.")
    elif gradeInt>=70 and gradeInt<=79:
        print( stuName + " got a C on the " + assignName + " assignment.")
    elif gradeInt>=60 and gradeInt<=69:
        print( stuName + " got a D on the " + assignName + " assignment.")
    elif gradeInt>=0 and gradeInt<=59:
        print( stuName + " got a F on the " + assignName + " assignment.")
    else:
        print("Invalid Input! The Grade must be between 0-100.")


# Call the function to run
Grader()