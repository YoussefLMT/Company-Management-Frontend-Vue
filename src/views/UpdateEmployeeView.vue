<template>
<div class="app">
    <SideBar />
    <main>
        <h3>Update Employee</h3>
        <div class="card emp" style="width: 800px;">
            <div class="card-header">
                Employees Managment
            </div>
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="fname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fname" v-model="employee[0].first_name">
                    </div>
                    <div class="mb-3">
                        <label for="lname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lname" v-model="employee[0].last_name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" v-model="employee[0].email">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="phone" v-model="employee[0].phone">
                    </div>
                    <div class="mb-3">
                        <label for="job" class="form-label">Job</label>
                        <input type="text" class="form-control" id="job" v-model="employee[0].job">
                    </div>
                    <div class="mb-3">
                        <label for="salary" class="form-label">Salary</label>
                        <input type="text" class="form-control" id="salary" v-model="employee[0].salary">
                    </div>
                    <!-- <div class="mb-3">
                        <label class="form-label">Department</label>
                        <select class="form-select" v-model="employee[0].name">
                            <option>{{ employee[0].name }}</option>
                            <option v-for="department in departments" :value="department.id" :key="department.id">{{department.name}}</option>
                        </select>
                    </div> -->
                    <button type="button" @click="updateEmployee" class="btn btn-primary">Update Employee</button>
                </form>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import SideBar from '../components/SideBar'
import axiosInstance from '../axios'

export default {
    components: {
        SideBar
    },
    data() {
        return {
            employee: [{
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                job: '',
                salary: '',
                // department_id: '',
                // name: ''
            }],
            message: '',
            errors: '',
            // departments: '',

        }
    },
    mounted() {
        this.getEmployee()
        // this.getDepartments()
    },
    methods: {
        async getEmployee() {
            try {
                const response = await axiosInstance.get(`/get-employee/${this.$route.params.id}`)
                this.employee = response.data.employee
            } catch (error) {
                console.log(error)
            }
        },

        // async getDepartments() {
        //     try {
        //         const response = await axiosInstance.get("/departments")
        //         this.departments = response.data.departments
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },

        async updateEmployee() {
            try {
                const response = await axiosInstance.put(`/update-employee/${this.$route.params.id}`, this.employee[0])

                if (response.data.status === 200) {
                    console.log(response.data.message)

                } else if (response.data.status === 422) {
                    console.log(response.data.validation_err)
                }

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
    margin: 20px auto;
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
