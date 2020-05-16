import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import {getSchoolPlan} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '招生计划'
  }

  constructor(props) {
    super(props)
    this.state = {
      schoolId: 0,
      schoolNewsList: []
    };
  }

  componentDidMount(){

    getSchoolPlan({schoolId: this.$router.params.schoolId}).then(({data})=>{
      if(data.list.length>0){
        this.setState({
          schoolNewsList: data.list
        });
      }else{
        Taro.showToast({
          title: '未有满足条件的数据',
          icon: 'none',
          mask: true
        });
      }
    });
  }

  handleShowDetail(){

    getSchoolIntr(this.state.school.schoolId).then(({data})=>{
      var path = data.contentPath;
      this.setState({
        isOpened: true,
        introductionPath: data.contentPath,
      });
      this.handleGetSchoolIntr(path)
    });

  }

  render () {
    let {schoolNewsList} = this.state;
    return (
      <View>
        <View className='counselor firstItem'>
          <View>
            <Text className="title">招生简章</Text>
            <Text className="more" onClick={this.handleExploit.bind(this)}>更多</Text>
          </View>
        </View>
        <AtList>
          {
            schoolNewsList.map((item)=>{
              return <AtListItem title={item.title}  onClick={this.handleShowDetail.bind(this)} arrow='right' />;
            })
          }
        </AtList>
      </View>


    )
  }
}

export default Index
