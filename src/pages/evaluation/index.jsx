import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import { AtCurtain } from 'taro-ui'
import {getAllEvaluationCount, getUserReportCount} from '@utils/api'
import './index.scss'

import ksxlhxwcs from '../../packageCP/images/ksxlhxwcs.png'
import xxtycp from '../../packageCP/images/xxtycp.png'
import xxjdcp from '../../packageCP/images/xxjdcp.png'
import xxnlcp from '../../packageCP/images/xxnlcp.png'
import jtjyfscp from '../../packageCP/images/jtjyfscp.png'
import zwkznlcp from '../../packageCP/images/zwkznlcp.png'
import boyIcon from '../../packageCP/images/boy.png'
import girlIcon from '../../packageCP/images/girl.png'
import fatherIcon from '../../packageCP/images/father.png'
import motherIcon from '../../packageCP/images/mother.png'
import parentIcon from '../../packageCP/images/parent.png'
import studentIcon from '../../packageCP/images/student.png'

class Index extends Component {

  config = {
    navigationBarTitleText: '学业测评'
  }
  state = {
    isOpened: false,
    finishedSum: 8914594,
    dialogTitle: '请选择您的身份',
    leftIcon: 'studentIcon',
    leftText: '我是学生',
    rightIcon: 'parentIcon',
    rightText: '我是家长',
    allCount:{},//所有的测评参加人数
    reportCount:'',//用户测评报告数量
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount(){
    getAllEvaluationCount().then(({data})=>{
      this.setState({
        allCount:data.data
      })
    });
    getUserReportCount().then(({data})=>{
      this.setState({
        reportCount:data.data.reportCount
      })
    });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  clickModal=()=>{
    this.setState(()=>({
      isOpened: true
    }));
  }
  onClose(){
    this.setState(()=>({
      isOpened: false
    }));
  }
  leftIconClick=()=>{
    if(this.state.leftIcon=='studentIcon'){
      this.setState((prevState)=>({
        dialogTitle: '请选择您的性别',
        leftIcon: 'boyIcon',
        rightIcon: 'girlIcon',
        leftText: '我是男生',
        rightText: '我是女生',
      }));
    }else{
      this.initDialogParam();
    }
  }
  rightIconClick=()=>{
    if(this.state.rightIcon=='parentIcon'){
      this.setState((prevState)=>({
        dialogTitle: '请选择您的性别',
        rightIcon: 'motherIcon',
        rightText: '我是妈妈',
        leftIcon: 'fatherIcon',
        leftText: '我是爸爸',
      }));
    }else{
      this.initDialogParam();
    }
  }
  initDialogParam=()=>{
    this.setState((prevState)=>({
      dialogTitle: '请选择您的身份',
      leftIcon: 'studentIcon',
      leftText: '我是学生',
      rightIcon: 'parentIcon',
      rightText: '我是家长',
    }));
    this.onClose();
    Taro.navigateTo({
      url: '/packageCP/assess/index?title=专业定位测评'
    });
  }
  clickModuleItem=(index)=>()=>{
    console.log(index);
    if(index == 6){
      Taro.navigateTo({
        url: '/packageCP/assess/index?title=专业定位测评&type=' + index
      });
    }else{
      Taro.navigateTo({
        url: '/packageCP/sketch/index?index=' + index + "&reportCount=" + this.state.reportCount
      });
    }
  }
  gotoCpList(){
    Taro.navigateTo({
      url: '/packageCP/wdcplb/index?'
    });
  }
  render () {
    let iconList = {boyIcon, girlIcon, fatherIcon, motherIcon, parentIcon, studentIcon};
    return (
      <View className='index'>
        {/* 弹窗 */}
        <AtCurtain isOpened={this.state.isOpened} onClose={this.onClose.bind(this)}>
          <View className='dialog'>
            <View className='dialog-title'>{this.state.dialogTitle}</View>
            <View className='dialog-content'>
              <View>
                <Image style='width: 80rpx;height: 80rpx;' src={iconList[this.state.leftIcon]} onClick={this.leftIconClick} />
                <View>{this.state.leftText}</View>
              </View>
              <View>
                <Image style='width: 80rpx;height: 80rpx;' src={iconList[this.state.rightIcon]} onClick={this.rightIconClick} />
                <View>{this.state.rightText}</View>
              </View>
            </View>
          </View>
        </AtCurtain>
        <View className='cp-top'>
          <View onClick={this.gotoCpList.bind(this)} className='my-report'>
            我的报告<Text className ='countTip'>{reportCount}</Text>
          </View>
          <View>
            <View style="font-weight: bold;font-size: 40rpx;margin-bottom: 20rpx;">专业定位测评</View>
            <View style='font-size: 26rpx;color: #ffefe8;'>五大维度 15分钟推荐适合你的专业</View>
          </View>
          <View className='operate-group'>
            {/*<Button size='mini' onClick={this.clickModal} style='border-radius: 40rpx;color: #ff738d;font-weight: bold;margin: 0px;'>开始测评</Button>*/}
            <Button size='mini' onClick={this.clickModuleItem(6)} style='border-radius: 40rpx;color: #ff738d;font-weight: bold;margin: 0px;'>开始测评</Button>
             <Text>{this.state.finishedSum} 人已完成</Text>
          </View>
        </View>
        {/* 学习状态*/}
        <View className='cp-module'>
          <View className='module-title'>学习状态</View>
          <View className='module-items'>
            <View className='module-item' onClick={this.clickModuleItem(0)}>
              <View className='item-title'>考试心理和行为测试</View>
              <Text className='item-text'>考试总是发挥失常？</Text>
              <View className='item-content'>
                <Text>已有 {allCount.PSYCHOLOGY} 人参与</Text>
                <Image src={ksxlhxwcs} />
              </View>
            </View>
            <View className='module-item' onClick={this.clickModuleItem(1)}>
              <View className='item-title'>学习拖延测评</View>
              <Text className='item-text'>提到学习就焦虑害怕？</Text>
              <View className='item-content'>
                <Text>已有 {allCount.DELAY} 人参与</Text>
                <Image src={xxtycp} />
              </View>
            </View>
          </View>
          <View className='module-items'>
            <View className='module-item' onClick={this.clickModuleItem(2)}>
              <View className='item-title'>学习倦怠测评</View>
              <Text className='item-text'>提到学习就乏力？</Text>
              <View className='item-content'>
                <Text>已有 {allCount.LAZY} 人参与</Text>
                <Image src={xxjdcp} />
              </View>
            </View>
            <View className='module-item' onClick={this.clickModuleItem(3)}>
              <View className='item-title'>学习能力测评</View>
              <Text className='item-text'>成绩提升有方法</Text>
              <View className='item-content'>
                <Text>已有 {allCount.STUDY} 人参与</Text>
                <Image src={xxnlcp} />
              </View>
            </View>
          </View>
        </View>
        {/* 心理健康 */}
        <View className='cp-module'>
          <View className='module-title'>心理健康</View>
          <View className='module-items'>
            <View className='module-item' onClick={this.clickModuleItem(4)}>
              <View className='item-title'>家庭教育方式测评</View>
              <Text className='item-text'>青春的孩子应如何教育</Text>
              <View className='item-content'>
                <Text>已有 {allCount.FAMILY} 人参与</Text>
                <Image src={jtjyfscp} />
              </View>
            </View>
            <View className='module-item' onClick={this.clickModuleItem(5)}>
              <View className='item-title'>自我控制能力测评</View>
              <Text className='item-text'>测量对自己的行为控制能力</Text>
              <View className='item-content'>
                <Text>已有 {allCount.SELF} 人参与</Text>
                <Image src={zwkznlcp} />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
