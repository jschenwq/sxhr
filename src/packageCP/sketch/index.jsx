import Taro, {Component} from '@tarojs/taro'
import {View, Image, Button, Text} from '@tarojs/components'
import {getZYXQQuestions,getUserReportCount,submitZYXQAnswers} from '@utils/api'
import './index.scss'

class Index extends Component{
  config = {
    navigationBarTitleText: '测评分类'
  }
  constructor(props){
    super(props);
    this.state = {
      visibled: true,
      reportCount:'',
      beginTime: 0,
      answerScores: [],
      currentIndex: 0,
      questions: [],
      data: [{
        title: '考试心理和行为测评',
        cycle: '1次/2月',
        titleNum: 40,
        imageSrc: require('../images/evaStart1.png'),
        content: '考试总是发挥失常，是考运不好还是心理问题，测测便知',
        desc: '考试焦虑症的出现一般是由于学习压力过大而引起，作为学生应该及时的调整好心态，正确的对待考试，放松心情，要知道紧张是不会给自己带来好的成绩的，要学会用平常心应对各种事情。如症状严重需及时进行治疗，以免造成不必要的麻烦。'
      },{
        title: '新高考选科测评',
        cycle: '1次',
        titleNum: 35,
        imageSrc: require('../images/evaStart2.png'),
        content: '文理分科选择困难？测一下就知道',
        desc: ' 根据《国务院关于深化考试招生制度改革的实施意见》（国发【2014】35号）要求，全面深化统一高考招生改革（简称“高考改革新方案”）2017年起将在全国各地整体实施，2014年已在上海、浙江率先试点。从2017年秋季入学的高中一年级学生开始，全国各地高中生将自主确定选考科目，各招生高校根据本校各专业选考科目，结合统一高考和高中学业水平考试成绩，综合评价，择优录取。'
      },
        {
          title: '志愿填报（普高）测评',
          cycle: '1次',
          titleNum: 23,
          imageSrc: require('../images/evaStart3.png'),
          content: '志愿填报不知道从何入手？测一下就知道',
          desc: '填报高考志愿，从某种意义上讲，是一个人职业生涯的起点。如何在未就业前，找到最适合自己的职业方向呢？现在网络发达，考生和家长只要轻轻一搜，就能找到大量的兴趣测试试题，进行测试。并且测试之后，还提供测试结果分析，确实方便了不少正为职业方向烦恼的考生和家长。'
        },
        {
          title: '专业定位测评',
          cycle: '1次',
          titleNum: 160,
          imageSrc: require('../images/evaStart4.png'),
          content: '成绩提升有办法，检测一下自己的学习方法是否得当',
          desc: '对于中学生学习成绩的影响因素研究很多，归纳起来，不外乎智力因素和非智力因素方面，先天的智力因素对学生学习成绩造成影响无法改变，而现阶段大多数学生成绩差的原因都是由非智力因素方面造成的，而中学阶段是学生非智力因素逐渐形成、稳定的一个关键时期因此，培养中学生良好的非智力因素，加强对中学生非智力因素的开发，改善中学生学习能力就变得非常重要。'
        },
        {
          title: '志愿填报（艺术）测评',
          cycle: '1次/12月',
          titleNum: 66,
          imageSrc: require('../images/evaStart6.png'),
          content: '志愿填报不知道从何入手？测一下就知道',
          desc: '填报高考志愿，从某种意义上讲，是一个人职业生涯的起点。如何在未就业前，找到最适合自己的职业方向呢？现在网络发达，考生和家长只要轻轻一搜，就能找到大量的兴趣测试试题，进行测试。并且测试之后，还提供测试结果分析，确实方便了不少正为职业方向烦恼的考生和家长。'
        },{
          title: '自我控制能力测评',
          cycle: '1次/3月',
          titleNum: 36,
          imageSrc: require('../images/evaStart5.png'),
          content: '测量自己的行为，情绪和认知进行约束和管理的能力',
          desc: '本测评用于测量中学生在学习、娱乐、日常生活及社会活动等方面的自我控制能力。问卷共36个题项，由三个维度组成，分别是情绪自控、行为自控和思维自控。'
        }]
    };
  }
  componentWillMount(){
    var index = this.$router.params.index;
    getZYXQQuestions().then(({data})=>{
      this.setState({
        questions: data
      })
    });

    this.setState({
      type:index
    });
    Taro.setNavigationBarTitle({
      title: this.state.data[index].title
    });
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
    this.setState({
      visibled: true
    })
    getUserReportCount().then(({data})=>{
      this.setState({
        reportCount:data.data.reportCount
      })
    });
  }

  componentDidHide () { }

  startAssess=()=>{
    var _beginTime = new Date().getTime()/1000;
    this.setState({
      visibled: false,
      beginTime: _beginTime
    })
  }
  gotoCpList(){
    Taro.navigateTo({
      url: '/packageCP/wdcplb/index'
    });
  }

  nextPicker(answerScore){
    let {questions, currentIndex} = this.state;
    if(currentIndex < questions.length-1){
      this.setState((prevState)=>({
        answerScores: prevState.answerScores.concat(answerScore),
        currentIndex: prevState.currentIndex+1,
      }));
    }else{
      this.setState((prevState)=>({
        answerScores: currentIndex == questions.length-1 ? prevState.answerScores.concat(answerScore):prevState.answerScores,
      }),()=>{
        Taro.showLoading({
          title: '结果提交中……',
          mask: true
        });
        var testTime = new Date().getTime()/1000 - this.state.beginTime;
        //提交职业兴趣测评结果
        submitZYXQAnswers({answerScores: this.state.answerScores,type: this.state.type, testTime: testTime}).then(({data})=>{
          Taro.navigateTo({
            url: '/packageCP/wdcpjg/index?id='+data.id
          });
          Taro.hideLoading();
        });
      });
    }
  }

  render () {
    let {title, cycle, titleNum, imageSrc, content, desc } = this.state.data[this.$router.params.index];
    let {reportCount, visibled, currentIndex, questions } = this.state;
    return (
      <View className='index'>
        <View className='top' hidden={!visibled}>
          <Image src={imageSrc}/>
          <View onClick={this.gotoCpList.bind(this)} className='my-report'>
            我的报告<Text className ='countTip'>{reportCount}</Text>
          </View>
          <View className='top-module'>
            <View className='top-module-title'>{title}</View>
            <View className='top-module-content'>{content}</View>
          </View>
          <View className='top-bottom'>
            <View>测评周期：{cycle}</View>
            <View>测评题目：{titleNum}</View>
          </View>
        </View>
        {/* 描述 */}
        <View className='middle' hidden={!visibled}>
          <View className='middle-title'>试题说明</View>
          <View className='middle-desc'>{desc}</View>
        </View>
        <View className='bottom' hidden={!visibled}>
          <Button onClick={this.startAssess.bind(this)} type='primary'>开始测评</Button>
        </View>

        {/* 测评进度 */}
        <View className='assess' hidden={visibled}>
          <View className='order'>
            <Text className='order-number'>{currentIndex+1}</Text><Text className='order-sum'>/{questions.length}</Text>
          </View>
          <View className='progress'>
            <View className='percent' style={{width: (currentIndex + 1)/questions.length * 100 + '%'}}></View>
          </View>
          <View className='subject' >
            {questions[currentIndex].evaluationQuestion}
          </View>
        </View>
        {/* 选项 */}
        <View className='picker' hidden={visibled}>
          {questions[currentIndex].answers.map((item)=>{
            return <View key={item} hidden={visibled} className='picker-item' hover-class="picker-item-hover" onClick={this.nextPicker.bind(this, item.answerScore)}>{item.answerDescription}</View>
          })}
        </View>
      </View>
    )
  }
}
export default Index;
