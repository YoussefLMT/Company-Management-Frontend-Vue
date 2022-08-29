<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Customers</h1>
        <div class="card cus" style="width: 900px;">
            <div class="card-header">
                Customers Managment

                <!-- Button trigger add customer modal -->
                <button type="button" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addCustomerModal">
                    Add Customer
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
                            <th scope="col">address</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="customer in customers" :key="customer.id">
                            <th scope="row">{{ customer.id }}</th>
                            <td>{{ customer.first_name }}</td>
                            <td>{{ customer.last_name }}</td>
                            <td>{{ customer.email }}</td>
                            <td>{{ customer.phone }}</td>
                            <td>{{ customer.address }}</td>
                            <td>
                                <button type="button" class="btn btn-danger">Delete</button>
                                <router-link to="/hh" class="btn btn-warning">Update</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!--Add Customer Modal -->
        <div class="modal fade" id="addCustomerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add New Customer</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="alert alert-success" v-if="message">
                                {{ message }}
                            </div>
                            <div class="mb-3">
                                <label for="fname" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="fname" v-model="customer.first_name">
                                <span class="text-danger" v-if="errors.first_name">{{ errors.first_name[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="lname" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lname" v-model="customer.last_name">
                                <span class="text-danger" v-if="errors.last_name">{{ errors.last_name[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" v-model="customer.email">
                                <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="phone" v-model="customer.phone">
                                <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address" v-model="customer.address">
                                <span class="text-danger" v-if="errors.address">{{ errors.address[0] }}</span>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="addNewCustomer" class="btn btn-primary">Save changes</button>
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
            customers: [],
            message: '',
            errors: '',
            customer: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                address: ''
            }
        }
    },
    mounted() {
        this.getCustomers()
    },
    methods: {
        async getCustomers() {
            try {
                const response = await axiosInstance.get("/customers")
                this.customers = response.data.customers
            } catch (error) {
                console.log(error)
            }
        },

        async addNewCustomer() {
            try {
                const response = await axiosInstance.post("/add-customer", this.customer)

                if (response.data.status === 200) {
                    this.message = response.data.message
                    this.getCustomers()
                } else {
                    this.errors = response.data.validation_err
                }

                this.customer.first_name = ""
                this.customer.last_name = ""
                this.customer.email = ""
                this.customer.phone = ""
                this.customer.address = ""

            } catch (error) {
                console.log(error)
            }
        },
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

.cus {
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
