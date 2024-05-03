import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { UserSideComponent } from './user-side/user-side.component';

export const routes: Routes = [
    {
    path:'',component:LoginComponent},
    {
    path:'dashboard',component:DashboardComponent},
    {
        path:'admin',component:AdminSideComponent
    },
    {
        path:'user',component:UserSideComponent
    }
]
