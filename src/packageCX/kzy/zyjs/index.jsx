import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtAccordion, AtList, AtListItem} from 'taro-ui'
import jquery from 'jquery'
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

    // jquery.ajax({
    //   type: "GET",
    //   url: "https://oss.srwmedu.cn/jsonFile/occupation/introduce/10000.json?Expires=1588671785&OSSAccessKeyId=LTAI4FdEikoP1PrsRk6bSbko&Signature=QW%2BkElZOpf7rXcivSNXMrqbrgjY%3D",
    //   // dataType: "json",
    //   success: function(data){
    //     debugger;
    //   }
    // });


    // $.ajax('https://wx.srwmedu.cn/10324.json','GET').then(({data})=>{
    $.ajax(introducePath,'GET').then(({data})=>{
      this.setState({
        detailNodes: data
      });
    });

    // let storeState = Taro.$store.getState();
    // Taro.request({
    //   url: introducePath,
    //   method: "GET",//taro规定必须大写
    //   header: {
    //     'content-type': 'application/xml',
    //   }
    // }).then(({data})=>{
    //
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
