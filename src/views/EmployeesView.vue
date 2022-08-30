<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Employees</h1>

        <div class="card emp" style="width: 1000px;">
            <div class="card-header">
                Employees Managment
            </div>
            <div class="card-body">
                <table class="table">
                    <div v-if="loading" class="spinner">
                        <ClipLoader />
                    </div>
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

    </main>
</div>
</template>

<script>
import SideBar from '../components/SideBar'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import store from '@/store'

export default {
    components: {
        SideBar,
        ClipLoader
    },
    mounted() {
        store.dispatch('getEmployees')
    },
    computed: {
        employees() {
            return store.getters.employees
        },

        loading() {
            return store.getters.loading
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
