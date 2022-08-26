<template>
<section class="main">
    <div class="auth-content">
        <form>
            <h2 class="form-title">Login</h2>
            <div>
                <label>Email</label>
                <input v-model="email" type="email" name="email" class="text-input">
            </div>
            <div>
                <label>Password</label>
                <input v-model="password" type="password" name="password" class="text-input">
            </div>
            <div>
                <button type="button" @click="login" class="btn">Login</button>
            </div>
        </form>
    </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            message: '',
            errors: ''
        }
    },
    methods: {
        async login() {
            try {
                const response = await axios.post("http://127.0.0.1:8000/api/login", {
                    email: this.email,
                    password: this.password
                })

                if (response.data.status === 401) {
                    // this.message = response.data.message
                    console.log(response.data.message)

                } else if (response.data.status === 200) {

                    console.log(response.data.message)

                    // this.$router.push('/dashboard')
                    // store.commit('setUserRole', response.data.role)
                    // store.state.user.data.token = response.data.token
                    // localStorage.setItem('token', response.data.token)
                    // localStorage.setItem('role', response.data.role)

                } else {
                    // this.errors = response.data.validation_err
                    console.log(response.data.validation_err)

                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.main {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("@/assets/company.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}

.auth-content {
    width: 30%;
    padding: 20px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.auth-content .form-title {
    text-align: center;
    margin-bottom: 30px;
}

.auth-content form div {
    margin-bottom: 20px;
}

.auth-content form p {
    text-align: center;
}

.auth-content form p a {
    text-decoration: underline;
}

.text-input {
    padding: 10px 10px;
    display: block;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    outline: none;
    color: #444;
    font-size: 18px;
}

.text-input:focus {
    border: 3px solid #006669;
}

.btn {
    padding: 10px 5px;
    margin-top: 20px;
    width: 100%;
    background: #3498db;
    color: white;
    font-weight: bold;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

.btn:hover {
    background: #0984e3;
}
</style>
