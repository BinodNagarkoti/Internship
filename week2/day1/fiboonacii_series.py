
# defining the function
def recursive_fibo_function(n):
# recursive function to print series
# if n is less than or equal to 1 then it return n=1
   if n <= 1:
       return n
# other wise itcall itself to find series
   else:
       return(recursive_fibo_function(n-1) + recursive_fibo_function(n-2))

# the nterms of the series
nterms = 10
# program execution start from here  
print("Fibonacci sequence:")
for i in range(nterms):
    print(recursive_fibo_function(i))