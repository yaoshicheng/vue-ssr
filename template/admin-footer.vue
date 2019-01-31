<template>
    <footer>
        <Row class="box">
            <Col span="3">

            </Col>
            <Col span="17" class="company-box">
                <div class="img-box">
                    <img src="../static/img/footlogo.svg"   width="62"/>
                </div>
                <div class="text-box">
                    <div>{{baseInfo.CompanyAddress}}</div>
                    <div>{{baseInfo.CompanyEnglishAddress}}</div>
                </div>

            </Col>
            <Col span="2">
                &nbsp;
            </Col>
            <!--<Col span="2" class="icon-box">-->
                <!--<Poptip trigger="hover">-->
                    <!--<img type="ghost" src="../../img/wechat.png" height="17" width="21"/>-->
                    <!--<div slot="content">-->
                        <!--<img src="../../img/QRcord.png" height="151" width="142"/>-->
                    <!--</div>-->
                <!--</Poptip>-->
                <!--<Poptip trigger="hover">-->
                    <!--<img src="../../img/sina.png" height="17" width="20"/>-->
                    <!--<div slot="content">-->
                        <!--<img src="../../img/sinaRcord.png" height="151" width="142"/>-->
                    <!--</div>-->
                <!--</Poptip>-->
            <!--</Col>-->
            <Col span="5" class="icon-box">
                <a href="https://weibo.com/6196879312" target="_blank">
                    <img src="../static/img/01.svg"/>
                </a>
                <a href="https://mp.weixin.qq.com/s/ZMnzUquKzxYw31TNwjTFTw" target="_blank">
                    <img src="../static/img/02.svg"/>
                </a>
                <a href="https://www.toutiao.com/c/user/98011342474/#mid=1600151835687943" target="_blank">
                    <img src="../static/img/03.svg"/>
                </a>
                <a href="https://www.zhihu.com/org/shen-lan-ke-ji-deepblue-ai/activities" target="_blank">
                    <img src="../static/img/04.svg"/>
                </a>
                <a href="https://instagram.com/p/BjUXmnZjj6f/" target="_blank">
                    <img src="../static/img/06.svg"/>
                </a>
            </Col>
        </Row>
        <Row class="info-box">
            <Col>
                <span>
                    <a href="http://www.beian.gov.cn" target="_blank">沪ICP备17036127号-2</a>
                </span>
            </Col>
            <Col>
                <span>T:
                    <a :href="'tel:' + baseInfo.CompanyTel">{{baseInfo.CompanyTel}}</a>
                </span>
            </Col>
            <Col>
                <span>E:
                    <a :href="'mailto:'+baseInfo.CompanyEmail" target="_blank">{{baseInfo.CompanyEmail}}</a>
                </span>
            </Col>
            <Col>
                <span>H: www.quiXmart.com.au</span>
            </Col>
            <Col>
                <span>&copy;2018 Deepblue Technology (Shanghai) Co.,Ltd</span>
            </Col>
        </Row>
    </footer>
</template>
<script>
    import ContactUs from '../services/contact-us.service';
    export default {
        data(){
            return{
                baseInfo:''
            };
        },
        methods: {
            GetBaseInfo(){
                ContactUs.GetBaseInfo()
                    .then((res) => {
                        if (res.data.Code === 1) {
                            this.baseInfo=res.data.Data;
                        } else {
                            this.$Message.error({
                                content: res.data.message,
                                duration: 0.5
                            });
                        }
                    }, () => {
                        this.$Message.error({
                            content: '请求超时！',
                            duration: 0.5
                        });
                    });
            },
        },
        mounted(){
            this.GetBaseInfo();
        }
    };
</script>
<style lang="scss">
    @import '../assets/css/admin-footer';
</style>