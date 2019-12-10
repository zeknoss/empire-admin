<template>
    <div class="login">
        <div class="container text-center">
            <div class="logo mb-3">
                <img src="@/assets/img/empire-logo@2x.png" alt="Empire Admin">
            </div>
            <b-img src="@/assets/img/empire-logotype.svg" class="mb-5" />

            <nuxt-link to="/login" class="btn btn-primary shadow-sm btn-block mb-3">Go to Demo</nuxt-link>
            <a href="https://github.com" target="_blank" class="btn btn-success shadow-sm btn-block mb-3">Quick Start</a>
            <a href="https://github.com/BroCode-Interactive/empire-admin" target="_blank" class="btn btn-light shadow-sm btn-block mb-3">
                <i class="fab fa-github"></i>
                Source on Github
            </a>
        </div>
        <client-only>
            <Snow
                zIndex="2"
                :wind="1"
                :swing="3"
                speed="m"
                color="#ffffff"/>
        </client-only>
    </div>
</template>
<script>
    export default {
        layout: "fourOhOne",
        name: "index",
        auth: false
    }
</script>
