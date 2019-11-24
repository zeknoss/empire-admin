<template>
    <main-section :header-title="$auth.user.name.full" header-bg="primary" header-subtitle="Edit your profile">
        <b-row>
            <b-col md="6" lg="8" order="1" order-md="0">
                <b-card header-bg-variant="gradient-pink-purple">
                    <div slot="header">
                        <h4 class="card-title text-white">Basic Information</h4>
                        <h6 class="card-subtitle text-white">Name, allegiance, powers, etc</h6>
                        <div class="actions text-white">
                            <b-badge variant="white" class="bg-white text-primary">Form</b-badge>
                        </div>
                    </div>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group label="First Name">
                                <b-input placeholder="First Name" size="lg" :value="$auth.user.name.first_name" required></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group label="Last Name">
                                <b-input placeholder="First Name" size="lg" :value="$auth.user.name.last_name" required></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group label="E-mail">
                                <b-input placeholder="E-mail" size="lg" type="email" :value="$auth.user.email" required></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group label="Job Title">
                                <b-input placeholder="Job Title" size="lg" value="CEO"></b-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <form-divider title="Change Password"></form-divider>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group label="New Password">
                                <b-input placeholder="New Password" size="lg" type="password"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group label="New Password (Confirm)">
                                <b-input placeholder="New Password (Confirm)" size="lg" type="password"></b-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <form-divider title="Contact Information"></form-divider>
                    <b-form-group label="Address">
                        <b-textarea placeholder="Address" no-resize size="lg" value="Lorem Ipsum St. Test Alley 2349-123 Coruscant"></b-textarea>
                    </b-form-group>
                    <b-row>
                        <b-col sm="4">
                            <b-form-group label="City">
                                <b-input placeholder="City" size="lg" value="Coruscant"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4">
                            <b-form-group label="Country">
                                <b-input placeholder="Country" size="lg" value="Galactic Core"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4">
                            <b-form-group label="Phone">
                                <b-input placeholder="Phone" size="lg" value="+905555555555"></b-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <div class="text-right">
                        <b-button variant="primary" type="submit" size="lg">Save Changes</b-button>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="4" order="0" order-md="1">
                <b-card header-bg-variant="transparent" bg-variant="transparent" body-bg-variant="white" class="profile-card shadow-none">
                    <div slot="header" class="d-flex">
                        <b-img :src="avatar" width="150" class="mx-auto" thumbnail rounded="circle"></b-img>
                    </div>

                    <div class="d-flex justify-content-between mb-5">
                        <b-badge variant="primary">CEO</b-badge>
                        <b-badge variant="warning">Sith</b-badge>
                    </div>
                    <h3 class="text-uppercase font-weight-light">
                        {{$auth.user.name.first_name}} <strong class="text-primary">{{$auth.user.name.last_name}}</strong>
                    </h3>
                    <h6 class="text-uppercase font-weight-light">CEO, Galactic Empire Co.</h6>
                    <p>
                        <a :href="'mailto:' + $auth.user.email" v-b-tooltip :title="'Write a message to ' + $auth.user.name.first_name">{{$auth.user.email}}</a>
                        <b-button @click="copyToClipboard($auth.user.email)" variant="transparent" class="text-primary p-1" v-b-tooltip title="Copy e-mail address">
                            <i class="far fa-copy"></i>
                        </b-button>
                    </p>
                    <b-row align-h="center" class="mx-auto d-inline-flex text-uppercase">
                        <b-col>
                            <p class="font-weight-bold">Over<br>9000</p>
                            <small>Midichlorian Count</small>
                        </b-col>
                        <b-col>
                            <p class="font-weight-bold">Sith<br>Empire</p>
                            <small>Affiliation</small>
                        </b-col>
                        <b-col>
                            <p class="font-weight-bold">Weird Shoulders</p>
                            <small>Favourite Dress</small>
                        </b-col>
                    </b-row>
                    <hr class="w-50 mx-auto">
                    <b-row>
                        <b-col size="4" lg="2" v-for="n in 12" :key="n">
                            <b-img :src="'https://loremflickr.com/200/200/?lock=' + n%10" thumbnail fluid-grow class="mb-3"></b-img>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </main-section>
</template>

<script>
    import MainSection from "../../components/layout-components/MainSection";
    import FormDivider from "../../components/Forms/FormDivider";
    export default {
        name: "my-profile",
        components: {FormDivider, MainSection},
        methods: {
            copyToClipboard(str) {
                const el = document.createElement('textarea');
                el.value = str;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
            }
        },
        computed: {
            avatar(){
                let img = this.$auth.user.avatar;
                return require('@/assets/img/avatar/' + img);
            }
        },
    }
</script>
