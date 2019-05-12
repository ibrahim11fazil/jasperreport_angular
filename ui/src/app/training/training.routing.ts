import { Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";


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
            }

        ]
    }
];