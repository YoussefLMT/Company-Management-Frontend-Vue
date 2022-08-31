<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Dashboard</h1>
        <div class="row mt-3">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5> Employyes: {{ employeesCount }}</h5>
                        <span class="material-icons">engineering</span>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5>Customers: {{ customersCount }}</h5>
                        <span class="material-icons">group</span>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5>Departments: {{ departmentsCount }}</h5>
                        <span class="material-icons">badge</span>
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
            employeesCount: '',
            customersCount: '',
            departmentsCount: ''
        }
    },
    mounted() {
        this.getTotalCount()
    },
    methods: {
        async getTotalCount() {
            try {
                const response = await axiosInstance.get("/statistics")

                this.employeesCount = response.data.employeesCount
                this.customersCount = response.data.customersCount
                this.departmentsCount = response.data.departmentsCount

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

.material-icons {
    font-size: 50px;
}

h5 {
    font-weight: bold;
}

.card {
    width: 350px;
}

.card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
