<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Employees</h1>

        <div class="card emp" style="width: 1100px;">
            <div class="card-header">
                Employees Managment

                <!-- Button trigger add employee modal -->
                <button type="button" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                    Add Employee
                </button>
            </div>
            <div class="card-body">
                <table class="table">
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
                    <div v-if="loading" class="spinner">
                        <ClipLoader />
                    </div>
                    <tbody v-else>
                        <tr v-for="employee in employees" :key="employee.id">
                            <th scope="row">{{ employee.id }}</th>
                            <td>{{ employee.first_name }}</td>
                            <td>{{ employee.last_name }}</td>
                            <td>{{ employee.email }}</td>
                            <td>{{ employee.phone }}</td>
                            <td>{{ employee.job }}</td>
                            <td>{{ employee.salary }}</td>
                            <td>{{ employee.name }}</td>
                            <td>
                                <button type="button" @click="deleteEmployee(employee.id)" class="btn btn-danger">Delete</button>
                                <router-link :to="{ name: 'updateEmployee', params: {id: employee.id }}" class="btn btn-warning">Update</router-link>
                            </td>
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
                            <div class="alert alert-success" v-if="message">
                                {{ message }}
                            </div>
                            <div class="mb-3">
                                <label for="fname" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="fname" v-model="employee.first_name">
                                <span class="text-danger" v-if="errors.first_name">{{ errors.first_name[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="lname" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lname" v-model="employee.last_name">
                                <span class="text-danger" v-if="errors.last_name">{{ errors.last_name[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" v-model="employee.email">
                                <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="phone" v-model="employee.phone">
                                <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="job" class="form-label">Job</label>
                                <input type="text" class="form-control" id="job" v-model="employee.job">
                                <span class="text-danger" v-if="errors.job">{{ errors.job[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="salary" class="form-label">Salary</label>
                                <input type="text" class="form-control" id="salary" v-model="employee.salary">
                                <span class="text-danger" v-if="errors.salary">{{ errors.salary[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Department</label>
                                <select class="form-select" v-model="employee.department_id">
                                    <option v-for="department in departments" :value="department.id" :key="department.id">{{department.name}}</option>
                                </select>
                                <span class="text-danger" v-if="errors.department_id">{{ errors.department_id[0] }}</span>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="addNewEmployee" class="btn btn-primary">Save changes</button>
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
            },
            message: '',
            errors: '',
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
            } catch (error) {
                console.log(error)
            }
        },

        async addNewEmployee() {
            try {
                const response = await axiosInstance.post("/add-employee", this.employee)

                if (response.data.status === 200) {
                    this.message = response.data.message
                    store.dispatch('getEmployees')
                } else {
                    this.errors = response.data.validation_err
                }

                this.employee.first_name = ""
                this.employee.last_name = ""
                this.employee.email = ""
                this.employee.phone = ""
                this.employee.job = ""
                this.salary = ""
                this.employee.department_id = ""

            } catch (error) {
                console.log(error)
            }
        },

        async deleteEmployee(id) {
            try {
                await axiosInstance.delete(`/delete-employee/${id}`)
                store.dispatch('getEmployees')
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
