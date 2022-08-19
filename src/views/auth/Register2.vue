<template>
  <div class="other_content"> 
    <div class="sub_content"> 
      <div class="frame_content">
        <div>
          <div class="page_header">
            <div class="page_header_txt1">회원가입</div> 
          </div>
          <div class="page_status">
            <img src="@/assets/img/r_2.png" width="460" class="agree_img">
          </div>
          <div class="page_body"> 
            <div class="register_row">
              <div class="register_txt1">단체/회사명 <span class="txt_red">*</span></div>
              <input class="page_search_inp register_inp"/>
            </div>
            <div class="register_row mt10">
              <div class="register_txt1">사업자등록번호 <span class="txt_red">*</span></div>
              <div class="disflex_space w400">
                <input class="page_search_inp"/>
                <div class="page_btn1 cert_btn">이미지 첨부</div>
              </div>
            </div>
            <div class="register_row mt10">
              <div class="register_txt1">담당자명 <span class="txt_red">*</span></div>
              <input class="page_search_inp register_inp"/>
            </div>
            <div class="register_row mt10">
              <div class="register_txt1">직책</div>
              <input class="page_search_inp register_inp"/>
            </div>
            <div class="register_row mt10">
              <div class="register_txt1">담당자 회사 연락처 <span class="txt_red">*</span></div>
              <input class="page_search_inp register_inp"/>
            </div>
            <div class="register_row mt10">
              <div class="register_txt1">담당자 개인 연락처</div>
              <input class="page_search_inp register_inp"/>
            </div>
            <div class="register_row mt10">
              <div class="register_txt1">담당자 이메일 </div>
              <input class="page_search_inp register_inp"/>
            </div>
          </div>
          <div class="disflex_center mt20 mb40" > 
            <div class="page_btn1" @click="next(1)">이전</div>
            <div class="page_btn2 ml10" @click="next(2)">다음</div>
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
    next(idx){
      if(idx == 1){
        this.$router.push("/register1"); 
      }
      else{
        this.$router.push("/register3"); 
      }
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
