import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { ResourcesComponent } from './resources/resources.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlacementsComponent } from './placements/placements.component';



export const routes: Routes = [
  {path: '', component: MainComponent }, 
  {path: 'services', component: ServicesComponent },
  {path: 'resources',component: ResourcesComponent },
  {path: 'careers', component: CareersComponent },
  {path: 'contact-us', component: ContactUsComponent },
  {path: 'placements', component: PlacementsComponent }
];

