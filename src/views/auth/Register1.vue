<template>
  <div class="other_content"> 
    <div class="sub_content"> 
      <div class="frame_content">
        <div> 
          <div class="page_header">
            <div class="page_header_txt1">회원가입</div> 
          </div>
          <div class="page_status">
            <img src="@/assets/img/r_1.png" width="460" class="agree_img">
          </div>
          <div class="page_body"> 
            <div>
              <div class="agree_txt1">
                한국자동차연구원 회원으로 가입하기 위해서는 반드시 아래의 약관에 동의하셔야 합니다
              </div>
              <div class="agree_txt2">이용약관</div>
              <div class="agree_content">
                제1조(목적)<br/>
                본 회원약관은 AcAT(이하 '갑'라 한다)이 운영하는 인터넷관련 서비스(이하 '서비스'라 한다)를 이용함에 있어 관리자와 이용자(이하 '회원'라 한다)의 권리, 의무 및 책임사항을 규정함을 목적으로 한다.
                <br/><br/>
                제2조 (약관의 효력)
              </div>
              <div class="disflex_start mt5 cursor" @click="checkBtn(1)"> 
                <img  :src='this.chk1 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                <div class="agree_txt3">위의 <span class="agree_txt4">‘이용약관’</span>에 동의합니다. </div>
              </div> 
            </div> 
            <div> 
              <div class="agree_txt2">개인정보 수집 및 이용</div>
              <div class="agree_content">
                제1조(목적)<br/> 
                본 회원약관은 AcAT(이하 '갑'라 한다)이 운영하는 인터넷관련 서비스(이하 '서비스'라 한다)를 이용함에 있어 관리자와 이용자(이하 '회원'라 한다)의 권리, 의무 및 책임사항을 규정함을 목적으로 한다.
                <br/><br/>
                제2조 (약관의 효력)
              </div>
              <div class="disflex_start mt5" @click="checkBtn(2)">
                <img  :src='this.chk2 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                <div class="agree_txt3">위의 <span class="agree_txt4">‘개인정보 수집 및 이용’</span>에 동의합니다. </div>
              </div> 
            </div> 
            <div> 
              <div class="agree_txt2">사고발생시 처리</div>
              <div class="agree_content">
                제1조(목적)<br/> 
                본 회원약관은 AcAT(이하 '갑'라 한다)이 운영하는 인터넷관련 서비스(이하 '서비스'라 한다)를 이용함에 있어 관리자와 이용자(이하 '회원'라 한다)의 권리, 의무 및 책임사항을 규정함을 목적으로 한다.
                <br/><br/>
                제2조 (약관의 효력)
              </div>
              <div class="disflex_start mt5" @click="checkBtn(3)">
                <img  :src='this.chk3 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                <div class="agree_txt3">위의 <span class="agree_txt4">‘사고발생시 처리’</span>에 동의합니다. </div>
              </div> 
            </div> 
            <div> 
              <div class="agree_txt2">정밀지도 사용</div>
              <div class="agree_content">
                제1조(목적)<br/> 
                본 회원약관은 AcAT(이하 '갑'라 한다)이 운영하는 인터넷관련 서비스(이하 '서비스'라 한다)를 이용함에 있어 관리자와 이용자(이하 '회원'라 한다)의 권리, 의무 및 책임사항을 규정함을 목적으로 한다.
                <br/><br/>
                제2조 (약관의 효력)
              </div>
              <div class="disflex_start mt5" @click="checkBtn(4)">
                <img  :src='this.chk4 ? require("../../assets/img/chk_on.png"):require("../../assets/img/chk_off.png")' width="20" >
                <div class="agree_txt3">위의 <span class="agree_txt4">‘정밀지도 사용’</span>에 동의합니다. </div>
              </div> 
            </div> 
          </div>
          <div class="disflex_center mt20 mb40" > 
            <div class="page_btn2" @click="next()">다음</div>
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
      chk1: true,
      chk2: false,
      chk3: false,
      chk4: false,
    };
  },
  computed: {
    routes(){
      return routepath
    },
  }, 
  methods: {
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
    },
    next(){
       this.$router.push("/register2");  
    }
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
