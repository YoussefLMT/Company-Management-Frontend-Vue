<template>
<div class="app">
    <SideBar />
    <main>
        <h3>Welcome {{ name }}</h3>
        <div class="card profile" style="width: 800px;">
            <div class="card-header">
                Profile Managment
            </div>
            <div class="card-body">
                <form>
                    <div class="alert alert-success" v-if="message">
                        {{ message }}
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" v-model="name">
                        <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email">
                        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">New Password</label>
                        <input type="password" class="form-control" id="password" v-model="newPassword">
                    </div>
                    <div class="mb-3">
                        <label for="password_conf" class="form-label">New Password Confirmation</label>
                        <input type="password" class="form-control" id="password_conf" v-model="newPasswordConfirmation">
                    </div>
                    <button type="button" @click="updateProfile" class="btn btn-primary">Update Profile</button>
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
            email: '',
            newPassword: '',
            newPasswordConfirmation: '',
            message: '',
            errors: ''
        }
    },
    mounted() {
        this.getProfile()
    },
    methods: {
        async getProfile() {
            try {
                const response = await axiosInstance.get('/get-profile')
                this.name = response.data.user.name
                this.email = response.data.user.email

            } catch (error) {
                console.log(error)
            }
        },

        async updateProfile() {
            try {
                const response = await axiosInstance.put('/update-profile', {
                    name: this.name,
                    email: this.email,
                    password: this.newPassword
                })

                if (response.data.status === 200) {
                    this.message = response.data.message

                } else {
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

.profile {
    margin: 50px auto;
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
