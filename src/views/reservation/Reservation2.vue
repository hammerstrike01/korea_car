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
            <img src="@/assets/img/top_left4.png" height="40" class="mlm1">
            <div class="top_tab1 mlm1">장비 선택</div>
            <img src="@/assets/img/top_left1.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">구간 선택</div>
            <img src="@/assets/img/top_left2.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">송·수신 관리</div>
            <img src="@/assets/img/top_left2.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">입력 정보 확인</div>
            <img src="@/assets/img/top_left3.png" height="40" class="mlm1">
          </div>
          <div class="disflex_start mt10 mobile1">
            <div class="top_tab2 mt5 mlm1">날짜 및 차량 선택</div>
            <img src="@/assets/img/top_left4.png" height="35" class="mt5 mlm1">
            <div class="top_tab1 mt5 mlm1">장비 선택</div>
            <img src="@/assets/img/top_left5.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">구간 선택</div>
            <img src="@/assets/img/top_left2.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">송·수신 관리</div>
            <img src="@/assets/img/top_left3.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">입력 정보 확인</div>
            <img src="@/assets/img/top_left3.png" height="35" class="mt5 mlm1">
          </div>
          <div class="page_body">
            <div class="reservation_txt1">대여장비 선택</div>
            <div class="page_table mt10">
              <table>
                <thead>
                  <tr>
                    <td style="width:6%">번호</td>
                    <td style="width:10%">장비구분</td>
                    <td style="width:64%">장비 명</td>
                    <td style="width:10%">장비 설명</td>
                    <td style="width:10%">선택</td> 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>실증장비</td>
                    <td><div class="text_left">5G Router</div></td>
                    <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                    <td>
                      <div class="disflex_center cursor" @click="checkBtn(1)"> 
                        <img  :src='this.chk1 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                      </div>
                    </td> 
                  </tr> 
                  <tr>
                    <td>2</td>
                    <td>실증장비</td>
                    <td><div class="text_left">5G Router</div></td>
                    <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                    <td>
                      <div class="disflex_center cursor" @click="checkBtn(2)"> 
                        <img  :src='this.chk2 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                      </div>
                    </td> 
                  </tr> 
                  <tr>
                    <td>3</td>
                    <td>실증장비</td>
                    <td><div class="text_left">5G Router</div></td>
                    <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                    <td>
                      <div class="disflex_center cursor" @click="checkBtn(3)"> 
                        <img  :src='this.chk3 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                      </div>
                    </td> 
                  </tr> 
                  <tr>
                    <td>4</td>
                    <td>실증장비</td>
                    <td><div class="text_left">5G Router</div></td>
                    <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                    <td>
                      <div class="disflex_center cursor" @click="checkBtn(4)"> 
                        <img  :src='this.chk4 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                      </div>
                    </td> 
                  </tr> 
                </tbody>
              </table>
            </div>
            <div class="reservation_txt1 mt40">9대 핵심부품 선택</div>
            <div class="disflex_space mt10 pc1">
              <div class="page_table mt0 w50 border_right">
                <table>
                  <thead>
                    <tr>
                      <td style="width:10%">번호</td> 
                      <td style="width:64%">부품명</td>
                      <td style="width:10%">장비 설명</td>
                      <td style="width:10%">선택</td> 
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td> 
                      <td><div class="text_left">레이더 센서</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk1= partchk1?false: true"> 
                          <img  :src='this.partchk1 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>2</td> 
                      <td><div class="text_left">라이다 센서</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk2= partchk2?false: true"> 
                          <img  :src='this.partchk2 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>3</td> 
                      <td><div class="text_left">영상 센서 </div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk3= partchk3?false: true"> 
                          <img  :src='this.partchk3 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>4</td> 
                      <td><div class="text_left">복합 측위 모듈</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk4= partchk4?false: true"> 
                          <img  :src='this.partchk4 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>5</td> 
                      <td><div class="text_left">디지털 맵 </div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk5= partchk5?false: true"> 
                          <img  :src='this.partchk5 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                  </tbody>
                </table>
              </div>
              <div class="page_table mt0 w50">
                <table>
                  <thead>
                    <tr>
                      <td style="width:10%">번호</td> 
                      <td style="width:64%">부품명</td>
                      <td style="width:10%">장비 설명</td>
                      <td style="width:10%">선택</td> 
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>6</td> 
                      <td><div class="text_left">HVI</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk1= partchk1?false: true"> 
                          <img  :src='this.partchk1 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>7</td> 
                      <td><div class="text_left">ADR 모듈</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk2= partchk2?false: true"> 
                          <img  :src='this.partchk2 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>8</td> 
                      <td><div class="text_left">통합 DCU</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk3= partchk3?false: true"> 
                          <img  :src='this.partchk3 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>9</td> 
                      <td><div class="text_left">V2X 통신 모듈</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk4= partchk4?false: true"> 
                          <img  :src='this.partchk4 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>10</td> 
                      <td><div class="text_left">기타</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk5= partchk5?false: true"> 
                          <img  :src='this.partchk5 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                  </tbody>
                </table>
              </div>
            </div>
            <div class="disflex_space mt10 mobile1">
              <div class="page_table mt0">
                <table>
                  <thead>
                    <tr>
                      <td style="width:10%">번호</td> 
                      <td style="width:64%">부품명</td>
                      <td style="width:10%">장비 설명</td>
                      <td style="width:10%">선택</td> 
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td> 
                      <td><div class="text_left">레이더 센서 </div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk1= partchk1?false: true"> 
                          <img  :src='this.partchk1 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>2</td> 
                      <td><div class="text_left">라이다 센서 </div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk2= partchk2?false: true"> 
                          <img  :src='this.partchk2 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>3</td> 
                      <td><div class="text_left">영상 센서 </div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk3= partchk3?false: true"> 
                          <img  :src='this.partchk3 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>4</td> 
                      <td><div class="text_left">복합 측위 모듈</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk4= partchk4?false: true"> 
                          <img  :src='this.partchk4 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>5</td> 
                      <td><div class="text_left">디지털 맵 </div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk5= partchk5?false: true"> 
                          <img  :src='this.partchk5 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>   
                    <tr>
                      <td>6</td> 
                      <td><div class="text_left">HVI</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk1= partchk1?false: true"> 
                          <img  :src='this.partchk1 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>7</td> 
                      <td><div class="text_left">ADR 모듈</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk2= partchk2?false: true"> 
                          <img  :src='this.partchk2 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>8</td> 
                      <td><div class="text_left">통합 DCU</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk3= partchk3?false: true"> 
                          <img  :src='this.partchk3 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>9</td> 
                      <td><div class="text_left">V2X 통신 모듈</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk4= partchk4?false: true"> 
                          <img  :src='this.partchk4 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                    <tr>
                      <td>10</td> 
                      <td><div class="text_left">기타</div></td>
                      <td><img src="@/assets/img/info.png" width="20" @click="isModalViewed = true"></td>
                      <td>
                        <div class="disflex_center cursor" @click="partchk5= partchk5?false: true"> 
                          <img  :src='this.partchk5 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                        </div>
                      </td> 
                    </tr>  
                  </tbody>
                </table>
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
    <div class="modal" :style="isModalViewed && {'display': 'block'}">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="disflex_space">
            <div class="modal_title">영상 센서</div>
            <img src="@/assets/img/delete.png" width="20" @click="isModalViewed=false" class="cursor">
          </div>
          <div class="modal-body">
            <div class="page_table sm_table">
              <table> 
                <thead>
                  <tr>
                    <td style="width:30%">지점</td> 
                    <td style="width:40%">실증요소</td>
                    <td style="width:30%">거리</td> 
                  </tr>
                </thead>
                <tbody> 
                  <tr>
                    <td>1 → 2</td> 
                    <td>터널구간</td> 
                    <td>12.7</td> 
                  </tr> 
                  <tr>
                    <td>2 → 3</td> 
                    <td>터널구간</td> 
                    <td>12.7</td> 
                  </tr> 
                  <tr>
                    <td>3 → 4</td> 
                    <td>터널구간</td> 
                    <td>12.7</td> 
                  </tr> 
                  <tr class="bg_Fa">
                    <td colspan="2">합계</td>  
                    <td>거리</td> 
                  </tr>
                </tbody> 
              </table>
            </div>
             
          </div> 
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
      isModalViewed:false,
      chk1: false,
      chk2: false,
      chk3: false,
      chk4: false,
      chk5: false,
      chk6: false,

      partchk1:false,
      partchk2:false,
      partchk3:false,
      partchk4:false,
      partchk5:false,
      partchk6:false,
      partchk7:false,
      partchk8:false,
      partchk9:false,
      partchk10:false,
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
    gotoPage(path) {  
       this.$router.push(path); 
    }, 
    next(idx) {
      if(idx==1){
        this.$router.push("/reservation1"); 
      }
      else{
        this.$router.push("/reservation3"); 
      }
    },
    checkBtn(idx) {
      if(idx==1)
        this.chk1 = !this.chk1;
      else if(idx==2){
        this.chk2 = !this.chk2;
      }
      else if(idx==3){
        this.chk3 = !this.chk3;
      }
      else if(idx==4){
        this.chk4 = !this.chk4;
      }
      else if(idx==5){
        this.chk5 = !this.chk5;
      }
      else if(idx==6){
        this.chk6 = !this.chk6;
      }
    },
  }
}
</script>
<style> 
  @import '../../assets/styles/main.css';
  .vdp-datepicker {
    position: initial!important;
    text-align: left;
  }
  @media screen and (max-width: 1024px) {
    
  }
  
</style>
