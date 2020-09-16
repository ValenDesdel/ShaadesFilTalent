<template>
<div>
    <Article topNav="top-one" />
    <DetailHead />
    <DetailBody />
    <DetailRelationsThemes />
    <CardsAllNews />

</div>
</template>

<script>
import Article from "../../components/noticias/Article";
import DetailHead from "../../components/noticias/detail-news/DetailHead";
import DetailBody from "../../components/noticias/detail-news/DetailBody";
import DetailRelationsThemes from "../../components/noticias/detail-news/DetailRelationsThemes";
import CardsAllNews from '../../components/noticias/CardsAllNews';
export default {
    name: 'DetailNew',
    components: {
        Article,
        DetailHead,
        DetailBody,
        DetailRelationsThemes,
        CardsAllNews,
    }
}
</script>
