<template>
<div class="app">
    <SideBar />
    <main>
        <h3>Welcome ahmed</h3>
        <div class="card profile" style="width: 800px;">
            <div class="card-header">
                Profile Managment
            </div>
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" >
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" >
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">New Password</label>
                        <input type="password" class="form-control" id="password" >
                    </div>
                     <div class="mb-3">
                        <label for="password_conf" class="form-label">New Password Confirmation</label>
                        <input type="password" class="form-control" id="password_conf" >
                    </div>
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
