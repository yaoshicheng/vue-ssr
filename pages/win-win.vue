<template>
    <div>
        <div class="win-win">
            <Row type="flex" justify="center"  class="imgText">
                <Col span="7" offset="1">
                    <Row>
                        <Col span="6" class="imgContainer">
                            <img src="../static/img/purchaseMachine.svg" @click="showPassword = true,remarkData.MessageType=2"/>
                        </Col>
                        <Col span="18" class="text">
                            <h1>购买机器</h1>
                            <h3>BUY A MACHINE</h3>
                            <span>设备整机采购</span> <span>技术输出</span><span>核心技术采购</span>
                            <h3></h3>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row>
                        <Col span="6" class="imgContainer">
                            <img src="../static/img/freeCustomization.svg"  @click="showPassword = true,remarkData.MessageType=2"/>
                        </Col>
                        <Col span="18" class="text">
                            <h1>自由品牌定制</h1>
                            <h3>FREE BRAND CUSTOMIZATION</h3>
                            <span>零售场景</span> <span>便利店改造</span><span>品牌化设计</span><span>整套方案输出</span>
                            <h3></h3>

                        </Col>
                    </Row>
                </Col>
                <Col span="9">
                    <Row>
                        <Col span="6" class="imgContainer">
                            <img src="../static/img/otherCooperation.svg"  @click="showPassword = true,remarkData.MessageType=2" />
                        </Col>
                        <Col span="18" class="text">
                            <h1>其他合作</h1>
                            <h3>OTHER COOPERATION</h3>
                            <h3>
                                <a style="color: #495060;" href="mailto:GR@deepblueai.com">GR@deepblueai.com</a>
                            </h3>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" justify="center"  style="text-align: left;margin-top: 10px">
                <Col span="7" offset="1">
                    <Row>
                        <Col span="18" offset="6" class="text">
                            <Button class="button1" type="ghost" style="color:#0098d4;border-color:#0098d4 "
                                    @click="showPassword = true,remarkData.MessageType=2">立即购买
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row>
                        <Col span="18" offset="6" class="text">
                            <Button class="button1" type="ghost" style="color:#0098d4;border-color:#0098d4;width:175px"
                                    @click="showPassword = true,remarkData.MessageType=1">个性化定制
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col span="9">
                    <Row>
                        <Col span="24"  class="text">
                            <Button type="ghost" class="button2"  style="color:#0098d4;border-color:#0098d4;margin-right: 20px" @click="_salesman">经销商</Button>
                            <Button type="ghost" class="button1"  style="color:#0098d4;border-color:#0098d4;margin-right: 20px" @click="custormAnchor('cooperationPartner')">合作品牌</Button>
                            <Button type="ghost" class="button1" style="color:#0098d4;border-color:#0098d4;margin-right: 10px" @click="custormAnchor('globalStrategicCooperation')">战略伙伴</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div class="map">
                <div class="distributionCon">
                    <div class="title-zh">全球布点</div>
                    <div class="title-en">GLOBAL DISTRIBUTION</div>
                </div>
                <div class="contacts">
                    <div class="title-zh">400-117-7928</div>
                    <div class="title-en">全球深兰人竭诚为您服务</div>
                </div>
                <div class="countries">
                    <div class="title-zh"><span>{{countryCount}}</span><span style="font-size: 26px">  个</span></div>
                    <div class="title-en">覆盖国家</div>
                </div>
                <div class="service">
                    <div class="title-zh">{{serviceDay}}<span style="font-size: 26px">  X  </span>{{serviceHour}}<span style="font-size: 26px">  h</span></div>
                    <div class="title-en">优质服务</div>
                </div>
                <img src="../static/img/winwin-map.jpg" style="width: 100%;"/>
            </div>
            <div class="cooperation-partner" id="cooperationPartner">
                <div class="partnre-title">
                    <div class="title-zh">合作品牌</div>
                    <div class="title-en">CO-BRANDING</div>
                </div>
                <div class="imgContainer">
                    <div v-for="item in coBrandingImages" class="imgItem">
                        <img class="coBrandingImg" v-bind:src="item"/>
                    </div>
                </div>
            </div>
            <div class="companyGroup" :style="note">
                <div class="deepblueGroup">
                    <div class="title-zh">深兰集团</div>
                    <div class="title-en">DEEPBLUE GROUP</div>
                </div>
                <div class="deepblueGroupContent">
                    <ul>
                        <li v-for="item in groupList.slice(0,12)" :title="item.Name">{{item.Name}}</li>
                    </ul>
                </div>
                <div class="globalStrategicCooperation" id="globalStrategicCooperation">
                    <div class="title-zh">全球战略合作企业</div>
                    <div class="title-en">GLOBAL STRATEGIC COOPERATION</div>
                </div>
                <div class="deepblueGroupContent globalStrategicCooperationContent" >
                    <ul>
                        <li v-for="item in partnerList.slice(0,12)" :title="item.Name">{{item.Name}}</li>
                    </ul>
                </div>
                <!--<img src="../static/img/companyDark.jpg" style="width: 100%;"/>-->
            </div>
        </div>
        <leave-message @changed="showPassword = $event" :show-modal="showPassword" :typeId="remarkData.MessageType"></leave-message>
    </div>
</template>
<script>
    import indexService from '../services/index.service';
    import WinWinService from '../services/win-win.service';
    import leaveMessage from './leave-message';
    export default {
        layout: 'main',
        components: {
            leaveMessage,
        },
        data(){
            return{
                showPassword: false,
                remark: false,
                countryAnimation:false,
                note: {
                    backgroundImage: 'url(' + require('../static/img/companyDark.jpg') + ')',
                },
                groupList:[],
                partnerList:[],
                j:-1,
                remarkData:{MessageType:1},
                territoryList:[],
                territoryBoxWidth:'',
                myChart: {},
                geoCoordMap: {},
                countryCount:15,
                serviceDay:7,
                serviceHour:24,
                coBrandingImages:[
                    require('../static/img/logo1.svg'),require('../static/img/logo2.svg'),require('../static/img/logo3.svg'),require('../static/img/logo4.svg'),
                    require('../static/img/logo5.svg'),require('../static/img/logo6.svg'),require('../static/img/logo7.svg'),require('../static/img/logo8.svg'),
                    require('../static/img/logo9.svg'),require('../static/img/logo10.svg'),require('../static/img/logo11.svg'),require('../static/img/logo12.svg'),
                    require('../static/img/logo13.svg'),require('../static/img/logo14.svg'),require('../static/img/logo15.svg'),require('../static/img/logo16.svg'),
                ]
            };
        },
        methods: {
            handleScroll () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop <600 && scrollTop >230 && !this.countryAnimation){
                    this._setInterval();
                }
            },
            scrollDown(y1,y2){
                let interval = setInterval(()=> {
                    if (y1+20 > y2) {
                        window.scrollTo(0, y2);
                        y2 = y2 + 30;
                    } else {
                        clearInterval(interval);
                    }
                },10);
            },
            scrollUp(y1,y2){
                let interval = setInterval(()=> {
                    if (y1 < y2+20) {
                        window.scrollTo(0, y2);
                        y2 = y2 - 30;
                    } else {
                        clearInterval(interval);
                    }
                },10);
            },
            custormAnchor(anchorName) {
                // let id = '#'+anchorName;
                // if($(id)){
                //     $('html, body').animate({
                //         scrollTop: $(id).offset().top -110+ 'px'
                //     }, {
                //         duration: 500,
                //         easing: 'swing'
                //     });
                // }
                let ele = document.getElementById(anchorName);
                if(ele){
                    let eleTop = ele.offsetTop-110;
                    let currentTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    if(eleTop>currentTop){
                        this.scrollDown(eleTop,currentTop);
                    }else if(eleTop<currentTop){
                        this.scrollUp(eleTop,currentTop);
                    }
                }
            },
            _setInterval(){
                this.countryAnimation = true;
                this.countryCount = 1;
                this.serviceDay = 1;
                this.serviceHour = 1;
                let interval1 = setInterval(()=>{
                    if(this.countryCount<15){
                        this.countryCount += 1;
                    }else{
                        clearInterval(interval1);
                        // this.countryAnimation = false;
                    }
                },100);
                let interval2 = setInterval(()=>{
                    if(this.serviceDay<7){
                        this.serviceDay += 1;
                    }else{
                        clearInterval(interval2);
                        // this.countryAnimation = false;
                    }
                },200);
                let interval3 = setInterval(()=>{
                    if(this.serviceHour<24){
                        this.serviceHour += 1;
                    }else{
                        clearInterval(interval3);
                        // this.countryAnimation = false;
                    }
                },50);
            },
            _salesman(){
                window.open('https://zhaoshang.deepblueai.com/pc-index.html');
            },
            getGetCompanyLink(){
                WinWinService.getGetCompanyLink().then((response) => {
                    if(response.data.Code == '1') {
                        this.groupList = response.data.Data.Deepblue;
                        this.partnerList = response.data.Data.Cooperation;
                    } else {
                        this.$Message.error({
                            content: response.data.message,
                            duration: 0.5
                        });
                    }
                });
            }
        },
        watch: {
            showPassword(){
                this.$on('changed', (data) => {
                    this.showPassword = data;
                    console.log(data)
                });
            }
        },
        beforeUpdate(){
            let hash = location.hash.indexOf('?')?location.hash.split('?')[1]:undefined;
            hash&&this.custormAnchor(hash);
        },
        mounted() {
            this.getGetCompanyLink();
            window.addEventListener('scroll', this.handleScroll);
        },
    };
</script>
<style lang="scss">
    @import '../assets/css/win-win';
</style>