<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Departments</h1>
        <div class="card dep" style="width: 800px;">
            <div class="card-header">
                Departments Managment

                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
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
import axiosInstance from '../axios'

export default {
    components: {
        SideBar
    },
    data() {
        return {
            departments: [],
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
    }
}
</script>

<style>
.app {
    display: flex;
    background: var(--light);
}

.app main {
    flex: 1 1 0;
    padding: 32px;
}

.dep {
    margin: 100px auto;
}

.btn {
    float: right
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
