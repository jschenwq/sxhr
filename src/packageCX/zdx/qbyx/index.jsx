import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SchoolItem from '../component/schoolItem/index'
import { AtDrawer, AtButton    } from 'taro-ui'
import classNames from 'classnames'
import {getSchoolList,getAllList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '全部院校'
  }

  constructor(props) {
    super(props)
    this.state = {
      show:false,
      schoolData: [],
      schoolLevel:[],
      typeList:[],
      stuType:[],
      schoolType:[],
      province:[],
    };
  }

  componentDidMount(){
    getSchoolList({currentPage: 0,pageSize: 20}).then(({data})=>{
      this.setState((prevState)=>({
        schoolData: data.list,
      }));
    });
    //获取大学所有的枚举
    getAllList().then(({data}) => {
      this.setState((prevState)=>({
        schoolLevel: data.schoolLevel,
        typeList: data.type,
        stuType: data.stuType,
        schoolType: data.schoolType,
        province: data.province,
      }));
    })
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
    let {schoolData, schoolLevel, typeList, stuType, schoolType, province} = this.state;
    return (
      <View className ='qbyx'>
        <View className ='schoolCx'>
          {/*<View onClick={this.filterSchool.bind(this)} className ='searchIcon'><View className='at-icon at-icon-chevron-down font1'></View>筛选</View>*/}
          {/*<View onClick={this.searchSchool.bind(this)} className='at-icon at-icon-chevron-down searchIcon font1'></View>*/}
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
                <View className='at-row brItem'>
                  {/*{*/}
                    {/*schoolLevel && schoolLevel.length>0 && schoolLevel.map((item,index) => {*/}
                      {/*return(*/}
                        {/*<View className='at-col' key={index}>*/}
                          {/*<AtButton type='primary' size='small'>{item}</AtButton>*/}
                        {/*</View>*/}
                      {/*)*/}
                    {/*})*/}
                  {/*}*/}

                  <View className='at-col'>
                    <AtButton type='primary' size='small'>本科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>专科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>高职</AtButton>
                  </View>
                </View>
              </View>

              <View className='item'>
                <View className='itemTitle'>类型</View>
                <View className='at-row'>
                  {/*{*/}
                    {/*typeList && typeList.length>0 && typeList.map((item,index) => {*/}
                      {/*return(*/}
                        {/*<View className='at-col' key={index}>*/}
                          {/*<AtButton type='primary' size='small'>{item}</AtButton>*/}
                        {/*</View>*/}
                      {/*)*/}
                    {/*})*/}
                  {/*}*/}

                  <View className='at-col'>
                    <AtButton type='primary' size='small'>本科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>专科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>高职</AtButton>
                  </View>
                </View>
              </View>

              <View className='item'>
                <View className='itemTitle'>层次</View>
                <View className='at-row'>
                  {/*{*/}
                    {/*stuType && stuType.length>0 && stuType.map((item,index) => {*/}
                      {/*return(*/}
                        {/*<View className='at-col' key={index}>*/}
                          {/*<AtButton type='primary' size='small'>{item}</AtButton>*/}
                        {/*</View>*/}
                      {/*)*/}
                    {/*})*/}
                  {/*}*/}

                  <View className='at-col'>
                    <AtButton type='primary' size='small'>本科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>专科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>高职</AtButton>
                  </View>
                </View>
              </View>

              <View className='item'>
                <View className='itemTitle'>性质</View>
                <View className='at-row'>
                  {/*{*/}
                    {/*schoolType && schoolType.length>0 && schoolType.map((item,index) => {*/}
                      {/*return(*/}
                        {/*<View className='at-col' key={index}>*/}
                          {/*<AtButton type='primary' size='small'>{item}</AtButton>*/}
                        {/*</View>*/}
                      {/*)*/}
                    {/*})*/}
                  {/*}*/}

                  <View className='at-col'>
                    <AtButton type='primary' size='small'>本科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>专科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>高职</AtButton>
                  </View>
                </View>
              </View>

              <View className='item'>
                <View className='itemTitle'>类型</View>
                <View className='at-row'>
                  {/*{*/}
                    {/*province && province.length>0 && province.map((item,index) => {*/}
                      {/*return(*/}
                        {/*<View className='at-col' key={index}>*/}
                          {/*<AtButton type='primary' size='small'>{item}</AtButton>*/}
                        {/*</View>*/}
                      {/*)*/}
                    {/*})*/}
                  {/*}*/}

                  <View className='at-col'>
                    <AtButton type='primary' size='small'>本科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>专科</AtButton>
                  </View>
                  <View className='at-col'>
                    <AtButton type='primary' size='small'>高职</AtButton>
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
