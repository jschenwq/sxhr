import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { getMyCourseList } from '@utils/api'
import './index.scss'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){
  }

  componentWillUnmount () {}

  componentDidShow () {
    getMyCourseList({couresType : "1", currentPage: 0, pageSize: 40}).then(({data}) => {
      this.setState({
        data:data.list
      })
    })
  }

  componentDidHide () {}
  openVideo(item){
    Taro.navigateTo({
      url: "/packageKC/video/index?playTitle="+item.courseName+"&playDuration="+item.periodTotalTime+"&courseId="+item.id
    });
  }
  render () {
    let data = this.state;
    return (
      <View className='index'>
        {data.map((item)=>{
          return (
            <View className='item' onClick={this.openVideo.bind(this, item)}>
              <Image className='item-image' src={item.picPath} />
              <View className='item-content'>
                <View className='title'>{item.courseName}</View>
                <View className='date'>时长：{item.periodTotalTime}</View>
              </View>
            </View>
          );
        })}
      </View>
    )
  }
}

export default Index
