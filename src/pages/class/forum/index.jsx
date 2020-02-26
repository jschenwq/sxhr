import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import forum1 from '@images/class/forum1.png'
import forum2 from '@images/class/forum2.png'
import forum3 from '@images/class/forum3.png'
import forum4 from '@images/class/forum4.png'
import forum5 from '@images/class/forum5.png'
import forum6 from '@images/class/forum6.png'
import forum7 from '@images/class/forum7.png'
import forum8 from '@images/class/forum8.png'
import forum9 from '@images/class/forum9.png'
import forum10 from '@images/class/forum10.png'
import forum11 from '@images/class/forum11.png'
import forum12 from '@images/class/forum12.png'
class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        imageSrc: forum1,
        title:'省控线与批次线',
        duration: '0:11:54',
      },{
        imageSrc: forum2,
        title:'免费师范生',
        duration: '0:15:44',
      },{
        imageSrc: forum3,
        title:'服从专业调剂',
        duration: '0:07:44',
      },{
        imageSrc: forum4,
        title:'分数线和投档线',
        duration: '0:12:10',
      },{
        imageSrc: forum5,
        title:'分数清、专业清、专业级差区别',
        duration: '0:06:23',
      },{
        imageSrc: forum6,
        title:'专业级差',
        duration: '0:03:43',
      },{
        imageSrc: forum7,
        title:'专业清',
        duration: '0:11:32',
      },{
        imageSrc: forum8,
        title:'分数清',
        duration: '0:10:11',
      },{
        imageSrc: forum9,
        title:'大小年现象',
        duration: '0:13:20',
      },{
        imageSrc: forum10,
        title:'大类招生',
        duration: '0:14:19',
      },{
        imageSrc: forum11,
        title:'本科提前批此',
        duration: '0:13:11',
      },{
        imageSrc: forum12,
        title:'录取批次',
        duration: '0:12:34',
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
    Taro.navigateTo({
      url: '/packageKC/video/index?playTitle='+item.title+"&playDuration="+item.duration
    });
  }
  render () {
    let data = this.state;
    return (
      <View className='index'>
        {data.map((item)=>{
          return (
            <View className='item' onClick={this.openVideo.bind(this, item)}>
              <Image className='item-image' src={item.imageSrc} />
              <View className='item-content'>
                <View className='title'>{item.title}</View>
                <View className='date'>时长：{item.duration}</View>
              </View>
            </View>
          );
        })}
      </View>
    )
  }
}

export default Index
