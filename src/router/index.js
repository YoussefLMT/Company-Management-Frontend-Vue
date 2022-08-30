import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import DepartmentsView from '../views/DepartmentsView.vue'
import UpdateDepartmentView from '../views/UpdateDepartmentView.vue'
import CustomersView from '../views/CustomersView.vue'
import UpdateCustomerView from '../views/UpdateCustomerView.vue'
import EmployeesView from '../views/EmployeesView.vue'
import UpdateEmployeeView from '../views/UpdateEmployeeView.vue'
import ProfileView from '../views/ProfileView.vue'
import store from '../store';


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/deprtments',
    name: 'deprtments',
    component: DepartmentsView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/update-deprtment/:id',
    name: 'updateDeprtment',
    component: UpdateDepartmentView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/customers',
    name: 'customers',
    component: CustomersView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/update-customer/:id',
    name: 'updateCustomer',
    component: UpdateCustomerView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeesView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/update-employee/:id',
    name: 'updateEmployee',
    component: UpdateEmployeeView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta:{
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'login' });
  } else{
    next()
  }
});

export default router
