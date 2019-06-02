import random
from time import sleep
def startGame(num):
    life=[6,5,4,3,2,1,0]
    for i in life:
        if i==0:
            print("your life is zero you lost")
            return ("the correct answer was :", num)
            
        print ("Your life is :",i)
        guess= int (input("enter your guess number: "))
        if guess==num:
            print ("you won this Number Guessing Game. ")
            return ("Congratulations!!!!")
        elif (guess>num):
            print ("sorry!! your guess is high.  ")
        else:
            print("Sorry your guess is low. ")
print(" 'Welcome to the game' ")

sleep(0.1) # Time in seconds
print("Ready to play ")
sleep(1.10) # Time in seconds
print(".")
sleep(1.10) # Time in seconds
print(".")
sleep(1.10) # Time in seconds
print(".")
sleep(1.10) # Time in seconds
char=input("Please enter the 'y' to start the game or 'x' to exit the game: ")
if (char== 'y' or 'Y'):
    print("the number will be from inclusive range 0 t0 100: ")
    print (startGame(random.randint(1,100)))
elif(char=='x' or 'X'):
    print("Byee byeeee")
else:
    print("you enter the wrong option now byee")

