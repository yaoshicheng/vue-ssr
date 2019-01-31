<template>
    <div>
        <div class="solution-page" id="solutionPage" ref="solutionPage">
            <div class="content">
                <div class="advantages">
                    <div class="title-zh">产品优势</div>
                    <div class="title-en">ADVANTAGES</div>
                    <div class="desc">
                        在强大的科研团队后面，注重产品落地的深兰科技，把深度学习，机器视觉，生物识别，数据挖掘，智能芯片等核心技术加入到自动驾驶、智能机器人、生物智能、AI芯片、智能零售、智慧城市、智能安防、智能教育、军工等九大领域。
                    </div>
                </div>
                <div class="productList">
                    <div class="productItem" v-for="(item,index) in productList" :id="item.id">
                        <img :src="item.mainImage" style="width: 100%" @click="showProductDetail($event,index)"/>
                        <div class="itemDetail" v-show="item.showDetail" >
                            <p class="desc">{{item.desc}}</p>
                            <div class="detailImage">
                                <div class="con-left">
                                    <img :src="item.detailedImage[0]" style="width: 100%"/>
                                </div>
                                <div class="con-right">
                                    <img :src="item.detailedImage[1]" style="width: 100%"/>
                                    <div class="inner-conright">
                                        <div ><img :src="item.detailedImage[2]"/></div>
                                        <div class="verticalCenter" style="background-color: #F0F0F0">
                                            <Button type="ghost" class="button"
                                                    @click="showPassword = true,remarkData.MessageType=2,remarkData.productId=index">立即购买
                                            </Button>
                                            <br/><br/>
                                            <Button type="ghost" class="button"
                                                    @click="showPassword = true,remarkData.MessageType=1,remarkData.productId=index">个性化定制
                                            </Button>
                                            <br/><br/>
                                            <Button type="ghost" class="button"
                                                    @click="showFile = true" v-if="index==9">资料文档
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="coreTechnology">
                    <img src="../static/img/solution1.jpg" style="width: 100%;height: 100%"/>
                    <div class="technologyTitle">
                        <div class="title-zh">核心技术</div>
                        <div class="title-en">CORE TECHNOLOGY</div>
                    </div>
                    <div class="coreTechnologyList">
                        <div class="technologyItem" v-for="technologyItem in technologyList">
                            <img :src="technologyItem.img" style="width:100px;color:#fff;"/>
                            <div class="cnname">{{technologyItem.name}}</div>
                            <div class="enname">{{technologyItem.en}}</div>
                        </div>
                    </div>
                </div>
                <div class="systemPlatform">
                    <div class="systemPlatformTitle">
                        <div class="title-zh">应用系统平台</div>
                        <div class="title-en">APPLICATIONS SYSTEM PLATFORMS</div>
                    </div>
                    <div class="systemPlatformContent">
                        <ul>
                            <li v-for="item in systemPlatformList" :title="item.Name">{{item.Name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <leave-message @changed="showPassword = $event" :show-modal="showPassword" :typeId="remarkData.MessageType" :productId="remarkData.productId"></leave-message>
        <!--<file-detail @changed="showFile = $event" :show-modal="showFile" ></file-detail>-->
   </div>
</template>
<script>
    import solutionService from '../services/solution.service';
    import leaveMessage from './leave-message';
    // import fileDetail from './file-detail';
    export default {
        layout: 'main',
        data() {
            return {
                showPassword: false,
                showFile: false,
                solutionData: '',
                systemPlatformList:[],
                technologyList:[
                    {name:'深度学习',en:'DEEP LEARNING',img:require('../static/img/ct1.svg')},
                    {name:'机器视觉',en:'MACHINE VISION',img:require('../static/img/ct2.svg')},
                    {name:'自动驾驶',en:'SELF DRIVING',img:require('../static/img/ct3.svg')},
                    {name:'生物识别',en:'BIOMETRICS',img:require('../static/img/ct4.svg')},
                    {name:'数据挖掘',en:'DATA MINING',img:require('../static/img/ct5.svg')},
                    {name:'手写识别',en:'HANDWRITING RECOGNITION TECHNOLOGY',img:require('../static/img/ct6.svg')},
                    {name:'智能机器人',en:'INTELLIGENT ROBOTS',img:require('../static/img/ct7.svg')},
                    {name:'智能控制',en:'INTELLIGENT CONTROL',img:require('../static/img/ct8.svg')},
                    {name:'智能芯片',en:'AI CHIPS',img:require('../static/img/ct9.svg')}
                ],
                productList:[
                    {
                        name:'深兰芭堤雅自动驾驶功能性商用车',
                        mainImage:require('../static/img/product1.jpg'),
                        desc:'全面运用了深兰的自动驾驶、机器视觉、掌脉识别等人工智能核心技术，集成为应用场景整体解决方案，配合“叮咚打店”' +
                        'APP提供叫店服务，开创性业务模式让消费者在任何地点、任何时间，享受周到及时的购物体验及服务。1.0售货车让居民不出社' +
                        '区，就能买到自己需要的生活用品，2.0餐车、3.0功能性出租车，开拓城市共享领域市场，为消费者提供更便捷、多元的移动生' +
                        '活方式。',
                        detailedImage:[
                            require('../static/img/product1-1.jpg'),require('../static/img/product1-2.jpg'),require('../static/img/product1-3.jpg'),
                        ],
                        showDetail:false,
                        id:'autopilot',
                    },
                    {
                        name:'深兰自动驾驶洗地机',
                        mainImage:require('../static/img/product2.jpg'),
                        desc:'作为自主规划和执行吸、扫、洗、消毒、抛光、打蜡一站式清洁任务的机器人，利用计算机视觉算法，搭配深度学习神经网' +
                        '络，自主判别室内外路面的清洁程度，识别灰尘、垃圾、污渍，并根据检测结果选择清扫模式；同时，在室内外环境下均有成熟的' +
                        '导航和定位解决方案，能准确定位自己的位置，感知周边环境和行人状态，实时避障和智能移动，助力物业管理、提高效率、降低' +
                        '成本。',
                        detailedImage:[
                            require('../static/img/product2-1.jpg'),require('../static/img/product2-2.jpg'),require('../static/img/product2-3.jpg'),
                        ],
                        showDetail:false,
                        id:'',
                    },
                    {
                        name:'深兰无人驾驶穿梭车',
                        mainImage:require('../static/img/product3.jpg'),
                        desc:'深兰科技自主研发设计的一款针对大型工业园区、科技园区、商业地产园区等室外公共空间的自动驾驶穿梭车。该穿梭车搭载深兰' +
                        '自主知识产权的自动驾驶技术、底盘技术以及线控系统，保障大型园区内、办公、游览、运输的全面诉求，是智能园区的标准配置。',
                        detailedImage:[
                            require('../static/img/product3-1.jpg'),require('../static/img/product3-2.jpg'),require('../static/img/product3-3.jpg'),
                        ],
                        type:1,showDetail:false,id:'',
                    },
                    {
                        name:'深兰瓦力巡警机器人',
                        mainImage:require('../static/img/product4.jpg'),
                        desc:'配合机器视觉安防系统上路执勤，适配物业公司、办公楼、产业园区、工厂、购物中心、学校等场景，可实时监控、自动充电、智能预警，' +
                        '支持地图扫描、自动规划路径、智能选择巡逻区域，集拍摄、警告、追踪等多种安防功能于一身。',
                        detailedImage:[
                            require('../static/img/product4-1.jpg'),require('../static/img/product4-2.jpg'),require('../static/img/product4-3.jpg'),
                        ],
                        type:1,showDetail:false,id:'robot',
                    },
                    {
                        name:'深兰小蚂哥物流机器人',
                        mainImage:require('../static/img/product5.jpg'),
                        desc:'一款无人配送的智能物流机器人，拥有自主行驶、GPS定位、主动避障、规划行车路线等多项功能，可以配送外卖、快递等多种商品，' +
                        '实现最后一公里的自动化配送，达到目的地后自动通过语音电话通知用户取货。',
                        detailedImage:[
                            require('../static/img/product5-1.jpg'),require('../static/img/product5-2.jpg'),require('../static/img/product5-3.jpg'),
                        ],
                        type:1,showDetail:false,id:'',
                    },
                    {
                        name:'深兰车载机器人',
                        mainImage:require('../static/img/product6.jpg'),
                        desc:'运用深兰机器视觉对车内状态进行检测，并在云端完成人工智能的分析和处理，针对特定场景做出相对应的提醒，通过AI语音交互等功能提高用户' +
                        '使用体验和安全防护的智能机器人，具有迎宾、情绪识别、遗留物识别、疲劳驾驶提醒、手势识别等多种服务功能。',
                        detailedImage:[
                            require('../static/img/product6-1.jpg'),require('../static/img/product6-2.jpg'),require('../static/img/product6-3.jpg'),
                        ],
                        type:1,showDetail:false,id:'',
                    },
                    {
                        name:'深兰兜售机器人',
                        mainImage:require('../static/img/product7.jpg'),
                        desc:'一个可以寻找潜在客户、主动上前兜售商品的服务机器人，购物结束后自动结账并完成库存信息更新。配合精确的环境感知和深度学习视觉识别，' +
                        '能够自行上下电梯、避开障碍物，适应室内室外多种复杂地面环境，附加多媒体信息展示功能。',
                        detailedImage:[
                            require('../static/img/product7-1.jpg'),require('../static/img/product7-2.jpg'),require('../static/img/product7-3.jpg'),
                        ],
                        type:1,showDetail:false,id:'',
                    },
                    {
                        name:'深兰生物闸机',
                        mainImage:require('../static/img/product8.jpg'),
                        desc:'一种新型智能的门禁系统，内置掌脉采集器、高分辨率摄像头，可通过智能身份验证严控进出开关。产品方便运输、易于安装。',
                        detailedImage:[
                            require('../static/img/product8-1.jpg'),require('../static/img/product8-2.jpg'),require('../static/img/product8-3.jpg'),
                        ],
                        type:1,
                        id: 'swzn',
                        showDetail:false,
                    },
                    {
                        name:'深兰结算台 ',
                        mainImage:require('../static/img/product9.jpg'),
                        desc:'使用SSD识别算法，无需标签，机器视觉识别商品，在保证速度和精度的同时直接预测目标类别和商品外围框，可实现多目标检测，可用于任何场景的无人结算中心。',
                        detailedImage:[
                            require('../static/img/product9-1.jpg'),require('../static/img/product9-2.jpg'),require('../static/img/product9-3.jpg'),
                        ],
                        type:1,showDetail:false,id:'',
                    },

                    {
                        name:'深兰AI自贩柜（大兰）',
                        mainImage:require('../static/img/product10.jpg'),
                        desc:'采用卷积神经网络、机器视觉、深度学习算法，深兰AI摄像头360度对商品精确识别、快速计算、算法模型承载容量大、商品' +
                        'SKU可根据客户需求调整。多柜自由组合可实现用便利店1/4的成本，实现70%的销量。',
                        detailedImage:[
                            require('../static/img/product10-1.jpg'),require('../static/img/product10-2.jpg'),require('../static/img/product10-3.jpg'),
                        ],
                        type:1,showDetail:false,id:'',
                    },
                    {
                        name:'深兰小兰冰箱',
                        mainImage:require('../static/img/product11.jpg'),
                        desc:'单门机器视觉冰箱，机器视觉识别商品，单层仅需要一个摄像头，可实现对整层商品的精确识别，快速计算、算法模型承载容量大、商品' +
                        'SKU可根据客户需求调整。购物体验顺畅便利，扫手开门、先享后付、拿了就走、关门扣款。',
                        detailedImage:[
                            require('../static/img/product11-1.jpg'),require('../static/img/product11-2.jpg'),require('../static/img/product11-3.jpg'),
                        ],
                        type:1,showDetail:false,id:'',
                    }
                ],
                remarkData:{MessageType:1,productId:1},
            };
        },
        components: {
            leaveMessage,
            // fileDetail,
        },
        methods: {
            getSolution() {
                solutionService.solutionList().then((response) => {
                    if (response.data.Code == '1') {
                        if (response.data.Data.length > 0) {
                            this.solutionList = response.data.Data;

                            for (var value of this.solutionList) {
                                for (var val of value.Items) {
                                    val.caseList = this.splitArray(val.Case,4);
                                }
                            }
                            this.changeTab();
                        }
                    } else {
                        this.$Message.info({
                            content: response.data.Msg,
                            duration: 0.5
                        });
                    }
                });
            },
            changeTab() {
                for (let i = 0; i < this.solutionList.length; i++) {
                    if (this.tabValue == this.solutionList[i].TypeId) {
                        this.solutionData = this.solutionList[i].Items;
                    }
                }
            },

            //拆分数组
            splitArray(arr, len) {
                var a_len = arr.length;
                var result = [];
                for (var i = 0; i < a_len; i += len) {
                    result.push(arr.slice(i, i + len));
                }
                return result;
            },

            showProductDetail(event,index){
                this.productList[index].showDetail = ! this.productList[index].showDetail;
            },
            getSystemLink(){
                solutionService.getSystemLink().then((response) => {
                    if(response.data.Code == '1') {
                        this.systemPlatformList = response.data.Data;
                    } else {
                        this.$Message.error({
                            content: response.data.message,
                            duration: 0.5
                        });
                    }
                });
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
        },
        watch: {
            showPassword(){
                this.$on('changed', (data) => {
                    this.showPassword = data;
                });
            }
        },
        mounted() {
            this.getSolution();
            this.getSystemLink();
            let hash = location.hash.indexOf('?')?location.hash.split('?')[1]:undefined;
            setTimeout(()=>{
                hash&&this.custormAnchor(hash);
            },100);
        },
        // beforeUpdate(){
        //
        //
        // },
    };
</script>
<style lang="scss">
    @import '../assets/css/main';
    @import '../assets/css/solution';
</style>