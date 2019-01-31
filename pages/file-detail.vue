<template>
  <div>
    <Modal v-model="showFile" :closable="false" class-name="changePasword-modal" :mask-closable="false"
           :scrollable="false">
      <div class="changePasword-header" slot="header">
        <div class="changePasword-text">
          <h3>资料文档</h3>
        </div>
        <!--<img src="../../../assets/img/icon/button/icon-input-clear.svg" @click="closeModal('pasData')" calt=""/>-->
      </div>
      <div class="file">
        <a href="https://media.quixmart.com/%E5%A4%A7%E5%85%B0AI%E8%87%AA%E8%B4%A9%E6%9F%9C%E7%B3%BB%E7%BB%9F%E5%8F%8C%E9%97%A8%E4%BA%A7%E5%93%81%E8%AF%B4%E6%98%8E%E4%B9%A610102018%28%E8%BD%AF%E4%BB%B6%E9%83%A8%E5%88%86%E6%9C%AA%E6%9B%B4%E6%96%B0%EF%BC%89.pdf" target="_blank">大兰AI自贩柜系统双门产品说明书10102018(软件部分未更新）</a>
        <a href="https://media.quixmart.com/quiXmart%E5%95%86%E5%AE%B6%E5%B9%B3%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E8%AF%B4%E6%98%8E%E4%B9%A6.pdf" target="_blank">quiXmart商家平台管理系统说明书</a>
      </div>
      <div class="modal-footer" slot="footer">
        <Button type="ghost" class="cancel-btn" @click="closeModal('pasData')">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                showFile: false
            };
        },
        props: ['showModal','typeId','productId'],
        methods: {
            closeModal(){
                this.showFile = false;
                this.$emit('changed',this.showFile);
            },
            leaveMessageOK(){

            }
        },
        watch: {
            showModal(){
                this.showFile = this.showModal;
            }
        }
    };
</script>
<style lang="scss">
  @import "../assets/css/leaveMessageModel";
  .ivu-modal-body{
    .file{
      padding:20px 20px;
      a{
        display: block;
        margin-top: 15px;
      }
    }
  }

</style>
