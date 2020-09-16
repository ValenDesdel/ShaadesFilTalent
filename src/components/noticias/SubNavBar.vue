<template>
<div class="sub-nav-bar-menu-content my-shadow ">
    <div class="row">
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center sub-nav-bar-items">
            {{RouteOne.name}}
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center sub-nav-bar-items">
            {{RouteTwo.name}}
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center sub-nav-bar-items active">
            {{RouteThree.name}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        RouteOne: Object,
        RouteTwo: Object,
        RouteThree: Object
    },
    name: 'SubNavBar'
}
</script>
