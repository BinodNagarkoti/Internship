
from prettytable import PrettyTable

from bs4 import BeautifulSoup
import requests
import re

# Download IMDB's Top 250 data
ImdbUrl = 'http://www.imdb.com/chart/top'
urlResponse = requests.get(ImdbUrl)
soup = BeautifulSoup(urlResponse.text, 'lxml')

movies = soup.select('td.titleColumn')

links =[] 
# links=[a.attrs.get('href') for a in soup.select('td.titleColumn a')]
for a in soup.select('td.titleColumn a'):
    links.append(a.attrs.get('href'))
crew = []
# crew = [a.attrs.get('title') for a in soup.select('td.titleColumn a')]

for a in soup.select('td.titleColumn a'):
    crew.append(a.attrs.get('title'))
ratings =[]
# ratings = [b.attrs.get('data-value') for b in soup.select('td.posterColumn span[name=ir]')]
for b in soup.select('td.posterColumn span[name=ir]'):
    ratings.append(b.attrs.get('data-value') )
votes= []
# votes = [b.attrs.get('data-value') for b in soup.select('td.ratingColumn strong')]
for b in soup.select('td.ratingColumn strong'):
    votes.append(b.attrs.get('data-value'))
imdb = []

# Store each item into dictionary (data), then put those into a list (imdb)
for index in range(0, len(movies)):
    # Seperate movie into: 'place', 'title', 'year'
    movie_string = movies[index].get_text()
    movie = (' '.join(movie_string.split()).replace('.', ''))
    movie_title = movie[len(str(index))+1:-7]
    year = re.search('\((.*?)\)', movie_string).group(1)
    place = movie[:len(str(index))-(len(movie))]
    data = {"movie_title": movie_title,
            "year": year,
            "place": place,
            "star_cast": crew[index],
            "rating": ratings[index],
            "vote": votes[index],
            "link": links[index]}
    # print(type(data['rating']))
    imdb.append(data)
x = PrettyTable()

x.field_names = ["Title","Release year","Director Name","Rating"]
# print("%-s   %-10s  %-10s  %-10s  %-10s" %("SN","Title","Release year","Director Name","Rating"))
for item in imdb:
    x.add_row([item["movie_title"], item["year"], item["star_cast"].split(",")[0].split("(")[0], item["rating"]])
print(x)