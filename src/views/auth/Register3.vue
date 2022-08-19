<template>
  <div class="other_content"> 
    <div class="sub_content"> 
      <div class="frame_content">
        <div>
          <div class="page_header">
            <div class="page_header_txt1">회원가입</div> 
          </div>
          <div class="page_status">
            <img src="@/assets/img/r_3.png" width="460" class="agree_img">
          </div>
          <div class="login_frame mt20">  
            <div class="disflex_center">
              <img src="@/assets/img/complete.png" width="56">
            </div>
            <div class="reg_txt1 mt20 pc">
              회원 가입 신청이 성공적으로 완료되었습니다.
            </div>
            <div class="reg_txt1 mt20 mobile">
              회원 가입 신청이 <br/> 성공적으로 완료되었습니다.
            </div>
            <div class="reg_txt2 mt5">
              회원 가입 승인 결과는 0000-0000 로 문의바랍니다.
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
        this.$router.push("/register2"); 
      }
      else{
        this.$router.push("/reservation"); 
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
