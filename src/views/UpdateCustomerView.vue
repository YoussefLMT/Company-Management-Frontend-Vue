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
                    <div class="mb-3">
                        <label for="fname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fname" v-model="customer.first_name">
                    </div>
                    <div class="mb-3">
                        <label for="lname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lname" v-model="customer.last_name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" v-model="customer.email">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="phone" v-model="customer.phone">
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" v-model="customer.address">
                    </div>
                    <button type="button" class="btn btn-primary">Update Customer</button>
                </form>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import SideBar from '../components/SideBar'

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
