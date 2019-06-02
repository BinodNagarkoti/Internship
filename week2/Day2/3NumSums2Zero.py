
class find3NumSums2Zero:
  
    def findNum_3(self,arr_num, arr_num_len): 
    
        found_3 = False
        for i in range(0, arr_num_len-2): 
            
            for j in range(i+1, arr_num_len-1): 
                
                for k in range(j+1, arr_num_len): 
                    
                    if (arr_num[i] + arr_num[j] + arr_num[k] == 0): 
                        print(arr_num[i], arr_num[j], arr_num[k]) 
                        found_3 = True
                
                
        # If no triplet with 0 sum  
        # found_3 in array 
        if (found_3 == False): 
            print(" not exist ") 
  
# Execuation start from here sum
arr_num = [0, 1,1,-1,-1,0,-1,0] 
arr_num_len = len(arr_num) 


find3NumSums2Zero().findNum_3(arr_num, arr_num_len) 