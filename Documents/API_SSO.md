## SSO based api v.1

   |  SNO | API_NAME  | TYPE |  URL | REQUEST  | RESPONSE  |
   |---|---|---|---|---|---|
   | 1  | LOGIN  | POST | /oauth/token | LOGIN_REQ   | LOGIN_RESPONSE  |



## LOGIN

   url: /oauth/token
   
## LOGIN_REQ OAuth2

    Content-Type: application/x-www-form-urlencoded
    username:user
    password:password@2018
    grant_type:password
    
    
BASIC 
    
    user: USER_CLIENT_APP
    Password: password@2018
    
or in header 
    
    Authorization: Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=

SAMPLE (url is encoded)

    > POST /oauth/token HTTP/1.1
    > Host: localhost:9001
    > User-Agent: insomnia/6.3.2
    > Cookie: JSESSIONID=6DD4A12AB00DE0CAD002F96B0056BF4A
    > Content-Type: application/x-www-form-urlencoded
    > Authorization: Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=
    > Accept: */*
    > Content-Length: 60
    | username=user&password=password%402018&grant_type=password&=


## LOGIN_RESPONSE

        
    {
     "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiVVNFUl9DTElFTlRfUkVTT1VSQ0UiLCJVU0VSX0FETUlOX1JFU09VUkNFIl0sInVzZXJfbmFtZSI6InVzZXIiLCJzY29wZSI6WyJyb2xlX3VzZXIiXSwiZXhwIjoxNTU2MzEzMjA0LCJhdXRob3JpdGllcyI6WyJjYW5fcmVhZF91c2VyIiwicm9sZV91c2VyIl0sImp0aSI6IjFjY2Q4MzdkLWE0ZTItNDJkZi1iYzg3LThlY2ZhMDgzMjc5OSIsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJjbGllbnRfaWQiOiJVU0VSX0NMSUVOVF9BUFAifQ.CQvPv8I8LNcxkOqtY9AoZ_NqyoBcUYQWZH8cwdBU_x_rio9cvE-M8ped2gh_b05VFO5X87_ZAjYfN43k3GRqPU6eU-jysTapuesQ7SWslRxmnpayaZceHwm5UMYrSlG1HhpBKKgZcitYZb_5kcDl0WVdLlZwh4EQEZcy4VDS5ynvnjb1fPo6qDAIMGDWb4ZY2U1cAHnIX-F7GsRJ0RL0wbE92s1CxdeO4v92QM-IFl6W1I6QO0nJwAcYsbOraAYVtAZt6ZjwY1YpXU3GtvLvjzwDbc5iZtpdZS03Z7EM02KEv5UhjbYpokii978hJNgbOEBKUXe3XCVGHFObF70yAA",
     "token_type": "bearer",
     "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiVVNFUl9DTElFTlRfUkVTT1VSQ0UiLCJVU0VSX0FETUlOX1JFU09VUkNFIl0sInVzZXJfbmFtZSI6InVzZXIiLCJzY29wZSI6WyJyb2xlX3VzZXIiXSwiYXRpIjoiMWNjZDgzN2QtYTRlMi00MmRmLWJjODctOGVjZmEwODMyNzk5IiwiZXhwIjoxNTU2MDE2ODA0LCJhdXRob3JpdGllcyI6WyJjYW5fcmVhZF91c2VyIiwicm9sZV91c2VyIl0sImp0aSI6ImQyYjIwNzk4LTNiMjctNDA1MC05YjcwLTNmN2ExYWM1YzQwYiIsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJjbGllbnRfaWQiOiJVU0VSX0NMSUVOVF9BUFAifQ.ZJuTJ-E5mikgfuO1Y2MLfPCVYq4wvP-XQRfcE88LdZ-PhNDdeNpchjJh4jun8PubnCNnxD83d9SkKeUNpSGrbnJAlfaAI4NS85fQEdjvqd_cRU9J1XPwWSx5jVOOTs1aPmzPR3KQkcx3gm69bl8v8cQPfX4X-zUS7oZDNM03smZEiCMhHpy97piLcgdXZAL99WVLs3BmpREceDq9iPue60HlX6MKLV5ksANRisThn5bBmRcdITNnQdM-IFLsXLKtiLlgWDRdNBEWPsFKeMV1a392e4SD1xG9r_OLnGnh6cdtt8q20laYi_sAtA21jWDY_Yc9KXnoq0YX7Lyh_egizw",
     "expires_in": 299999,
     "scope": "role_user",
     "email": "user@gmail.com",
     "jti": "1ccd837d-a4e2-42df-bc87-8ecfa0832799"
    }