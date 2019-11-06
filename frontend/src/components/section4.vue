<template>
  <div class="section4_wrap">
    <div class="section4_inner_wrap">
        <div class="section4_title">
            <h2>Gotgam's Stories</h2>
        </div>
        <div class="section4_body">
            <div class="content" >
                <div v-if="activetab === 1" class="tabcontent">
                    <gotgam-story1></gotgam-story1>
                </div>
                <div v-if="activetab === 2" class="tabcontent">
                    <gotgam-story2></gotgam-story2>
                </div>
                <div v-if="activetab === 3" class="tabcontent">
                    <gotgam-story3></gotgam-story3>
                </div>
            </div>
            
            <div class="section4_person tabs">
                <!-- person1 -->
                <div class="s4_person_wrap" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">
                    <div class="s4_person_inner">
                        <div class="s4_person_profile1"></div>
                    </div>
                    <p class="person_name">Hyeon Yu Jin
                        <span class="person_text">Suwon, Korea</span>
                    </p>
                </div>
            
                <!-- person2 -->
                <div class="s4_person_wrap" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">
                    <div class="s4_person_inner">
                        <div class="s4_person_profile2"></div>
                    </div>
                    <p class="person_name">Jeong Ji Hyurk
                        <span class="person_text">Yongin, Korea</span>
                    </p>
                </div>
            
                <!-- person3 -->
                <div class="s4_person_wrap" v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">
                    <div class="s4_person_inner">
                        <div class="s4_person_profile3"></div>
                    </div>
                    <p class="person_name">Lee Da Bin
                        <span class="person_text">Incheon, Korea</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import GotgamStory1 from './gotgamStory1.vue';
import GotgamStory2 from './gotgamStory2.vue';
import GotgamStory3 from './gotgamStory3.vue';

export default {
    components: {
        GotgamStory1,
        GotgamStory2,
        GotgamStory3
    },
    data() {
        return {
            activetab: 1 
        }
    }

}
</script>

<style>
.section4_wrap {
    padding: 3.4rem 0;
    display: flex;
    flex-direction: column;
}

.section4_inner_wrap {
    width: 100%;
    box-sizing: border-box;
}

.section4_title h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
}

.section4_body {
    margin-top: 2.2rem;
}

.content {
    width: 100%;
}

.section4_person {
    display: flex;
    justify-content: space-around;
    padding-top: 3.4rem;
    max-width: 700px;
    margin: auto;
}

.s4_person_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    opacity: 0.6;
}

.s4_person_wrap.active {
    opacity: 1;
}

.s4_person_inner {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
}

.s4_person_profile1 {
    background: url(../assets/yj.jpg) no-repeat;
    padding-top: 100%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    widows: 100%;
}

.s4_person_profile2 {
    background: url(../assets/jh.jpg) no-repeat;
    padding-top: 100%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    widows: 100%;
}

.s4_person_profile3 {
    background: url(../assets/db.jpg) no-repeat;
    padding-top: 100%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.person_name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 8px;
    margin-top: 1rem;
}

.person_text {
    font-size: .75rem;
    line-height: 1.25rem;
    color: #8982a2;
    font-weight: 600;
}

</style>