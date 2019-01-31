<template>
        <div class="follow-us">
            <div style="width:100%">
                <img src="../static/img/map.jpg" style="width:100%"/>
                <div class="contacts-container">
                    <div class="box-vertical contact-box1">
                        <div>联系方式</div>
                        <div>CONTACT</div>
                    </div>
                    <div class="box-horizontal contact-box2">
                        <div style="margin-right: 20px">
                            <Icon type="ios-telephone-outline" ></Icon>
                        </div>
                        <div>
                            <a>400-117-7928</a>
                        </div>
                    </div>
                    <div class=" box-horizontal contact-box3">
                        <div style="margin-right: 20px">
                            <Icon type="ios-email-outline"></Icon>
                        </div>
                        <div>
                            <a href="mailto:market@deepblueai.com">market@deepblueai.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="talentRecruitmentContainer">
                <div class="box-vertical talentRecruitmentTitle">
                    <div class="talentRecruitment-title1">人才招聘</div>
                    <div class="talentRecruitment-title2">JOIN US</div>
                </div>
                <div class="talentRecruitmentContent masonry ">
                    <div class="masonry-item box-vertical" v-for="item in jobInfoLists">
                        <div class="job-name">{{item.JobTitile}}</div>
                        <div style="width: 60px;background-color: #0097d5;height: 3px;align-self: flex-start"></div>
                        <div v-if="item.Description" class="job-desc">{{item.Description}}</div>
                        <div class="job-requirement">
                            <div class="content" v-if="item.Requirements">
                                <div style="padding: 5px 0" v-for="(requirement,index) in item.Requirements.split(/[\r\n\f\t\v]/g)">
                                    <span :class="{title:(index==0)}">{{requirement}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="job-responsibility">
                            <div class="content" v-if="item.Responsibility">
                                <div style="padding: 5px 0" v-for="(responsibility,index) in item.Responsibility.split(/[\r\n\f\t\v]/g)">
                                <span :class="{title:(index==0)}">{{responsibility}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pages" style="padding: 0px 15% 40px 15%;text-align: center" v-if="total>0">
                    <!--<Page :total="total" :page-size="size" @on-change="loadMore" show-total></Page>-->
                    <Page :total="total" :page-size="4" @on-change="changePage"></Page>
                </div>

                <div style="text-align: center;font-size: 24px;padding: 0px 15% 40px 15%;">
                    <span style="font-size: 28px">加入我们请联系</span>
                    <div style="font-size: 22px">
                        <a href="mailto:linss@deepblueai.com">linss@deepblueai.com</a>
                    </div>
                </div>
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
</template>
<script>
    import ContactUsService from '../services/contact-us.service';
    export default {
        layout: 'main',
        data(){
            return{
                aaa:'<br/>',
                showBigImg:false,
                num:0,
                page:1,
                size:4,
                total:0,
                AwardList:[],
                baseInfo:{},
                historyList:[],
                tabValue:'company-profile',
                jobInfoLists:[]
            };
        },
        methods: {
            //获取公司奖项列表
            getAwardList(){
                ContactUsService.GetAwardList()
                    .then((res) => {
                        if (res.data.Code === 1) {
                            this.AwardList=res.data.Data;
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

            //获取公司详情
            getBaseInfo(){
                ContactUsService.GetBaseInfo()
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


            //动态添加class名
            test:function(i){
                var num=i + 1;
                if(num%2==0){
                    return 'history-content-left';
                }else{
                    return 'history-content-right';
                }
            },

            //根据clsas名设置不同的相对定位高度
            testClass:function(i){
                return 'top:'+i*198 + 'px;height:198px';
                var num=i+1;

            },

            changePage(page){
                this.page = page;
                this.getTalentRecruitList(page);
            },

            //人才招聘信息
            getTalentRecruitList(page){
                this.page=page;
                ContactUsService.GetTalentRecruitList( this.page, this.size).then((res) => {
                    // this.f=res.data.Data.LstRecruitmentInfo;
                    this.jobInfoLists = res.data.Data.LstRecruitmentInfo;
                    this.total=res.data.Data.TotalCount;
                }, () => {
                    this.$Message.warning('网络错误');
                });
            },

            //图片向左平移
            goLeft:function(){
                var ullist=document.getElementById("ullist").offsetLeft;
                var imhLength=this.AwardList.length;
                var businessValue=parseInt(imhLength/4)
                var remainder=imhLength%4;
                var minLength;
                if(remainder>0){
                    minLength=-(businessValue)*1200;
                }else{
                    minLength=-(businessValue-1)*1200;
                }
                if(ullist<0){
                    document.getElementById("ullist").style.left=ullist+1200+'px';
                }else{
                    document.getElementById("ullist").style.left=minLength+'px';
                }
            },

            //图片向右平移
            goRight:function(){
                var ullist=document.getElementById("ullist").offsetLeft;
                var imhLength=this.AwardList.length;
                var businessValue=parseInt(imhLength/4)
                var remainder=imhLength%4;
                var minLength;
                if(remainder>0){
                    minLength=-(businessValue)*1200;
                }else{
                    minLength=-(businessValue-1)*1200;
                }
                if(ullist>minLength){
                    document.getElementById("ullist").style.left=ullist-1200+'px';
                }else{
                    document.getElementById("ullist").style.left=0+'px';
                }
            },

            //显示放大弹框
            bigImg:function(index){
                document.getElementsByTagName("body")[0].style.overflow="hidden"
                this.showBigImg = true;
                this.num = index;
            },

            //关闭放大弹框
            hiddenImg:function(){
                this.showBigImg=!this.showBigImg;
                document.getElementsByTagName("body")[0].style.overflow="auto"
            },
        },
        //初始化方法
        mounted() {
            this.getTalentRecruitList(1);
        }
    };

</script>
<style lang="scss">
    @import '../assets/css/contact-us';
</style>