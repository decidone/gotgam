<template>
  <div class="homeHeader row justify-content-center">
    <!-- hh_wrap1 -->
    <div class="hh_wrap1 col-12 col-lg-5">
      <!-- hh_inner_wrap1 -->
      <div class="hh_inner_wrap1">
        <h1>
          We Travel
          <br>
          We Are Gotgam!
        </h1>
        <p>
          식상한 여행은 그만!
          <br>
          곶감과 기분을 공유하며 현지인들이 추천하는
          숨겨진 명소를 알아내고 지역의 감성을 느껴보세요.
        </p>

        <!-- hh_form_wrap -->
        <div class="hh_form_wrap">

          <!-- desti_wrap -->
          <div class="desti_wrap">
            <div class="desti_form">
              <div class="desti_icon">
                <svg data-v-3c805d31="" data-v-738935cd="" xmlns="http://www.w3.org/2000/svg" width="16" height="20"
                  viewBox="0 0 19 26">
                  <g data-v-3c805d31="" fill="none" fill-rule="evenodd" stroke="#ff4401" stroke-linecap="square"
                    stroke-width="2" transform="translate(1 1.6)">
                    <path data-v-3c805d31=""
                      d="M16.8615385,8.4 C16.8615385,13.545 8.43076923,22.05 8.43076923,22.05 C8.43076923,22.05 0,13.545 0,8.4 C0,3.045 4.32076923,0 8.43076923,0 C12.5407692,0 16.8615385,3.045 16.8615385,8.4 Z">
                    </path>
                    <ellipse data-v-3c805d31="" cx="8.431" cy="8.4" rx="3.162" ry="3.15"></ellipse>
                  </g>
                </svg>
              </div>
              <div class="desti_input">
                <input type="text" disabled="disabled" size="1" placeholder="Destination">
              </div>
            </div>
          </div>
          <!-- desti_wrap END -->

          <!-- etc_wrap -->
          <div class="etc_wrap">
            <div class="day_form">
              <div class="day_inner_form">
                <div class="day_icon">
                  <svg data-v-738935cd="" xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 31 31">
                    <g fill="none" fill-rule="evenodd" stroke="#ff4401" stroke-linecap="square" stroke-width="2"
                      transform="translate(1 1)">
                      <polyline points="29 10.545 29 29 0 29 0 10.545"></polyline>
                      <rect width="29" height="7.909" y="2.636"></rect>
                      <path
                        d="M14.5 0L14.5 5.27272727M6.59090909 0L6.59090909 5.27272727M22.4090909 0L22.4090909 5.27272727">
                      </path>
                    </g>
                  </svg>
                </div>
                <div class="day_input">
                  <input type="text" disabled="disabled" size="1" placeholder="Dates">
                </div>
              </div>
            </div>

            <div class="mood_form">
              <div class="mood_inner_form">
                <div class="mood_icon">
                  <svg data-v-08714426="" data-v-738935cd="" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 17 17">
                    <g data-v-08714426="" fill="none" fill-rule="evenodd" stroke="#ff4401" stroke-linecap="square">
                      <path data-v-08714426=""
                        d="M0.369565217,16.6304348 C0.369565217,12.5482174 3.67865217,9.23913043 7.76086957,9.23913043 L9.23913043,9.23913043 C13.3213478,9.23913043 16.6304348,12.5482174 16.6304348,16.6304348">
                      </path>
                      <circle data-v-08714426="" cx="8.5" cy="4.804" r="4.435"></circle>
                    </g>
                  </svg>
                </div>
                <div class="mood_input">
                  <input type="text" disabled="disabled" size="1" placeholder="Guests">
                </div>
              </div>
            </div>

            <div class="search_form">
              <span>Search</span>
            </div>
          </div>
          <!-- etc_wrap END -->
        </div>
        <!-- hh_form_wrap END -->
      </div>
      <!-- hh_inner_wrap1 END -->
    </div>
    <!-- hh_wrap1 END -->

    <!-- hh_wrap2 -->
    <div class="hh_wrap2 col-12 col-lg-5 mt-4">
      <!-- hh_inner_wrap2 -->
      <div class="hh_inner_wrap2">
        <img src="../assets/jade.png" alt="">

        <!-- subscri_wrap -->
        <div class="subscri_wrap">
          <a>강원 춘천시 남산면 햇골길 80 제이드가든수목원</a>
          <p>Photo-by Hyeon Yu Jin in Republic of Korea</p>
        </div>
        <!-- subscri_wrap END -->

      </div>
      <!-- hh_inner_wrap2 END -->
    </div>
    <!-- hh_wrap2 END -->
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .homeHeader {
    width: 98%;
    margin: 0 auto;
    padding: 3.4rem 0;
    box-sizing: border-box;
    /* display: flex; */
  }

  .hh_wrap1 {
    /* flex: 1; */
    /* display: flex; */
    justify-content: center;
    box-sizing: border-box;
  }

  .hh_inner_wrap1 {
    /* display: flex; */
    flex-direction: column;
  }

  .hh_inner_wrap1 h1 {
    /* max-width: 300px; */
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
  }

  .hh_inner_wrap1 p {
    /* margin: 1rem 0 3.4rem; */
    /* max-width: 420px; */
    font-weight: 600;
    color: #898ea2;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .hh_form_wrap {
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 15px rgba(69, 73, 91, .18);
  }

  .desti_wrap,
  .etc_wrap {
    display: flex;
  }

  .desti_wrap .desti_form {
    border-bottom: 1px solid #e4e5ec;
    height: 75px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }

  .desti_wrap .desti_form .desti_icon {
    display: flex;
    padding: 0 20px;
  }

  .desti_wrap .desti_form .desti_input {
    display: flex;
    flex: 1;
  }

  .desti_wrap input {
    border: none;
    font-size: .85rem;
    color: #353745;
    width: 100%;
    cursor: pointer;
    background-color: #fff;
  }

  .etc_wrap .day_form {
    border-right: 1px solid #e4e5ec;
    width: 100%;
    height: 75px;
  }

  .etc_wrap .day_form .day_inner_form {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 10px;
  }

  .etc_wrap .day_form .day_inner_form .day_icon {
    padding: 0 20px;
    display: flex;
  }

  .etc_wrap .day_form .day_inner_form .day_input {
    display: flex;
    flex: 1;
  }

  .etc_wrap input {
    border: none;
    font-size: .85rem;
    color: #353745;
    width: 100%;
    cursor: pointer;
    background-color: #fff;
  }

  .etc_wrap .mood_form {
    width: 100%;
    height: 75px;
  }

  .etc_wrap .mood_form .mood_inner_form {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 10px;
  }

  .etc_wrap .mood_form .mood_inner_form .mood_icon {
    padding: 0 20px;
    display: flex;
  }

  .etc_wrap .mood_form .mood_inner_form .mood_input {
    display: flex;
    flex: 1;
  }

  .etc_wrap .search_form {
    border: 1px solid #ff4401;
    background: #ff4401;
    color: #fff;
    padding: 0 25px;
    width: 100%;
    height: 75px;
    display: inline-flex;
    position: relative;
    align-items: center;
    margin: 0;
    cursor: pointer;
    box-sizing: border-box;
    flex: 1;
    /* z-index: 10; */
  }

  .etc_wrap .search_form span {
    display: flex;
    align-items: center;
    font-size: .9rem;
    font-weight: 600;
    white-space: nowrap;
  }

  .hh_wrap2 {
    /* flex: 1; */
    /* display: flex; */
    align-items: center;
  }

  .hh_inner_wrap2 {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .hh_inner_wrap2 img {
    width: 100%;
    display: flex;
  }

  .subscri_wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 50px;
  }

  .subscri_wrap a {
    font-weight: 700;
    text-decoration: underline;
    font-size: .65rem;
    line-height: .85rem;
    color: #353745;
    display: inline-flex;
    cursor: pointer;
    margin: 2px 0;
  }

  .subscri_wrap p {
    margin-left: 5px;
    font-size: .65rem;
    color: #353745;
    letter-spacing: .008rem;
    margin-bottom: 0;
  }
</style>