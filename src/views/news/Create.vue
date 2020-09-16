<template>
<div>
    <SubNavBar v-bind:RouteOne='RouteOne' v-bind:RouteTwo='RouteTwo' v-bind:RouteThree='RouteThree' />
    <Article topNav="top-two" />
    <AddHeadNew />
    <AddIntroductionNew />
    <AddBar />
    <ConfigList />
</div>
</template>

<script>
import Article from "../../components/noticias/Article";
import SubNavBar from '../../components/noticias/SubNavBar';
import AddHeadNew from '../../components/noticias/create-new/AddHeadNew';
import AddIntroductionNew from '../../components/noticias/create-new/AddIntroductionNew';
import AddBar from '../../components/noticias/create-new/AddBar';
import ConfigList from '../../components/noticias/create-new/ConfigList';
export default {
    name: 'Create',
    components: {
        Article,
        SubNavBar,
        AddHeadNew,
        AddIntroductionNew,
        AddBar,
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
