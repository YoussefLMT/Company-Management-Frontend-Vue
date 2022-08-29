<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Customers</h1>
        <div class="card cus" style="width: 900px;">
            <div class="card-header">
                Customers Managment
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
                            <th scope="col">address</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
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
import axiosInstance from '../axios'

export default {
    components: {
        SideBar
    },
    data() {
        return {
            customers: [],
            message: '',
            errors: ''
        }
    },
    mounted(){
        this.getCustomers()
    },
    methods: {
        async getCustomers() {
            try {
                const response = await axiosInstance.get("/customers")
                console.log(response.data)
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

.cus {
    margin: 50px auto;
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
