import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'
import course1 from '@images/class/course1.jpg'
import course2 from '@images/class/course2.jpg'
import course3 from '@images/class/course3.jpg'
import course4 from '@images/class/course4.jpg'
import course5 from '@images/class/course5.jpg'
import course6 from '@images/class/course6.jpg'
import course7 from '@images/class/course7.jpg'
import course8 from '@images/class/course8.jpg'
import course9 from '@images/class/course9.jpg'
import course10 from '@images/class/course10.jpg'
import course11 from '@images/class/course11.jpg'
import course12 from '@images/class/course12.jpg'
import course13 from '@images/class/course13.jpg'
import course14 from '@images/class/course14.jpg'
import course15 from '@images/class/course15.jpg'
import course16 from '@images/class/course16.jpg'
import course17 from '@images/class/course17.jpg'
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
      },{
        imageSrc: course10,
        title: '高二语文上学期预习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course11,
        title: '高一语文上学期同步课(统编版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      },{
        imageSrc: course12,
        title: '高一语文下学期期末复习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course13,
        title: '高二语文下学期期末复习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      },{
        imageSrc: course14,
        title: '2017年高考作文命题解读&应考指南',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course15,
        title: '高二语文上学期期中复习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 53,
        viewQuantity: 1241,
      },{
        imageSrc: course16,
        title: '高一语文上学期期中复习课(通用版)',
        content: '本节课程将学习阅读、写作及古诗词鉴赏。散文阅读是里面高考语文的必考文体。本课程选取小说体裁专项阅读指导',
        classHour: 63,
        viewQuantity: 3667,
      },{
        imageSrc: course17,
        title: '高三语文上学期期中复习课(通用版)',
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
