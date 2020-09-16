<template>
<div class="container-fluid nav-bar-footer-news" v-bind:class="[ this.$route.path === routeFather  ? 'padding-index' : this.$route.path === routeDetail ? 'padding-detail' : 'padding-create-new']">
    <div class="content-btn-actions row">
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-around align-items-center">
            <div class="btn-action " @click.prevent="log">
                <router-link to="#" class="d-flex justify-content-between align-items-center my-links">
                    <span class="d-flex justify-content-between align-items-center">
                        <img class="sign-in-img" src="../../assets/icons/img/sign-in-alt.svg" alt="SignIn">
                        Mi cuenta
                    </span>
                </router-link>
            </div>
        </div>

        <div v-if="this.$route.path === '/'" class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 d-flex justify-content-around align-items-center">
            <div class="btn-action ">
                <router-link to="#" class="my-links">
                    <span>
                        <img src="../../assets/icons/img/change.svg" class="change-elipse" alt="Change">
                    </span>
                </router-link>
            </div>
            <div class="btn-action ">
                <router-link to="#" class="my-links">
                    <span>
                        <img src="../../assets/icons/img/sort-amount-up.svg" class="sort-amount" alt="Sort">
                    </span>
                </router-link>
            </div>
            <div class="btn-action ">
                <span @click.prevent="showFilter(); clearInput()" class="my-links">
                    <span>
                        <img src="../../assets/icons/img/filter-views.svg" class="filter-news" alt="user">
                    </span>
                </span>
            </div>
        </div>

        <div v-if="this.$route.path === '/detail-new'" class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 d-flex justify-content-around align-items-center">
            <div class="btn-action text-center">
                <span class="icon-comment-cont">
                    <font-awesome-icon :icon="commentAlt" />
                </span>
                <p class="icon-comment-text">xx.xxx</p>
            </div>
            <div class="btn-action-comment text-center">
                <span class="icon-like-cont">
                    <font-awesome-icon :icon="heart" />
                </span>
                <p class="icon-link-text">xx.xxx</p>
            </div>
            <div class="btn-action-like text-center">
                <span class="icon-share">
                    <font-awesome-icon :icon="share" />
                </span>
            </div>
        </div>

        <div v-if="this.$route.path === '/create'" class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 d-flex justify-content-around align-items-center">
            <div class="btn-action ">
                <span class="my-links icon-plus-new">
                    <font-awesome-icon :icon="plusCircle" />
                </span>
            </div>
            <div class="btn-action ">
                <span @click.prevent="showConfigListNews()" class="my-links icon-cog-new" v-bind:class="{active: configListActive}">
                    <font-awesome-icon :icon="cog" />
                </span>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import {
    faCommentAlt,
    faHeart,
    faShare,
    faPlusCircle,
    faCog
} from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
    mapMutations,
    mapState
} from 'vuex';
export default {
    name: 'NavBarFooter',
    data() {
        return {
            commentAlt: faCommentAlt,
            heart: faHeart,
            share: faShare,
            plusCircle: faPlusCircle,
            cog: faCog,
            routeFather: '/',
            routeDetail: '/detail-new'
        }
    },
    components: {
        FontAwesomeIcon
    },
    computed: {
        ...mapState('createNews', ['configListActive']),
    },
    methods: {
        ...mapMutations('navbarStore', ['showFilter', 'clearInput']),
        ...mapMutations('createNews', ['showConfigListNews']),

    },

}
</script>
