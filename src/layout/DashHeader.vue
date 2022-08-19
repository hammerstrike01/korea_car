<template>
  <!-- Navbar -->
  <div class="nav_header">
    <div class="nav_list">
      <div @click="changeMenu(0,'/')" class="cursor" >
        <img src="@/assets/img/korea_Logo.png" width="216">
      </div>
      <div class="dis_flex" @mouseover="upHere = true"> 
        <a class="nav_btn" :class="this.pageStatus==1 ? 'on' : 'off'" @mouseover="pageStatus = 1" >소개</a>  
        <a class="nav_btn" :class="this.pageStatus==2 ? 'on' : 'off'" @mouseover="pageStatus = 2">참여공간</a>  
        <a class="nav_btn" :class="this.pageStatus==3 ? 'on' : 'off'" @mouseover="pageStatus = 3">예약/관리</a>  
        <a class="nav_btn" :class="this.pageStatus==4 ? 'on' : 'off'" @mouseover="pageStatus = 4">실증관리</a>  
      </div>
      <div class="nav_right" >
        <div class="nav_log_btn_on"  @click="login()">
          로그인
        </div>
        <!-- <div class="nav_log_btn_off">
          로그아웃
        </div> -->
      </div> 
    </div>
    <div class="nav_detail" v-show="upHere"  @mouseleave="upHere = false">
      <div class="nav_detail_list">
        <div class="nav_detail_page" :class="this.pageStatus==1 ? 'on' : 'off'" @mouseover="pageStatus = 1">
          <a @click="changeMenu(1,'/')">실증단지 소개</a>
          <a @click="changeMenu(1,'/')">실증단지 인프라</a>
          <a @click="changeMenu(1,'/')">실증단지 장비</a>
          <a @click="changeMenu(1,'/')">이용안내</a>
          <a @click="changeMenu(1,'/')">오시는 길</a>
        </div>
        <div class="nav_detail_page" :class="this.pageStatus==2 ? 'on' : 'off'" @mouseover="pageStatus = 2">
          <a @click="changeMenu(2,'/notice')">공지사항</a>
          <a @click="changeMenu(2,'/reference')">자료실</a>
          <a @click="changeMenu(2,'/technology')">기술공유 자료실</a>
          <a @click="changeMenu(2,'/')">자주하는 질문</a>
          <a @click="changeMenu(2,'/')">설문참여</a>
        </div>
        <div class="nav_detail_page" :class="this.pageStatus==3 ? 'on' : 'off'" @mouseover="pageStatus = 3">
          <a @click="changeMenu(3,'/reservation')">실증예약</a>
          <a @click="changeMenu(3,'/reservation')">예약현황</a> 
        </div>
        <div class="nav_detail_page" :class="this.pageStatus==4 ? 'on' : 'off'" @mouseover="pageStatus = 4">
          <a @click="changeMenu(4,'/substantiation')">실시간 관제</a>
          <a @click="changeMenu(4,'/substantiation')">실증 리플레이</a>
          <a @click="changeMenu(4,'/substantiation')">실증결과 분석</a> 
        </div>
      </div>
    </div>
    <div  :class="this.showMobileMenu ? 'modal_open' : 'modal_close'"></div>
    <div class="mobile_nav_list">
      <a @click="changeMenu(0)">
        <img src="@/assets/img/korea_Logo.png" class="header_logo">
      </a>
      <a @click="showMenu">
        <img src="@/assets/img/mobile1.png" width="24">
      </a>
    </div>
    <div
      class="nav-content"
      :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
      <div class="nav_close">
        <img src="@/assets/img/delete.png" width="16"  @click="showMenu">
      </div>
      <div class="nav_bar"></div>
      <div class="nav_frame">
        <div class="nav-items1" >소개</div> 
        <div class="nav-item-list">
          <a @click="changeMenu(1,'/')">실증단지 소개</a>
          <a @click="changeMenu(1,'/')">실증단지 인프라</a>
          <a @click="changeMenu(1,'/')">실증단지 장비</a>
          <a @click="changeMenu(1,'/')">이용안내</a>
          <a @click="changeMenu(1,'/')">오시는 길</a>
        </div>
      </div>
      <div class="nav_bar"></div>
      <div class="nav_frame">
        <div class="nav-items1">참여공간</div> 
        <div class="nav-item-list">
          <a @click="changeMenu(2,'/notice')">공지사항</a>
          <a @click="changeMenu(2,'/reference')">자료실</a>
          <a @click="changeMenu(2,'/technology')">기술공유 자료실</a>
          <a @click="changeMenu(2,'/')">자주하는 질문</a>
          <a @click="changeMenu(2,'/')">설문참여</a>
        </div>
      </div>
      <div class="nav_bar"></div>
      <div class="nav_frame">
        <div class="nav-items1">예약/관리</div> 
        <div class="nav-item-list">
          <a @click="changeMenu(3,'/reservation')">실증예약</a>
          <a @click="changeMenu(3,'/reservation')">예약현황</a> 
        </div>
      </div>
      <div class="nav_bar"></div>
      <div class="nav_frame">
        <div class="nav-items1">실증관리</div> 
        <div class="nav-item-list">
          <a @click="changeMenu(4,'/substantiation')">실시간 관제</a>
          <a @click="changeMenu(4,'/substantiation')">실증 리플레이</a>
          <a @click="changeMenu(4,'/substantiation')">실증결과 분석</a> 
        </div>
      </div>
      <!-- <div class="mt40">
        <div class="nav-items1 mt20" @click="changeMenu(1)">소개</div> 
        <div class="nav-items1 mt20" @click="changeMenu(2)">참여공간</div> 
        <div class="nav-items1 mt20" @click="changeMenu(3)">예약/관리</div> 
        <div class="nav-items1 mt20" @click="changeMenu(4)">실증관리</div> 
        
        
      </div> -->
      <div class="nav_bar"></div>
      <div class="disflex_center mt20">
          <div class="nav_log_btn_on" @click="login()">
            로그인
          </div>
        </div> 
    </div>
  </div>
  <!-- /.navbar -->
</template>


<script>
import routepath from '../lib/routes'
export default {
  name: 'DashHeader', 
  components: {},
  props: {},
  data() {
    return {
      upHere:false, 
      showMobileMenu: false,
      pageStatus:0
    };
  },
  computed: {
    routes(){
      return routepath
    },
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    changeMenu(id,path){
      this.showMobileMenu= false
       this.pageStatus = id 
       this.$router.push(path); 
       this.upHere= false
      //  if(id==4){
      //   this.$router.push("/substantiation"); 
      //  }
      //  else if(id==3){
      //   this.$router.push("/reservation1"); 
      //  }
      //  else{
      //    this.$router.push("/"); 
      //  } 
    },
    login(){
      this.showMobileMenu= false
      this.pageStatus= 0;
      this.$router.push("/login"); 
    }
  }
  
}
</script>
<style> 
  @import '../assets/styles/main.css';
</style>
