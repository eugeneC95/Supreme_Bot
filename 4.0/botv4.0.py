from bs4 import BeautifulSoup
import requests

page = requests.get("https://www.supremenewyork.com/shop/all")
#soup = BeautifulSoup(open('index.html'))
soup = BeautifulSoup(page.content, 'lxml')
#print(soup.prettify())
print(soup.encoding)
