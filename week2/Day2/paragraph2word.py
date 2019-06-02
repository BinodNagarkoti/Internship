import re 
paragraph = str(input("Enter the some paragraph"))
wordlist = re.sub('[^A-Za-z0-9]+'," ",paragraph).split()
for list in wordlist:
    print (list)