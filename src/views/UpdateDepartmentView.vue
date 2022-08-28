<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Update Department</h1>
        <div class="card dep" style="width: 800px;">
            <div class="card-header">
                Departments Managment
            </div>
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Department Name</label>
                        <input type="text" class="form-control" id="name" v-model="name">
                    </div>
                    <button type="button" @click="updateDepartment" class="btn btn-primary">Update Department</button>
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
            name: '',
            message: '',
            error: ''
        }
    },
    mounted() {
        this.getDepartment()
    },
    methods: {
        async getDepartment() {
            try {
                const response = await axiosInstance.get(`/get-department/${this.$route.params.id}`)
                this.name = response.data.department.name
            } catch (error) {
                console.log(error)
            }
        },

        async updateDepartment() {
            try {
                const response = await axiosInstance.put(`/update-department/${this.$route.params.id}`, {
                    name: this.name,
                })

                console.log(response.data.message)
                
            } catch (error) {
                console.log(error)
            }
        }
    },
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

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
