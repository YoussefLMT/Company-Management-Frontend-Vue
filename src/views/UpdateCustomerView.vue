<template>
<div class="app">
    <SideBar />
    <main>
        <h3>Update Customer</h3>
        <div class="card cus" style="width: 800px;">
            <div class="card-header">
                Customers Managment
            </div>
            <div class="card-body">
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
                    <button type="button" @click="updateCustomer" class="btn btn-primary">Update Customer</button>
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
            customer: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                address: ''
            },
            message: '',
            errors: ''
        }
    },
    mounted() {
        this.getCustomer()
    },
    methods: {
        async getCustomer() {
            try {
                const response = await axiosInstance.get(`/get-customer/${this.$route.params.id}`)
                this.customer = response.data.customer
            } catch (error) {
                console.log(error)
            }
        },

        async updateCustomer() {
            try {
                const response = await axiosInstance.put(`/update-customer/${this.$route.params.id}`, this.customer)

                if (response.data.status === 200) {
                    this.message = response.data.message

                } else if (response.data.status === 422) {
                    this.errors = response.data.validation_err
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

.cus {
    margin: 20px auto;
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
