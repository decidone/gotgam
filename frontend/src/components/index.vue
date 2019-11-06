<template>
    <div class="wrapper">
        <Header></Header>
        <div class="container1">
            <router-view />
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './header.vue';
    import Container from './container.vue';
    import Footer from './footer.vue';

    export default {
        components: {
            Header,
            Container,
            Footer
        }
    }
</script>

<style>
    .wrapper {
        position: relative;
        width: 100%;
        min-height: 100%;
    }

    .container1 {
        width: 100%;
        /* min-height: 100vh; footer 하단 고정 */
        padding-bottom: 250px;
        min-height: 100%;
        height: 100%;
    }
    .footer_wrap_menu{
        padding: 3.4rem 0;
    }

    @media (max-width: 768px) {
        .container1 {
            width: 100%;
            /* min-height: 100vh; footer 하단 고정 */
            padding-bottom: 315px;
            min-height: 100%;
            height: 100%;
        }
        .footer_wrap_menu_intro{
            text-align: center;
        }
        .footer_wrap_menu
        {
            padding: 2rem 0;
        }
    }
</style>