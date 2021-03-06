import { Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ActivityComponent} from "./activity/activity.component";
import {CreateCourseComponent} from "./create-course/create-course.component";
import {ActivityListComponent} from "./activity-list/activity-list.component";
import { SearchCourseComponent } from './search-course/search-course.component';
import {CourseLinkComponent} from './course-link/course-link.component';
import {ActivateCourseComponent}from'./activate-course/activate-course.component';
import { CreateInstructorComponent } from './create-instructor/create-instructor.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { CisSystemComponent } from './cis-system/cis-system.component';
import { SearchInstructorComponent } from './search-instructor/search-instructor.component';
import { CisCourseRequestsIMadeComponent } from './cis-course-requests-i-made/cis-course-requests-i-made.component';
import { ActivationsComponent } from './activations/activations.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobCardSearchComponent } from './job-card-search/job-card-search.component';
import { EmpRequestComponent } from './emp-request/emp-request.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyTasksHistoryComponent } from './my-tasks-history/my-tasks-history.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { SmartProfileComponent } from './smart-profile/smart-profile.component';
import { EmpReqeustCancelComponent } from './emp-reqeust-cancel/emp-reqeust-cancel.component';
import { EmpDelegationComponent } from './emp-delegation/emp-delegation.component';
import { CourseStatusReport } from 'app/models/course-status-report';
import { InstructorSubjectReportComponent } from './instructor-subject-report/instructor-subject-report.component';
import { CourseDataReportComponent } from './course-data-report/course-data-report.component';
import { CourseStatusReportComponent } from './course-status-report/course-status-report.component';
import { MultiCoursesReportComponent } from './multi-courses-report/multi-courses-report.component';


export const TrainingRoutes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: 'activity',
                component: ActivityComponent
            },
            {
                path: 'create-course',
                component: CreateCourseComponent
            },
            {
                path: 'create-course/:id',
                component: CreateCourseComponent
            },
            {
                path: 'search-course',
                component: SearchCourseComponent
            },
            {
                path: 'course-link',
                component: CourseLinkComponent
            },
            {
                path: 'course-link/:id',
                component: CourseLinkComponent
            },
            {
                path: 'activate-course',
                component: ActivateCourseComponent
            },
            {
                path: 'activations',
                component: ActivationsComponent
            },
            {
                path: 'activate-course/:id',
                component: ActivateCourseComponent
            },
            {
                path: 'create-instructor/:id',
                component: CreateInstructorComponent
            },
            {
                path: 'create-instructor',
                component: CreateInstructorComponent
            },
            {
                path: 'search-instructor',
                component: SearchInstructorComponent
            },
            {
                path: 'user-creation',
                component: UserCreationComponent
            }, 
            {
                path: 'user-creation/:id',
                component: UserCreationComponent
            },
            {
                path: 'user-search',
                component: UserSearchComponent
            },
            {
                path: 'user-permissions',
                component: UserPermissionsComponent
            },
            {
                path: 'cis-system',
                component: CisSystemComponent
            },
            {
                path: 'cis-course-requests-i-made',
                component: CisCourseRequestsIMadeComponent
            },
            {
                path: 'course-management',
                component: CourseManagementComponent
            },
            {
                path: 'job-card-management',
                component: JobCardComponent
            },
            {
                path: 'job-card-management/:id',
                component: JobCardComponent
            },
            {
                path: 'job-card-search',
                component: JobCardSearchComponent
            },
            {
                path: 'emp-request',
                component:EmpRequestComponent
            },{
                path: 'emp-reqeust-cancel',
                component:EmpReqeustCancelComponent
            },
            {
                path: 'emp-delegation',
                component:EmpDelegationComponent
            },
            {

                path: 'emp-request:/head-section',
                component:EmpRequestComponent
            },
            {
                path: 'my-tasks',
                component:MyTasksComponent
            },
            {
                path: 'my-tasks-history',
                component:MyTasksHistoryComponent
            },
            {
                path:'smart-profile',
                component:SmartProfileComponent
            },
            {
                path:'course-status-report',
                component:CourseStatusReportComponent
            },
            {
                path:'instructor-subject-report',
                component:InstructorSubjectReportComponent
            },
            {
                path:'course-data-report',
                component:CourseDataReportComponent
            },
            {
                path:'multi-courses-report',
                component:MultiCoursesReportComponent
            }

        ]
    }
];