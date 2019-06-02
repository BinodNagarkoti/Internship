import time
# total number of beerBottles
beerBottles = 99
while beerBottles > 0:
    print(beerBottles,"bottles of beer on the wall")
    print(beerBottles,"bottles of beer")
    print("Take one down, pass it around")
    beerBottles = beerBottles - 1
    print(beerBottles,"bottles of beer on the wall")
    time.sleep(1)