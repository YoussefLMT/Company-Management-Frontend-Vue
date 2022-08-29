<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Departments</h1>
        <div class="card dep" style="width: 800px;">
            <div class="card-header">
                Departments Managment

                <!-- Button trigger add department modal -->
                <button type="button" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addDepartmetModal">
                    Add Department
                </button>
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">department name</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="department in departments" :key="department.id">
                            <th scope="row">{{ department.id }}</th>
                            <td>{{ department.name }}</td>
                            <td>
                                <button type="button" @click="deleteDepartment(department.id)" class="btn btn-danger">Delete</button>
                                <router-link :to="{ name: 'updateDeprtment', params: {id: department.id }}" class="btn btn-warning">Update</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <!--Add Department Modal -->
        <div class="modal fade" id="addDepartmetModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add New Department</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="alert alert-success" v-if="message">
                                {{ message }}
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">Department Name</label>
                                <input type="text" class="form-control" id="name" v-model="name">
                                <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="addNewDepartment" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
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
            departments: [],
            name: '',
            message: '',
            errors: ''
        }
    },
    mounted() {
        this.getDepartments()
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

        async addNewDepartment() {
            try {
                const response = await axiosInstance.post("/add-department", {
                    name: this.name
                })

                if (response.data.status === 200) {
                    this.message = response.data.message
                    this.getDepartments()
                } else {
                    this.errors = response.data.validation_err
                }

                this.name = ''

            } catch (error) {
                console.log(error)
            }
        },

        async deleteDepartment(id) {
            try {
                await axiosInstance.delete(`/delete-department/${id}`)
                this.getDepartments()
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

.dep {
    margin: 50px auto;
}

.btn-add {
    float: right
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
