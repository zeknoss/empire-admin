<template>
    <div class="login">
        <div class="container text-center">
            <form method="post" class="login-form" action="javascript:;" @submit="login">
                <div class="logo">
                    <img src="@/assets/img/sail-admin-logo.svg" alt="Empire Admin">
                </div>
                <b-form-group>
                    <b-input-group>
                        <b-form-input type="email" name="email" v-model="email" placeholder="E-mail"></b-form-input>
                        <b-dropdown text="Dropdown" variant="white text-primary border-primary" slot="append" right>
                            <template slot="button-content">
                                <i class="fas fa-user"></i>
                            </template>
                            <b-dropdown-header>Login as</b-dropdown-header>
                            <b-dropdown-item @click="setLogin('admin')">Admin</b-dropdown-item>
                            <b-dropdown-item @click="setLogin('restrictedUser')">Restricted User</b-dropdown-item>
                        </b-dropdown>
                    </b-input-group>
                </b-form-group>

                <b-form-group>
                    <b-form-input type="password" name="password" v-model="password"
                                  placeholder="Password"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="white" class="bg-white text-primary" block>Login</b-button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: "Login",
    layout: "fourOhOne",
    auth: false,
    data: function () {
        return {
            email: null,
            password: null,

            loginPresets: {
                admin: {
                    email: "palpatine@empire-admin.com",
                    password: "123456"
                },
                restrictedUser: {
                    email: "vader@empire-admin.com",
                    password: "123456"
                }
            }
        }
    },
    methods: {
        setLogin(user) {
            this.email = this.loginPresets[user].email;
            this.password = this.loginPresets[user].password;
        },
        async login() {
            if (this.email === null) {
                this.$snotify.info('Please enter your e-mail', 'Validation error');
                return false;
            } else if (this.password === null) {
                this.$snotify.info('Please enter your password', 'Validation error');
                return false;
            }

            this.$auth.loginWith('local', {
                data: {
                    email: this.email,
                    password: this.password
                }
            }).then(() => {
                this.$snotify.success(null, 'Authentication success');
                this.$router.push('dashboard');
            }).catch(() => {
                this.$snotify.warning('Please check your credentials and try again', 'Login failed');
            });
        }
    }
}
</script>
