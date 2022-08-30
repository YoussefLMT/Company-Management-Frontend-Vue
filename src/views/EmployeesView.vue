<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Employees</h1>

        <div class="card emp" style="width: 1000px;">
            <div class="card-header">
                Employees Managment
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">first name</th>
                            <th scope="col">last name</th>
                            <th scope="col">email</th>
                            <th scope="col">phone</th>
                            <th scope="col">job</th>
                            <th scope="col">salary</th>
                            <th scope="col">department</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">4</th>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>

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
    margin: 50px auto;
}

.btn-add {
    float: right
}

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
