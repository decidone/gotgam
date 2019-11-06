<template>
<div>
  <div class="selectbox_wrap">
    <div class="selectbox_inner_wrap">
      <div class="selectbox_title">
        <span>여행 지역</span>
      </div>
      <div class ="selectdiv">
        <form name="form">
          <select id="make" v-model="make">
            <option :value="null" disabled selected>지역을 선택하세요</option>
            <option v-for="option in makes_options" v-bind:value="option.id" v-bind:key="option.id">{{option.text}}</option>
          </select>
          <button v-on:click="searchReg">지역 이동</button>
        </form>
      </div>
    </div>
    <hr>
  </div>
  <div class="visualWrap">
    <span class="cover"></span>
    <div class="in">
      <h1>{{"" + region}}</h1>
      <div class="city_time">
        <span class="time">{{ setTime() }}</span>
        <ul>
          <li class="local_time_wrap">
            <svg></svg>
            <span class="localTimeArea">
              <span class="time"></span>
            </span>
          </li>
        </ul>
      </div>

      <div class="key_info">
        <span class="cover">{{region.photo}}</span>
        <ul>
          <li class="weather">
            <span class="icon">
              <span class="fas" :class="setPhase()"></span>
            </span>
            <strong>날씨</strong>
            <p>
              <span class="weather-value di">{{ temp }}</span>&deg;
              <span class="weather-format di">{{ format }}</span>
            </p>
          </li>
          <li class="hotspot">
            <span class="icon">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001"
                style="fill: #fff" xml:space="preserve">
                <g>
                  <g>
                    <path d="M510.241,188.829L415.802,63.361c-1.655-2.198-4.246-3.492-6.997-3.492H103.197c-2.751,0-5.343,1.293-6.997,3.492
                                            L1.761,188.829c-2.617,3.477-2.285,8.345,0.779,11.435l54.211,54.657c3.406,3.433,8.952,3.455,12.387,0.05
                                            c3.434-3.406,3.457-8.952,0.05-12.387l-39.407-39.73h92.426l99.948,193.957L93.617,267.216c-3.408-3.436-8.953-3.457-12.387-0.051
                                            c-3.434,3.406-3.457,8.952-0.05,12.387l168.602,169.991c1.644,1.657,3.883,2.59,6.218,2.59s4.574-0.933,6.218-2.59
                                            l247.242-249.278C512.525,197.174,512.856,192.304,510.241,188.829z M26.313,185.337L98.35,89.629l18.575,95.709H26.313z
                                            M113.819,77.386H234.5L133.05,176.477L113.819,77.386z M247.243,407.258l-105.33-204.404h105.33V407.258z M247.243,185.337
                                            h-98.195l98.195-95.912V185.337z M398.184,77.386l-19.231,99.093L277.501,77.386H398.184z M264.76,89.425L264.76,89.425
                                            l98.195,95.912H264.76V89.425z M289.848,396.811l66.306-128.675c2.216-4.3,0.527-9.582-3.773-11.798
                                            c-4.299-2.216-9.582-0.527-11.798,3.773l-75.825,147.146V202.854h105.33l-10.369,20.122c-2.215,4.3-0.526,9.582,3.773,11.798
                                            c4.301,2.215,9.582,0.527,11.798-3.773l14.503-28.147h92.425L289.848,396.811z M395.077,185.337L413.65,89.63l72.038,95.707
                                            H395.077z" />
                  </g>
                </g>
              </svg>
            </span>
            <strong>명소</strong>
            <p>
              수원 화성
            </p>
          </li>
          <li class="special">
            <span class="icon">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001"
                style="fill: #fff;" xml:space="preserve">
                <g>
                  <g>
                    <path
                      d="M500.033,264.883c-3.503-7.098-78.448-130.636-80.347-133.721c-13.99-22.704-38.24-36.258-64.869-36.258
                                            c-3.799,0-7.53,0.288-11.182,0.828c-0.003-0.007-0.013-0.022-0.016-0.026c-6.453-10.457-17.622-16.701-29.876-16.701
                                            c-19.348,0-35.09,15.741-35.09,35.09v61.312h-45.306v-61.312c0-19.348-15.741-35.09-35.09-35.09
                                            c-12.232,0-23.38,6.221-29.89,16.727c-3.651-0.54-7.384-0.828-11.184-0.828c-26.629,0-50.879,13.555-64.87,36.26
                                            c-0.193,0.313-0.78,1.267-14.882,24.908c-2.424,4.064-1.094,9.324,2.969,11.748c4.064,2.423,9.324,1.096,11.748-2.969
                                            c11.604-19.452,14.43-24.168,14.757-24.699c10.846-17.602,29.642-28.111,50.279-28.111c32.548,0,59.026,26.479,59.026,59.026
                                            v0.005v84.439c-20.53-33.481-57.467-55.864-99.536-55.864c-18.999,0-36.95,4.568-52.817,12.657
                                            c4.075-6.837,8.38-14.06,12.7-21.304c2.423-4.065,1.093-9.325-2.972-11.748c-4.065-2.423-9.324-1.093-11.748,2.972
                                            c-18.206,30.534-46.861,76.35-50.481,83.914C4.08,281.345,0,298.365,0,316.322c0,64.334,52.34,116.674,116.674,116.674
                                            s116.673-52.34,116.673-116.674v-22.767h45.306v22.767c0,64.334,52.34,116.674,116.673,116.674
                                            c64.334,0,116.674-52.34,116.674-116.674C512.001,297.87,507.694,280.408,500.033,264.883z M216.21,123
                                            c-7.916-9.703-18.17-17.421-29.897-22.294c3.244-2.91,7.45-4.564,11.945-4.564c9.899,0,17.952,8.053,17.952,17.952V123z
                                            M116.674,415.857c-54.885,0-99.537-44.651-99.537-99.536s44.652-99.537,99.537-99.537c54.885,0,99.536,44.652,99.536,99.537
                                            S171.558,415.857,116.674,415.857z M233.346,243.516v-50.973h45.306v50.973H233.346z M278.653,276.418h-45.306v-15.764h45.306
                                            V276.418z M295.79,114.095c0-9.899,8.053-17.952,17.952-17.952c4.509,0,8.729,1.665,11.956,4.56
                                            c-11.731,4.873-21.99,12.593-29.908,22.298V114.095z M295.79,171.072v-0.005c0-32.548,26.479-59.026,59.026-59.026
                                            c20.638,0,39.433,10.51,50.279,28.111c1.028,1.669,22.444,37.584,43.048,72.152c-15.868-8.09-33.819-12.658-52.818-12.658
                                            c-42.069,0-79.006,22.384-99.536,55.864V171.072z M395.327,415.857c-54.885,0-99.536-44.652-99.536-99.537
                                            s44.652-99.537,99.536-99.537c54.885,0,99.537,44.652,99.537,99.537S450.211,415.857,395.327,415.857z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M470.448,289.32c-1.602-4.452-6.508-6.765-10.962-5.164c-4.452,1.601-6.765,6.509-5.164,10.962
                                            c2.438,6.783,3.675,13.917,3.675,21.203c0,34.557-28.113,62.671-62.671,62.671c-34.557,0-62.671-28.114-62.671-62.671
                                            s28.114-62.671,62.671-62.671c17.343,0,34.069,7.286,45.891,19.989c3.224,3.464,8.645,3.659,12.111,0.435
                                            c3.464-3.224,3.659-8.645,0.435-12.111c-15.051-16.174-36.351-25.451-58.437-25.451c-44.007,0-79.808,35.801-79.808,79.808
                                            s35.801,79.808,79.808,79.808s79.808-35.801,79.808-79.808C475.135,307.054,473.558,297.969,470.448,289.32z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M116.674,236.514c-44.007,0-79.808,35.801-79.808,79.808s35.801,79.808,79.808,79.808
                                            c44.007,0,79.808-35.801,79.808-79.808S160.68,236.514,116.674,236.514z M116.674,378.992c-34.557,0-62.671-28.113-62.671-62.671
                                            c0-34.557,28.113-62.671,62.671-62.671s62.671,28.113,62.671,62.671C179.345,350.879,151.23,378.992,116.674,378.992z" />
                  </g>
                </g>
              </svg>
            </span>
            <strong>특산물</strong>
            <p>
              갈비
            </p>
          </li>
          <li class="graph">
            <span class="icon">
              <svg></svg>
            </span>
            <strong>기분그래프</strong>
            <div class="graph_wrap"></div>
          </li>
        </ul>
        <span class="shadow"></span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  create() {
    
  },

  data() {
    return {
        temp: 0,
        format: 'C',
        time: new Date(),
        phase: 'fa-adjust',
        region: '서울특별시',
        make: null,
        model: null,
        makes_options: [
        {
          text: "서울",
          id: 1
        },
        {
          text: "인천",
          id: 2
        },
        {
          text: "경기",
          id: 3
        }
      ]
    }
  },
    
	methods: {
    searchReg: function (event) {
      this.$http.get('/api/region/search',
        console.log('지역 검색')
      )
    },

		setCelsius: function() {
			if (this.format = 'F') {
				this.format = 'C';
				this.temp = (this.temp - 32) * 5/9;
			} else {
				this.temp = this.temp;
			}
		},
		setFahrenheit: function() {
			this.format = 'F';
			this.temp = (this.temp * 9/5) + 32;
		},
		setTime: function() {
			var timeAtLoad = this.time;
			return timeAtLoad.toLocaleTimeString([], {timeZone: 'Asia/Seoul', hour: '2-digit', minute:'2-digit', hour12: true})
			
		},
		setPhase: function() {
			var timeOfDayUTC = new Date().getUTCHours();
			var timeOfDay = timeOfDayUTC + 8;
			
			if (timeOfDay > 6 && timeOfDay < 18) {
				return 'fa-sun'
			} else {
				return 'fa-moon'
			}
		},
		getWeather: function() {
			var request = new XMLHttpRequest();
			request.open('GET', 'http://www.bom.gov.au/fwo/IDW60801/IDW60801.95307.json', true);
			request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {
				 // Success!
				 var weatherData = JSON.parse(request.responseText);
				 console.log('Data retrieved');
			  } else {
				 // We reached our target server, but it returned an error
				 console.log('There was a problem retrieving the data') 
			  }
			};
			request.onerror = function() {
			  // There was a connection error of some sort
				console.log('There was a connection error');
			};
			request.send();
		}
	}
}
</script>

<style>
.wrap2 {
	width: 100%;
	margin: 0 auto;
    padding: 3.4rem 0;
    box-sizing: border-box;
}

.selectbox_wrap {
  padding: 1rem 4rem;
}

.selectbox_inner_wrap {
  display: flex;
}

hr {
  border: 1px solid #ddd;
}

.selectbox_title {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.selectbox_title span {
  font-size: 2rem;
}

.selectdiv {
  display: flex;
  width: 50%;
}

.selectdiv > form {
  width: 100%;
}

.selectdiv select {
  display: block;
  width: 40%;
  height: 50px;
  float: left;
  padding: 0px 20px;
  font-size: 16px;
  color: #333;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  word-break: normal;
}

.selectdiv button {
  display: block;
  width: 20%;
  height: 50px;
  float: left;
  background-color: #fff;
  border:1px solid #ccc;
  font-size: 16px;
  border-radius: 5px;
}

.selectdiv > form::after {
  content: '';
  display: table;
  clear: both;
}

.regionSelectWrap, .citySelectWrap {
  width: 100%;
  box-sizing: border-box;
}

.visualWrap {
    position: relative;
    width: 100%;
    height: 506px;
    background: url(../assets/seoulKey.jpg) center center no-repeat;
    overflow: hidden;
    margin: 3rem 0;
}

.cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 1;
}

.in {
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    color: #fff;
    margin-left: -40%;
    z-index: 2;
}

.in h1 {
    display: block;
    line-height: 1;
    font-size: 5rem;
    letter-spacing: -1px;
    margin: 120px 0 15px 0;
}

.weather-details {
	clear: both;
}

.key_info ul li .icon {
	display: inline-block;
    width: 50px;
    height: 50px;
    margin: 16px 0;
}

.icon svg {
    display: inline-block;
    width: 50px;
}

.key_info {
    position: absolute;
    width: 100%;
    height: 195px;
    left: 0;
    bottom: 60px;
    overflow: hidden;
}

.key_info ul {
    position: relative;
    z-index: 2;
    height: 100%;
}

.key_info ul li {
    position: relative;
    float: left;
    display: inline-block;
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 10px 0 30px;
}

.key_info ul li span {
    display: inline-block;
    width: 100%;
    height: 46px;
    margin: 0 0 16px;
}

.key_info ul li .di {
    display: inline;
}

.key_info ul li strong {
    display: block;
    line-height: 1;
    font-size: 22px;
    letter-spacing: -1px;
    margin: 0 0 10px;
}

.key_info ul li p {
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    opacity: 0.7;
}
</style>