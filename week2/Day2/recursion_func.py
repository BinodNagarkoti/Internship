import time
def fibo(num):
  if num==0:
    return 0
  elif num==1:
    return 1  
  else:
    return fibo(num-1)+fibo(num-2)
print(fibo(6))

print("time take to Execute is ->% 2f sec"%(time.process_time()))
    