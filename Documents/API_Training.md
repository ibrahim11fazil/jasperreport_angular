## API Training and Activity based api v.1

   |  SNO | API_NAME  | TYPE |  URL | REQUEST  | RESPONSE  |
   |---|---|---|---|---|---|
   | 1  | CREATE_ACTIVITY  | POST | /create-activity | CREATE_ACTIVITY_REQ   | CREATE_ACTIVITY_RES  |



## LOGIN

   url: /create-activity
   header: 
        Content-Type:application/json
        Authorization: Bearer <Token>
   
## CREATE_ACTIVITY_REQ

     {"activityName":"test activity"}


## CREATE_ACTIVITY_RES

     {
       "code": 201,
       "message": "Activity Created",
       "status": true,
       "count": 0,
       "data": {
         "userCreated": "user@gmail.com",
         "dateCreated": "2019-05-05T06:31:40.503+0000",
         "userModified": "user@gmail.com",
         "dateModified": "2019-05-05T06:31:40.503+0000",
         "activityId": 254,
         "activityName": "test activity",
         "activeFlag": null,
         "tacCourseActivations": []
       }
     }