<template>
  <div class="other_content"> 
    <div class="sub_content"> 
      <div class="frame_content">
        <div>
          <div class="page_header">
            <div class="page_header_txt1">실증결과 조회</div>
            <div class="page_header_txt2">
              <img src="@/assets/img/k3.png" class="page_img1">
              <img src="@/assets/img/korea_main18.png" width="20">
              장비관리
              <img src="@/assets/img/korea_main18.png" width="20">
              <span class="page_header_txt3">실증결과 조회</span>
            </div>
          </div>
          <div class="page_body">
            <div class="page_search_body">
              <div class="page_search_date mobile_inp disflex_start">  
                <datepicker   :language="ko" :format="format" @selected="getDate" ></datepicker>
                <div class="date_range_txt">~</div>
                <datepicker :language="ko"  :format="format" @selected="getDate" ></datepicker> 
              </div>
              <div class="page_search_keyword disflex_start">
                <div class="page_search_or">OR</div>
                <input class="page_search_inp" placeholder="검색어를 입력하세요."/>
                <div class="page_search_btn">검색</div>
              </div>
            </div>
            <div class="page_table">
              <table>
                <thead>
                  <tr>
                    <td style="width:5%">번호</td>
                    <td style="width:17%">접수번호</td>
                    <td style="width:17%">실증유형</td>
                    <td style="width:17%">시작일자</td>
                    <td style="width:17%">종료일자</td>
                    <td style="width:17%">비고</td>
                    <td style="width:10%">상세조회</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>20220315-548687</td>
                    <td>부품 실증</td>
                    <td>2022-03-27</td>
                    <td>2022-03-27</td>
                    <td>비고</td>
                    <td><div class="disflex_center"><div class="detail_btn">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>20220315-548687</td>
                    <td>부품 실증</td>
                    <td>2022-03-27</td>
                    <td>2022-03-27</td>
                    <td>비고</td>
                    <td><div class="disflex_center"><div class="detail_btn">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>20220315-548687</td>
                    <td>부품 실증</td>
                    <td>2022-03-27</td>
                    <td>2022-03-27</td>
                    <td>비고</td>
                    <td><div class="disflex_center"><div class="detail_btn">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>20220315-548687</td>
                    <td>부품 실증</td>
                    <td>2022-03-27</td>
                    <td>2022-03-27</td>
                    <td>비고</td>
                    <td><div class="disflex_center"><div class="detail_btn">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>20220315-548687</td>
                    <td>부품 실증</td>
                    <td>2022-03-27</td>
                    <td>2022-03-27</td>
                    <td>비고</td>
                    <td><div class="disflex_center"><div class="detail_btn">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>20220315-548687</td>
                    <td>부품 실증</td>
                    <td>2022-03-27</td>
                    <td>2022-03-27</td>
                    <td>비고</td>
                    <td><div class="disflex_center"><div class="detail_btn">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>20220315-548687</td>
                    <td>부품 실증</td>
                    <td>2022-03-27</td>
                    <td>2022-03-27</td>
                    <td>비고</td>
                    <td><div class="disflex_center"><div class="detail_btn">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>20220315-548687</td>
                    <td>부품 실증</td>
                    <td>2022-03-27</td>
                    <td>2022-03-27</td>
                    <td>비고</td>
                    <td><div class="disflex_center"><div class="detail_btn">상세보기</div></div></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>20220315-548687</td>
                    <td>부품 실증</td>
                    <td>2022-03-27</td>
                    <td>2022-03-27</td>
                    <td>비고</td>
                    <td><div class="disflex_center"><div class="detail_btn">상세보기</div></div></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="page_pagenation">
              <div class="page_select">
                <select>
                  <option>10</option>
                  <option>15</option>
                </select>
                <div class="txt14_6">전체 10개 중 1 ~10개 레코드 출력</div>
              </div>
              <div class="disflex_start page_num_list">
                <img src="@/assets/img/page3.png" width="24">
                <img src="@/assets/img/page1.png" width="24">
                <div class="page_num disflex_center">1</div>
                <img src="@/assets/img/page2.png" width="24">
                <img src="@/assets/img/page4.png" width="24">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
  
<script>
import routepath from '../../lib/routes' 
import {ko} from 'vuejs-datepicker/dist/locale' 
import Datepicker from 'vuejs-datepicker';
 
export default {
  components: { 
    Datepicker
  },
  props: {},
  data() {
    return { 
      ko: ko, 
      format: "yyyy.MM.dd",  
      lang:{
        days:["일","월","화","수","목","금","토"],
        month:[
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ],
        yearFormat:'YYYY년',
        monthFormat:'MM월',
      }
    };
  },
  computed: {
    routes(){
      return routepath
    },
  }, 
    methods: {
    getDate() {  
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
