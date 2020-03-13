import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtList, AtListItem ,AtMessage  } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

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
      isShow:true,//是否显示搜索历史
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  onChange (value) {
    this.setState({
      value: value
    })
    if(value.length == 0){
      this.setState({
        isShow:true
      })
    }
  }

  //初始化拉去搜索历史，如果没有一个历史，则隐藏历史纪录，有一个则显示搜索历史并展示
  onActionClick(){
    if(this.state.value.length>0){
      //查询接口
      this.setState({
        isShow:false
      })
    }else{
      Taro.navigateBack({
        delta: 1 // 返回上一级页面。
      });
    }
  }
  //清空搜索框内容
  clearText(){
    this.setState({
      value:'',
      isShow:true
    })
  }
  //选择某个搜索历史
  getHistoryItem(data){
    this.setState({
      value:data,
      isShow:false
    })
    //调查询接口
  }
  //清空历史纪录
  clearHistory(){
    Taro.atMessage({
      'message': '消息通知',
      'type': 'warning',
    })
  }

  gotoAAA(){

  }

  render () {
    const {isShow} = this.state;
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
          onActionClick={this.onActionClick.bind(this)}
        />
        <View className ={classNames('searHistory',isShow?'active':'')}>
          <View className ='history'>
            <Text className ='historyText'>搜索历史</Text>
            <Text onClick={this.clearHistory.bind(this)} className='at-icon at-icon-chevron-down ljx'></Text>
          </View>
          <View>
            <Text onClick={this.getHistoryItem.bind(this,'北京大学')} className ='searhItem'>北京大学</Text>
            <Text onClick={this.getHistoryItem.bind(this,'清华大学')} className ='searhItem'>清华大学</Text>
            <Text onClick={this.getHistoryItem.bind(this,'伤心')} className ='searhItem'>伤心</Text>
          </View>
        </View>
        <View className = {classNames('searchContent',isShow?'':'active')}>
          <AtList>
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字11' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字22' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字33' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
            <AtListItem onClick={this.gotoAAA.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
          </AtList>
        </View>
      </View>
    )
  }
}

export default Index
