import Taro, { Component } from '@tarojs/taro'
import { View, Video, CoverView } from '@tarojs/components'
import { AtAccordion,AtIcon } from 'taro-ui'
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
      currentArrIndex: 0,
      currentLiIndex: 0,
      data: [{
        title:'阅读和写作',
        open: false,
        list: [{
          title: '散文阅读之显性内容',
          duration: 1347
        },{
          title: '散文阅读之隐性内容',
          duration: 675
        },{
          title: '散文文意理解的核心能力',
          duration: 947
        },{
          title: '散文阅读之细微之处的字词',
          duration: 110
        },{
          title: '散文阅读之细微之处的句子',
          duration: 947
        },{
          title: '散文阅读之字词与句子的鉴赏',
          duration: 865
        },{
          title: '散文阅读之人物形象',
          duration: 527
        },{
          title: '怎样鉴赏人物形象',
          duration: 1292
        }]
      }]
    };
  }
  componentWillMount(){
    this.setState((prevState)=>({
      playTitle: this.$router.params.playTitle,
      playDuration: this.$router.params.playDuration,
    }));
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){

  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}
  handleClickAccordion(index){
    this.setState((prevState)=>{
      prevState.data[index].open = !prevState.data[index].open;
      return {
        data: prevState.data
      };
    });
  }
  handleClickLi(accIndex, liIndex){
    this.setState((prevState)=>({
      currentArrIndex: accIndex,
      currentLiIndex: liIndex,
      playTitle: prevState.data[accIndex].list[liIndex].title,
      playDuration: prevState.data[accIndex].list[liIndex].duration
    }));
  }
  play(){

  }
  render () {
    let {playTitle, playDuration,currentArrIndex,currentLiIndex,data} = this.state;
    return (
      <View className='index'>
        <View className='up'>
          <Video src='' className='up-video' controls={false}>
            <CoverView class='controls'>
              <CoverView class='play' onClick='play'>
                <View className='info'>高中三年全科同步课堂 特高级教师在线授课</View>
                <View className='info'>学习提分、填志愿，不求人</View>
                <View className='btn-group'>
                  <Button type='primary' size='mini'>开通升学卡</Button>
                  <Button plain className='yysxk-btn' size='mini'>已有升学卡</Button>
                </View>
              </CoverView>
            </CoverView>
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
            {data.map((item, index)=>{
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
                            <View>{li.duration}</View>
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
