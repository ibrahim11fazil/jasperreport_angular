## API Training and Activity based api v.1

   |  SNO | API_NAME  | TYPE |  URL | REQUEST  | RESPONSE  |
   |---|---|---|---|---|---|
   | 1  | CREATE_ACTIVITY  | POST | /create-activity | CREATE_ACTIVITY_REQ   | CREATE_ACTIVITY_RES  |
   | 2  | REMOVE_ACTIVITY  | POST | /remove-activity | REMOVE_ACTIVITY_REQ   | REMOVE_ACTIVITY_RES  |
   | 2  | LIST_ACTIVITY  | POST | /list-activity | LIST_ACTIVITY_REQ   | LIST_ACTIVITY_RES  |


## CREATE_ACTIVITY

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
     

## REMOVE_ACTIVITY     

     url: /remove-activity
       header: 
            Content-Type:application/json
            Authorization: Bearer <Token>
    
## REMOVE_ACTIVITY_REQ


{
  "activityId":208  
}

                  
## REMOVE_ACTIVITY_RES   
{
    "code": 200,
    "message": "Activity Deleted",
    "status": true,
    "count": 0,
    "data": null
}




## LIST_ACTIVITY 
  url: /list-activity
       header: 
            Content-Type:application/json
            Authorization: Bearer <Token>

## LIST_ACTIVITY_RES

{
    "code": 200,
    "message": "",
    "status": true,
    "count": 0,
    "data": [
        {
            "userCreated": "Jayasree",
            "dateCreated": "2019-04-11T08:38:28.000+0000",
            "userModified": null,
            "dateModified": null,
            "activityId": 10,
            "activityName": "TestCase",
            "activeFlag": null,
            "tacCourseActivations": []
        }
}