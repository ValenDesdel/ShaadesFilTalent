<template>
<div class="container-fluid user-follow-content-2" v-bind:class="{active: btnSearchHeader}">
    <div class="row user-follow-list-2" v-bind:class="{active: btnSearchHeader}">
        <div class="extracto-modal-div">
            <div class="title-modal">
                <a>EXTRACTO</a>
            </div>
            <textarea class="extracto-modal" name="extracto" id="extractoNew" cols="auto" placeholder="Escribe tu extracto aquí"></textarea>
            <div class="btn-extracto-modal">
                <a class="a-extracto-modal-save">Guardar</a>
                <a class="a-extracto-modal-close">Cerrar</a>
            </div>
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
