import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtList, AtListItem ,  } from 'taro-ui'
import classNames from 'classnames'
import {getSchoolList} from '@utils/api'

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
      schoolList:[],
      isShow:false,//是否显示搜索历史
    };
  }

  onChange (value) {
    this.setState({
      value: value
    });
  }
  onConfirm(e){//点击完成按钮时触发
    let type = this.$router.params.type;
    this.setState({
      value: e.detail.value
    })
    if(type == "school"){//大学
      this.searchSchool(e.detail.value);
    }

    if(type == 2){//专业
      this.searchZhuanye(e.detail.value);
    }

  }
  searchSchool(schoolName){

    getSchoolList({schoolName: schoolName, currentPage: 1, pageSize: 20}).then(({data})=>{
      if(data.list.length>0){
        this.setState({
          schoolList: data.list
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
  //初始化拉去搜索历史，如果没有一个历史，则隐藏历史纪录，有一个则显示搜索历史并展示
  onActionClick(e){

    if(this.state.value.length>0){
      let type = this.$router.params.type;
      if(type=="school"){//大学
        this.searchSchool(this.state.value);
      }

      if(type==2){//专业
        this.searchZhuanye(this.state.value);
      }

    }else{
      Taro.navigateBack({
        delta: 1 // 返回上一级页面。
      });
    }
  }
  //清空搜索框内容
  clearText(){
    let type = this.$router.params.type;
    if(type=="school"){//大学
      this.searchSchool(this.state.value);
    }

    if(type==2){//专业
      this.searchZhuanye(this.state.value);
    }

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
    if(type=="school"){//大学
      this.searchSchool(data);
    }

    if(type==2){//专业
      this.searchZhuanye(data);
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

  goto(path){
    console.log(path)
    Taro.navigateTo({
      url: path
    });
  }

  render () {
    const {isShow,schoolList} = this.state;
    const type = this.$router.params.type;
    const type2 = this.$router.params.type2;
    let   placeholderText;
    if(type == "school") placeholderText = '请输入学校名称';
    if(type == 2) placeholderText = '请输入专业名称';
    return (
      <View className='search'>
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
        <View className={classNames('searHistory',isShow?'active':'')}>
          <View className='history' onClick={this.clearHistory.bind(this)}>
            <Text className='historyText'>搜索历史</Text>
            <Text className='at-icon at-icon-chevron-down ljx'></Text>
          </View>
          <View>
            <Text onClick={this.getHistoryItem.bind(this,'北京大学')} className='searhItem'>北京大学</Text>
            <Text onClick={this.getHistoryItem.bind(this,'清华大学')} className='searhItem'>清华大学</Text>
            <Text onClick={this.getHistoryItem.bind(this,'伤心')} className='searhItem'>伤心</Text>
          </View>
        </View>
        <View className={classNames('searchContent',schoolList.length==0?'':'active')}>
          <AtList>
            { type=="school" && type2=="score" &&
            schoolList.map((item,index)=>{
              return (<AtListItem key={index} onClick={this.goto.bind(this,'/packageCX/fsx/index?current=0&schoolId='+item.schoolId)} title={item.schoolName} thumb={item.logoPath} arrow='right' />);
            })}
          </AtList>
          <AtList>
            { type=="school" && type2=="plan" &&
            schoolList.map((item,index)=>{
              return (<AtListItem key={index} onClick={this.goto.bind(this,'/packageCX/fsx/index?current=2&schoolId='+item.schoolId)} title={item.schoolName} thumb={item.logoPath} arrow='right' />);
            })}
          </AtList>

        </View>

      </View>
    )
  }
}

export default Index
