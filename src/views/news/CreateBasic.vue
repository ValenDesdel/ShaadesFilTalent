<template>
<div>
    <SubNavBar v-bind:RouteOne='RouteOne' v-bind:RouteTwo='RouteTwo' v-bind:RouteThree='RouteThree' />
    <AddHeadNewBasic />
    <AddDescription />
    <ConfigList />
</div>
</template>


<script>
import SubNavBar from '../../components/noticias/SubNavBar';
import AddHeadNewBasic from '../../components/noticias/create-new/AddHeadNewBasic';
import AddDescription from '../../components/noticias/create-new/AddDescription';
import ConfigList from '../../components/noticias/create-new/ConfigList';
export default {
    name: 'Create',
    components: {
        SubNavBar,
        AddHeadNewBasic,
        AddDescription,
        ConfigList
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