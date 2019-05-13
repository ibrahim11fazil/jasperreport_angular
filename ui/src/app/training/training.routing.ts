import { Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ActivityComponent} from "./activity/activity.component";
import {CreateCourseComponent} from "./create-course/create-course.component";


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
            }

        ]
    }
];