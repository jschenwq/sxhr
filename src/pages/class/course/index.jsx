import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Picker } from '@tarojs/components'
import './index.scss'
import course1 from '../../../packageKC/images/course1.jpg'

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grade: '年级',//年级
      gradeOptions: ['全部','高一','高二','高三'],
      subject: '学科',//学科
      subjectOptions: ['全部', '语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治'],
      version: '版本',//版本
      versionOptions: ['全部', '通用版'],
      type: '类型',//类型
      typeOptions: ['全部', '同步课程', '专题'],
      data: [{
        imageSrc: course1,
        title: '高一语文上学期同步课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course1,
        title: '高一语文下学期同步课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 57,
        viewQuantity: 2234,
      },{
        imageSrc: course1,
        title: '高二语文上学期同步课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 16,
        viewQuantity: 67,
      },{
        imageSrc: course1,
        title: '高三语文二轮复习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      },{
        imageSrc: course1,
        title: '高三语文三轮复习(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course1,
        title: '高二语文下学期同步课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      },{
        imageSrc: course1,
        title: '高三语文一轮复习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      },{
        imageSrc: course1,
        title: '高一语文上学期预习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course1,
        title: '初升语文衔接课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      }]
    };
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){

  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}
  openVideo(item){
    console.log(item);
    Taro.navigateTo({
      url: '/packageKC/lecture/index?playTitle='+item.title+"&playDuration="+item.classHour
    });
  }
  onGradeChange=(e)=>{
    this.setState((prevState)=>({
      grade: e.detail.value == '0'?'年级':prevState.gradeOptions[e.detail.value]
    }));
  }
  onSubjectChange=(e)=>{
    this.setState((prevState)=>({
      subject: e.detail.value == '0'?'学科':prevState.subjectOptions[e.detail.value]
    }));
  }
  onVersionChange=(e)=>{
    this.setState((prevState)=>({
      version: e.detail.value == '0'?'版本':prevState.versionOptions[e.detail.value]
    }));
  }
  onTypeChange=(e)=>{
    this.setState((prevState)=>({
      type: e.detail.value == '0'?'类型':prevState.typeOptions[e.detail.value]
    }));
  }
  render () {
    let {grade,gradeOptions,subject,subjectOptions,version,versionOptions,type,typeOptions,data} = this.state;
    return (
      <View className='index'>
        <View className='query'>
          <View className='attr'>
            <Picker mode='selector' range={gradeOptions} onChange={this.onGradeChange}>
              <View className='picker'>
                {grade}<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='attr'>
            <Picker mode='selector' range={subjectOptions} onChange={this.onSubjectChange}>
              <View className='picker'>
                {subject}<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='attr'>
            <Picker mode='selector' range={versionOptions} onChange={this.onVersionChange}>
              <View className='picker'>
                {version}<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='attr'>
            <Picker mode='selector' range={typeOptions} onChange={this.onTypeChange}>
              <View className='picker'>
                {type}<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
        </View>
        <View className='items'>
          {data.map((item)=>{
            return (
              <View className='item' onClick={this.openVideo.bind(this, item)}>
                <Image className='item-image' src={item.imageSrc} />
                <View className='item-content'>
                  <View className='title'>{item.title}</View>
                  <View className='content'>{item.content}</View>
                  <View className='class-number'>
                    <View>{item.classHour}课时</View>
                    <View>{item.viewQuantity}</View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    )
  }
}

export default Index
