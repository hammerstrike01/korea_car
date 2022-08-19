<template>
  <div class="other_content"> 
    <div class="sub_content"> 
      <div class="frame_content">
        <div>
          <div class="page_header">
            <div class="page_header_txt1">예약</div>
            <div class="page_header_txt2">
              <img src="@/assets/img/k3.png" class="page_img1 cursor"  @click="gotoPage('/')">
              <img src="@/assets/img/korea_main18.png" width="20">
              <a @click="gotoPage('/reservation1')" class="cursor">예약/관리</a>
              <img src="@/assets/img/korea_main18.png" width="20">
              <span class="page_header_txt3">예약</span>
            </div>
          </div>
          <div class="disflex_start mt20 pc1">
            <div class="top_tab2">날짜 및 차량 선택</div>
            <img src="@/assets/img/top_left2.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">장비 선택</div>
            <img src="@/assets/img/top_left4.png" height="40" class="mlm1">
            <div class="top_tab1 mlm1">구간 선택</div>
            <img src="@/assets/img/top_left1.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">송·수신 관리</div>
            <img src="@/assets/img/top_left2.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">입력 정보 확인</div>
            <img src="@/assets/img/top_left3.png" height="40" class="mlm1">
          </div>
          <div class="disflex_start mt10 mobile1">
            <div class="top_tab2 mt5 mlm1">날짜 및 차량 선택</div>
            <img src="@/assets/img/top_left2.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">장비 선택</div>
            <img src="@/assets/img/top_left3.png" height="35" class="mt5 mlm1">
            <div class="top_tab1 mt5 mlm1">구간 선택</div>
            <img src="@/assets/img/top_left1.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">송·수신 관리</div>
            <img src="@/assets/img/top_left3.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">입력 정보 확인</div>
            <img src="@/assets/img/top_left3.png" height="35" class="mt5 mlm1">
          </div>
          <div class="page_body reservation">
            <div class="">
              <div class="reservation_txt3">출발지</div>
              <div class="mt10">
                <input type="text" class="page_search_inp" value="위도 : 37.413294"/>
                <input type="text" class="page_search_inp" value="경도 : 127.269311 "/>
                <img src="@/assets/img/delete.png" width="20">
              </div>
              <div class="reservation_txt3 mt20">도착지</div>
              <div class="mt10">
                <input type="text" class="page_search_inp" value="위도 : 37.413294"/>
                <input type="text" class="page_search_inp" value="경도 : 127.269311 "/>
                <img src="@/assets/img/delete.png" width="20">
              </div>
              <div class="reservation_txt3 mt20">특화구간 선택</div>
              <div class="mt10 disflex_start">
                <div class="page_select">
                  <select>
                    <option>특화구간 목록</option>
                    <option>특화구간 목록</option>
                  </select> 
                </div> 
                <div class="page_btn2">추가</div>
              </div>
              <div class="reservation_txt3 mt20">서비스 선택</div>
              <div class="page_select mt10">
                <select>
                  <option>서비스를 선택하세요</option>
                  <option>서비스</option>
                </select> 
              </div> 
              <div class="reservation_txt3 mt20">서비스 상세 선택</div> 
              <div class="reservation_detail mt10">
                <div class="park_area"></div>
                <div>
                  <div class="disflex_start">
                    <div class="reservation_txt4">선택 구역</div>
                    <input type="text" class="page_search_inp ml10" value="10"/>
                  </div>
                  <div class="disflex_start mt10">
                    <div class="reservation_txt4">예약 시간</div>
                    <div class="page_select sm_select">
                      <select>
                        <option>09:00</option>
                        <option>10:00</option>
                      </select> 
                      <div class="ml10">~</div>
                      <select>
                        <option>09:00</option>
                        <option>10:00</option>
                      </select> 
                    </div> 
                  </div>
                  <div class="reservation_txt4 mt10">경로 다운로드</div>
                  <div class="page_btn1 mt10">다운로드</div>
                </div>
              </div>
              <div class="reservation_txt6 mt10">* 이미지에서 주차구역을 선택하세요.</div> 
            </div>
            <div class="map_area"> 
              <div class="disflex_space">
                <div class="reservation">
                  <div class="reservation_txt5">실증구간</div>
                  <div class="disflex_start">
                    <div class="tab" :class="this.tabIndex==1 ? 'tab_on' : 'tab_off'" @click="tabIndex=1">진입로</div>
                    <div class="tab" :class="this.tabIndex==2 ? 'tab_on' : 'tab_off'" @click="tabIndex=2">테크노폴리스</div>
                    <div class="tab" :class="this.tabIndex==3 ? 'tab_on' : 'tab_off'" @click="tabIndex=3">국가산단</div>
                  </div>
                </div>
                <img src="@/assets/img/map_info.png" width="20" class="cursor map_info">
              </div>
              <div>
                <div class="map_title">테크노 폴리스 25 Km</div>
                <div class="map">
                  <div class="map_mark">
                    <img src="@/assets/img/pos.png" width="27">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="disflex_center mt20 mb40" > 
          <div class="page_btn1" @click="next(1)">이전</div>
          <div class="page_btn2 ml10" @click="next(2)">다음</div>
        </div> 
      </div>
    </div>  
  </div>
</template> 
  
<script>
import routepath from '../../lib/routes'     
export default {
  components: {   
  },
  props: {},
  data() {
    return {  
       tabIndex:1
    }
  },
  created(){ 
    
    },

  computed: {
    routes(){
      return routepath
    },
  }, 
    methods: { 
    next(idx) {
      if(idx==1){
        this.$router.push("/reservation2"); 
      }
      else{
        this.$router.push("/reservation4"); 
      }
    }, 
  }
}
</script>
<style> 
</style>
