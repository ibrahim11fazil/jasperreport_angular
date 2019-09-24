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

curl 
     
    curl --request POST \
      --url http://localhost:9001/oauth/token \
      --header 'authorization: Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=' \
      --header 'content-type: application/x-www-form-urlencoded' \
      --cookie JSESSIONID=6DD4A12AB00DE0CAD002F96B0056BF4A \
      --data 'username=user&password=password%402018&grant_type=password&='   

## LOGIN_RESPONSE

success
        
    {
      "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiVVNFUl9DTElFTlRfUkVTT1VSQ0UiLCJVU0VSX0FETUlOX1JFU09VUkNFIl0sInVzZXJfbmFtZSI6InVzZXIiLCJwZXJtaXNzaW9ucyI6WyJjYW5fcmVhZF91c2VyIl0sInNjb3BlIjpbInJvbGVfdXNlciJdLCJyb2xlcyI6WyJyb2xlX3VzZXIiXSwiZXhwIjoxNTU2Mzg1MTU3LCJhdXRob3JpdGllcyI6WyJjYW5fcmVhZF91c2VyIiwicm9sZV91c2VyIl0sImp0aSI6IjBlZmIxOTFkLThkMjgtNGNjZS05N2RmLTZhZDA2OGRiNzZhOCIsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJjbGllbnRfaWQiOiJVU0VSX0NMSUVOVF9BUFAifQ.Qv5SONpc_Drkz4bDp8fB3CPuJy7grT69f_10wWSkDSLOJMcas9dLs1BtUxH5X3tzgwBav1YZ-DWxoypcm-fTqlEUNbvUnSyGLLHEs4AkWvEpiG_yEhSEzYpZ7kJJE5ebuukVb1x71OsjLkx6Ql5spNqmx1SLUMqNMLeZqX6Snswhplj38fvKXxEL377xPOaPou-HvynUzaj0NP-MgxN_FPsqiScefwO_AbF7gvlSMaX2kFwftFm74LCb0B_zpBLOI0QfjTmbnO9R1e6IFcfXyaUvT9RqizlqI8Wcc5eUHb36SptA-pD6gV3vZ_qa-qdhrIvp3SH5Ann-0JVe0jA0LQ",
      "token_type": "bearer",
      "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiVVNFUl9DTElFTlRfUkVTT1VSQ0UiLCJVU0VSX0FETUlOX1JFU09VUkNFIl0sInVzZXJfbmFtZSI6InVzZXIiLCJwZXJtaXNzaW9ucyI6WyJjYW5fcmVhZF91c2VyIl0sInNjb3BlIjpbInJvbGVfdXNlciJdLCJyb2xlcyI6WyJyb2xlX3VzZXIiXSwiYXRpIjoiMGVmYjE5MWQtOGQyOC00Y2NlLTk3ZGYtNmFkMDY4ZGI3NmE4IiwiZXhwIjoxNTU2MDg4NzU3LCJhdXRob3JpdGllcyI6WyJjYW5fcmVhZF91c2VyIiwicm9sZV91c2VyIl0sImp0aSI6ImEzNWQxZjA5LTMzMDItNGZmMi05NjYyLTdjOTcxMTY3ZTBiOSIsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJjbGllbnRfaWQiOiJVU0VSX0NMSUVOVF9BUFAifQ.UWprOuEo6sjjhnqzZ9jtP8H3ECdm9voIoiovqQNY-zidGLqqd3q-YNOH9kdI5_Uf6chlGGQvDTiraBWK_Lslf6-K8ZImq5gAZeubtSgUyGdgi-Ngk1JSsaK_e9CPRvgbiFl0AoqWDpz1ArZnDRlKGa9an7f11m9o1RqlmjvNMhby41NNsHq8Lpf7I2PKVCPjweg-DG9OktkWwejQqepPRHHfAk6s17FHAIJqBRADY1FyjmwBMwucRbJNEgpvB76r_IfxF8EJaf3qzqxMNOhmdlE5TWtxjtZ6L0i5LF3Cjwbr--7-k-wGSRpBdVVLvH-WZNnpq7lZtoxeugPSF8Rbpw",
      "expires_in": 299999,
      "scope": "role_user",
      "email": "user@gmail.com",
      "roles": [
        "role_user"
      ],
      "permissions": [
        "can_read_user"
      ],
      "jti": "0efb191d-8d28-4cce-97df-6ad068db76a8"
    }
    
failure 1 if header is  null
    
    {
      "timestamp": "2019-04-23T10:03:39.517+0000",
      "status": 401,
      "error": "Unauthorized",
      "message": "Unauthorized",
      "path": "/oauth/token"
    }
    
failure 2 bad user credentials

    {
      "error": "unauthorized",
      "error_description": "Bad credentials"
    }
    
failure 3 if not equals grant_type:password

    {
      "error": "invalid_scope",
      "error_description": "Empty scope (either the client or the user is not allowed the requested scopes)"
    }    
    
 
    