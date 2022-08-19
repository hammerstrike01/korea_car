<template>
  <div class="other_content"> 
    <div class="sub_content"> 
      <div class="login_content">
        <div class="login_frame">
          <div class="login_title">사용자 포털</div>
          <div class="login_txt1">회원로그인</div>
          <input class="page_search_inp" placeholder="이메일"/>
          <input class="page_search_inp mt10" placeholder="비밀번호"/>
          <div class="login_btns">
            <div class="login_btn1" @click="register()">회원가입</div>
            <div class="login_btn2">로그인</div>
          </div>
          <div class="login_txt2">로그인 관련 문의 <span class="login_txt3">1588-1588</span></div>
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
    };
  },
  computed: {
    routes(){
      return routepath
    },
  }, 
    methods: {
    register() {  
      this.$router.push("/register1"); 
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
