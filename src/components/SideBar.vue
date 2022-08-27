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
        <router-link to="/" class="link">
            <span class="material-icons">home</span>
            <span class="text">Home</span>
        </router-link>
        <router-link to="/about" class="link">
            <span class="material-icons">description</span>
            <span class="text">About</span>
        </router-link>
        <router-link to="/users" class="link">
            <span class="material-icons">group</span>
            <span class="text">users</span>
        </router-link>
        <router-link to="/contact" class="link">
            <span class="material-icons">email</span>
            <span class="text">Contact</span>
        </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
        <router-link to="#" class="link">
            <span class="material-icons">logout</span>
            <span class="text">Log Out</span>
        </router-link>
    </div>
</aside>
</template>

<script>
export default {
    
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

.flex {
    flex: 1 1 0;
}

@media (max-width: 768px) {
    aside {
        position: fixed;
        z-index: 99;
    }
}
</style>