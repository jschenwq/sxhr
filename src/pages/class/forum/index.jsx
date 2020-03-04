import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import forum1 from '../../../packageKC/images/forum1.png'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        imageSrc: forum1,
        title:'省控线与批次线',
        duration: '0:11:54',
      },{
        imageSrc: forum1,
        title:'免费师范生',
        duration: '0:15:44',
      },{
        imageSrc: forum1,
        title:'服从专业调剂',
        duration: '0:07:44',
      },{
        imageSrc: forum1,
        title:'分数线和投档线',
        duration: '0:12:10',
      },{
        imageSrc: forum1,
        title:'分数清、专业清、专业级差区别',
        duration: '0:06:23',
      },{
        imageSrc: forum1,
        title:'专业级差',
        duration: '0:03:43',
      },{
        imageSrc: forum1,
        title:'专业清',
        duration: '0:11:32',
      },{
        imageSrc: forum1,
        title:'分数清',
        duration: '0:10:11',
      },{
        imageSrc: forum1,
        title:'大小年现象',
        duration: '0:13:20',
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
