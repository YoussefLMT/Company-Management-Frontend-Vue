<template>
<section class="main">
    <div class="auth-content">

        <form action="loguser.php" method="post">
            <h2 class="form-title">Login</h2>

            <div>
                <label>Username</label>
                <input type="text" name="username" class="text-input" required>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" class="text-input" required>
            </div>
            <div>
                <button type="submit" name="login-btn" class="btn btn-big">Login</button>
            </div>
            <p>Or <a href="register.php">Sign Up</a></p>
        </form>

    </div>
</section>
</template>

<script>
export default {
    name: 'LoginView',
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

.btn {
    padding: 10px 5px;
    background: #3498db;
    color: white;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

.btn-big {
    padding: 10px 10px;
}

.btn:hover {
    color: white;
    background: #005255;
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

.auth-content {
    width: 30%;
    padding: 20px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.auth-content .form-title {
    text-align: center;
    margin-bottom: 20px;
}

.auth-content form div {
    margin-bottom: 10px;
}

.auth-content form p {
    text-align: center;
}

.auth-content form p a {
    text-decoration: underline;
}
</style>
