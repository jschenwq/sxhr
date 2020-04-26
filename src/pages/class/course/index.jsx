import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Picker } from '@tarojs/components'
import './index.scss'
import { getMyCourseList, getCourseDictList } from '@utils/api'

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gradeSelectors:[],
      subjectSelectors:[],
      editionSelectors:[],
      courseTypeSelectors:[],
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
      const baseSelector = [{"name":"全部","id":"0"}];

      this.setState({
        searchData:data,
        gradeSelectors: baseSelector.concat(data.GRADE),
        subjectSelectors: baseSelector.concat(data.SUBJECT),
        editionSelectors: baseSelector.concat(data.EDITION),
        courseTypeSelectors: baseSelector.concat(data.COURSETYPE)
      })
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  searchCourse(searchData){
    getMyCourseList(searchData).then(({data}) => {
      this.setState({
        data:data.list
      })
    });
  }

  openVideo(item){
    Taro.navigateTo({
      url: "/packageKC/lecture/index?playTitle="+item.courseName+"&playDuration="+item.periodTotalLength+"&courseId="+item.id
    });
  }
  onGradeChange=(e)=>{
    let searchData = {couresType : "2"};
    let gradeId = this.state.gradeSelectors[e.detail.value].id;
    this.setState({
      gradeId: gradeId
    });

    if(this.state.editionId !== null && this.state.editionId !== "0"){
      searchData.editionId = this.state.editionId;
    }

    if(gradeId !== null && gradeId !== "0"){
      searchData.gradeId = gradeId;
    }

    if(this.state.subjectId !== null && this.state.subjectId !== "0"){
      searchData.subjectId = this.state.subjectId;
    }

    if(this.state.typeId !== null && this.state.typeId !== "0"){
      searchData.typeId = this.state.typeId;
    }
    this.searchCourse(searchData);
  }
  onSubjectChange=(e)=>{
    let searchData = {couresType : "2"};
    let subjectId = this.state.subjectSelectors[e.detail.value].id;
    this.setState({
      subjectId: subjectId
    });

    if(this.state.editionId !== null && this.state.editionId !== "0"){
      searchData.editionId = this.state.editionId;
    }

    if(this.state.gradeId !== null && this.state.gradeId !== "0"){
      searchData.gradeId = this.state.gradeId;
    }

    if(subjectId !== null && subjectId !== "0"){
      searchData.subjectId = subjectId;
    }

    if(this.state.typeId !== null && this.state.typeId !== "0"){
      searchData.typeId = this.state.typeId;
    }
    this.searchCourse(searchData);
  }
  onVersionChange=(e)=>{
    let searchData = {couresType : "2"};
    let editionId = this.state.editionSelectors[e.detail.value].id;
    this.setState({
      editionId: editionId
    });

    if(editionId !== null && editionId !== "0"){
      searchData.editionId = editionId;
    }

    if(this.state.gradeId !== null && this.state.gradeId !== "0"){
      searchData.gradeId = this.state.gradeId;
    }

    if(this.state.subjectId !== null && this.state.subjectId !== "0"){
      searchData.subjectId = this.state.subjectId;
    }

    if(this.state.typeId !== null && this.state.typeId !== "0"){
      searchData.typeId = this.state.typeId;
    }
    this.searchCourse(searchData);
  }
  onTypeChange=(e)=>{
    let searchData = {couresType : "2"};
    let typeId = this.state.courseTypeSelectors[e.detail.value].id;
    this.setState({
      typeId: typeId
    });

    if(this.state.editionId !== null && this.state.editionId !== "0"){
      searchData.editionId = this.state.editionId;
    }

    if(this.state.gradeId !== null && this.state.gradeId !== "0"){
      searchData.gradeId = this.state.gradeId;
    }

    if(this.state.subjectId !== null && this.state.subjectId !== "0"){
      searchData.subjectId = this.state.subjectId;
    }

    if(typeId !== null && typeId !== "0"){
      searchData.typeId = typeId;
    }
    this.searchCourse(searchData);
  }
  render () {
    let {gradeSelectors,subjectSelectors,editionSelectors,courseTypeSelectors,data} = this.state;
    return (
      <View className='index'>
        <View className='query'>
          <View className='attr'>
            <Picker mode='selector' range={gradeSelectors} rangeKey='name' onChange={this.onGradeChange}>
              <View className='picker'>
                年级<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='attr'>
            <Picker mode='selector' range={subjectSelectors} rangeKey='name' onChange={this.onSubjectChange}>
              <View className='picker'>
                学科<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='attr'>
            <Picker mode='selector' range={editionSelectors} rangeKey='name' onChange={this.onVersionChange}>
              <View className='picker'>
                版本<Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='attr'>
            <Picker mode='selector' range={courseTypeSelectors} rangeKey='name' onChange={this.onTypeChange}>
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
