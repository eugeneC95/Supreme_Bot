import pyautogui
import numpy as np
from PIL import ImageGrab
import cv2
import time

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
        if i == 5:
            img = "cloth.png"
            status = "cloth"
            print(i,"cloth")
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
        if status == "cloth":
            pyautogui.moveTo(pt[0]+5, pt[1]+5,duration=0.3)
            break
        elif status == "buy":
            pyautogui.moveTo(pt[0]+5, pt[1]+5,duration=0.3)
            break
        else:
            break
    return image
screen_record()
