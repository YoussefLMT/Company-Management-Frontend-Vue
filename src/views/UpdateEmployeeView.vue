<template>
<div class="app">
    <SideBar />
    <main>
        <h3>Update Employee</h3>
        <div class="card emp" style="width: 800px;">
            <div class="card-header">
                Employees Managment
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

.emp {
    margin: 20px auto;
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
