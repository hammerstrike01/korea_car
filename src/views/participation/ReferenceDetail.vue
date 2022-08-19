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
            <div class="page_table page_table_detail">
              <table> 
                <tbody>
                  <tr>
                    <th>종류</th>
                    <td><div class="text_left">스타트업 패키지</div></td> 
                  </tr>
                  <tr>
                    <th>제목</th>
                    <td><div class="text_left">Ver 1.0</div></td> 
                  </tr>
                  <tr>
                    <th>내용</th>
                    <td><div class="text_left notice_body">것은 않는 피고, 소금이라 이것이야말로 봄바람이다. 군영과 관현악이며, 긴지라 풀밭에 피가 칼이다. 가치를 있는 않는 능히 것이다. 구하지 소금이라 생생하며, 청춘의 운다. 인류의 무엇을 보는 것이다. 오아이스도 없는 앞이 것은 청춘 이상의 되는 무엇을 사막이다. 위하여, 하였으며, 두손을 쓸쓸하랴? 간에 찾아다녀도, 가치를 청춘에서만 든 생의 같으며, 커다란 칼이다. 구하지 이는 힘차게 같이, 튼튼하며, 듣는다.</div></td> 
                  </tr>
                  <tr>
                    <th>작성일</th>
                    <td><div class="text_left">2022-02-22</div></td> 
                  </tr>
                  <tr>
                    <td><div class="text_left pd010"><div class="detail_btn">첨부파일</div></div></td> 
                  </tr>
                </tbody>
              </table>
            </div> 
            <div class="disflex_center mt20 mb40" >  
              <div class="page_btn2 bg_gray mid_btn" @click="next(2)">뒤로</div>
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
       
    };
  },
  computed: {
    routes(){
      return routepath
    },
  }, 
    methods: {
    next() {  
      this.$router.push("/reference"); 
    },  
  }
}
</script>
<style> 
  @import '../../assets/styles/main.css'; 
</style>
