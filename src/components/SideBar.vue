<template>
<aside :class="`${isExpanded && 'is-expanded'}`">
    <div class="logo">
        <img src="../assets/logo.png" alt="Vue Logo" />
    </div>

    <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleSideBar">
            <span class="material-icons">keyboard_double_arrow_right</span>
        </button>
    </div>

    <div class="menu">
        <router-link to="/dashboard" class="link">
            <span class="material-icons">home</span>
            <span class="text">dashbord</span>
        </router-link>
        <router-link to="/employees" class="link">
            <span class="material-icons">engineering</span>
            <span class="text">employees</span>
        </router-link>
        <router-link to="/customers" class="link">
            <span class="material-icons">group</span>
            <span class="text">customers</span>
        </router-link>
        <router-link to="/deprtments" class="link">
            <span class="material-icons">badge</span>
            <span class="text">Deprtments</span>
        </router-link>
        <router-link to="/profile" class="link">
            <span class="material-icons">manage_accounts</span>
            <span class="text">Profile</span>
        </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
        <button class="link" @click="logOut">
            <span class="material-icons">logout</span>
            <span class="text">Log Out</span>
        </button>
    </div>
</aside>
</template>

<script>
import axiosInstance from '../axios'

export default {
    data() {
        return {
            isExpanded: localStorage.getItem('is_expanded') === 'true'
        }
    },
    methods: {
        ToggleSideBar() {
            this.isExpanded = !this.isExpanded
            localStorage.setItem('is_expanded', this.isExpanded)
        },

        async logOut() {
            try {
                const response = await axiosInstance.post("/logout")

                if (response.data.status === 200) {
                    localStorage.removeItem('token')
                    this.$router.push('/')
                }
            } catch (error) {

            }
        }
    }
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(32px + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 16px;
    transition: 0.2s ease-out;
}

aside .logo {
    margin-bottom: 16px;
}

aside .logo img {
    width: 32px;
}

.is-expanded {
    width: var(--sidebar-width);
}

aside .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
}

aside .menu-toggle-wrap .material-icons {
    font-size: 32px;
    color: var(--light);
}

.is-expanded .menu-toggle {
    transform: rotate(180deg);
}

.menu {
    margin: 0 -16px;
}

.menu .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
}

.menu .material-icons {
    font-size: 32px;
    color: var(--light);
    margin-right: 16px;
}

.menu .text {
    color: var(--light);
}

.menu .link:hover {
    background-color: var(--dark-alt);
}

.menu .router-link-exact-active {
    background-color: var(--dark-alt);
}

.flex {
    flex: 1 1 0;
}

button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

@media (max-width: 768px) {
    aside {
        position: fixed;
        z-index: 99;
    }
}
</style>
