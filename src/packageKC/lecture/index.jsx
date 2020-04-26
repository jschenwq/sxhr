import Taro, { Component } from '@tarojs/taro'
import { View, Video, CoverView } from '@tarojs/components'
import { AtAccordion,AtIcon } from 'taro-ui'
import { getCourseDetail } from '@utils/api'
import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '课程'
  }
  constructor(props) {
    super(props);
    this.state = {
      playTitle: '',
      playDuration: '',
      courseId: '',
      currentArrIndex: 0,
      currentLiIndex: 0,
      lessons: [{
        title:'阅读和写作',
        open: false,
        list: []
      }],
      selectedLesson: ''
    };
  }
  componentWillMount(){
    console.log(this.$router.params);
    this.setState((prevState)=>({
      playTitle: this.$router.params.playTitle,
      courseId: this.$router.params.courseId
    }));
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){
    let _courseId = this.state.courseId;
    let _playTitle = this.state.playTitle;
    getCourseDetail(_courseId).then(({data}) => {
      let _lessonsItem = {};
      _lessonsItem.list = data.lessons;
      _lessonsItem.title = _playTitle;
      _lessonsItem.open = false;
      let _lessons = [];
      _lessons.push(_lessonsItem);

      this.setState({
        lessons: _lessons,
        selectedLesson: data.lessons[0].vodPath,
        playTitle: data.lessons[0].title,
        playDuration: data.lessons[0].periodLength
      })
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}
  handleClickAccordion(index){
    this.setState((prevState)=>{
      prevState.lessons[index].open = !prevState.lessons[index].open;
      return {
        lessons: prevState.lessons
      };
    });
  }
  handleClickLi(accIndex, liIndex){
    this.setState((prevState)=>({
      currentArrIndex: accIndex,
      currentLiIndex: liIndex,
      playTitle: prevState.lessons[accIndex].list[liIndex].title,
      playDuration: prevState.lessons[accIndex].list[liIndex].periodLength,
      selectedLesson: prevState.lessons[accIndex].list[liIndex].vodPath
    }));
  }
  play(){

  }
  render () {
    let {playTitle, playDuration,lessons,selectedLesson,currentArrIndex,currentLiIndex} = this.state;
    return (
      <View className='index'>
        <View className='up'>
          <Video src={selectedLesson} className='up-video' controls={false}>
            {/*<CoverView class='controls'>
              <CoverView class='play' onClick='play'>
                <View className='info'>高中三年全科同步课堂 特高级教师在线授课</View>
                <View className='info'>学习提分、填志愿，不求人</View>
                <View className='btn-group'>
                  <Button type='primary' size='mini'>开通升学卡</Button>
                  <Button plain className='yysxk-btn' size='mini'>已有升学卡</Button>
                </View>
              </CoverView>
            </CoverView>*/}
          </Video>
          <View className='video-info'>
            <View className='info-title'>{playTitle}</View>
            <View className='info-duration'>时长：{playDuration}</View>
          </View>
        </View>
        <View className='down'>
          <View className='down-top'>
            课程列表
          </View>
          <View className='down-items'>
            {lessons.map((item, index)=>{
              return (
                <AtAccordion title={item.title} open={item.open} onClick={this.handleClickAccordion.bind(this, index)}>
                  <View className='list'>
                    {
                      item.list.map((li, indx)=>{
                        return (
                          <View className={'li '+(currentArrIndex==index && currentLiIndex==indx?'selected':'')} onClick={this.handleClickLi.bind(this, index, indx)}>
                            <View>
                              {currentArrIndex==index && currentLiIndex==indx &&
                              <AtIcon value='play' size='15' color='#F00'></AtIcon>
                              }
                              {li.title}
                            </View>
                            <View>{li.periodLength}</View>
                          </View>
                        );
                      })
                    }
                  </View>
                </AtAccordion>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}

export default Index
