<template>
<div class="container-fluid nav-bar-content-news">
    <div class="row">
        <div class="col-2 col-md-2 col-sm-2 col-xl-2 col-lg-2 justify-content-center align-items-center  btn-search-header" v-bind:class="{active: btnSearchHeader}">
            <div class="search-icon">
                <span @click.prevent="focusBtnSearch">
                    <img src="../../assets/icons/img/search.svg" alt />
                </span>
            </div>
        </div>
        <div class="col-10 col-md-10 col-sm-10 col-xl-10 col-lg-10 justify-content-start align-items-center  btn-search-header" v-bind:class="{active: btnSearchHeader}">
            <div class="search-bar">
                <input type="text" id="inputSearchNews" placeholder="input some text here..." />
            </div>
        </div>
        <div class="col-2 col-md-2 col-sm-2 col-xl-2 col-lg-2 justify-content-center align-items-center  btn-back-header-content" v-bind:class="{active: btnBackHeader}">
            <router-link to="#" class="btn-back-header">
                <span>
                    <img src="../../assets/icons/img/arrow-left.svg" alt="Back" />
                </span>
            </router-link>
        </div>
        <div class="col-10 col-md-10 col-sm-10 col-xl-10 col-lg-10 justify-content-center align-items-center  cont-logo-head" v-bind:class="{active: contLogoHead}">
            <router-link to="/">
                <img class="logo-head" src="../../assets/icons/img/LogoHeader.png" alt="Shaades" />
            </router-link>
        </div>
        <!----this section is show if user has a session-->
        <div class="col-5 col-md-5 col-sm-5 col-xl-5 col-lg-5 justify-content-start align-items-center  user-name-content" v-bind:class="{active: isUserLog}">
            <p class="user-name">{{userName}}</p>
        </div>
        <div class="col-5 col-md-5 col-sm-5 col-xl-5 col-lg-5 justify-content-end align-items-center  is-follow-content" v-bind:class="{active: isFollowUser}">
            <p class="is-follow">{{userFollow}}</p>
            <img src="../../assets/icons/img/elipse.svg" alt="" />
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: "NavBar",
    methods: {
        focusBtnSearch() {
            document.getElementById("inputSearchNews").focus();
        },

    },
    computed: {
        ...mapState('navbarStore', [
            'isUserLog',
            'userName',
            'isFollowUser',
            'userFollow',
            'btnSearchHeader',
            'btnBackHeader',
            'contLogoHead',
            'userNameContent',
            'isFollowContent',
        ])
    },

};
</script>
