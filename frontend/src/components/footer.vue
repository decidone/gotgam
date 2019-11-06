<template>
  <div class="footer">
    <div class="footer_inner_wrap">
      <div class="footer_wrap_menu row">
        <div class="footer_wrap_menu_intro col-12 col-md-6">
          <h4>곶감 is 곳곳의 감성</h4>
          <p>Everywhere You Want To Go.</p>
        </div>
        <div class="footer_wrap_menu_browse col-4 col-md-2">
          <h4>Browse</h4>
          <a>Travel</a>
          <a>About</a>
          <a>FAQ</a>
        </div>
        <div class="footer_wrap_menu_about col-4 col-md-2" >
          <h4>About</h4>
          <a>지혁's story</a>
        </div>
        <div class="footer_wrap_menu_social col-4 col-md-2">
          <h4>Social</h4>
          <a class="sc_icon_wrap">
            <div class="sc_icon">
              <svg data-v-d79dd928="" data-v-4a138f5e="" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 8 16">
                <path data-v-d79dd928="" data-v-4a138f5e="" fill="#ff4401" d="M3.02293,16 L3,9 L0,9 L0,6 L3,6 L3,4 C3,1.3008 4.67151,0 7.07938,0 C8.23277,0 9.22406,0.08587 9.51294,0.12425 L9.51294,2.94507 L7.84296,2.94583 C6.53343,2.94583 6.27987,3.5681 6.27987,4.48124 L6.27987,6 L10,6 L9,9 L6.27986,9 L6.27986,16 L3.02293,16 Z"></path>
              </svg>
            </div>
            Facebook
          </a>
          <a class="sc_icon_wrap">
            <div class="sc_icon">
              <svg data-v-d79dd928="" data-v-4a138f5e="" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16">
                <g data-v-d79dd928="" data-v-4a138f5e="" fill="#ff4401">
                  <circle data-v-d79dd928="" data-v-4a138f5e="" cx="12.145" cy="3.892" r="1"></circle>
                  <path data-v-d79dd928="" data-v-4a138f5e="" d="M8,12 C5.794,12 4,10.206 4,8 C4,5.794 5.794,4 8,4 C10.206,4 12,5.794 12,8 C12,10.206 10.206,12 8,12 Z M8,6 C6.897,6 6,6.897 6,8 C6,9.103 6.897,10 8,10 C9.103,10 10,9.103 10,8 C10,6.897 9.103,6 8,6 Z"></path>
                  <path data-v-d79dd928="" data-v-4a138f5e="" d="M12,16 L4,16 C1.944,16 0,14.056 0,12 L0,4 C0,1.944 1.944,0 4,0 L12,0 C14.056,0 16,1.944 16,4 L16,12 C16,14.056 14.056,16 12,16 Z M4,2 C3.065,2 2,3.065 2,4 L2,12 C2,12.953 3.047,14 4,14 L12,14 C12.935,14 14,12.935 14,12 L14,4 C14,3.065 12.935,2 12,2 L4,2 Z"></path>
                </g>
              </svg>
            </div>
            Instagram
          </a>
          <a class="sc_icon_wrap">
            <div class="sc_icon">
              <svg data-v-d79dd928="" data-v-4a138f5e="" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 14">
                <path data-v-d79dd928="" data-v-4a138f5e="" fill="#ff4401" d="M16,2 C15.4,2.3 14.8,2.4 14.1,2.5 C14.8,2.1 15.3,1.5 15.5,0.7 C14.9,1.1 14.2,1.3 13.4,1.5 C12.8,0.9 11.9,0.5 11,0.5 C9.3,0.5 7.8,2 7.8,3.8 C7.8,4.1 7.8,4.3 7.9,4.5 C5.2,4.4 2.7,3.1 1.1,1.1 C0.8,1.6 0.7,2.1 0.7,2.8 C0.7,3.9 1.3,4.9 2.2,5.5 C1.7,5.5 1.2,5.3 0.7,5.1 C0.7,5.1 0.7,5.1 0.7,5.1 C0.7,6.7 1.8,8 3.3,8.3 C3,8.4 2.7,8.4 2.4,8.4 C2.2,8.4 2,8.4 1.8,8.3 C2.2,9.6 3.4,10.6 4.9,10.6 C3.8,11.5 2.4,12 0.8,12 C0.5,12 0.3,12 0,12 C1.5,12.9 3.2,13.5 5,13.5 C11,13.5 14.3,8.5 14.3,4.2 C14.3,4.1 14.3,3.9 14.3,3.8 C15,3.3 15.6,2.7 16,2 Z"></path>
              </svg>
            </div>
            Twitter
          </a>
        </div>
      </div>

      <div class="footer_wrap_sub">
        <p>&copy; 2019 Gotgam All right reserved</p>
        <div>
          <a>Yongin Univ. Computer Science</a>
          <a>Gotgam</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background:rgba(230, 230, 230, 0.517);
    display: flex;
    justify-content: center;
    box-sizing: border-box;
}

.footer_inner_wrap {
  margin: 0 auto;
  width: 100%;
}

.footer_wrap_menu {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
}

.footer_wrap_menu a {
  width: 100%;
  display: inline-block;
}

.footer_wrap_menu_intro {
  justify-content: flex-start;
  flex-direction: column;
  /* flex: 1; */
  padding-right: 2.2rem;
}

.footer_wrap_menu_browse, .footer_wrap_menu_about, .footer_wrap_menu_social {
  justify-content: flex-start;
  flex-direction: column;
  width: 16%;
}

.sc_icon_wrap {
  display: inline-flex;
  width: 100%;
}

.sc_icon {
  display: inline-flex;
  width: 10px;
  height: 14px;
  margin: 0 3px;
}

.sc_icon svg {
  width: 100%;
  display: inline-block;
}

.footer_wrap_sub {
  justify-content: space-between;
  border-top: 1px solid #ddd;
  display: flex;
  margin-bottom: 2rem;
}

.footer_wrap_sub > p {
  margin: 1rem 0 0 0;
  font-size: .65rem;
  line-height: 1.15rem;
}

.footer_wrap_sub > div {
  margin: 1rem 0 0 0;
  font-size: .65rem;
  line-height: .85rem;
}

.footer_wrap_sub > div > a:nth-of-type(1) {
  font-weight: 700;
  display: inline-flex;
  margin-right: .25rem;
}
</style>