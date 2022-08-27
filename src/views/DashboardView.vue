<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Dashboard</h1>
        <p>this is a dashboard page</p>
    </main>
</div>
</template>

<script>
import SideBar from '../components/SideBar'

export default {
    components: {
        SideBar
    }
}
</script>

<style>
.app {
    display: flex;
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
