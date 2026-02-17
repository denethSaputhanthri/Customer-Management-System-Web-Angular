import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { Home } from './page/home/home';
import { CustomerManage } from './page/customer-manage/customer-manage';
import { Component } from '@angular/core';


export const routes: Routes = [
    {
        path:"",
        component:Home
    },
    {
        path:"home",
        component:Home
    },
    {
        path:"",
        component:Home
    },
    {
        path:"dashboard",
        component:Dashboard
    },
    {
        path:"customerManagement",
        component:CustomerManage,
    }
];
