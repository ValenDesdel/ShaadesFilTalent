<template>
<div id="app">
    <NavBar />
    <Content />
    <NavBarFooter />
</div>
</template>

<script>
import NavBar from './components/layout/NavBar';
import Content from './components/layout/Content';
import NavBarFooter from './components/layout/NavBarFooter';
export default {

    components: {
        NavBar,
        Content,
        NavBarFooter
    }
}
</script>

<style lang="scss">
@import './scss/App.scss';
</style>
