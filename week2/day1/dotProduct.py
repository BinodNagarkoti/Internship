# variable init
v1 = [1.2,-2.3,4.5,6.7]
v2 = [-9.8,-8.7,7.8,6.5]
dotProduct=0
# for loop to find dot product
for i,j in zip(v1,v2):
	dotProduct += i*j
# showing the result
print('Dot product of',v1) 
print('and ',v2 ) 
print( 'is :', dotProduct)