<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Employees</h1>

        <div class="card emp" style="width: 1000px;">
            <div class="card-header">
                Employees Managment

                <!-- Button trigger add employee modal -->
                <button type="button" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                    Add Employee
                </button>
            </div>
            <div class="card-body">
                <table class="table">
                    <!-- <div v-if="loading" class="spinner">
                        <ClipLoader />
                    </div> -->
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">first name</th>
                            <th scope="col">last name</th>
                            <th scope="col">email</th>
                            <th scope="col">phone</th>
                            <th scope="col">job</th>
                            <th scope="col">salary</th>
                            <th scope="col">department</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="employee in employees" :key="employee.id">
                            <th scope="row">{{ employee.id }}</th>
                            <td>{{ employee.first_name }}</td>
                            <td>{{ employee.last_name }}</td>
                            <td>{{ employee.email }}</td>
                            <td>{{ employee.phone }}</td>
                            <td>{{ employee.job }}</td>
                            <td>{{ employee.salary }}</td>
                            <td>{{ employee.name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!--Add Employee Modal -->
        <div class="modal fade" id="addEmployeeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add New Employee</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="fname" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="fname" v-model="employee.first_name">
                            </div>
                            <div class="mb-3">
                                <label for="lname" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lname" v-model="employee.last_name">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" v-model="employee.email">
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="phone" v-model="employee.phone">
                            </div>
                            <div class="mb-3">
                                <label for="job" class="form-label">Job</label>
                                <input type="text" class="form-control" id="job" v-model="employee.job">
                            </div>
                            <div class="mb-3">
                                <label for="salary" class="form-label">Salary</label>
                                <input type="text" class="form-control" id="salary" v-model="employee.salary">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Department</label>
                                <select class="form-select" v-model="employee.department_id">
                                    <option v-for="department in departments" :value="department.name" :key="department.id">{{department.name}}</option>
                                </select>
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </main>
</div>
</template>

<script>
import SideBar from '../components/SideBar'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import store from '@/store'
import axiosInstance from '../axios'

export default {
    components: {
        SideBar,
        ClipLoader
    },
    data() {
        return {
            departments: '',
            employee: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                job: '',
                salary: '',
                department_id: ''
            }
        }
    },
    mounted() {
        store.dispatch('getEmployees')
        this.getDepartments()
    },
    computed: {
        employees() {
            return store.getters.employees
        },

        loading() {
            return store.getters.loading
        }
    },
    methods: {
        async getDepartments() {
            try {
                const response = await axiosInstance.get("/departments")
                this.departments = response.data.departments
                console.log(this.departments)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.app {
    display: flex;
    background: var(--light);
}

.app main {
    flex: 1 1 0;
    padding: 32px;
}

.emp {
    margin: 50px auto;
}

.btn-add {
    float: right
}

.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
