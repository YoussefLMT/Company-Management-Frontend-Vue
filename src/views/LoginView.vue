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
.main{
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("@/assets/company.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    }
</style>
