<template>
  <div>
    <Modal v-model="showPassword" :closable="false" class-name="changePasword-modal" :mask-closable="false"
           :scrollable="false">
      <div class="changePasword-header" slot="header">
        <div class="changePasword-text">
          请您留言
        </div>
        <!--<img src="../../../assets/img/icon/button/icon-input-clear.svg" @click="closeModal('pasData')" calt=""/>-->
      </div>
      <Form ref="pasData" :model="pasData" label-position="right" :label-width="100" :rules="ruleValidate" class="leaveMessage-form">
        <FormItem label="姓名" prop="UserName">
          <Input v-model="pasData.UserName" class="changePasword-input" :maxlength="20"/>
        </FormItem>
        <FormItem label="手机" prop="UserTel">
          <Input v-model="pasData.UserTel" class="changePasword-input" />
        </FormItem>
        <FormItem label="产品" prop="ProductId">
          <Select v-model="pasData.ProductId" class="changePasword-input">
            <Option v-for="item in productlist" :value="item.value" :key="item.value" style="width: 100%">
              {{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="邮箱" prop="UserEmail" >
          <Input v-model="pasData.UserEmail" class="changePasword-input" :maxlength="50"/>
        </FormItem>
        <FormItem label="购买需求" prop="MessageContent">
          <Input v-model="pasData.MessageContent" type="textarea" class="changePasword-textarea" :maxlength="100"/>
        </FormItem>
      </Form>
      <div class="modal-footer" slot="footer">
        <Button type="ghost" class="cancel-btn" style="color: #666" @click="closeModal('pasData')">取消</Button>
        <Button type="primary" class="save-btn" :disabled="disabled" @click="leaveMessageOK('pasData')">保存</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
    import WinWinService from '../services/win-win.service';
    export default{
        data(){
            const validateUserName = (rule, value, callback) => {
                if(!value) {
                    callback(new Error('姓名不能为空'));
                } else{
                    callback();
                }
            };
            const validateUserTel = (rule, value, callback) => {
                if(!value) {
                    callback(new Error('电话不能为空'));
                } else if (!/^1(\d){10}$/.test(value)) {
                    callback(new Error('手机号码格式不正确'));
                }else{
                    callback();
                }
            };
            const validateUserEmail = (rule, value, callback) => {
                if(!value) {
                    callback(new Error('邮箱不能为空'));
                }else if(value && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
                    callback(new Error('邮箱格式不正确'));
                } else{
                    callback();
                }
            };
            const validateProductId = (rule, value, callback) => {
                if(!value) {
                    callback(new Error('产品类型不能为空'));
                }else{
                    callback();
                }
            };
            return {
                showPassword: false,
                pasData:{
                    UserName:'',
                    UserTel:'',
                    UserEmail:'',
                    MessageContent:'',
                    MessageType:'',
                    ProductId:'',
                },
                disabled:false,
                ruleValidate: {
                    UserName: [
                        {validator: validateUserName, trigger: 'blur',required: true}
                    ],
                    UserTel: [
                        {validator: validateUserTel, trigger: 'blur',required: true}
                    ],
                    UserEmail: [
                        {validator: validateUserEmail, trigger: 'blur',required: true}
                    ],
                    ProductId: [
                        {validator: validateProductId, trigger: 'blur',required: true}
                    ],
                },
                productlist: [
                    {
                        value: 1,
                        label: '深兰芭提雅'
                    },
                    {
                        value: 2 ,
                        label: '自动驾驶洗地机 '
                    },
                    {
                        value: 3,
                        label: '无人驾驶穿梭车'
                    },
                    {
                        value: 4,
                        label: '瓦力巡警机器人'
                    },
                    {
                        value: 5,
                        label: '小蚂哥物流机器人'
                    },
                    {
                        value: 6,
                        label: '车载机器人'
                    },
                    {
                        value: 7,
                        label: '兜售机器人'
                    },
                    {
                        value: 8,
                        label: '生物闸机'
                    },
                    {
                        value: 9,
                        label: '结算台'
                    },
                    {
                        value: 10,
                        label: 'AI自贩柜（大兰）'
                    }
                    , {
                        value: 11,
                        label: '小兰冰箱'
                    }
                ],
                model1: ''
            };
        },
        props: ['showModal','typeId','productId'],
        methods: {
            closeModal(name){
                this.$refs[name].resetFields();
                this.showPassword = false;
                this.$emit('changed',this.showPassword);
            },
            leaveMessageOK(name){
                this.$refs[name].validate((valid) => {
                    if (!valid) {
                        // this.$Message.warning('您有信息未填写！')
                        this.disabled = false;
                    } else {
                        WinWinService.getRemark(this.pasData)
                            .then((res) => {
                                if (res.data.Code === 1) {
                                    this.$Message.success({
                                        content: '留言成功！',
                                        duration: 1
                                    });
                                    this.pasData={};
                                    this.showPassword = false;
                                    this.$emit('changed',this.showPassword);
                                } else {
                                    this.$Message.warning({
                                        content: res.data.Msg,
                                        duration: 0.5
                                    });
                                }
                            }, () => {
                                this.$Message.warning({
                                    content: '请求超时！',
                                    duration: 0.5
                                });
                            });
                        this.disabled = false;
                    }
                });
                // this.$refs[name].resetFields();
            }
        },
        watch: {
            showModal(){
                // this.pasData ={
                //     UserName:'',
                //     UserTel:'',
                //     UserEmail:'',
                //     MessageContent:'',
                //     ProductId:'',
                // };
                // this.$refs['pasData'].resetFields();
                this.pasData.MessageType = this.typeId;
                if(this.productId&&this.productId!=0){
                    this.pasData.ProductId = this.productId+1;
                }
                if(this.productId == 0){
                    this.pasData.ProductId = 1;
                }
                this.showPassword = this.showModal;
            }
        }
    };
</script>
<style lang="scss">
  @import "../assets/css/leaveMessageModel";
</style>
