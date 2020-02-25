import Taro, {Component} from '@tarojs/taro'
import { View, Text, Button} from '@tarojs/components'
import './index.scss'

class Index extends Component{
  state = {
    data: [{
      title: '考试心理和行为测评',
      cycle: '1次/2月',
      titleNum: 40,
      imageSrc: require('@images/evaluation/evaStart1.png'),
      content: '考试总是发挥失常，是考运不好还是心理问题，测测便知',
      desc: '考试焦虑症的出现一般是由于学习压力过大而引起，作为学生应该及时的调整好心态，正确的对待考试，放松心情，要知道紧张是不会给自己带来好的成绩的，要学会用平常心应对各种事情。如症状严重需及时进行治疗，以免造成不必要的麻烦。'
    },{
      title: '学业拖延测评',
      cycle: '1次/3月',
      titleNum: 35,
      imageSrc: require('@images/evaluation/evaStart2.png'),
      content: '提到学习就焦虑害怕，学习任务能拖则拖，测后就知道原因',
      desc: '国外从20世纪70年代末就已对学业拖延进行较为系统、深入的研究，研究发现：大学生中80%—95%有过学业拖延的行为，有近75%认为自己是一个爱拖拉的人；50%认为拖延给自己的生活带来负面影响。'
    },{
      title: '学习倦怠测评',
      cycle: '1次/3月',
      titleNum: 23,
      imageSrc: require('@images/evaluation/evaStart3.png'),
      content: '提到学习发力，焦虑，消沉，郁闷，测后便知原因',
      desc: '《中学生学习倦怠测评》共包括五个维度(共23个具体提项)：1.心理耗竭、躯体耗竭、对学习的冷漠、人际关系的疏离、低效能；2.心力耗竭：因为学习压力过大产生的一种情感资源耗尽缺乏活力的感觉；3.躯体耗竭：由于学业压力过大产生的生理资源耗尽的感觉；4.学习的冷漠：对学业产生冷漠态度；人际关系的疏离：对他人（同学、老师和家长）产生疏离、冷漠的态度；5.低效能：是指学生对自我学习效能的认知，认为自己缺乏承担正常学习任务的能力。'
    },{
      title: '学习能力测评',
      cycle: '1次/3月',
      titleNum: 160,
      imageSrc: require('@images/evaluation/evaStart4.png'),
      content: '成绩提升有办法，检测一下自己的学习方法是否得当',
      desc: '对于中学生学习成绩的影响因素研究很多，归纳起来，不外乎智力因素和非智力因素方面，先天的智力因素对学生学习成绩造成影响无法改变，而现阶段大多数学生成绩差的原因都是由非智力因素方面造成的，而中学阶段是学生非智力因素逐渐形成、稳定的一个关键时期因此，培养中学生良好的非智力因素，加强对中学生非智力因素的开发，改善中学生学习能力就变得非常重要。'
    },{
      title: '自我控制能力测评',
      cycle: '1次/3月',
      titleNum: 36,
      imageSrc: require('@images/evaluation/evaStart5.png'),
      content: '测量自己的行为，情绪和认知进行约束和管理的能力',
      desc: '本测评用于测量中学生在学习、娱乐、日常生活及社会活动等方面的自我控制能力。问卷共36个题项，由三个维度组成，分别是情绪自控、行为自控和思维自控。'
    },{
      title: '家庭教育方式测评',
      cycle: '1次/12月',
      titleNum: 66,
      imageSrc: require('@images/evaluation/evaStart6.png'),
      content: '家庭教育方式是否得当，青春的孩子应如何教育，测完便知',
      desc: '中学生是目前中国社会心理压力较大的社会群体之一，许多孩子有心理问题，由于就业形势严峻、升学压力大，青春期身心变化等原因，心理机能容 易失衡，他们亟待社会关注。许多研究结果表明，中学生心理健康水平与父母教养方式之间有密切的关系，父母教养方式是影响其心理健康的主要因素。本测评以此为基础，通过心理测量和统计分析，对高中生心理健康水平与父母教养方式的关系进行了深入的分析。'
    }]
  }
  componentWillMount(){
    Taro.setNavigationBarTitle({
      title: this.state.data[this.$router.params.index].title
    });
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  startAssess=()=>{
    Taro.navigateTo({
      url: '../assess/index?title='+this.state.data[this.$router.params.index].title
    });
  }
  render () {
    let {title, cycle, titleNum, imageSrc, content, desc} = this.state.data[this.$router.params.index];
    return (
      <View className='index'>
        <View className='top'>
          <Image src={imageSrc}/>
          <View className='my-report'>
            我的报告
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
        <View className='middle'>
          <View className='middle-title'>试题说明</View>
          <View className='middle-desc'>{desc}</View>
        </View>
        <View className='bottom'>
          <Button onClick={this.startAssess} type='primary'>开始测评</Button>
        </View>
      </View>
    )
  }
}
export default Index;
