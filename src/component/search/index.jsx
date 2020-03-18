import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtList, AtListItem ,AtMessage  } from 'taro-ui'
import classNames from 'classnames'
import {login,getSchoolList} from '@utils/api'

import './index.scss'

//公用组件(包含学校搜索，专业搜索，职业搜索...)
//传搜索类型，搜索接口，历史搜索数据，以及搜索完传父组件值等
class Index extends Component {
  config = {
    navigationBarTitleText: '搜索'
  }

  constructor(props) {
    super(props)
    this.state = {
      value:'',
      searchList:[],
      isShow:false,//是否显示搜索历史
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  onChange (value) {
    console.log(value);
    // this.setState({
    //   value: value
    // })
    // if(value.length == 0){
    //   this.setState({
    //     isShow:true
    //   })
    // }
  }
  onConfirm(e){//点击完成按钮时触发
    console.log(e);
    if(!e.detail.value){
      return;
    }
    let type = this.$router.params.type;
    this.setState({
      value: e.detail.value
    })
    if(type == 1){//大学
      getSchoolList({schoolName: e.detail.value, currentPage: 1, pageSize: 20}).then(({data})=>{
        this.setState({
          searchList: data.list
        });
      });
    }
  }
  //初始化拉去搜索历史，如果没有一个历史，则隐藏历史纪录，有一个则显示搜索历史并展示
  onActionClick(e){
    console.log(e);
    Taro.navigateBack({
      delta: 1 // 返回上一级页面。
    });
  }
  //清空搜索框内容
  clearText(){
    this.setState({
      value:'',
      // isShow:true
    })
  }
  //选择某个搜索历史
  getHistoryItem(data){
    this.setState({
      value:data,
      // isShow:false
    });
    let type = this.$router.params.type;
    //调查询接口
    if(type==1){//大学
      getSchoolList({schoolName: data, currentPage: 1, pageSize: 20}).then(({data})=>{
        this.setState({
          searchList: data.list
        });
      });
    }
  }
  //清空历史纪录
  clearHistory(){
    // Taro.atMessage({
    //   'message': '消息通知',
    //   'type': 'warning',
    // })
    console.log("触发");
    // this.setState({
    //   isShow: false
    // });
  }

  gotoAAA(data){
    let type = this.$router.params.type;
    if(type==1){//大学
      Taro.navigateTo({
        url: '/packageCX/zdx/schoolDetail/index?schoolId='+data,
      });
    }
  }

  render () {
    const {isShow,searchList} = this.state;
    const type = this.$router.params.type;
    let   placeholderText;
    if(type == 1) placeholderText = '请输入学校名称';
    if(type == 2) placeholderText = '请输入专业名称';
    if(type == 3) placeholderText = '请输入职业名称';
    return (
      <View className ='search'>
        <AtSearchBar
          showActionButton
          focus
          fixed
          placeholder={placeholderText}
          actionName={this.state.value.length>0?'搜索':'取消'}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onClear={this.clearText.bind(this)}
          onConfirm={this.onConfirm.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
        <View className ={classNames('searHistory',isShow?'active':'')}>
          <View className ='history' onClick={this.clearHistory.bind(this)}>
            <Text className ='historyText'>搜索历史</Text>
            <Text className='at-icon at-icon-chevron-down ljx'></Text>
          </View>
          <View>
            <Text onClick={this.getHistoryItem.bind(this,'北京大学')} className ='searhItem'>北京大学</Text>
            <Text onClick={this.getHistoryItem.bind(this,'清华大学')} className ='searhItem'>清华大学</Text>
            <Text onClick={this.getHistoryItem.bind(this,'伤心')} className ='searhItem'>伤心</Text>
          </View>
        </View>
        <View className = {classNames('searchContent',searchList.length==0?'':'active')}>
          <AtList>
            { type==1 &&
              searchList.map((item)=>{
                return (<AtListItem onClick={this.gotoAAA.bind(this, item.schoolId)} title={item.schoolName} thumb={item.logoPath} arrow='right' />);
              })
            }
          </AtList>
        </View>
      </View>
    )
  }
}

export default Index
