import math
def CalculatePiValueToNTerm(val):
		piValueToN = round(math.pi,val);
		pi = str(piValueToN)
		someList = list(pi)
		return piValueToN;
Ndigit = input('Enter the N number of digits calculation for Pi: ')
roundNdigit=int(Ndigit)
print(CalculatePiValueToNTerm(roundNdigit));
