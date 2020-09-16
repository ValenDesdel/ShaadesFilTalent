<template>
<body>
<div>
    <SubNavBar v-bind:RouteOne='RouteOne' v-bind:RouteTwo='RouteTwo' v-bind:RouteThree='RouteThree' />
    <NewPublication />

</div>
</body>
</template>

<style>
 .body{
     background-color: rgb(245, 245, 245);
 }
</style>

<script>

import SubNavBar from '../../components/noticias/SubNavBar';
import NewPublication from '../../components/noticias/create-new/NewPublication';

export default {
    name: 'Create',
    components: {
        SubNavBar,
        NewPublication
    },
    data() {
        return {
            RouteOne: {
                name: 'ACTIVAS'
            },
            RouteTwo: {
                name: 'EN ESPERA'
            },
            RouteThree: {
                name: 'CREAR'
            },
        }
    },
}
</script>
