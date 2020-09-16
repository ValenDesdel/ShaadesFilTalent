<template>
<div class="container-fluid user-follow-content" v-bind:class="{active: btnSearchHeader}">
    <div class="row user-follow-list" v-bind:class="{active: btnSearchHeader}">
        <div class="col-12 d-flex justify-content-center align-items-center" @click.prevent="showFilter(); clearInput()">
            <p class="user-follow-list-option">PRINCIPAL</p>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center" @click.prevent="showFilter(); clearInput()">
            <p class="user-follow-list-option">SEGUIDOS</p>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center" @click.prevent="showFilter(); clearInput()">
            <p class="user-follow-list-option">SEGUIDORES</p>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapMutations
} from "vuex"

export default {
    computed: {
        ...mapState('navbarStore', [
            'btnSearchHeader',
        ])
    },
    methods: {
        ...mapMutations('navbarStore', ['showFilter', 'clearInput']),
    },
    name: 'UserFollowContent'
}
</script>
