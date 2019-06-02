
def freq(str): 
    # break the string into list of words 
    str_list = str.split() 
  
    # gives set of unique words 
    unique_words = set(str_list) 
    freq=[]
    lists=[]
    mapped=[]
    num=[0,1,2]
    for words in unique_words :
        freq.append(str_list.count(words))
        lists.append(words)
        
        print('Frequency of ', words , 'is :', str_list.count(words))
    zipped=zip(lists,freq)
    zipped=sorted(zipped, key=lambda x: x[1])
    l=len(zipped)-3
    cnt=0
    for top3 in zipped:
        if cnt>=l:
            print (top3)
        cnt+=1
   
str ='apple mango apple orange orange black black black green white white white apple mango guava mango mango'
      
# calling the freq function 
freq(str) 