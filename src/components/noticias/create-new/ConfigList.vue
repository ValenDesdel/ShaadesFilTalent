<template>
<div class="config-list-content" @click.prevent="clickOutsideList" v-bind:class="{active: configListActive}">
    <div class="config-list-side" id="configListSide" v-bind:class="{active: configListActive}">
        <ul class="ul-parent">
            <li @click.prevent="showChildList('parentA')" class="parents" id='parentA'>
                <div class="d-flex justify-content-between align-items-center content-text-parent">
                    ESTADO Y VISIBILIDAD
                    <button class="icons-extend-children-list d-flex justify-content-center align-items-center">
                        <font-awesome-icon :icon="myIcon" />
                    </button>
                </div>
                <div class="child-ul-div">
                    <div class="d-flex justify-content-between align-items-center">
                        <p>Estado</p>
                        <p class="values-child">Borrador</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p>Publicar</p>
                        <p class="values-child">Inmediatamente</p>
                    </div>
                </div>
            </li>
            <li @click.prevent="showChildList('parentB')" class="parents" id='parentB'>
                <div class="d-flex justify-content-between align-items-center content-text-parent">
                    CATEGORÍAS
                    <button class="icons-extend-children-list d-flex justify-content-center align-items-center">
                        <font-awesome-icon :icon="myIcon" />
                    </button>
                </div>
                <div class="child-ul-div">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="dropdown-item">
                            <input type="text" class="form-control" id="exampleDropdownFormEmail1" placeholder="Nueva categoría">
                            <!--TEXT AREA PARA AGREGAR CATEGORÍAS-->
                        </div>
                    </div>
                </div>
            </li>
            <li @click.prevent="showChildList('parentC')" class="parents" id='parentC'>
                <div class="d-flex justify-content-between align-items-center content-text-parent">
                    ETIQUETAS
                    <button class="icons-extend-children-list d-flex justify-content-center align-items-center">
                        <font-awesome-icon :icon="myIcon" />
                    </button>
                </div>
                <div class="child-ul-div">
                    <div class="d-flex justify-content-between align-items-center">
                        <p>Estado</p>
                        <p class="values-child">Borrador</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p>Publicar</p>
                        <p class="values-child">Inmediatamente</p>
                    </div>
                </div>
            </li>
            <li class="parents d-flex justify-content-start align-items-center content-text-parent">
                EXTRACTO
            </li>
            <li class="parents d-flex justify-content-between align-items-center content-text-parent">
                ACEPTAR COMENTARIOS
                <input type="checkbox" id="checkbox" v-model="checked">
            </li>
            <li class="parents d-flex justify-content-start align-items-center content-text-parent">
                TÍTULO SEO
            </li>
            <li class="parents d-flex justify-content-start align-items-center content-text-parent">
                METADESCRIPCIÓN
            </li>
            <li class="parents d-flex justify-content-start align-items-center content-text-parent">
                URL AMIGABLE
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
    faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import {
    mapState,
    mapMutations
} from 'vuex';
export default {
    name: 'ConfigList',
    data() {
        return {
            myIcon: faCaretDown,
            checked: false,
            idSelected: '',
        }
    },
    components: {
        FontAwesomeIcon
    },
    computed: {
        ...mapState('createNews', ['configListActive'])
    },
    methods: {
        ...mapMutations('createNews', ['showConfigListNews']),
        clickOutsideList(e) {
            if (!document.getElementById('configListSide').contains(e.target)) {
                this.showConfigListNews();
            }
        },
        showChildList(id) {
            if (this.idSelected.length === 0) {
                this.idSelected = id;
                document.getElementById(id).className += ' active'

            } else if (this.idSelected !== id && this.idSelected.length > 0) {
                document.getElementById(this.idSelected).classList.remove('active')
                this.idSelected = id;
                document.getElementById(id).className += ' active'
            } else if (this.idSelected === id && this.idSelected.length > 0) {
                document.getElementById(this.idSelected).classList.remove('active')
                this.idSelected = '';
            }

        }
    }
}
</script>
