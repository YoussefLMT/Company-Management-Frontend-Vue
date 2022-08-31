<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Dashboard</h1>
        <div class="row mt-3">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        Employyes
                        <span class="material-icons">engineering</span>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        Customrs
                        <span class="material-icons">group</span>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        Departments
                        <span class="material-icons">badge</span>
                    </div>
                </div>
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
    }
}
</script>

<style>
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
