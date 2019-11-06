<template>
    <div class="primary content-area col-lg-8 col-md-8 col-12 pull-right">
        <div class="pri_main">
            <div class="content-wrapper">
                <div class="calousel_wrapper">
                    <carousel :autoplay="true" :nav="false">
                        <!-- <img v-bind:src="myboard.photo1">
                        <img v-bind:src="myboard.photo2">
                        <img v-bind:src="myboard.photo3">
                        <img v-bind:src="myboard.photo4"> -->
                    </carousel>
                </div>

                <p>{{ myboard.maincontent }}</p>

                <!-- accordion -->
                <accordion-wrap></accordion-wrap>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel';
    import AccordionWrap from './accordionWrap.vue';
    
    export default {
        components: {
            carousel,
            AccordionWrap,
        },
        created() {
            var id = this.$route.params.id;
            this.$http.get(`/api/regist/${id}`)
                .then((response) => {
                    this.myboard = response.data
            })
        },
        data() {
            return {
                myboard: {}
            }
        }

    }
</script>

<style>
    .pri_main {
        display: block;
    }

    .primary {
        margin: 15px auto;
        float: left;
    }

    .calousel_wrapper {
        margin-bottom: 4rem;
    }

    .content-wrapper p {
        margin-bottom: 20px;
        margin: 0 0 10px;
    }

    /* carousel */
    .owl-stage {
        height: 170px;
        transition: all 800ms ease 0s !important;
    }

    .owl-carousel.owl-drag .owl-item {
        height: 100%;
    }

    .owl-carousel .owl-item img {
        height: 100%;
    }

    .owl-dots {
        display: none;
    }

    /* schedule_box */
    .schedule_box {
        padding: 40px 30px 0 30px;
    }

    .schedule_box h2 {
        font-size: 23px;
        line-height: 1;
        margin: 0 0 20px;
        font-weight: 500;
        color: #232323;
        display: block;
    }

    .schedule_box p.desc {
        display: block;
        font-size: 14px;
        color: #898989;
        line-height: 23px;
        margin: 0 0 30px;
    }

    .schedule_box ul {
        position: relative;
        display: block;
        padding-left: 53px;
    }

    .schedule_box ul::before {
        content: '';
        position: absolute;
        top: 45px;
        left: 26px;
        bottom: 55px;
        display: block;
        width: 4px;
        background: #ededed;
    }

    .schedule_box ul li {
        position: relative;
        padding: 0 0 30px 0;
    }

    .schedule_box ul li>a {
        position: relative;
        display: block;
        height: 100px;
        padding-left: 128px;
        box-sizing: border-box;
    }

    .schedule_box ul li>a::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -31px;
        display: block;
        width: 12px;
        height: 12px;
        margin: -16px 0;
        background: #fff;
        border: 2px solid #bababa;
        box-sizing: border-box;
        border-radius: 100%;
    }

    .schedule_box ul li a .thumb {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        overflow: hidden;
        margin: -50px 0 0 0;
        background: #ebebeb;
    }

    .schedule_box ul li a .thumb img {
        width: auto;
        height: 100px;
        vertical-align: middle;
        transform: scale(1);
        transition: all 0.3s;
        border: 0 none;
    }

    .schedule_box ul li a .thumb .border {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #000;
        opacity: .1;
        transition: all 0.3s ease-in-out;
        box-sizing: border-box;
    }

    .schedule_box ul li a .info {
        height: 100%;
        padding: 20px 5px;
    }

    .schedule_box ul li a:hover {
        text-decoration: none;
    }

    .schedule_box ul li a .info .info_title {
        color: #232323;
        font-size: 1.1rem;
        font-weight: normal;
        display: block;
        line-height: 1;
        letter-spacing: -1px;
        margin: 0 0 10px;
    }

    .schedule_box ul li a .info p {
        display: block;
        font-size: 14px;
        color: #898989;
        margin: 0 0 7px;
    }

    /* accordion */
    .accordion {
        padding: 40px 0;
    }

    .accordion_title {
        width: 100%;
        text-align: left;
        font-size: 1.3rem;
        font-weight: 700;
        color: #232323;
        text-decoration: none;
    }

    .accordion_title:hover {
        text-decoration: none;
        color: #232323;
    }
</style>