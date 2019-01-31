<template>
  <div>
    <div v-if="!isMobile">
      <!--<admin-header></admin-header>-->
      <div class="index-page">
        <Content>
          <Carousel autoplay>
            <Carousel-item v-for="(val) in bannerData">
              <img v-if="! val.URL" :src="val.Image" :alt="val.Remark" height="auto" width="100%"/>
              <a :href="val.URL" target="_blank" v-if="val.URL">
                <img :src="val.Image" :alt="val.Remark" height="auto" width="100%"/>
              </a>

            </Carousel-item>
          </Carousel>
          <div class="videoBox">
            <Row>
              <Col span="12" class="video">
                <video id="myvideo" controls :src="videoSrc" :poster="videoImg" :autoplay="playStatus" height="100%" width="100%" loop>
                  your browser does not support the video tag
                </video>
              </Col>
              <Col span="12" class="newsBox">
                <Row justify="start" class="titleBox">
                  <Col span="12">
                    <h1 class="title">热点新闻</h1>
                    <div class="textBox">
                      <div class="text">HOT NEWS</div>
                      <router-link to="/hot-news" class="text">更多信息</router-link>
                    </div>
                  </Col>
                  <Col span="12">
                    <h1 class="title">媒体报道</h1>
                    <div class="textBox">
                      <div class="text">MEDIA REPORT</div>
                      <router-link to="/hot-news" class="text">更多信息</router-link>
                    </div>
                  </Col>
                </Row>

                <div>
                  <Row>
                    <Col span="12" style="height:300px">
                      <Row class="news">
                        <Col class="news-col" span="24" v-for="(val,inx) in newsList.hotNews">
                          <router-link class="news-div" :to="{path:'/new-detail',query:{newId:val.NewsId}}" target="_blank">
                            <div class="content">{{val.NewsTitle}}</div>
                            <div class="subContentBox">
                              <div class="subContent">
                                {{val.NewsSubTitle}}
                              </div>
                            </div>
                          </router-link>
                          <div class="line"></div>
                        </Col>

                      </Row>
                    </Col>
                    <Col span="12" style="height:300px">
                      <Row class="news">
                        <Col class="news-col" span="24" v-for="(val,inx) in newsList.mediaNews">
                          <router-link class="news-div" :to="{path:'/new-detail',query:{newId:val.NewsId}}" target="_blank">
                            <div class="content">{{val.NewsTitle}}</div>
                            <div class="subContentBox">
                              <div class="subContent">
                                {{val.NewsSubTitle}}
                              </div>
                            </div>
                          </router-link>
                        </Col>

                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>

          <div class="territory" ref="territory">
            <div class="territory-header">
              <h1>深兰科技产品贯穿九个领域</h1>
              <div>自动驾驶、智能机器人、生物智能、AI芯片、智能零售、智慧城市、智能安防、智能教育、军工</div>
            </div>
            <!--<div class="box" v-for="(val,idx) in territoryThreeList" :style="{backgroundImage: 'url(' + val.img + ')'}" :class="{'textRight':idx%2==0}">-->
            <!--<div class="text">-->
            <!--<div class="background fideInLeft fideInRight" :class="animated?'animated':'noAnimated'"></div>-->
            <!--<div class="info">-->
            <!--<h1 class="fideInLeftDelay fideInRightDelay">{{val.title}}</h1>-->
            <!--<div class="english fideInLeftDelay fideInRightDelay">{{val.englishTitle}}</div>-->
            <!--<div class="line fadeInShow"></div>-->
            <!--<div class="box-content fideInLeftDelay fideInRightDelay">-->
            <!--{{val.content}}-->
            <!--</div>-->
            <!--<div class="btn-more fadeInShow">-->
            <!--<Button type="ghost">了解更多</Button>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <div class="box textRight driving">
              <div class="text">
                <div class="background" :class="animated?'fideInLeft':'noAnimated'"></div>
                <div class="info">
                  <h1 class="" :class="animated?'fideInLeftDelay':'noAnimated'">自动驾驶</h1>
                  <div class="english" :class="animated?'fideInLeftDelay':'noAnimated'">SELF-DRIVING</div>
                  <div class="line" :class="animated?'fadeInShow':'noAnimated'"></div>
                  <div class="box-content" :class="animated?'fideInLeftDelay':'noAnimated'">
                    采用以视觉为主的多传感器融合技术，融合了精准定位导航和强化学习的决策系统。自动驾驶技术与其他行业结合的功能性商用车，让生活更便利，让时间更高效。
                  </div>
                  <router-link to="/solution?autopilot" class="btn-more" :class="animated?'fadeInShow':'noAnimated'">
                    <Button type="ghost">了解更多</Button>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="box robots">
              <div class="text">
                <div class="background" :class="animated?'fideInRight':'noAnimated'"></div>
                <div class="info">
                  <h1 class="" :class="animated?'fideInRightDelay':'noAnimated'">智能机器人</h1>
                  <div class="english" :class="animated?'fideInRightDelay':'noAnimated'">INTELLIGENT ROBOTS</div>
                  <div class="line" :class="animated?'fadeInShow':'noAnimated'"></div>
                  <div class="box-content" :class="animated?'fideInRightDelay':'noAnimated'">
                    基于视觉空间重构技术的自主路径规划与导航，流畅的人机交互真正实现了垂直细分市场的无人化、少人化，大幅减少了日益增加的人力成本，为客户提高收益。
                  </div>
                  <router-link to="/solution?robot" class="btn-more" :class="animated?'fadeInShow':'noAnimated'">
                    <Button type="ghost">了解更多</Button>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="box textRight biological">
              <div class="text">
                <div class="background" :class="animated?'fideInLeft':'noAnimated'"></div>
                <div class="info">
                  <h1 class="" :class="animated?'fideInLeftDelay':'noAnimated'">生物智能</h1>
                  <div class="english" :class="animated?'fideInLeftDelay':'noAnimated'">BIOLOGICAL INTELLIGENCE</div>
                  <div class="line" :class="animated?'fadeInShow':'noAnimated'"></div>
                  <div class="box-content" :class="animated?'fideInLeftDelay':'noAnimated'">
                    自主研发的内生物特征比对引擎，在千万分之一的错误接受率下通过率为99.99%，达到世界顶尖水准。生物智能与支付、楼宇管理、自动车、交通领域的结合，使“一掌通”成为可能。
                  </div>
                  <router-link to="/solution?swzn" class="btn-more" :class="animated?'fadeInShow':'noAnimated'">
                    <Button type="ghost">了解更多</Button>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="more-box">
              <Row class="infoBox" type="flex" justify="center">
                <Col span="8" v-for="(val,idx) in territorySixList" :style="{backgroundImage: 'url(' + val.img + ')'}">
                  <div class="text">
                    <div class="background">
                    </div>
                    <div class="info">
                      <h1>{{val.title}}</h1>
                      <div class="english">{{val.englishTitle}}</div>
                      <div class="line"></div>
                    </div>
                    <div class="box-content">
                      {{val.content}}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
      </div>
      <!--<admin-advisory></admin-advisory>-->
      <!--<admin-footer></admin-footer>-->
    </div>
  </div>
</template>
<script>
  import indexService from '../services/index.service';
  import deepblueIdeaService from '../services/deepblueIdea.service';

  export default {
    layout: 'main',
    data(){
      return {
        territoryList:[],
        territoryBoxWidth:'',
        newBoxHeight:'',
        hotNewsList:[],
        newsList:{
          hotNews:[],
          mediaNews:[]
        },
        videoSrc:'',
        videoImg:require('../static/img/noVideo.jpg'),
        playStatus:true,
        bannerData:[],
        videoData:'',
        deepblueIdeaData:[],
        territoryThreeList:[
          {'title':'自动驾驶','englishTitle':'SELF-DRIVING','img':require('../static/img/self-derving.jpg'),'content':'采用以视觉为主的多传感器融合技术，融合了精准定位导航和强化学习的决策系统。自动驾驶技术与其他行业结合的功能性商用车，让生活更便利，让时间更高效。'},
          {'title':'智能机器人','englishTitle':'INTELLIGENT ROBOTS','img':require('../static/img/robots.jpg'),'content':'基于视觉空间重构技术的自主路径规划与导航，流畅的人机交互真正实现了垂直细分市场的无人化、少人化，大幅减少了日益增加的人力成本，为客户提高收益。'},
          {'title':'生物智能','englishTitle':'BIOLOGICAL INTELLIGENCE','img':require('../static/img/biological.jpg'),'content':'自主研发的内生物特征比对引擎，在千万分之一的错误接受率下通过率为99.99%，达到世界顶尖水准。生物智能与支付、楼宇管理、自动车、交通领域的结合，使“一掌通”成为可能。'},
        ],
        territorySixList:[
          {'title':'AI芯片','englishTitle':'AI CHIPS','img':require('../static/img/chips.jpg'),'content':'依托于强大的算法团队，将深兰在各行业的成熟专用算法植入芯片，将各垂直领域的解决方案高度集成化、定制化，不仅将算法加速至极致，而且大幅度降低了产品成本。'},
          {'title':'智能零售','englishTitle':'INTELLIGENT RETAIL','img':require('../static/img/retail.jpg'),'content':'利用自主研发的基于上下文注意力的深度学习方法及机器视觉技术，解决了传统零售行业成本高、利润低的痛点问题，完成了扫手开门、无媒介支付、先享后付的创新智能零售模式。'},
          {'title':'智慧城市','englishTitle':'INTELLIGENT CITY','img':require('../static/img/city.jpg'),'content':'基于AIoT、大数据平台、云计算平台等技术，构建具有自主学习能力的城市数据处理中枢和决策中心，实现城市数据一体化，提升城市管理效率和市民生活满意度。'},
          {'title':'智能安防','englishTitle':'INTELLIGENT SECURITY','img':require('../static/img/security.jpg'),'content':'不同于普通安防系统，基于视觉结构化信息处理的底层技术，使安防系统具备了实时人物识别与跟踪、异常报警等智能功能。其中，瓦力机器人更可替代人力巡警，打造智慧社区。'},
          {'title':'智能教育','englishTitle':'INTELLIGENT EDUCATION','img':require('../static/img/education.jpg'),'content':'深兰的手写识别不仅多次获得国内外比赛的第一名，而且可将教师的板书、笔记转换为可永久保存的知识库存档。'},
          {'title':'军工','englishTitle':'MILITARY INDUSTRY','img':require('../static/img/industry.jpg'),'content':'依托在人工智能、深度学习、机器视觉领域的深耕积累，深兰将人工智能技术服务于国防建设，针对特种军事需求，研发了具有实战效果的各类机器人。'},
        ],
        isMobile:false,
        territoryTop:0,
        animated:false,
      };
    },
    methods: {
      // banner
      getBanner(){
        indexService.bannerList().then((response) => {
          if(response.data.Code == '1') {
            this.bannerData = response.data.Data.LstBanner;
          } else {
            this.$Message.error({
              content: response.data.message,
              duration: 0.5
            });
          }
        });
      },
      // video
      getVideo(){
        indexService.videoInfo().then((response) => {
          if(response.data.Code == '1') {
            this.videoSrc = response.data.Data.VideoUrl;
          } else {
            this.$Message.error({
              content: response.data.message,
              duration: 0.5
            });
          }
        });
      },
      // 技术展示
      getTechnology(){
        indexService.technologyShow().then((response) => {
          if(response.data.Code == '1') {
            this.territoryList = response.data.Data.LstTechnologyShowInfo;
          } else {
            this.$Message.error({
              content: response.data.message,
              duration: 0.5
            });
          }
        });
      },

      getNews(){
        // 热点新闻
        indexService.hotNews(0).then((response) => {
          if(response.data.Code == '1') {
            this.newsList.hotNews = response.data.Data.LstHotNewsInfo;
          } else {
            this.$Message.error({
              content: response.data.message,
              duration: 0.5
            });
          }
        });
        // 媒体报道
        indexService.hotNews(1).then((response) => {
          if(response.data.Code == '1') {
            this.newsList.mediaNews = response.data.Data.LstHotNewsInfo;
          } else {
            this.$Message.error({
              content: response.data.message,
              duration: 0.5
            });
          }
        });
      },
      // 九大领域
      getTerritory(){
        deepblueIdeaService.deepblueIdea().then((response) => {
          if(response.data.Code == '1') {
            this.deepblueIdeaData = response.data.Data;
          } else {
            this.$Message.info({
              content: response.data.Msg,
              duration: 0.5
            });
          }
        });
      }, // 监听滚动
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>this.territoryTop-400){
          this.animated = true;
        }
      },


    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.getBanner();
      this.getVideo();
      this.getTechnology();
      this.getNews();
      this.getTerritory();
      setTimeout(() => {
        this.territoryTop = this.$refs.territory.getBoundingClientRect().top;
      }, 500);

    },
    // metaInfo: {
    //     title: '深兰科技——致力于人工智能基础研究和应用开发',
    //     meta: [
    //         {
    //             name: 'keyWords',
    //             content: '深兰科技,上海深兰,deepblue,快猫,人工智能企业,机器视觉,生物识别,拿了就走'
    //         },
    //         {
    //             name:'description',
    //             content:'深兰科技是快速崛起的人工智能第一梯队头部企业,在自动驾驶、智能机器人、零售升级、智慧交通、生物智能、教育、医疗、安防、军工等领域有深入布局'
    //         }
    //     ]
    // }
  };
</script>
<style lang="scss">
  @import '../assets/css/main';
  @import '../assets/css/index';
</style>