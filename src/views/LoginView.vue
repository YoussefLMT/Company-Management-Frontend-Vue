<template>
<div class="login">
    <div class="right-side">
        <img src="@/assets/undraw_login_re_4vu2.svg">
    </div>
    <form>
        <p>LOGIN</p>
        <input type="email" placeholder="Enter your email">
        <input type="password" placeholder="Enter your password">
        <button type="button">Login</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'LoginView',
}
</script>

<style scoped>
.login {
    display: flex;
    width: 100vw;
    height: 100vh;
}

form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    background-color: aqua;
}

form p {
    font-size: 30px;
    font-weight: 700;
    margin-top: 40px;
}

form input {
    padding: 12px;
    width: 65%;
    margin: 15px;
    border: 1px solid black;
    outline: none;
    border-radius: 20px;
}

form button {
    padding: 12px 30px;
    width: 40%;
    margin-top: 40px;
    background-color: black;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    color: white;
}

form button:hover {
    background-color: #ccc;
}

.right-side {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.right-side img {
    width: 450px;
    height: 450px;
}
</style>
