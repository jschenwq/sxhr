import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtAccordion, AtList, AtListItem} from 'taro-ui'
import classNames from 'classnames'
import $ from '@utils/http'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '职业介绍'
  }

  constructor(props) {
    super(props)
    this.state = {
      detailNodes: ''
    };
  }

  componentDidMount() {
    let introducePath = Taro.getStorageSync('introducePath');
    $.ajax(introducePath,'GET').then(({data})=>{
      this.setState({
        detailNodes: data
      });
    });
    // let storeState = Taro.$store.getState();
    // Taro.request({
    //   isShowLoading: true,
    //   loadingText: '正在加载',
    //   url: introducePath,
    //   method: "GET",//taro规定必须大写
    //   header: {
    //     'content-type': 'application/json',
    //     'Authorization': storeState.counter.authorize?storeState.counter.authorize:'Bearer'
    //   }
    // }).then(({data})=>{
    //   console.log(data);
    // });
    // getOccupationList({type: type}).then(({data})=>{
    //   this.setState({
    //     arryList: data
    //   });
    // });
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }
  gotoDetail(index){
    Taro.navigateTo({
      url: '/packageCX/kzy/zyxq/index',
    })
  }
  gotoZyjs(introducePath){
    Taro.navigateTo({
      url: '/packageCX/kzy/zyjs/index?introducePath='+introducePath,
    })
  }
  render() {
    let {detailNodes} = this.state;
    return (
      <View className='kzy'>
        <RichText nodes={detailNodes} />
      </View>
    )
  }
}

export default Index
