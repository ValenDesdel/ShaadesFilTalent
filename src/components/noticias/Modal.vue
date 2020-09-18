<template>
<div class="container-fluid user-follow-content-2" v-bind:class="{active: btnSearchHeader}">
    <div class="row user-follow-list-2" v-bind:class="{active: btnSearchHeader}">
        <div class="add-introduction-new-content my-shadow">
            <textarea class="extracto-modal" name="extracto" id="extractoNew" cols="auto" placeholder="Escribe tu extracto aquí"></textarea>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center" @click.prevent="showFilter(); clearInput()">
            <p class="user-follow-list-option-2">HABLA</p>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center" @click.prevent="showFilter(); clearInput()">
            <p class="user-follow-list-option-2">HABLA</p>
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
    name: 'Modal'
}
</script>
