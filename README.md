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
```
FRONTEND_URL=localhost:3000
BACKEND_URL=localhost:8000
ENVIRONMENT=development
```
