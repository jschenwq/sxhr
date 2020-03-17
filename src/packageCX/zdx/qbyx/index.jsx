import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SchoolItem from '../component/schoolItem/index'
import { AtDrawer, AtButton    } from 'taro-ui'
import classNames from 'classnames'
import {login, getSchoolList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '全部院校'
  }

  constructor(props) {
    super(props)
    this.state = {
      show:false,
      schoolData: []
    };
  }

  componentDidMount(){
    getSchoolList({currentPage: 0,pageSize: 20}).then(({data})=>{
      this.setState((prevState)=>({
        schoolData: data.list
      }));
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  //搜索大学
  searchSchool(type){
    Taro.navigateTo({
      url: '/component/search/index?type=1',
    })
  }

  //过滤大学
  filterSchool(){
    this.setState({
      show:true
    })
  }

  //关闭抽屉回调
  onClose(){

  }

  render () {
    let {schoolData} = this.state;
    return (
      <View className ='qbyx'>
        <View className ='schoolCx'>
          <View onClick={this.filterSchool.bind(this)} className ='searchIcon'><View className='at-icon at-icon-chevron-down font1'></View>筛选</View>
          <View onClick={this.searchSchool.bind(this)} className='at-icon at-icon-chevron-down searchIcon font1'></View>
          <AtDrawer
            width='295px'
            show={this.state.show}
            right
            mask
            onClose={this.onClose.bind(this)}
          >
            <View className='selectContent'>
              <View className='item'>
                <View className='itemTitle'>热门标签</View>
                <View className='at-row'>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>双一流</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>985</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>211</AtButton>
                  </View>
                </View>
              </View>

              <View className='item'>
                <View className='itemTitle'>类型</View>
                <View className='at-row'>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>不限</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>综合</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>理工</AtButton>
                  </View>
                </View>
              </View>

              <View className='item'>
                <View className='itemTitle'>类型</View>
                <View className='at-row'>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>不限</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>综合</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>理工</AtButton>
                  </View>
                </View>
              </View>

              <View className='item'>
                <View className='itemTitle'>类型</View>
                <View className='at-row'>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>不限</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>综合</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>理工</AtButton>
                  </View>
                </View>
              </View>

              <View className='item'>
                <View className='itemTitle'>类型</View>
                <View className='at-row'>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>不限</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>综合</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>理工</AtButton>
                  </View>
                </View>
              </View>

              <View className='item'>
                <View className='itemTitle'>类型</View>
                <View className='at-row'>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>不限</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>综合</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>理工</AtButton>
                  </View>
                </View>
              </View>
            </View>

            <View className='bottomBtn'>
              <View className='btn leftBtn'>确定</View>
              <View className='btn rightBtn'>重置</View>
            </View>
          </AtDrawer>
        </View>
        <View className ='schoolN'>
          {
            schoolData.map((item)=>{
              return (<SchoolItem item={item}/>);
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
