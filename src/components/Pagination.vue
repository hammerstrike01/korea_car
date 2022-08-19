<template>
  <ul class="pagination justify-content-center m-0">

    <li v-show="curpage > 1" class="page-item">
      <button type="button" class="page-link" @click="click(1)"><i class="fas fa-angle-double-left" /></button>
    </li>
    <li v-show="startpage > 1" class="page-item">
      <button type="button" class="page-link" @click="click(startpage - 1)"><i class="fas fa-angle-left" /></button>
    </li>

    <template>
      
    </template>

    <li v-for="(num, index) in pagearray" v-bind:key="index" :class="['page-item', curpage == num && 'active']">
      <button type="button" class="page-link" @click="click(num)">{{ num }}</button>
    </li>

    <li v-show="endpage < totalpages" class="page-item">
      <button type="button" class="page-link" @click="click(endpage + 1)"><i class="fas fa-angle-right" /></button>
    </li>

    <li v-show="curpage < totalpages" class="page-item">
      <button type="button" class="page-link" @click="click(totalpages)"><i class="fas fa-angle-double-right" /></button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    curpage: {
      type: Number,
      default: 0,
    },
    totalpages: {
      type: Number,
      default: 0,
      required: true
    },
    visibles: {
      type: Number,
      default: 3,
      validator(value) {
        return value > 2 && value <= 20
      }
    },
    click: {
      type: Function,
      required: true
    },
  },
  computed: {
    startpage(){
      var tmpval = this.curpage -  this.visibles / 2;
      if(tmpval < 1)
        tmpval = 1;
      return tmpval;
    },
    endpage(){
      var tmpval = this.startpage + this.visibles - 1;
      if (tmpval >= this.totalpages) tmpval = this.totalpages;
      return tmpval;
    },
    pagearray(){
      return Array(this.endpage - this.startpage + 1).fill().map((_, idx) => this.startpage + idx);
    }
  },
  mounted() {
  },
};
</script>