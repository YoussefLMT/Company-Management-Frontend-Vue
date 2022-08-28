<template>
<div class="app">
    <SideBar />
    <main>
        <h1>Update Department</h1>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Department Name</label>
                <input type="text" class="form-control" id="name">
            </div>
            <button type="button" class="btn btn-primary">Update Department</button>
        </form>
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
            name: '',
            message: '',
            error: ''
        }
    },
    methods: {
        async getDepartment() {
            try {
                const response = await axios.get(`/get-departmrnt/${this.$route.params.id}`)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        },
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

@media (max-width: 768px) {
    .app main {
        padding: 96px;
    }
}
</style>
