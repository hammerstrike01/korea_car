<template>
  <div class="other_content"> 
    <div class="sub_content"> 
      <div class="frame_content">
        <div> 
          <div class="login_frame1 mt200">  
            <div class="reg_txt1 mt20 disflex_center">실증 유형을 선택해주세요</div>
            <!-- <div class="disflex_center">
              <img src="@/assets/img/complete.png" width="56">
            </div> -->  
          </div> 
          <div class="disflex_center">
            <div class="subst_type">
              <img src="@/assets/img/type1.png" width="56">
              <div class="sub_txt1">자율주행 시스템 실증</div>
            </div>
            <div class="subst_type">
              <img src="@/assets/img/type2.png" width="56">
              <div class="sub_txt1">부품 실증</div>
            </div>
          </div>
          <div class="disflex_center mt40" >  
            <div class="page_btn2" @click="next(2)">다음</div>
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
        this.$router.push("/login"); 
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
