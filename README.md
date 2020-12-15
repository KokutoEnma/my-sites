# Personal_Website

Useful documents: [how to set up in ubuntu with apache](https://github.com/AhoyKakkoii/Django-Deploy-Doc)

#### Deploy on RaspberryPI

1. optional: collect backend dependency(in virtualenv):
```
pip freeze > requirements.txt
```

2. optional: install dependency:

```
npm run install
pip install -r requirements.txt
```

Note: there is a .env file in root directory, add in case missing:
1. if on local machine
```
FRONTEND_URL=localhost:3000
BACKEND_URL=localhost:8000
```
2. if on deployment machine
```
FRONTEND_URL=www.shaw-yu.com
BACKEND_URL=www.shaw-yu.com
```
