<template>
<div class="app">
    <SideBar />
    <main>
        <h3>Update Employee</h3>
        <div class="card emp" style="width: 800px;">
            <div class="card-header">
                Employees Managment
            </div>
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="fname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fname" >
                    </div>
                    <div class="mb-3">
                        <label for="lname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lname" >
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" >
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="phone" >
                    </div>
                    <div class="mb-3">
                        <label for="job" class="form-label">Job</label>
                        <input type="text" class="form-control" id="job" >
                    </div>
                    <div class="mb-3">
                        <label for="salary" class="form-label">Salary</label>
                        <input type="text" class="form-control" id="salary" >
                    </div>
                    <!-- <div class="mb-3">
                        <label class="form-label">Department</label>
                        <select class="form-select" v-model="employee.department_id">
                            <option v-for="department in departments" :value="department.id" :key="department.id">{{department.name}}</option>
                        </select>
                        <span class="text-danger" v-if="errors.department_id">{{ errors.department_id[0] }}</span>
                    </div> -->
                    <button type="button" class="btn btn-primary">Update Employee</button>
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
    data() {
        return {
            employee: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                job: '',
                salary: '',
                department_id: ''
            },
            message: '',
            errors: ''
        }
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
