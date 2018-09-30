import keyboard
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import TimeoutException, NoSuchElementException

#from selenium.webdriver.chrome.options import Options

#options = webdriver.ChromeOptions()
#prefs = {"profile.managed_default_content_settings.images":1}
# options.add_experimental_option("prefs",prefs)
# options.add_argument(r'--user-data-dir=C:\Users\EUGENE\AppData\Local\Google\Chrome\User Data')
# options.add_argument('disable-infobars')
#options.add_argument("--disable-extensions")
#options.add_argument("--start-maximized")
#driver = webdriver.Firefox('E:/selenium/geckodriver.exe') #driver = webdriver.Firefox('E:\selenium\chromedriver.exe',options=options)
driver = webdriver.Firefox()



#int
name = "CHAN YOU CHUN"
email = 'ilvinchan95@hotmail.com'
tel = '07014338763'
post = '1340084'
add = '5-36-10'
card = '4624370172144375'
exp1 = '10'
exp2 = '2021'
cvv = '276'
name = "CHAN YOU CHUN"
email = 'ilvinchan95@hotmail.com'
tel = '07014338763'
post = '1340084'
add = '5-36-10'
card = '4624370172664325'
exp1 = '08'
exp2 = '2020'
cvv = '275'
#s_list = []

wishlists=['Ef6fucti3ki'] #8zw7hx1zgcy #Y4rnmxigxge #Ng3hl5ge5mo #Ef6fucti3ki
link = 'https://www.supremenewyork.com/shop/all/accessories' #tops_sweaters #jackets #bags #accessories
new = 0

#def sizing():
    #selecting size

    #if driver.find_element_by_xpath('//input[@id="size"]').get_attribute('type') == 'hidden':
        #pass
    # driver.find_element_by_xpath('//*[@id="size"]').get_attribute('name') == 'size':
    # selects = Select(driver.find_element_by_xpath('//*[@id="size"]'))
    # for select in selects.options:
    #     s_list.append(select.text)
    # print(s_list[0])
    # selects.select_by_visible_text(s_list[0])
def buying():
    #add cart
    cart = driver.find_element_by_xpath('//*[@id="add-remove-buttons"]/input[1]')
    ActionChains(driver).click(cart).perform()
    print("Added to Cart")
    sleep(0.2)
    h_checkout = driver.find_element_by_xpath('//*[@id="cart"]/a[2]')
    ActionChains(driver).click(h_checkout).perform()
    print("heading to checkout")
    #filling form
    names = driver.find_element_by_xpath('//*[@id="order_billing_name"]')
    names.send_keys(name)
    emails = driver.find_element_by_xpath('//*[@id="order_email"]')
    emails.send_keys(email)
    tels = driver.find_element_by_xpath('//*[@id="order_tel"]')
    tels.send_keys(tel)
    posts = driver.find_element_by_xpath('//*[@id="order_billing_zip"]')
    posts.send_keys(post)
    adds = driver.find_element_by_xpath('//*[@id="order_billing_address"]')
    adds.send_keys(add)
    cards = driver.find_element_by_xpath('//*[@id="cnb"]')
    cards.send_keys(card)
    exp1s = driver.find_element_by_xpath('//*[@id="credit_card_month"]')
    exp1s.send_keys(exp1)
    exp2s = driver.find_element_by_xpath('//*[@id="credit_card_year"]')
    exp2s.send_keys(exp2)
    cvvs = driver.find_element_by_xpath('//*[@id="vval"]')
    cvvs.send_keys(cvv)
    driver.find_element_by_xpath('//*[@id="order_terms"]').click()
    #quiting
    sleep(30)
    #driver.quit()

def checking():
    article_elements = driver.find_elements_by_tag_name('article')
    for i in range(1,len(article_elements)+1):
        for j in range(0,len(wishlists)):
            if driver.find_element_by_xpath('//*[@id="container"]/article['+str(i)+']/div[1]/a[1]/img[1]').get_attribute('alt') == wishlists[j]:
                url = driver.find_element_by_xpath('//*[@id="container"]/article['+str(i)+']/div[1]/a[1]').get_attribute('href')
                #open tab
                driver.execute_script('window.open()')
                driver.switch_to.window(driver.window_handles[1])
                driver.get(url)
                sleep(0.1)
                #sizing()
                #sleep(0.2)
                buying()
            else:
                print(i, wishlists)
def testing():
    print("haha")
#refreshing till new item get
#link = "https://patrickhlauke.github.io/recaptcha/"
while new == 0:
    print(new, "Not yet found,Still refreshing")
    driver.get(link);
    try:
        if keyboard.is_pressed('q'):
            print('User Input,getting Out')
            break
        else:
            #searching from my list
            #testing()
            #break
            checking()
    except:
         break
else:
    driver.quit()
    quit()
    #print()
