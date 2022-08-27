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

<style>
    
</style>