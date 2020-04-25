import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Picker } from '@tarojs/components'
import './index.scss'
import { getMyCourseList, getCourseDictList } from '@utils/api'

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchData: {},
      editionId: null,
      gradeId: null,
      subjectId: null,
      typeId: null,
      data: []
    };
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){
    getMyCourseList({couresType : "2"}).then(({data}) => {
      this.setState({
        data:data.list
      })
    });
    getCourseDictList().then(({data}) => {
      console.log(data);
      this.setState({
        searchData:data
      })
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  openVideo(item){
    Taro.navigateTo({
      url: '/packageKC/lecture/index?playTitle='+item.title+"&playDuration="+item.classHour
    });
  }
  onGradeChange=(e)=>{
    console.log(this.state.searchData.GRADE[e.detail.value].id);
    this.setState((prevState)=>({
      grade: e.detail.value == '0'?'年级':prevState.searchData.GRADE[e.detail.value].id
    }));
  }
  onSubjectChange=(e)=>{
    this.setState((prevState)=>({
      subject: e.detail.value == '0'?'学科':prevState.searchData.SUBJECT[e.detail.value].id
    }));
  }
  onVersionChange=(e)=>{
    this.setState((prevState)=>({
      version: e.detail.value == '0'?'版本':prevState.searchData.EDITION[e.detail.value].id
    }));
  }
  onTypeChange=(e)=>{
    this.setState((prevState)=>({
      type: e.detail.value == '0'?'类型':prevState.searchData.COURSETYPE[e.detail.value].id
    }));
  }
  render () {
    let {searchData,data} = this.state;
    return (
      <View className='index'>
        <View className='query'>
          <View className='attr'>
            <Picker mode='selector' range={searchData.GRADE} rangeKey='name' onChange={this.onGradeChange}>
              <View className='picker'>
                年级<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='attr'>
            <Picker mode='selector' range={searchData.SUBJECT} rangeKey='name' onChange={this.onSubjectChange}>
              <View className='picker'>
                学科<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='attr'>
            <Picker mode='selector' range={searchData.EDITION} rangeKey='name' onChange={this.onVersionChange}>
              <View className='picker'>
                版本<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='attr'>
            <Picker mode='selector' range={searchData.COURSETYPE} rangeKey='name' onChange={this.onTypeChange}>
              <View className='picker'>
                类型<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
        </View>
        <View className='items'>
          {data.map((item)=>{
            return (
              <View className='item' onClick={this.openVideo.bind(this, item)}>
                <Image className='item-image' src={item.picPath} />
                <View className='item-content'>
                  <View className='title'>{item.courseName}</View>
                  <View className='content'>{item.content}</View>
                  <View className='class-number'>
                    <View>{item.periodNumber}课时</View>
                    <View>{item.periodTotalLength}</View>
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
