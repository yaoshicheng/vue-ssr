export default {
    head: {
        title: '深兰科技——致力于人工智能基础研究和应用开发111122',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'keywords', name: 'keywords', content: '深兰科技,上海深兰,deepblue,快猫,人工智能企业,机器视觉,生物识别,拿了就走' },
            { hid: 'description', name: 'description', content: '深兰科技是快速崛起的人工智能第一梯队头部企业,在自动驾驶、智能机器人、零售升级、智慧交通、生物智能、教育、医疗、安防、军工等领域有深入布局' }
        ]
    },
    css: [
        'iview/dist/styles/iview.css',
        ],
    plugins: [
        '~/plugins/iview.js',
    ],
  // css: [
  //   {
  //     src: '~/css/*.scss',
  //     lang: 'scss'
  //   }
  // ]
    build: {
        extend(config){
            config.resolve.extensions.push('.less')
        }
    },
}
