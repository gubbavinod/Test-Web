import { Routes,  RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { AppspageComponent } from './appspage/appspage.component';

const AppRoutes: Routes = [
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'appspage',
        component: AppspageComponent
    }
]
export const routeModule= RouterModule.forRoot(AppRoutes);