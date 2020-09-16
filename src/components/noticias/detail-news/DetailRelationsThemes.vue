<template>
<div class="themes-relations-content">
    <ThemesRelationsNav />
    <MoreReadThemes />
</div>
</template>

<script>
import ThemesRelationsNav from './ThemesRelationsNav';
import MoreReadThemes from './MoreReadThemes';
export default {
    name: "DetailRelationsThemes",

    components: {
        ThemesRelationsNav,
        MoreReadThemes
    }
}
</script>
