import requests
import json
from time import sleep

def countdown(t):
    while t:
        mins, secs = divmod(t, 60)
        timeformat = '{:02d}:{:02d}'.format(mins, secs)
        print(timeformat, end='\r')
        sleep(1)
        t -= 1

while 1:
    try:
        #r = requests.get('https://127.0.0.1:2999/liveclientdata/eventdata')
        r = requests.get('https://static.developer.riotgames.com/docs/lol/liveclientdata_events.json')
        data = r.json()['Events']

        for x in data:
            if x["EventName"] == "BaronKill":
                print("Baron was killed!")
                countdown(180)
        pass
    except AssertionError:
        print("Local League API not running. Has the Game started yet?")
