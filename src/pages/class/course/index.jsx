import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'
import course1 from '../../../packageKC/images/course1.jpg'
import course2 from '../../../packageKC/images/course2.jpg'
import course3 from '../../../packageKC/images/course3.jpg'
import course4 from '../../../packageKC/images/course4.jpg'
import course5 from '../../../packageKC/images/course5.jpg'
import course6 from '../../../packageKC/images/course6.jpg'
import course7 from '../../../packageKC/images/course7.jpg'
import course8 from '../../../packageKC/images/course8.jpg'
import course9 from '../../../packageKC/images/course9.jpg'
class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grade: '年级',//年级
      subject: '学科',//学科
      version: '版本',//版本
      type: '类型',//类型
      data: [{
        imageSrc: course1,
        title: '高一语文上学期同步课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course2,
        title: '高一语文下学期同步课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 57,
        viewQuantity: 2234,
      },{
        imageSrc: course3,
        title: '高二语文上学期同步课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 16,
        viewQuantity: 67,
      },{
        imageSrc: course4,
        title: '高三语文二轮复习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      },{
        imageSrc: course5,
        title: '高三语文三轮复习(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course6,
        title: '高二语文下学期同步课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      },{
        imageSrc: course7,
        title: '高三语文一轮复习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      },{
        imageSrc: course8,
        title: '高一语文上学期预习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course9,
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
  }
  render () {
    let {grade, subject, version, type, data} = this.state;
    return (
      <View className='index'>
        <View className='query'>
          <View className='attr'>{grade}<Text className='at-icon at-icon-chevron-down'></Text></View>
          <View className='attr'>{subject}<Text className='at-icon at-icon-chevron-down'></Text></View>
          <View className='attr'>{version}<Text className='at-icon at-icon-chevron-down'></Text></View>
          <View className='attr'>{type}<Text className='at-icon at-icon-chevron-down'></Text></View>
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
