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
                    <div class="alert alert-success" v-if="message">
                        {{ message }}
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Department Name</label>
                        <input type="text" class="form-control" id="name" v-model="name">
                        <span class="text-danger" v-if="error.name">{{ error.name[0] }}</span>
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

                if (response.data.status === 200) {
                    this.message = response.data.message

                } else if (response.data.status === 422) {
                    this.error = response.data.validation_err

                }

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
