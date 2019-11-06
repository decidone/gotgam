<template>
  <div class="registration_wrap">
    <div class="registration_inner_wrap">
      <!-- .container -->
      <b-container>
            <form>
              <h3>곶감 등록</h3>
              <b-row class="setup-content justify-content-end">

                <!-- left -->
                <b-col sm="12" md="6" class="step-1-1">
                  <b-col md="12">

                    <!-- main img uploader -->
                    <!-- <div class="img_uploader_wrap">
                      <label for="fileInput" slot="upload-label">
                        <span class="upload-caption">{{ hasImage ? "Replace" : "Click to upload" }}</span>
                      </label>
                      <image-uploader :preview="true" :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                        capture="environment" :debug="1" doNotResize="gif" :autoRotate="true" outputFormat="verbose"
                        @input="setImage">
                      </image-uploader>
                    </div> -->

                    <input type="file" name="file" @change="previewFiles">

                    <!-- main title -->
                    <b-row class="my-1">
                      <b-col cols="3">
                        <label for="input-default">곶감 제목:</label>
                      </b-col>
                      <b-col cols="9">
                        <b-form-input v-model="regist.maintitle" id="input-default" required="required" maxlength="100"
                          placeholder="제목을 입력해주세요..."></b-form-input>
                      </b-col>
                    </b-row>

                    <!-- main content -->
                    <b-row class="mt-2">
                      <b-col cols="12">
                        <label for="textarea-default">곶감 스토리(내용):</label>
                      </b-col>
                      <b-col cols="12">
                        <b-form-textarea v-model="regist.maincontent" required="required" id="textarea-default" class="gotgamStory"
                          placeholder="회원들과 곶감을 공유해주세요..."></b-form-textarea>
                      </b-col>
                    </b-row>

                  </b-col>
                </b-col>

                <!-- right -->
                <b-col sm="12" md="6" class="step-1-2">
                  <b-col md="12">

                    <!-- peoples -->
                    <b-row class="my-3">
                      <b-col cols="12">
                        <label for="input-default">인원수</label>
                      </b-col>
                      <b-col cols="12">
                        <b-form-input v-model="regist.peoples" id="input-default" required="required" maxlength="100" placeholder="몇명이서 갔나요?">
                        </b-form-input>
                      </b-col>
                    </b-row>

                    <!-- dayn -->
                    <b-row class="my-3">
                      <b-col cols="8">
                        <label for="input-default">여행 일수</label>
                      </b-col>
                      <b-col cols="8">
                        <b-form-input v-model="regist.dayn" id="input-default" required="required" maxlength="100"
                          placeholder="예시: (3박 4일인 경우 4)"></b-form-input>
                      </b-col>
                      <b-col cols="4">
                        <b-button @click.prevent="newTab" href="#" class="col-12">OK</b-button>
                      </b-col>
                    </b-row>

                    <!-- mood -->
                    <b-row class="my-3">
                      <b-col cols="12">
                        <label for="input-default">기분</label>
                      </b-col>
                      <b-col cols="12">
                        <b-form-select v-model="selected" :options="options1" placeholder="여행당시의 기분은?"></b-form-select>
                      </b-col>
                    </b-row>

                    <!-- region -->
                    <b-row class="my-3">
                      <b-col cols="12">
                        <label for="input-default">지역 선택</label>
                      </b-col>
                      <b-col cols="12">
                        <b-form-select v-model="selected" :options="options2"></b-form-select>
                      </b-col>
                    </b-row>

                  </b-col>
                </b-col>

              </b-row>

              <b-row class="setup-content mt-5">

                <b-col cols="12" offset-md="12">
                  <b-col md="12">

                    <!-- Day -->
                    <b-card no-body>
                      <b-tabs card>
                        <!-- Render Tabs, supply a unique `key` to each tab -->
                        <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'DAY ' + i">
                          <p class="text-center">
                            DAY {{ i }}
                          </p>
                          
                          <b-col cols="12" class="pt-2">

                            <!-- day title -->
                            <div class="form-group form-inline justify-content-between col-12">
                              <!-- <input type="text" v-model="regist[i].day"> -->
                              <label class="font-weight-bold" for="day1">제목</label>
                              <input type="text" name="day1" v-model="regist.daytitle" class="form-control col-12">
                            </div>

                            <b-row>

                              <!-- day image uploader -->
                              <b-col cols="12" lg="6">
                                <div class="img_uploader_wrap">
                                  <label for="fileInput" slot="upload-label">
                                    <span class="upload-caption">{{ hasImage ? "Replace" : "Click to upload" }}</span>
                                  </label>
                                  <image-uploader :preview="true" :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                                    capture="environment" :debug="1" doNotResize="gif" :autoRotate="true" outputFormat="verbose"
                                    @input="setImage">
                                  </image-uploader>
                                </div>
                              </b-col>

                              <!-- day content -->
                              <b-col cols="12" lg="6">
                                <textarea v-model="regist.daycontent" class="form-control mb-3 text-xsmall" name="" id="" rows="6"
                                  placeholder="이날의 곶감을 기록해주세요."></textarea>
                              </b-col>
                              
                            </b-row>

                            <hr>

                            <b-row>
                              <!-- day traffic -->
                              <b-col cols="11" class="form-group form-inline" id="display-traffic">
                                <label class="control-label font-weight-bold" for="traffic">교통</label>
                                <textarea v-model="regist.daytraffic" class="form-control col-10 mx-auto" rows="3" name="" id="traffic"></textarea>
                              </b-col>
                              <!-- day food -->
                              <b-col cols="11" class="form-group form-inline" id="display-restaurant">
                                <label class="control-label font-weight-bold" for="restaurant">맛집</label>
                                <textarea v-model="regist.datfood" class="form-control col-10 mx-auto" rows="3" name=""
                                  id="restaurant"></textarea>
                              </b-col>
                              <!-- day pay -->
                              <b-col cols="11" class="form-group form-inline" id="display-location">
                                <label class="control-label font-weight-bold" for="location">비용</label>
                                <textarea v-model="regist.daypay" class="form-control col-10 mx-auto" rows="3" name=""
                                  id="location"></textarea>
                              </b-col>
                            </b-row>

                          </b-col>
                        </b-tab>

                        <!-- New Tab Button (Using tabs-end slot) -->
                        <template v-slot:tabs-start>
                          <b-nav-item @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
                          <b-nav-item @click.prevent="closeTab" href="#"><b>-</b></b-nav-item>
                        </template>

                        <!-- Render this if no tabs -->
                        <template v-slot:empty>
                          <div class="text-center text-muted">
                            <b>+</b> 버튼을 눌러 <br>
                            당신의 곶감을 등록해주세요.
                          </div>
                        </template>
                      </b-tabs>
                    </b-card>

                    <b-row class="button_Wrap">
                      <b-col cols="4">
                        <b-button v-on:click="save" class="col-12">Save</b-button>
                      </b-col>
                    </b-row>

                  </b-col>
                </b-col>
              </b-row>
            </form>
      </b-container>
    </div>
  </div>
</template>

<script>
import Header from './header.vue';

export default {
    components: {
        Header
    },
    data() {
      return {
        link: "registration",
        hasImage: false,
        image: null,
        tabs: [],
        tabCounter: 1,
        show: false,

        selected: null,
        options1: [
            { value: null, text: '기분을 선택해주세요.', disabled: true },
            { value: 'angry', text: '화남' },
            { value: 'expressionless', text: '무심함' },
            { value: 'astonished', text: '놀란'},
            { value: 'confounded', text: '혼란'},
            { value: 'okey', text: '괜찮음'},
            { value: 'blush', text: '설렘'}
        ],
        options2: [
            { value: null, text: '지역을 선택해주세요.', disabled: true },
            { value: 'seoul', text: '서울특별시' },
            { value: 'kyeong', text: '경기도' },
            { value: 'incheon', text: '인천광역시'}
        ],

        regist: {
          maintitle: '',
          maincontent: '',
          peoples: '',
          dayn: '',
          daytitle: '',
          daycontent: '',
          daytraffic: '',
          dayfood: '',
          daypay: ''
        },
        reg:[]
      }
    },

    methods: {
        previewFiles(event) {
            console.log(event.target.files[0].name);
        },
        setImage: function(output) {
            this.hasImage = true;
            this.image = output;
            console.log(this.image);
        },

        closeTab() {
            this.tabs.splice(this.tabs.length - 1, 1)
            if (this.tabCounter != 1) {
                this.tabCounter--;
            }
        },
        newTab() {
            this.tabs.push(this.tabCounter++)
        },
        save(event) {
          this.$http.post('/api/regist/step1',
            this.regist
          )
          .then(
            (res) => {
              if(res.data.success) {
                alert(res.data.message)
                this.$router.push('/mypage')
              }
              else {
                alert('등록실패')
              }
            },
          )
          .catch(err => {
            alert(err);
          })
        }
    }
}
</script>

<style>
.registration_wrap {
    padding: 3.4rem 0;
    margin: 0 auto;
}

.registration_inner_wrap {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
}

.container {
    margin: 0 auto;
}

/* Form */
/* .step */
.step-1-1, .step-1-2 {
    padding-top: 2rem;
}

/* .step-1-1 */
.step-1-1 {
    border-right: 1.2px solid #ddd;
}

/* .step-1-2 */
.d_weather {
    width: 100%;
    height: 2.5rem;
}

.d_weather select {
    width: 100%;
    height: 100%;
    background: #fff;
    border: 1px solid #ced4da;
    color: #495057;
}

.button_Wrap {
    padding-top: 2rem;
}

/* form */
.form-group {
    margin: 0 auto;
    padding-bottom: 1.5rem;
}
.gotgamStory {
    min-height: 10rem;
}

/* file-input */
#fileInput {
  display: none;
}

.img_uploader_wrap {
    height: 15rem;
    position: relative;
    border: 1px solid #ced4da;
    margin-bottom: 1.5rem;
}

.img_uploader_wrap > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.img_uploader_wrap label {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 2rem;
}

label {
    font-size: 1.1rem;
}

.upload-caption {
    width: 100%;
    height: 100%;
    display: inline-block;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-weight: 600;
    text-align: center;
    line-height: 2rem;
    cursor: pointer;
}

.img_uploader_wrap > div img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
}
</style>