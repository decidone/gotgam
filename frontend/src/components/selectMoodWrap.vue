<template>
  <div class="select_mood_wrap">
    <div class="select_mood_inner_wrap">
      <div class="mood_title_wrap">
        <h2>당신의 기분을 골라주세요!</h2>
    </div>
    <section>
      <div id="first" class="range-container">
        <ul class="range-labels">
          <li class="rangeBulletangry dark">
            <p>Angry</p>
            <i class="em em-angry"></i>
          </li>
          <li class="rangeBulletexpressionless dark">
            <p>Expressionless</p>
            <i class="em em-expressionless"></i>
          </li>
          <li class="rangeBulletastonished dark">
            <p>Astonished</p>
            <i class="em em-astonished"></i>
          </li>
          <li class="rangeBulletconfounded dark">
            <p>Confounded</p>
            <i class="em em-confounded"></i>
          </li>
          <li class="rangeBulletokay dark">
            <p>Okey?</p>
            <i class="em em-face_with_raised_eyebrow"></i>
          </li>
          <li class="rangeBulletblush dark">
            <p>Blush</p>
            <i class="em em-blush"></i>
          </li>
        </ul>

        <div class="range">
          <input type="range" min="1" max="6" steps="1">
        </div>

      </div>
    </section>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
.select_mood_wrap {
  width: 100%;
  height: 30rem;
  margin-bottom: 3.4rem;
}

section {
  max-width: 1024px;
  min-width: 320px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}

.mood_title_wrap {
  width: 100%;
  position: absolute;
  top: 7%;
  text-align: center;
}

.mood_title_wrap h2 {
  color: rgb(243, 243, 243);
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
}

.select_mood_inner_wrap {
  width: 100%;
  height: 100%;
  background: linear-gradient(#e66465, #9198e5);
}

section .range-container {
  width: 100%;
  margin: auto;
}

.range-container {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transition: all 400ms;
  margin: 25px 0 20px;
  position: relative;
  top: 40%;
}

.range-container .range {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 85%;
  height: 4px;
}

.range-container .range input[type=range] {
  appearance: none;
  margin: 15px 0;
  width: 100%;
  height: 100%;
  transition: all .2s ease;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  border: 0 solid #cfd8dc;
  border-radius: 0;
}

.range-container .range input[type=range]:focus {
  outline: 0;
}

.range-container .range-labels {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: stretch;
  margin: 0 0 25px;
  padding: 0;
  list-style: none;
  width: 100%;
}

.range-container .range-labels li {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: all 400ms;
  position: relative;
  width: 20%;
  cursor: pointer;
}

.range-container .range-labels li.dark::after {
  background: #fff;
}

.range-container .range-labels li.dark p {
  color: rgb(243, 243, 243);
}

.range-container .range-labels li:hover a {
  opacity: 1;
  visibility: visible;
}

.range-container .range-labels li::after {
  box-shadow: 0 0 0 3px rgb(228, 93, 172);
  transition: all 400ms;
  position: absolute;
  bottom: -34px;
  z-index: 1;
  right: 0;
  left: 0;
  content: "";
  margin: 0 auto;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  pointer-events: none;
}

.range-container .range-labels li.active p {
  font-weight: 700;
}

.range-container .range-labels li.active::after {
  box-shadow: 0 0 0 6px #000;
}

.range-container .range-labels li.active i {
  font-size: 18px;
  bottom: -80px;
}

.range-container .range-labels li p {
  font-family: "Open Sans";
  font-size: 1em;
  font-weight: 500;
  line-height: 1.1;
  text-align: center;
  max-width: 100%;
  margin: 0;
  word-wrap: break-word;
  position: relative;
}

.range-container .range-labels li i {
  transition: all 400ms;
  text-align: center;
  position: absolute;
  margin: 0 auto;
  bottom: -75px;
  font-size: 15px;
}

/* emoji */
.em {
  height: 1.6em;
  width: 1.6em;
}

.em.em-angry {
  background: url('../assets/em-angry.png') center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em.em-expressionless {
  background: url('../assets/em-expressionless.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em.em-astonished {
  background: url('../assets/em-astonished.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em.em-confounded {
  background: url('../assets/em-confounded.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em.em-face_with_raised_eyebrow {
  background: url('../assets/em-face_with_raised_eyebrow.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
.em.em-blush {background: url('../assets/em-blush.png') center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>