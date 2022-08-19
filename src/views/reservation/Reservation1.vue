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
            <div class="top_tab1">날짜 및 차량 선택</div>
            <img src="@/assets/img/top_left1.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">장비 선택</div>
            <img src="@/assets/img/top_left2.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">구간 선택</div>
            <img src="@/assets/img/top_left2.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">송·수신 관리</div>
            <img src="@/assets/img/top_left2.png" height="40" class="mlm1">
            <div class="top_tab2 mlm1">입력 정보 확인</div>
            <img src="@/assets/img/top_left3.png" height="40" class="mlm1">
          </div>
          <div class="disflex_start mt10 mobile1">
            <div class="top_tab1 mt5 mlm1">날짜 및 차량 선택</div>
            <img src="@/assets/img/top_left1.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">장비 선택</div>
            <img src="@/assets/img/top_left3.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">구간 선택</div>
            <img src="@/assets/img/top_left2.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">송·수신 관리</div>
            <img src="@/assets/img/top_left3.png" height="35" class="mt5 mlm1">
            <div class="top_tab2 mt5 mlm1">입력 정보 확인</div>
            <img src="@/assets/img/top_left3.png" height="35" class="mt5 mlm1">
          </div>
          <div class="reservation_body"> 
            <div class="reservation_txt1">1. 예약일 선택</div>
            <div class="reservation_txt2 mt30">선택된 예약일</div>
            <div class="reser_inp">
               <input class="" placeholder="2022년 3월 23일"/>
               <div class="date_range_txt">~</div>
               <input class=" " placeholder="2022년 3월 28일"/>
            </div>
            
            <div class="reservation_txt1 mt40">2. 실증 유형</div>
            <div class="disflex_start">
              <div class="res_subst_type on">
                <img src="@/assets/img/type1.png" width="48">
                <div class="res_sub_txt1">자율주행 시스템 실증</div>
              </div>
              <div class="res_subst_type">
                <img src="@/assets/img/type2.png" width="48">
                <div class="res_sub_txt1">부품 실증</div>
              </div>
            </div>
            <div class="disflex_space mt40">
              <div class="reservation_txt1">3. 차량 선택</div>
              <div class="reservation_btn" @click="isModalViewed1 = true">개인차량 등록</div>
            </div>
            <div class="page_table">
              <table>
                <thead>
                  <tr>
                    <td style="width:5%">선택</td>
                    <td style="width:12%">차량 구분</td>
                    <td style="width:17%">차량 ID</td>
                    <td style="width:17%">차량 명</td>
                    <td style="width:17%">등록일</td>
                    <td style="width:17%">차량 정보</td> 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="radio" name="car_inp"></td>
                    <td>센터 차량</td>
                    <td>123456789001</td>
                    <td  style="text-align: left" >소나타</td>
                    <td>2022.03.02</td>
                    <td><div class="disflex_center"><div class="detail_btn1" @click="isModalViewed = true">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td><input type="radio" name="car_inp"></td>
                    <td>센터 차량</td>
                    <td>123456789001</td>
                    <td  style="text-align: left" >소나타</td>
                    <td>2022.03.02</td>
                    <td><div class="disflex_center"><div class="detail_btn1" @click="isModalViewed = true">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td><input type="radio" name="car_inp"></td>
                    <td>센터 차량</td>
                    <td>123456789001</td>
                    <td  style="text-align: left" >소나타</td>
                    <td>2022.03.02</td>
                    <td><div class="disflex_center"><div class="detail_btn1" @click="isModalViewed = true">상세보기</div></div></td>
                  </tr>
                </tbody>
              </table>
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
                <div class="modal_title">상세보기</div>
                <img src="@/assets/img/delete.png" width="20" @click="isModalViewed=false" class="cursor">
              </div>
              <div class="modal-body">
                <div class="page_table">
                  <table> 
                    <tbody>
                      <tr>
                        <th>차량ID</th>
                        <td>123456789001</td> 
                        <th>차량 종류</th>
                        <td>SUV</td> 
                      </tr> 
                      <tr>
                        <th>차량 명*</th>
                        <td>쏠라티</td> 
                        <th>차량 높이</th>
                        <td>-</td> 
                      </tr> 
                      <tr>
                        <th>탑승 자</th>
                        <td>-</td> 
                        <th>차량 길이</th>
                        <td>-</td> 
                      </tr> 
                      <tr>
                        <th>차량 폭</th>
                        <td>-</td>  
                      </tr> 
                    </tbody>
                  </table>
                </div>
                <div class="page_table">
                  <table> 
                    <tbody>
                      <tr>
                        <th class="w120">임시면허  라이센스</th>
                        <td>
                          <div class="disflex_start flex_wrap"> 
                            <div class="disflex_start mtb5 cursor w50" @click="checkBtn(1)"> 
                              <img  :src='this.chk1 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                              <div class="modal_chk">차로유지모드</div>
                            </div>
                            <div class="disflex_start mtb5 cursor w50" @click="checkBtn(2)"> 
                              <img  :src='this.chk2 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                              <div class="modal_chk">차로변경모드</div>
                            </div>
                            <div class="disflex_start mtb5 cursor w50" @click="checkBtn(3)"> 
                              <img  :src='this.chk3 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                              <div class="modal_chk">끼어들기(Cut-in) 및 빠져나가기(Cut-out) 모드</div>
                            </div>  
                            <div class="disflex_start mtb5 cursor w50" @click="checkBtn(4)"> 
                              <img  :src='this.chk4 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                              <div class="modal_chk">정체상황 추종 및 해제 모드</div>
                            </div>
                            <div class="disflex_start mtb5 cursor w50" @click="checkBtn(5)"> 
                              <img  :src='this.chk5 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                              <div class="modal_chk">전방충돌방지기능</div>
                            </div>
                            <div class="disflex_start mtb5 cursor w50" @click="checkBtn(6)"> 
                              <img  :src='this.chk6 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                              <div class="modal_chk">최고속도제한기능</div>
                            </div>  
                          </div>
                        </td>
                      </tr>  
                    </tbody>
                  </table>
                </div>
              </div> 
            </div>
            <!-- /.modal-content -->
          </div>
      
    </div>
    <div class="modal" :style="isModalViewed1 && {'display': 'block'}">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="disflex_space">
            <div class="modal_title">개인 차량 등록</div>
            <img src="@/assets/img/delete.png" width="20" @click="isModalViewed1=false" class="cursor">
          </div>
          <div class="disflex_space mt10">
            <div class="modal_txt1">차량 정보를 입력해주세요.</div>
            <div class="page_btn1 download" @click="isModalViewed1=false;isModalViewed2=true">불러오기</div>
          </div>
          <div class="modal-body">
            <div class="page_table mt10">
              <table> 
                <tbody>
                  <tr>
                    <th>차량ID</th>
                    <td><input type="text" class="input"/></td> 
                    <th>차량 종류</th>
                    <td><input type="text" class="input"/></td> 
                  </tr> 
                  <tr>
                    <th>차량 명*</th>
                    <td><input type="text" class="input"/></td> 
                    <th>차량 높이</th>
                    <td><input type="text" class="input"/></td> 
                  </tr> 
                  <tr>
                    <th>탑승 자</th>
                    <td><input type="text" class="input"/></td> 
                    <th>차량 길이</th>
                    <td><input type="text" class="input"/></td> 
                  </tr> 
                  <tr>
                    <th>차량 폭</th>
                    <td><input type="text" class="input"/></td>  
                  </tr> 
                </tbody>
              </table>
            </div>
            <div class="page_table">
              <table> 
                <tbody>
                  <tr>
                    <th class="w120">임시면허  라이센스</th>
                    <td>
                      <div class="disflex_start flex_wrap"> 
                        <div class="disflex_start mtb5 cursor w50" @click="checkBtn(1)"> 
                          <img  :src='this.chk1 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                          <div class="modal_chk">차로유지모드</div>
                        </div>
                        <div class="disflex_start mtb5 cursor w50" @click="checkBtn(2)"> 
                          <img  :src='this.chk2 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                          <div class="modal_chk">차로변경모드</div>
                        </div>
                        <div class="disflex_start mtb5 cursor w50" @click="checkBtn(3)"> 
                          <img  :src='this.chk3 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                          <div class="modal_chk">끼어들기(Cut-in) 및 빠져나가기(Cut-out) 모드</div>
                        </div>  
                        <div class="disflex_start mtb5 cursor w50" @click="checkBtn(4)"> 
                          <img  :src='this.chk4 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                          <div class="modal_chk">정체상황 추종 및 해제 모드</div>
                        </div>
                        <div class="disflex_start mtb5 cursor w50" @click="checkBtn(5)"> 
                          <img  :src='this.chk5 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                          <div class="modal_chk">전방충돌방지기능</div>
                        </div>
                        <div class="disflex_start mtb5 cursor w50" @click="checkBtn(6)"> 
                          <img  :src='this.chk6 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                          <div class="modal_chk">최고속도제한기능</div>
                        </div>  
                      </div>
                    </td>
                  </tr>  
                </tbody>
              </table>
            </div>
            <div class="page_table">
              <table> 
                <tbody>
                  <tr>
                    <th class="w120">필독</th>
                    <td>
                      <div class="disflex_start flex_wrap">  
                        <div class="modal_txt2">
                          임시면허를 발급받은 차량만 이용 가능하며, <br/> 라이선스 사본을 제출해야 실증예약 승인이 가능합니다 <br/> 임시면허 라이선스 제출처 : katech@katech.re.kr
                        </div>
                      </div>
                    </td>
                  </tr>  
                </tbody>
              </table>
            </div>
          </div> 
          <div class="disflex_center mt20">
            <div class="page_btn1" @click="isModalViewed1=false" >임시저장</div>
            <div class="page_btn2 bg_gray ml10" @click="isModalViewed1=false" >취소</div>
            <div class="page_btn2 ml10" @click="isModalViewed1=false" >등록</div>
          </div>
        </div> 
      </div> 
    </div>
    <div class="modal" :style="isModalViewed2 && {'display': 'block'}">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="disflex_space">
            <div class="modal_title">불러오기</div>
            <img src="@/assets/img/delete.png" width="20" @click="isModalViewed2=false" class="cursor">
          </div>
          <div class="modal-body">
          <div class="modal_txt3 mt15">임시저장 목록</div>
            <div class="page_table sm_table1 mt10">
              <table> 
                <thead>
                  <tr>
                    <td style="width:8%">번호</td> 
                    <td style="width:18%">임시저장일</td>
                    <td style="width:42%">차량명</td> 
                    <td style="width:18%">차량 종류</td> 
                    <td style="width:8%">선택</td> 
                  </tr>
                </thead>
                <tbody> 
                  <tr>
                    <td>1</td> 
                    <td>2022.01.06</td> 
                    <td><div class="text_left">차량 W1</div></td> 
                    <td>SUV</td> 
                    <td>
                      <div class="disflex_center cursor" @click="chk1= chk1?false: true"> 
                        <img  :src='this.chk1 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                      </div>
                    </td> 
                  </tr>  
                  <tr>
                    <td>2</td> 
                    <td>2022.01.06</td> 
                    <td><div class="text_left">차량 W1</div></td> 
                    <td>SUV</td> 
                    <td>
                      <div class="disflex_center cursor" @click="chk2= chk2?false: true"> 
                        <img  :src='this.chk2 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" > 
                      </div>
                    </td> 
                  </tr>  
                </tbody> 
              </table>
            </div>
            <div class="disflex_center mt20">
              <div class="disflex_center cursor">
                <img src="@/assets/img/nprev.png" width="24" >
                <div class="disflex_center modal_txt4">이전</div>
              </div>
              <div class="disflex_center cursor ml30">
                <div class="disflex_center modal_txt4">다음</div>
                 <img src="@/assets/img/nnext.png" width="24" >
              </div>
            </div>
            <div class="disflex_center mt20"> 
              <div class="page_btn2 bg_gray" @click="isModalViewed2=false" >취소</div>
              <div class="page_btn2 ml10" @click="isModalViewed2=false" >저장</div>
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
      isModalViewed1:false,
      isModalViewed2:false,
      chk1: false,
      chk2: false,
      chk3: false,
      chk4: false,
      chk5: false,
      chk6: false,
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
        this.$router.push("/reservation"); 
      }
      else{
        this.$router.push("/reservation2"); 
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
