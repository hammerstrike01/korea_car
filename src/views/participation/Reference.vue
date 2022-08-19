<template>
  <div class="other_content"> 
    <div class="sub_content"> 
      <div class="frame_content">
        <div>
          <div class="page_header">
            <div class="page_header_txt1">자료실</div>
            <div class="page_header_txt2">
              <img src="@/assets/img/k3.png" class="page_img1">
              <img src="@/assets/img/korea_main18.png" width="20">
               
              <span class="page_header_txt3">자료실</span>
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
                <div class="page_select">
                <select class="mg0">
                  <option>전체</option>
                  <option>내용</option>
                </select> 
              </div>
                <input class="page_search_inp w140" placeholder="검색어를 입력하세요."/>
                <div class="page_search_btn">검색</div>
              </div>
            </div>
            <div class="page_table">
              <table>
                <thead>
                  <tr>
                    <td style="width:6%">번호</td>
                    <td style="width:14%">종류</td>
                    <td style="width:40%"><a>제목</a></td>
                    <td style="width:10%">작성자</td>
                    <td style="width:17%">등록일</td> 
                    <td style="width:8%">작업</td> 
                  </tr>
                </thead>
                <tbody>
                  <tr class="cursor" @click="gotoDetail()">
                    <td>1</td>
                    <td>관리자</td>
                    <td><div class="text_left">긴급공지</div></td>
                    <td>관리자</td>
                    <td>2022-04-03 09:00:00</td> 
                    <td><div class="disflex_center"><div class="detail_btn">다운로드</div></div></td>
                  </tr>
                  <tr class="cursor" @click="gotoDetail()">
                    <td>2</td>
                    <td>관리자</td>
                    <td><div class="text_left">긴급공지</div></td>
                    <td>관리자</td>
                    <td>2022-04-03 09:00:00</td> 
                    <td><div class="disflex_center"><div class="detail_btn">다운로드</div></div></td>
                  </tr>
                  <tr class="cursor" @click="gotoDetail()">
                    <td>3</td>
                    <td>관리자</td>
                    <td><div class="text_left">긴급공지</div></td>
                    <td>관리자</td>
                    <td>2022-04-03 09:00:00</td> 
                    <td><div class="disflex_center"><div class="detail_btn">다운로드</div></div></td>
                  </tr>
                  <tr class="cursor" @click="gotoDetail()">
                    <td>4</td>
                    <td>관리자</td>
                    <td><div class="text_left">긴급공지</div></td>
                    <td>관리자</td>
                    <td>2022-04-03 09:00:00</td> 
                    <td><div class="disflex_center"><div class="detail_btn">다운로드</div></div></td>
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
    gotoDetail(){
      this.$router.push("/referenceDetail"); 
    },
  }
}
</script>
<style> 
  @import '../../assets/styles/main.css'; 
</style>
