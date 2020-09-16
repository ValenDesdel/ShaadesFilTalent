<template>
<div class="index-content">
    <SubNavBar v-bind:RouteOne='RouteOne' v-bind:RouteTwo='RouteTwo' v-bind:RouteThree='RouteThree' />
    <CardsAllNews />
    <UserFollowContent />

</div>
</template>

<script>
import SubNavBar from '../../components/noticias/SubNavBar';
import CardsAllNews from '../../components/noticias/CardsAllNews';
import UserFollowContent from '../../components/noticias/UserFollowContent'
export default {
    name: 'Index',
    data() {
        return {
            RouteOne: {
                name: 'EMPLEOS'
            },
            RouteTwo: {
                name: 'HOME'
            },
            RouteThree: {
                name: 'NOTICIAS'
            },
        }
    },
    components: {
        SubNavBar,
        CardsAllNews,
        UserFollowContent
    }
}
</script>
