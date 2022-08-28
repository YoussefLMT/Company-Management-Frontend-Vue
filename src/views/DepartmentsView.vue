<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Departments</h1>
        <div class="card dep" style="width: 800px;">
            <div class="card-header">
                Departments Managment
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">department name</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                        </tr>
                    </tbody>
                </table>
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
    data() {
        return {
            departments: [],
        }
    },
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

.dep {
    margin: 100px auto;
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
