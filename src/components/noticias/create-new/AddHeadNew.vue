<template>
<div class="add-head-new-content d-flex my-shadow">
    <div class="add-img-head-new d-flex justify-content-center align-items-center">
        <font-awesome-icon :icon="plusCircle" />
    </div>
    <div class="add-title-head-new d-flex justify-content-center align-items-center">
        <input type="text" class="add-title-head-new-input" placeholder="AGREGAR TITULO H1">
    </div>
</div>
</template>

<script>
/**
 * TODO listas por agg en AddHeadNew
 * !ajustar tamaño de input al contenido
 * !agg img a la canva y tambien crear dicha camba
 */
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
