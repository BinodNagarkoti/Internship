
from prettytable import PrettyTable # pip bata download garnu parcha 
from bs4 import BeautifulSoup #pip bata download garnu parcha
import requests #pip bata download garnu parcha
import re

# Download IMDB's Top 250 data
ImdbUrl = 'http://www.imdb.com/chart/top'
urlResponse = requests.get(ImdbUrl)
soup = BeautifulSoup(urlResponse.text, 'lxml')

films = soup.select('td.titleColumn')

links =[] 

for a in soup.select('td.titleColumn a'):
    links.append(a.attrs.get('href'))
crew = []


for a in soup.select('td.titleColumn a'):
    crew.append(a.attrs.get('title'))
ratings =[]

for b in soup.select('td.posterColumn span[name=ir]'):
    ratings.append(b.attrs.get('data-value') )
votes= []

for b in soup.select('td.ratingColumn strong'):
    votes.append(b.attrs.get('data-value'))
imdb = []

# save  item into dict data, then putting into a list (imdb)
for index in range(0, len(films)):
    # Seperate film into: 'place', 'title', 'year', 'rating', star_cast
    film_string = films[index].get_text()
    film = (' '.join(film_string.split()).replace('.', ''))
    film_title = film[len(str(index))+1:-7]
    year = re.search('\((.*?)\)', film_string).group(1)
    place = film[:len(str(index))-(len(film))]
    data = {"film_title": film_title,
            "year": year,
            "place": place,
            "star_cast": crew[index],
            "rating": ratings[index],
            "vote": votes[index],
            "link": links[index]}
    # print(type(data['rating']))
    imdb.append(data)
x = PrettyTable()
# table name
x.field_names = ["SN","Title","Release year","Director Name","Rating"]

for item in imdb:
    # table row to n
    x.add_row([item["place"] ,item["film_title"], item["year"], item["star_cast"].split(",")[0].split("(")[0], item["rating"]])
print(x)