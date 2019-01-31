<template>
    <div>
        <div class="follow-us">
            <div class="companyBox">
                <div class="company">
                    <h1 class="title">公司简介</h1>
                    <div class="english">ABOUT US</div>
                    <div class="line"></div>
                    <h2 class="name">{{baseInfo.CompanyName}}</h2>
                    <textarea class="box-content" disabled>{{baseInfo.Introduction}}</textarea>
                    <!--<div class="informationBox box-content">-->
                        <!--<div v-for="val in baseInfo.Introduction.split(/[\r\n\f\t\v]/g)" >-->
                            <!--{{val}}-->
                        <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="team">
                <h1 class="title">科研团队</h1>
                <div class="english">TEAM</div>
                <textarea class="" disabled>{{baseInfo.TeamIntroduction}}</textarea>
                <!--<div class="teamIntroductionBox box-content">-->
                    <!--<div v-for="val in baseInfo.TeamIntroduction.split(/[\r\n\f\t\v]/g)" >-->
                        <!--{{val}}-->
                    <!--</div>-->
                <!--</div>-->
            </div>
            <div class="history" v-if="historyList.length >0 ">
                <h1 class="title">发展历史</h1>
                <div class="english">DPVELOGPMENT</div>
                <div class="carouselBox">
                    <Carousel :autoplay="autoplay" :dots="dots" :arrow="arrow" :value="historyList.length -1">
                        <Carousel-item v-for="item in historyList">
                            <Row class="contentBox">
                                <Col class="content" span="4" v-for="val in item">
                                    <div>
                                        <img v-if="val" src="../static/img/dot.svg" width=""/>
                                        <img v-if="!val" src="../static/img/dot2.svg" width=""/>
                                    </div>

                                    <h2>{{val&&val.HistoryDate }}</h2>
                                    <div class="line" v-if="val"></div>
                                    <div class="box-content">
                                        {{val&&val.HistoryBrief}}
                                    </div>
                                </Col>
                            </Row>
                        </Carousel-item>
                    </Carousel>
                </div>
            </div>
            <div class="world">
                <h1 class="content">平台型 世界级 AI MAKER</h1>
                <img src="../static/img/block2.jpg"/>
            </div>
            <div class="imgMask" v-if="showBigImg" @click.stop="hiddenImg">
                <!--<img class="prev"  @click.stop="prev" src="../../img/left-btn.png">-->
                <div class="showImg" >
                <img class="bigImg" :src="AwardList[num].Image">
                <h2>{{AwardList[num].AwardName}}</h2>
                <p>{{AwardList[num].AwardBrief}}</p>
                </div>
                <!--<img class="next"  @click.stop="next" src="../../img/right-btn.png">-->
            </div>
        </div>
    </div>
</template>
<script>
    import AdminHeader from '../template/admin-header';
    import AdminAdvisory from '../template/admin-advisory';
    import AdminFooter from '../template/admin-footer';
    import FollowUsService from '../services/follow-us.service';
    import moment from 'moment';
    export default {
        layout: 'main',
        data(){
            return{
                showBigImg:false,
                num:0,
                AwardList:[],
                baseInfo:{Introduction:'',TeamIntroduction:''},
                historyList:[],
                autoplay:false,
                dots:'none',
                arrow:'always',
                tabValue:'company-profile'
            };
        },
        components: {
            AdminHeader,
            AdminAdvisory,
            AdminFooter
        },

        methods: {
            //获取公司详情
            getBaseInfo(){
                FollowUsService.GetBaseInfo()
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

            //公司发展历史
            getHistoryList(){
                FollowUsService.GetHistoryList()
                    .then((res) => {
                        if (res.data.Code === 1) {
                            if(res.data.Data && res.data.Data.length>0){
                                // !!!test
                                // res.data.Data.push({
                                //     HistoryBrief: '“未来，召之即来”芭堤雅功能性商用车发布会成功举办',
                                //     HistoryDate: '2018-07-02T00:00:00',
                                // }
                                // );
                                for(var i=0;i<res.data.Data.length;i++){
                                    res.data.Data[i].HistoryDate=moment(res.data.Data[i].HistoryDate).format('YYYY-MM');
                                }
                            }
                            this.historyList=res.data.Data.reverse();
                            this.historyList = this.splitArray(this.historyList,6);
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
            //拆分数组
            splitArray(arr, len) {
                var a_len = arr.length;
                var result = [];
                for (var i = 0; i < a_len; i += len) {
                    result.push(arr.slice(i, i + len));
                }
                var b_len = result.length;
                if(result[b_len-1].length !=len ) {
                    for(var m=result[b_len-1].length;m<len;m++){
                        result[b_len-1].push(null);
                    }
                }
                return result;
            }

        },
        //初始化方法
        mounted() {
            this.getHistoryList();
            this.getBaseInfo();
        }
    };

</script>
<style lang="scss">
    @import '../assets/css/follow-us';
</style>