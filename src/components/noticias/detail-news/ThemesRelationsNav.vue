<template>
<div class="themes-relations-nav-content my-shadow">
    <div class="row">
        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 d-flex justify-content-center align-items-center article-nav-bar-items">
            <p>
                TEMAS RELACIONADOS
            </p>
        </div>
        <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-center align-items-center article-nav-bar-items">
            <button class="icon-sort-down">
                <font-awesome-icon :icon="myIcon" />
            </button>
        </div>
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
export default {
    name: "ThemesRelationsNav",
    data() {
        return {
            myIcon: faCaretDown
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>
