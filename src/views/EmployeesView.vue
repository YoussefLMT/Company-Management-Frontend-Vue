<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Employees</h1>
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

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
