## API for fileupload and certificate api v.1

   |  SNO | API_NAME  | TYPE |  URL | REQUEST  | RESPONSE  |
   |---|---|---|---|---|---|
   | 1  | GENERATE_CERTIFICATE  | POST | /fileupload/generate-certificate | CREATE_GENERATE_REQ   | CREATE_GENERATE_RES  |
   | 2  | LIST_CERTIFICATE  | POST | /fileupload/list-certificates | LIST_CERTIFICATE_REQ   | LIST_CERTIFICATE_RES  |


## GENERATE_CERTIFICATE

   url: /fileupload/generate-certificate
   header: 
        Content-Type:application/json
        Authorization: Bearer <Token>
   
## CREATE_GENERATE_REQ

     {
          "certificateUrl":"",
          "courseName":"Masters in kaduvara kaduvara",
          "userName":"Jayasree",
     	   "courseDate":"25/05/2019",
          "jobId":"222",
          "qId":"",
          "duration":"",
          "objective":"",
     	   "activationId":61111
     }


## CREATE_GENERATE_RES

     {
       "code": 200,
       "message": "Success",
       "status": true,
       "count": 0,
       "data": {
         "certificateId": null,
         "certificateUrl": "222_61111_24-28-2019.pdf",
         "courseDate": "25/05/2019",
         "courseName": "Masters in kaduvara kaduvara",
         "userName": "Jayasree",
         "jobId": "222",
         "qId": "",
         "duration": "",
         "objective": "",
         "certificateUid": "df04f902-67fc-4b87-982a-5462e1942c9c",
         "activationId": 61111
       }
     }
     
     
## LIST_CERTIFICATE

   url: /fileupload/list-certificates
   header: 
        Content-Type:application/json
        Authorization: Bearer <Token>
   
## LIST_CERTIFICATE_REQ

     {
     	   "activationId":612
     }


## LIST_CERTIFICATE_RES

     {
       "code": 200,
       "message": "Success",
       "status": true,
       "count": 0,
       "data": [
         {
           "certificateId": 9,
           "certificateUrl": "59112_612_24-10-2019.pdf",
           "courseDate": null,
           "courseName": null,
           "userName": null,
           "jobId": null,
           "qId": null,
           "duration": null,
           "objective": null,
           "certificateUid": null,
           "activationId": null
         },
         {
           "certificateId": 10,
           "certificateUrl": "99_612_24-12-2019.pdf",
           "courseDate": null,
           "courseName": null,
           "userName": null,
           "jobId": null,
           "qId": null,
           "duration": null,
           "objective": null,
           "certificateUid": null,
           "activationId": null
         }
       ]
     }   
