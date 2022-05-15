import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./pages/admin/admin.component";
import {AdminGuard} from "@core/guards/admin.guard";
import {DoctorGuard} from "@core/guards/doctor.guard";
import {AuthGuard} from "@core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./pages/service/service.module').then(m => m.ServiceModule)
  },
  {
    path: 'authorization',
    loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'doctor',
    canActivate: [DoctorGuard],
    loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule)
  },
  {
    path: 'doctor/:id',
    canActivate: [DoctorGuard],
    loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule)
  },
  {
    path: 'profile/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },

  { path: '**',   redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AdminGuard,
    AuthGuard,
    DoctorGuard,
  ]
})
export class AppRoutingModule { }
