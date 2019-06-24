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
                path: 'activate-course',
                component: ActivateCourseComponent
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
                path: 'cis-system',
                component: CisSystemComponent
            }

        ]
    }
];