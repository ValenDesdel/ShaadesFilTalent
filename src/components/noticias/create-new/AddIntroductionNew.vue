<template>
<div class="add-introduction-new-content my-shadow">
    <span class="info-circle-intro">
        <font-awesome-icon :icon="infoCircle" />
    </span>
    <textarea name="introduction" id="introductionNew" cols="auto" placeholder="Introducción"></textarea>
</div>
</template>

<script>
/**
 * TODO listas por agg en AddIntroductionNew
 * !ajustar tamaño de textarea al contenido
 */

import {
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
export default {
    name: 'AddIntroductionNew',
    data() {
        return {
            infoCircle: faInfoCircle,
        }
    },
    components: {
        FontAwesomeIcon
    },
}
</script>
