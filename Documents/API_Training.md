## API Training and Activity based api v.1

   |  SNO | API_NAME  | TYPE |  URL | REQUEST  | RESPONSE  |
   |---|---|---|---|---|---|
   | 1  | CREATE_ACTIVITY  | POST | /create-activity | CREATE_ACTIVITY_REQ   | CREATE_ACTIVITY_RES  |
   | 2  | REMOVE_ACTIVITY  | POST | /remove-activity | REMOVE_ACTIVITY_REQ   | REMOVE_ACTIVITY_RES  |
   | 3  | LIST_ACTIVITY  | POST | /list-activity | LIST_ACTIVITY_REQ   | LIST_ACTIVITY_RES  |


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

  ## SEARCH_ACTIVITY 
     url: /search-activity
       header: 
            Content-Type:application/json
            Authorization: Bearer <Token>
## SEARCH_ACTIVITY_REQ
      {
        "activityName":"TestCase1"
       }

## SEARCH_ACTIVITY_RES
     {
    "code": 200,
    "message": "Resource Found",
    "status": true,
    "count": 0,
    "data": [
        {
            "userCreated": "user@gmail.com",
            "dateCreated": "2019-05-08T07:50:10.000+0000",
            "userModified": "user@gmail.com",
            "dateModified": "2019-05-08T07:50:10.000+0000",
            "activityId": 408,
            "activityName": "TestCase",
            "activeFlag": null,
            "tacCourseActivations": []
        }]
    }

 ## CREATE_COURSE 

     url: /create-activity
       header: 
            Content-Type:application/json
            Authorization: Bearer <Token>

## CREATE_COURSE_REQ
     {
    "courseName":"NewCourse1"
     }
## CREATE_COURSE_RES

    {
    "code": 201,
    "message": "Course Created",
    "status": true,
    "count": 0,
    "data": {
        "userCreated": "user@gmail.com",
        "dateCreated": "2019-05-09T07:29:06.347+0000",
        "userModified": "user@gmail.com",
        "dateModified": "2019-05-09T07:29:06.347+0000",
        "courseId": 5,
        "tacCourseCategory": null,
        "courseName": "NewCourse1",
        "duration": null,
        "durationFlag": null,
        "objective": null,
        "numberofhours": null,
        "activityId": null,
        "prerequisitesId": null,
        "subcourseFlag": null,
        "locationType": null,
        "courseStatus": null,
        "activeFlag": null,
        "offset": 0,
        "limit": 0,
        "coordinatorJobId": null,
        "tacCoursePrerequisiteses": [],
        "tacCourseGuidelineses": [],
        "tacCourseActivations": [],
        "tacCourseAudiences": [],
        "tacActivities": [],
        "tacCourseOutcomes": [],
        "tacCourseDates": []
    }
}

## LINK_COURSE_WITH_ACTIVITY 
     url: /link-course-with-activity
       header: 
            Content-Type:application/json
            Authorization: Bearer <Token>
## LINK_COURSE_WITH_ACTIVITY_REQ
        
        {
      "courseId":4,
      "courseName":"NewCourse",
      "tacActivities":
    [
      {
      "activityId":1,
      "activityName":"Activity test"
      
      },
      {
       "activityId":2,
      "activityName":"Activity test1"
      }
    ]
    }

## LINK_COURSE_WITH_ACTIVITY_RES

     {
    "code": 200,
    "message": "",
    "status": true,
    "count": 0,
    "data": {
        "userCreated": "user@gmail.com",
        "dateCreated": "2019-05-08T10:41:36.000+0000",
        "userModified": "user@gmail.com",
        "dateModified": "2019-05-09T07:18:25.390+0000",
        "courseId": 4,
        "tacCourseCategory": null,
        "courseName": "NewCourse",
        "duration": null,
        "durationFlag": null,
        "objective": null,
        "numberofhours": null,
        "activityId": null,
        "prerequisitesId": null,
        "subcourseFlag": null,
        "locationType": null,
        "courseStatus": null,
        "activeFlag": null,
        "offset": 0,
        "limit": 0,
        "coordinatorJobId": null,
        "tacCoursePrerequisiteses": [],
        "tacCourseGuidelineses": [],
        "tacCourseActivations": [],
        "tacCourseAudiences": [],
        "tacActivities": [
            {
                "userCreated": "user@gmail.com",
                "dateCreated": "2019-05-08T09:06:24.000+0000",
                "userModified": "user@gmail.com",
                "dateModified": "2019-05-08T09:06:24.000+0000",
                "activityId": 2,
                "activityName": "Activity test1",
                "activeFlag": null,
                "tacCourseActivations": []
            },
            {
                "userCreated": "user@gmail.com",
                "dateCreated": "2019-05-08T09:06:02.000+0000",
                "userModified": "user@gmail.com",
                "dateModified": "2019-05-08T09:06:02.000+0000",
                "activityId": 1,
                "activityName": "Activity test",
                "activeFlag": null,
                "tacCourseActivations": []
            }
        ],
        "tacCourseOutcomes": [],
        "tacCourseDates": []
    }
     }

## DISABLE_COURSE 
     url: /disable-course
       header: 
            Content-Type:application/json
            Authorization: Bearer <Token>

## DISABLE_COURSE_REQ
     {
     "courseId":5,
     "courseName":"NewCourse1"
     }

## DISABLE_COURSE_RES

    {
    "code": 200,
    "message": "Course Disabled",
    "status": true,
    "count": 0,
    "data": {
        "userCreated": "user@gmail.com",
        "dateCreated": "2019-05-09T07:29:06.000+0000",
        "userModified": "user@gmail.com",
        "dateModified": "2019-05-09T08:58:58.081+0000",
        "courseId": 5,
        "tacCourseCategory": null,
        "courseName": "NewCourse1",
        "duration": null,
        "durationFlag": null,
        "objective": null,
        "numberofhours": null,
        "activityId": null,
        "prerequisitesId": null,
        "subcourseFlag": null,
        "locationType": null,
        "courseStatus": null,
        "activeFlag": 0,
        "offset": 0,
        "limit": 0,
        "coordinatorJobId": null,
        "tacCoursePrerequisiteses": [],
        "tacCourseGuidelineses": [],
        "tacCourseActivations": [],
        "tacCourseAudiences": [],
        "tacActivities": [],
        "tacCourseOutcomes": [],
        "tacCourseDates": []
    }
     }
## COUNT_COURSE 
     url: /count-course
       header: 
            Content-Type:application/json
            Authorization: Bearer <Token>


## COUNT_COURSE_RES
    {
    "code": 200,
    "message": "",
    "status": true,
    "count": 0,
    "data": 8
}

##LIST_COURSE

     url: /list-course
       header: 
            Content-Type:application/json
            Authorization: Bearer <Token>
## LIST_COURSE_RES
    {
    "code": 200,
    "message": "",
    "status": true,
    "count": 0,
    "data": {
        "content": [
            {
                "userCreated": "user@gmail.com",
                "dateCreated": "2019-05-09T09:31:31.000+0000",
                "userModified": "user@gmail.com",
                "dateModified": "2019-05-09T09:31:31.000+0000",
                "courseId": 6,
                "tacCourseCategory": null,
                "courseName": "NewCourse2",
                "duration": null,
                "durationFlag": null,
                "objective": null,
                "numberofhours": null,
                "activityId": null,
                "prerequisitesId": null,
                "subcourseFlag": null,
                "locationType": null,
                "courseStatus": null,
                "activeFlag": null,
                "offset": 0,
                "limit": 0,
                "coordinatorJobId": null,
                "tacCoursePrerequisiteses": [],
                "tacCourseGuidelineses": [],
                "tacCourseActivations": [],
                "tacCourseAudiences": [],
                "tacActivities": [],
                "tacCourseOutcomes": [],
                "tacCourseDates": []
            },
            {
                "userCreated": "user@gmail.com",
                "dateCreated": "2019-05-09T09:56:09.000+0000",
                "userModified": "user@gmail.com",
                "dateModified": "2019-05-09T09:56:09.000+0000",
                "courseId": 7,
                "tacCourseCategory": null,
                "courseName": "NewCourse3",
                "duration": null,
                "durationFlag": null,
                "objective": null,
                "numberofhours": null,
                "activityId": null,
                "prerequisitesId": null,
                "subcourseFlag": null,
                "locationType": null,
                "courseStatus": null,
                "activeFlag": null,
                "offset": 0,
                "limit": 0,
                "coordinatorJobId": null,
                "tacCoursePrerequisiteses": [],
                "tacCourseGuidelineses": [],
                "tacCourseActivations": [],
                "tacCourseAudiences": [],
                "tacActivities": [],
                "tacCourseOutcomes": [],
                "tacCourseDates": []
            },
        ],
        "pageable": {
            "sort": {
                "sorted": false,
                "unsorted": true,
                "empty": true
            },
            "offset": 0,
            "pageSize": 5,
            "pageNumber": 0,
            "paged": true,
            "unpaged": false
        },
        "totalPages": 4,
        "totalElements": 8,
        "last": false,
        "size": 2,
        "number": 0,
        "first": true,
        "numberOfElements": 52,
        "sort": {
            "sorted": false,
            "unsorted": true,
            "empty": true
        },
        "empty": false
    }
}

