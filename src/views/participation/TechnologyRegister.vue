<template>
  <div class="other_content"> 
    <div class="sub_content"> 
      <div class="frame_content">
        <div>
          <div class="page_header">
            <div class="page_header_txt1">기술공유 자료실</div>
            <div class="page_header_txt2">
              <img src="@/assets/img/k3.png" class="page_img1">
              <img src="@/assets/img/korea_main18.png" width="20"> 
              <span class="page_header_txt3">기술공유 자료실</span>
            </div>
          </div>
          <div class="page_body">
            <div class="page_table page_table_detail">
              <table> 
                <tbody>
                  <tr>
                    <th>종류</th>
                    <td>
                      <div class="text_left">
                        <div class="page_select">
                          <select>
                            <option>10</option>
                            <option>15</option>
                          </select> 
                        </div>
                      </div>
                    </td> 
                  </tr>
                  <tr>
                    <th>제목</th>
                    <td>
                      <div class="text_left">
                        <input type="text" class="page_search_inp"/>
                      </div>
                    </td> 
                  </tr>
                  <tr>
                    <th>제목</th>
                    <td>
                      <div class="text_left">
                        <input type="text" class="page_search_inp" disabled value="2020-02-22"/>
                      </div>
                    </td> 
                  </tr>
                  <tr>
                    <th>첨부파일</th>
                    <td><div class="text_left pd010"><div class="detail_btn">첨부파일</div></div></td> 
                  </tr>
                  <tr>
                    <th>내용</th>
                    <td>
                      <div class="text_left">
                        <textarea rows="5"></textarea> 
                      </div> 
                    </td> 
                  </tr> 
                  
                </tbody>
              </table>
            </div> 
            <div class="disflex_center mt20 mb40" >  
            <div class="page_btn2  mid_btn" @click="next(2)">등록</div>
              <div class="page_btn2 bg_gray mid_btn ml10 " @click="next(2)">닫기</div>
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
      this.$router.push("/technology"); 
    },  
  }
}
</script>
<style> 
  @import '../../assets/styles/main.css'; 
</style>
