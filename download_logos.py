import urllib.request
import json
import os

logos = {
    "ipb": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Logo_of_Bogor_Agricultural_University_%28IPB%29.svg/1024px-Logo_of_Bogor_Agricultural_University_%28IPB%29.svg.png",
    "kementan": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo_Kementerian_Pertanian_Republik_Indonesia.svg/1024px-Logo_Kementerian_Pertanian_Republik_Indonesia.svg.png",
    "indofood": "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Indofood_logo.svg/1024px-Indofood_logo.svg.png",
    "pelindo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logo_Pelindo.svg/1024px-Logo_Pelindo.svg.png",
    "bri": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/1024px-BRI_2020.svg.png",
    "pln": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_PLN.svg/1024px-Logo_PLN.svg.png"
}

os.makedirs('public/images/logos', exist_ok=True)
req_headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in logos.items():
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as response, open(f'public/images/logos/{name}.png', 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded {name}.png")
    except Exception as e:
        print(f"Failed {name}: {e}")
