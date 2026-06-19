import requests
url = input("Enter URL: ")
try:
    response = requests.get(url)
    if response.status_code == 200:
        print("Application is UP")
    else:
        print("Application is DOWN")
except:
    print("Application is Unreachable")
