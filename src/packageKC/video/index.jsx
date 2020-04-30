import Taro, { Component } from '@tarojs/taro'
import { View, Video } from '@tarojs/components'
import { getCourseDetail } from '@utils/api'
import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '讲堂'
  }
  constructor(props) {
    super(props);
    this.state = {
      playTitle: '',
      playDuration: '',
      courseId: '',
      courses: [],
      lessons: []
    };
  }
  componentWillMount(){
    this.setState((prevState)=>({
      playTitle: this.$router.params.playTitle,
      playDuration: this.$router.params.playDuration,
      courseId: this.$router.params.courseId
    }));
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){
    let _courseId = this.state.courseId;
    getCourseDetail(_courseId).then(({data}) => {
      this.setState({
        courses: data.courses,
        lessons: data.lessons
      })
    });
  }

  openVideo(item){
    Taro.navigateTo({
      url: "/packageKC/video/index?playTitle="+item.courseName+"&playDuration="+item.periodTotalTime+"&courseId="+item.id
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    let {playTitle, playDuration, courses, lessons} = this.state;
    return (
      <View className='index'>
        <View className='up'>
          <Video src={lessons[0].vodPath} className='up-video'></Video>
          <View className='video-info'>
            <View className='info-item'>
              <View className='info-title'>{playTitle}</View>
              <Button className='info-btn' size='mini'>可观看</Button>
            </View>
            <View className='info-duration'>时长：{playDuration}</View>
          </View>
        </View>
        <View className='down'>
          <View className='down-top'>
            <View className='down-top-left'>推荐视频</View>
            <View className='down-top-right'>全部课程</View>
          </View>
          <View className='down-items'>
            {courses.map((item)=>{
              return (
                <View className='down-item' onClick={this.openVideo.bind(this, item)}>
                  <Image className='item-image' src={item.picPath} />
                  <View className='item-content'>
                    <View className='title'>{item.courseName}</View>
                    <View className='date'>时长：{item.periodTotalTime}</View>
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}

export default Index
