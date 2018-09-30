import pyautogui
import numpy as np
from PIL import ImageGrab
import cv2
import time
name = 'CHAN YOU CHUN'
email = 'ilvinchan95@hotmail.com'
tel = '07014338763'
post = '1340084'
add = '東葛西5-36-10'
card = '4624370172144375'
exp1 = '10'
exp2 = '2021'
cvv = '276'
def screen_record():
    last_time = time.time()
    i = 0
    status = ""
    pyautogui.hotkey('alt', 'tab', 'tab', interval=0.1)
    while(True):
        printscreen =  np.array(ImageGrab.grab(bbox=(0,0,1080,700)))
        #print('loop took {} seconds'.format(time.time()-last_time))
        last_time = time.time()
        #time.sleep(0.0001)
        if i == 14:
            break
        if i == 0:
            img = "small.png"
            status = "medium"
            print(i,"medium")
        elif i == 1:
            img = "cart.png"
            status = "cart"
            print(i,"cart")
        elif i == 2:
            img = "cyumon.png"
            status = "cyumon"
            print(i,"cyumon")
        elif i == 3:
            img = "name.png"
            status = "name"
            print(i,"name")
        elif i == 4:
            img = "mail.png"
            status = "mail"
            print(i,"mail")
        elif i == 5:
            img = "tel.png"
            status = "tel"
            print(i,"tel")
        elif i == 6:
            img = "post.png"
            status = "post"
            print(i,"post")
        elif i == 7:
            img = "ku.png"
            status = "ku"
            print(i,"ku")
        elif i == 8:
            img = "address.png"
            status = "address"
            print(i,"address")
        elif i == 9:
            img = "card.png"
            status = "card"
            print(i,"card")
        elif i == 10:
            img = "exp.png"
            status = "exp"
            print(i,"exp")
        elif i == 11:
            img = "cvv.png"
            status = "cvv"
            print(i,"cvv")
        elif i == 12:
            img = "check.png"
            status = "check"
            print(i,"check")
        elif i == 13:
            img = "buy.png"
            status = "buy"
            print(i,"buy")
        else:
            break
        i += 1
        new_screen = process_img(printscreen,img,status)
        #cv2.imshow('window',cv2.cvtColor(new_screen, cv2.COLOR_BGR2RGB))
        if cv2.waitKey(25) & 0xFF == ord('q'):
            cv2.destroyAllWindows()
            break
def process_img(image,img,status):
    processed_img = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    #processed_img =  cv2.Canny(processed_img, threshold1 = 200, threshold2=300)
    template = cv2.imread(img, cv2.IMREAD_GRAYSCALE)
    w, h = template.shape[::-1]
    res = cv2.matchTemplate(processed_img,template,cv2.TM_CCOEFF_NORMED)
    loc = np.where( res >= 0.8)
    for pt in zip(*loc[::-1]):
        cv2.rectangle(image, pt, (pt[0] + w, pt[1] + h), (255,0,0),1)
        if status == "medium":
            pyautogui.click(pt[0]+9, pt[1]+9)
            pyautogui.typewrite('m')
            pyautogui.click(pt[0]+9, pt[1]+9)
            break
        elif status == "cart":
            pyautogui.click(pt[0]+9, pt[1]+9)
            time.sleep(0.1)
            break
        elif status == "cyumon":
            pyautogui.click(pt[0]+9, pt[1]+9)
            time.sleep(0.2)
            break
        elif status == "name":
            pyautogui.click(pt[0]+130, pt[1]+9)
            pyautogui.typewrite(name)
            break
        elif status == "mail":
            pyautogui.click(pt[0]+130, pt[1]+9)
            pyautogui.typewrite(email)
            break
        elif status == "tel":
            pyautogui.click(pt[0]+130, pt[1]+9)
            pyautogui.typewrite(tel)
            break
        elif status == "post":
            pyautogui.click(pt[0]+130, pt[1]+9)
            pyautogui.typewrite(post)
            pyautogui.click(pt[0]+10, pt[1]+9)
            break
        elif status == "ku":
            pyautogui.click(pt[0]+200, pt[1]+9)
            pyautogui.press('backspace')
            pyautogui.press('backspace')
            pyautogui.press('backspace')
            break
        elif status == "address":
            pyautogui.click(pt[0]+10, pt[1]+10)
            pyautogui.typewrite(add)
            break
        elif status == "card":
            pyautogui.click(pt[0]+110, pt[1]+10)
            pyautogui.typewrite(card)
            pyautogui.click(pt[0]+10, pt[1]+10)
            break
        elif status == "exp":
            pyautogui.click(pt[0]+110, pt[1]+10)
            pyautogui.typewrite(exp1)
            pyautogui.click(pt[0]+180, pt[1]+10)
            pyautogui.typewrite(exp2)
            pyautogui.click(pt[0]+18, pt[1]+10)
            break
        elif status == "cvv":
            pyautogui.click(pt[0]+110, pt[1]+10)
            pyautogui.typewrite(cvv)
            break
        elif status == "check":
            pyautogui.click(pt[0]+5, pt[1]+5)
            break
        elif status == "buy":
            pyautogui.moveTo(pt[0]+5, pt[1]+5,duration=0.3)
            break
        else:
            break
    return image
screen_record()
