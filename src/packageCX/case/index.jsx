import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Icon, Switch,Picker  } from '@tarojs/components'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import { connect } from '@tarojs/redux'
import {getzxsList} from '@utils/api'
import pageInit from '@utils/pageInit';

import { add, minus, asyncAdd } from '@actions/counter'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '成功案例'
  }

  constructor(props) {
    super(props)
    this.state = {
      stars:4,
      zxsList:[]
    };
  }

  componentDidMount(){
    getzxsList({currentPage:1,pageSize:20}).then(({data}) => {
      this.setState({
        zxsList: data.list
      })
    });
  }

  //跳转咨询师详情
  gotozxsDetail(id){
    Taro.navigateTo({
      url: '/packageCX/zixunshi/zxsDetail/index?counselorId='+id,
    })
  }

  render () {

    return (
      <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://sxhr-school.oss-cn-beijing.aliyuncs.com/case/10000.json")}>
        <View className='at-col at-col-1 at-col--auto'>
          <Image class='ItemImg1' src='https://sxhr-school.oss-cn-beijing.aliyuncs.com/case/img/10000.jpg'/>
        </View>
        <View className='at-col exmpole'>
          <Text className='exmpoleTitle'>刘同学被211背景高校河海大学文天学院会计录取</Text>
          <Text className='exmpoleDetail'>第一轮指导BC志愿：成都工业学院，乐山师范学院，宜宾学院，内江师范学院，西昌学院，广西民族大学、广西民族师范学院，白色学 </Text>
        </View>
      </View>
    )
  }
}

export default Index
