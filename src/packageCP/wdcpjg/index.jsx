import Taro, { Component } from '@tarojs/taro'
import {CoverView, Image, ScrollView, Text, View} from '@tarojs/components'
import classNames from 'classnames'
import { AtIcon } from 'taro-ui'
import EChart from 'techarts';
import * as echarts from '@utils/echarts';

import './index.scss'

const xData = ['4/1', '4/2', '4/3', '4/4', '4/5', '4/6', '4/7'];
const yData = ['2', '50', '20', '40', '60', '5', '6'];
const interestData = ['40', '57', '96', '64', '67', '81'];
const carrerData = ['40', '57', '96', '64', '67', '81','64','37'];
const interestInfo = {
  I:{
    title: '研究型(I)',
    common: ['思想家而非实干家，抽象思维能力强，求知欲强，肯动脑，善思考，不愿动手','喜欢独立和富有创造性的工作','知识渊博，不善于领导他人','考虑问题理性，做事喜欢精确，喜欢逻辑分析和推理，乐于探索未知的领域'],
    special: '坚定有韧性，为人好奇，喜欢钻研，性格独立',
    otherOption: '爱钻研有智慧的',
    sports: ['抽象的理论性的，概念性的活动','需要弄清楚事情前因后果和来龙去脉的活动']
  },
  A:{
    title: '艺术型(A)',
    common: ['有创造力，乐于创造新颖、与众不同的东西','渴望表现自己的个性，实现自己的价值','做事理想化，追求完美，不重实际','具有一定的艺术才能和个性'],
    special: '有创造力、非传统的、敏感、容易情绪化、比较冲动不服从指挥',
    otherOption: '有个性的，有创意的',
    sports: ['过程限制少，可以自由发挥的活动','需要创意的活动']
  },
  S:{
    title: '社会型(S)',
    common: ['喜欢与人交往，不断结交新朋友','善于言谈，愿意教导帮助别人','关心社会问题有社会责任感','寻求干饭的人际关系，比较看重社会义务和社会道德'],
    special: '为人友好，热情活跃，善解人意，外向，有爱心',
    otherOption: '热心的乐于助人的',
    sports: ['社会公益类活动','帮助教导别人的活动']
  },
  C:{
    title: '常规型(C)',
    common: ['尊重权威和规章制度，喜欢按计划办事，细心、有条理','习惯接受他人的指挥和领导，自己不谋求领导职务','欢关注实际和细节情况，通常较为谨慎和保守，缺乏创造性','不喜欢冒险和竞争，富有自我牺牲精神'],
    special: '喜欢要求注意细节、精确度、有系统有条理，具有记录、归档、据特定要求或程序组织数据和文字信息的职业，并具备相应能力',
    otherOption: '精确有条理的',
    sports: ['已经设定游戏规则的活动','不需要自己考虑过程的活动']
  },
  E:{
    title: '企业型(E)',
    common: ['追求权力、权威和物质财富，具有领导才能','喜欢竞争、敢冒风险、有野心、抱负','为人务实，习惯以利益得失，权利、地位、金钱等来衡量做事的价值','做事有较强的目的性'],
    special: '喜欢要求具备经营、管理、劝服、监督和领导才能',
    otherOption: '有领导才能',
    sports: ['以实现机构、政治、社会及经济目标的活动','具有领导需求的活动']
  },
  R:{
    title: '现实型(R)',
    common: ['愿意使用工具从事操作性工作，动手能力强','做事手脚灵活，动作协调，迅速敏捷','偏好于具体任务，不善言辞，做事保守，较为谦虚','缺乏社交能力，通常喜欢独立做事'],
    special: '喜欢使用工具、机器，需要基本操作技能的工作',
    otherOption: '动手能力强，做事干练',
    sports: ['对要求具备机械方面才能、体力的活动','从事与物件、机器、工具、运动器材、植物、动物相关的活动']
  }
};
const leftData = [-41,-37,-84,-57];
const rightData = [59,63,16,43];
const natureInfo = ['避免成为注意的焦点，独自度过时精力充沛，深思熟虑之后再表达或者行动','避免成为注意的焦点，独自度过时精力充沛，深思熟虑之后再表达或者行动','避免成为注意的焦点，独自度过时精力充沛，深思熟虑之后再表达或者行动','避免成为注意的焦点，独自度过时精力充沛，深思熟虑之后再表达或者行动','避免成为注意的焦点，独自度过时精力充沛，深思熟虑之后再表达或者行动'];
const abilityResult = '你拥有音乐的天赋，具有较高的表演、创作及思考音乐的能力，主要表现在可以敏锐的感知节奏、旋律、音调等；你需要加强自己的内省能力，吾日三省吾身，了解自身的长处短处，才能更好的发挥自身的特点';
const abilityInfo = [
  {
    title: '语言能力',
    content: '你较为容易明白别人的指示、谈话内容及其言外之意；亦较能用说话表达想法、情绪和需求；与人交流时，较为细心聆听，善用言语；而且较为善记人名、地名、地点、日期或琐事细节；略会看图说故事，偶尔用丰富词汇编写故事。'
  },
  {
    title: '逻辑数学能力',
    content: '你较为喜欢提问，探究事情发生的原因；也会喜欢把事物进行分配、分类、份等；相信事物都会有合理的解释；比较容易相信经过科学研究或有数据的事情；懂得估算或进行快速心算；又较为喜欢有计划地做事。'
  },
  {
    title: '空间能力',
    content: '对色彩有少许敏感；偶尔能很轻松地想象一个事物的景象；稍会选择材料、用具，按自己意念进行设计创作；少许喜欢用比喻解说事情；少许或不喜欢随手图画、于都地图、观看设计图记含图像作品；较喜欢看电影和其他视觉艺术表演。'
  },
  {
    title: '身体动觉能力',
    content: '你可以接受惊险娱乐及体育的活动或身体刺激动作游戏；不善于模仿他人的动作和言谈举止；偶尔会亲自练习一项新的技能，拆解和组装物体。'
  },
  {
    title: '音乐能力',
    content: '你喜爱听音乐，有音乐伴着来做事心情愉快，较为专注，较快地完成；讲话时偶尔有节奏感。可以能随音乐的节奏，但是表达得不尽人意；难以辨识音乐走调；喜欢唱歌，但是觉得自己唱的不好。'
  },
  {
    title: '人际能力',
    content: '你较为乐意采纳别人的意见及倾听别人的说话，略懂得互动、关心、体谅和帮助别人，沟通良好，结交新朋友的频率不高；偶然才会听到别人的消息或八卦；不喜欢教一个人或一群人如何做某件事。'
  },
  {
    title: '内省能力',
    content: '你稍能恰当表达自己的感受和想法，偶尔善于计划和分配日常生活时间；有时能集中注意力、按时完成工作；认为自己稍微明事理、拥有自尊、懂得自律、意志坚强或性格独立。'
  },
  {
    title: '自然观察能力',
    content: '你对自然景物稍有兴趣，略微喜爱阅览以自然景象和动植物为主题的节目、图书和展示，会有个别熟悉的自然景物的名称、特征；很少收集标本、饲养动物，种植花草树木，参加园艺或野外活动。'
  }
];
const carrerInfo = [
  {
    title:'技术型（TF）',
    content:'追求在技术/职能领域的成长和技能的不断提高，以及应用这种技术/职能的机会。希望通过施展自己精湛的技能以获取别人的认可，乐于和同行交流切磋。'
  },
  {
    title:'管理型（GM）',
    content:'追求岗位晋升，致力于全面管理，希望能领导别人，独自负责某个部分，可以跨部门整合其他人的努力成果，愿意承担责任。具体的技术/职能工作仅仅是通向更高、更全面管理层级的手段而已。'
  },
  {
    title:'自主型（AU）',
    content:'希望可以按照自己喜欢的工作方式工作和生活，不愿意忍受公司或者组织条条框框的约束和限制，追求能施展个人能力的工作环境，更容易被自由选择而不是物质报酬所激励。'
  },
  {
    title:'安全型（SE）',
    content:'追求稳定的工作岗位，更为看重财务安全和职业稳定性，关注五险一金、养老金等保证性收入。对组织忠心耿耿，可以长久稳定地从事某一职业。'
  },
  {
    title:'创造型（EC）',
    content:'有强烈的创造需求和欲望，醉心于建立或创造某种完全属于自己的东西；最强烈的工作动力是可以发明创造，奠基立业，同时意志坚定，敢于冒险。'
  },
  {
    title:'服务型（SV）',
    content:'希望可以做一些利于他人的事，为别人提供有价值的服务。例如：帮助他人，改善人们的处境，通过新的产品消除疾病等等。富有爱心和同情心。'
  },
  {
    title:'挑战型（CH）',
    content:'喜欢解决看上去无法解决的问题，战胜厉害的对手，克服无法克服的困难，参加工作的原因是工作过程中可以去战胜各种不可能，新奇、变化和困难是行动的终极目标。'
  },
  {
    title:'生活型（LS）',
    content:'希望职业环境有足够的的弹性，能平衡个人的、家庭的和职业的矛盾，认为家庭和事业是一个整体，希望两者可以兼顾，可以协调发展。'
  }
];
const interestIndicator = [
  { name: '现实型(R)', max: 100},
  { name: '常规型(C)', max: 100},
  { name: '企业型(E)', max: 100},
  { name: '社会型(S)', max: 100},
  { name: '艺术型(A)', max: 100},
  { name: '研究型(I)', max: 100}
];
const carrerIndicator = [
  { name: '服务型', max: 100},
  { name: '创造型', max: 100},
  { name: '安全型', max: 100},
  { name: '生活型', max: 100},
  { name: '自主型', max: 100},
  { name: '技术型', max: 100},
  { name: '挑战型', max: 100},
  { name: '管理型', max: 100}
];
const subjectIndicator = ['英语','政治','生物','语文','历史','化学','数学','地理','物理'];
const subjectData = [
  {value: 10, name: '英语'},
  {value: 55, name: '政治'},
  {value: 23, name: '生物'},
  {value: 25, name: '语文'},
  {value: 20, name: '历史'},
  {value: 35, name: '化学'},
  {value: 62, name: '数学'},
  {value: 15, name: '地理'},
  {value: 50, name: '物理'}
];

class Index extends Component {
  config = {
    navigationBarTitleText: '测评结果'
  }

  constructor(props) {
    super(props)
    this.state = {
      interestInfo: getInterestInfo(['E','I','A'],interestInfo),
      interestOption: getRadarOption(interestIndicator,interestData),
      carrerOption: getRadarOption(carrerIndicator,carrerData),
      barOption: getBarOption(leftData,rightData),
      abilityOption: getLineBarOption(),
      subjectOption: getPieOption(subjectIndicator,subjectData),
      natureInfo: natureInfo,
      abilityResult: abilityResult,
      abilityInfo: abilityInfo,
      carrerInfo: carrerInfo,
      scoreByGrade:[],
      singleModels:[],
    };
  }

  componentWillMount(){
    /*var id = JSON.parse(this.$router.params.id)
    getUserEvaluationDetailById(id).then(({data}) => {
      this.setState({
        scoreByGrade:data.data.scoreByGrade,
        singleModels:data.data.singleModels,
      })
    })*/
  }

  componentDidMount(){

  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    const {interestOption , singleModels, interestInfo, barOption, natureInfo, abilityOption, abilityResult, abilityInfo, carrerOption, carrerInfo, subjectOption } = this.state
    return (
      <ScrollView className='wdcpjg' scrollY='true' >
        {/*用户基本信息*/}
        <View className='at-row user-info'>
          <View className='at-col font2 selectTop'>男</View>
          <View className='at-col font2 selectTop'>理科</View>
          <View className='at-col font2 selectTop'>3分21秒</View>
        </View>
        {/*兴趣维度解析*/}
        <View className='interest base-item'>
          <View className='title'>一、兴趣维度解析</View>
          <View className='small-title'>您的兴趣类型:EIA</View>
          <View className="rander-chart">
            <EChart echarts={echarts} option={interestOption} />
          </View>
          <View className='content'>雷达图中，得分越接近六边形边角区域，说明你的兴趣特点越典型</View>
          {
            interestInfo.length > 0 && interestInfo.map((item,index) => {
              return (
                <View className='interest-desc'>
                  <View className='small-title'>{item.title}</View>
                  <View className='interest-content'>
                    <View className='at-row content-title'>
                      <AtIcon value='star' size='14' color='#07c05f'></AtIcon>
                      <View className='at-col pl-20'>共同特征：</View>
                    </View>
                    {
                      item.common.map((commonItem,commonIndex) => {
                        return (
                          <View className='content-title'>{commonIndex+1}、{commonItem}</View>
                        )
                      })
                    }
                    <View className='at-row content-title'>
                      <AtIcon value='star' size='14' color='green'></AtIcon>
                      <View className='at-col pl-20'>性格特点：</View>
                    </View>

                    <View className='content-title'>{item.special}</View>
                    <View className='at-row content-title'>
                      <AtIcon value='star' size='14' color='green'></AtIcon>
                      <View className='at-col pl-20'>别人的评价：</View>
                    </View>
                    <View className='content-title'>{item.otherOption}</View>
                    <View className='at-row content-title'>
                      <AtIcon value='star' size='14' color='green'></AtIcon>
                      <View className='at-col pl-20'>喜欢的活动：</View>
                    </View>
                    {
                      item.sports.map((sportsItem,sportsIndex) => {
                        return (
                          <View className='content-title'>{sportsIndex+1}、{sportsItem}</View>
                        )
                      })
                    }
                  </View>
                </View>
              )
            })
          }
        </View>

        {/*性格维度解析*/}
        <View className='interest base-item'>
          <View className='title'>二、性格维度解析</View>
          <View className='small-title'>您的性格类型：ISFJ</View>
          <View className="bar-chart">
            <EChart echarts={echarts} option={barOption} />
          </View>
          <View className='content'>倾向示意图表示四个维度分别的倾向程度，从中间往两侧看，条越长，倾向越明显</View>
            <View className='interest-desc'>
              <View className='interest-content'>
                {
                  natureInfo.length > 0 && natureInfo.map((commonItem,commonIndex) => {
                    return (
                      <View className='at-row'>
                        <View className='at-icon at-icon-star star'></View>
                        <View className='content-title'>{commonItem}</View>
                      </View>
                    )
                  })
                }
              </View>
            </View>
        </View>

        {/*能力维度解析*/}
        <View className='interest base-item'>
          <View className='title'>三、能力维度解析</View>
          <View className='small-title'>您的强项能力：音乐+语言+空间</View>
          <View className="rander-chart">
            <EChart echarts={echarts} option={abilityOption} />
          </View>
          <View className='content'>上图中，柱状图为您的得分，折线图为平均水平，{abilityResult}</View>
          {
            abilityInfo.length > 0 && abilityInfo.map((item,index) => {
              return (
                <View className='interest-desc'>
                  <View className='interest-content'>
                    <View className='at-row content-title'>
                      <View className='at-icon at-icon-star star'></View>
                      <View className='at-col pl-20 pt-10'>{item.title}</View>
                    </View>
                    <View className='content-title'>{item.content}</View>
                  </View>
                </View>
              )
            })
          }
        </View>

        {/*职业倾向维度解析*/}
        <View className='interest base-item'>
          <View className='title'>四、职业倾向维度解析</View>
          <View className='small-title'>您的职业价值观：技术型+生活型+管理型</View>
          <View className="rander-chart">
            <EChart echarts={echarts} option={carrerOption} />
          </View>
          <View className='content'>你最适合的职业类型是能在专业领域中展示自己的技能，成为某个领域的专家。希望通过施展自己的技能以获取别人认可，并乐于接受来自于专业领域的挑战，可能愿意成为技术/职能领域的管理者，但这意味着你可能会脱离自己擅长的专业领域。</View>
          {
            carrerInfo.length > 0 && carrerInfo.map((item,index) => {
              return (
                <View className='interest-desc'>
                  <View className='interest-content'>
                    <View className='at-row content-title'>
                      <View className='at-icon at-icon-star star'></View>
                      <View className='at-col pl-20 pt-10'>{item.title}</View>
                    </View>
                    <View className='content-title'>{item.content}</View>
                  </View>
                </View>
              )
            })
          }
        </View>

        {/*学科优劣维度解析*/}
        <View className='interest base-item'>
          <View className='title'>五、学科优劣维度解析</View>
          <View className='small-title'>您的优势：数学+政治+物理</View>
          <View className="pie-chart">
            <EChart echarts={echarts} option={subjectOption} />
          </View>
          <View className='content'>你在数学的学习上有着强烈的兴趣和良好的学习习惯。喜欢逻辑、推理、抽象方面的知识，思维敏捷，善于发现问题，解决问题。你再地理的学科上较为薄弱，需要多理解环境的众多现象、过程和特征，能够活学活用，并且要能通过自己的语言表达出来。
          </View>
        </View>

        {/*<View className='at-row tableTitle base-item'>
          <View className='at-col font2 selectTop'>标题</View>
          <View className='at-col font2 selectTop'>得分</View>
          <View className='at-col font2 selectTop'>参考平均值</View>
          <View className='at-col font2 selectTop'>问题状态</View>
        </View>

        <View className = 'scoreN'>
          {
            singleModels.map((item,index) => {
              return (
                <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                  <View className='at-col selectTop'>{item.title}</View>
                  <View className='at-col selectTop'>{item.score}</View>
                  <View className='at-col selectTop'>{item.avgScore}</View>
                  <View className='at-col selectTop'>{item.status}</View>
                </View>
              )
            })
          }
        </View>*/}

      </ScrollView>
    )
  }
}

function getInterestInfo(selected,interestInfo){
  let _interestInfos = [];
  selected.forEach(function(val){
    _interestInfos.push(interestInfo[val]);
  });
  return _interestInfos;
}

function getLineOption(xData, yData) {
  return {
    title: {
      show: false,
      // text: '测试下面legend的红色区域不应被裁剪',
      // left: 'center'
    },
    color: ['#1890ff'],
    legend: {
      show: false,
      // data: ['A', 'B', 'C'],
      // top: 50,
      // left: 'center',
      // backgroundColor: 'red',
      // z: 100
    },
    grid: {
      // show: true,
      containLabel: true,
      top: 10,
      left: 2,
      right: 25,
      bottom: 10,
      // borderColor: '#ff0000'
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: '{c}',
      backgroundColor: '#1890ff',
      position: function(point, params, dom, rect, size) {
        return [point[0], '10%'];
      },
      axisPointer: {
        lineStyle: {
          color: '#D2CCCC',
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#5E5E5E',
      },
      data: xData,
      // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#5E5E5E',
      },
      splitLine: {
        lineStyle: {
          color: '#C2C0C0',
          type: 'dashed',
        },
      },
      // show: false
    },
    series: [
      {
        name: 'A',
        type: 'line',
        smooth: true,
        data: yData,
        // data: [1800, 360, 65, 30, 780, 40, 33]
      } /*, {
      name: 'B',
      type: 'line',
      smooth: true,
      data: [12, 50, 51, 35, 70, 30, 20]
    }, {
      name: 'C',
      type: 'line',
      smooth: true,
      data: [10, 30, 31, 50, 40, 20, 10]
    }*/,
    ],
  };
}

function getRadarOption(indicator,data){
  return {
    radar: {
      name: {
        textStyle: {
          color: '#999',
          padding: [3, 5]
        }
      },
      indicator: indicator
    },
    series: [{
      name: '指数',
      type: 'radar',
      data: [
        {
          value: data,
          areaStyle: {
            opacity: 0.9,
            color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
              {
                color: '#B8D3E4',
                offset: 0
              },
              {
                color: '#72ACD1',
                offset: 1
              }
            ])
          }
        },
      ]
    }]
  };
}

function getBarOption(leftData,rightData){
  return {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        max: 100,
        min: -100
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        position: 'left',
        data: ['判断(J)', '思考(T)', '感觉(S)', '外向(E)']
      },
      {
        type: 'category',
        axisTick: {
          show: false
        },
        position: 'right',
        data: ['知觉(E)', '情感(F)', '直觉(N)', '内向(I)']
      }
    ],
    series: [
      {
        type: 'bar',
        stack: '总量',
        label: {
          show: true
        },
        color: '#67e0e3',
        data: rightData,
        showBackground: true,
        backgroundStyle: {
          color: '#e0f2f3'
        }
      },
      {
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
        },
        color: '#ffdb5f',
        data: leftData,
        showBackground: true,
        backgroundStyle: {
          color: '#e0f2f3'
        }
      }
    ]
  }
}

function getLineBarOption(){
  return {
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: ['语言','逻辑','空间','身体','音乐','人际','内省','自然']
      },
      {
        type: 'category'
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        max: 20
      },
      {
        type: 'value',
        scale: true,
        max: 20
      }
    ],
    series: [
      {
        name: '分数',
        type: 'bar',
        color: '#07c160',
        data: [12,5,16,19,10,8,10,18]
      },
      {
        name: '平均水平',
        type: 'line',
        color: '#ffd85f',
        data: [7,17,6,15,17,8,12,14]
      }
    ]
  }
}

function getPieOption(indicator,data){
  return {
    series: [
      {
        name: '半径模式',
        type: 'pie',
        radius: [20, 90],
        roseType: 'radius',
        label: {
          show: true
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: data
      }
    ]
  };
}

export default Index
