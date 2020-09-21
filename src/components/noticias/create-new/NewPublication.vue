<template>
    <div>

            <div class="new-basic">
                <p>CREAR PUBLICACIÓN</p>
                <p class="p-second">BÁSICA</p>
                <router-link to="/createbasic">
                    <div class="icon-newP">
                        <font-awesome-icon :icon="plusCircle" />
                    </div>
                </router-link>
            </div>

        <div>
            <p class="p-down">Crea una publicación básica y haz que te conozcan.</p>
        </div>

        <div class="new-basic">
                <p>CREAR PUBLICACIÓN</p>
                <p class="p-second">AVANZADA</p>
                <router-link to="/create">
                    <div class="icon-newP">
                        <font-awesome-icon :icon="plusCircle" />
                    </div>
                </router-link>
            </div>
        <div>
            <p class="p-down">Crea una publicación optimizada para un mejor posicionamiento, ideal para personas con conocimientos en SEO.</p>
        </div>
    </div>
</template>

<script>

import {
    faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
export default {
    name: 'AddHeadNew',
    data() {
        return {
            plusCircle: faPlusCircle,
        }
    },
    components: {
        FontAwesomeIcon
    },

}

</script>
