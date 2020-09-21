<template>
<div class="container-fluid user-follow-content-2" v-bind:class="{active: btnSearchHeader}">
    <div class="row user-follow-list-2" v-bind:class="{active: btnSearchHeader}">
        <div class="add-introduction-new-content my-shadow">
            <textarea class="extracto-modal" name="extracto" id="extractoNew" cols="auto" placeholder="Escribe tu extracto aquí"></textarea>
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
