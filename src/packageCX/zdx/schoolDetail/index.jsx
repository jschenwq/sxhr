import Taro, { Component } from '@tarojs/taro'
import { View,Swiper, SwiperItem,RichText } from '@tarojs/components'
import { AtGrid , AtList, AtListItem,AtFloatLayout } from 'taro-ui'
import classNames from 'classnames'
import {login, getSchoolDetail,getSchoolIntr,getSchoolNewsList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
      detailNodes: '',
      school: null,
      majors: [],
      introduction: '',
      schoolNewsList: []
    };
  }

  componentDidMount(){
    let schoolId = this.$router.params.schoolId;
    getSchoolDetail(schoolId).then(({data})=>{
      Taro.setNavigationBarTitle({
        title: data.school.schoolName
      });
      this.setState({
        school: data.school,
        majors: data.majors,
        schoolNewsList: data.schoolNewsList
      });
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}
  handleShowDetail(){
    getSchoolIntr(this.state.school.schoolId).then(({data})=>{
      console.log(data);
      this.setState({
        isOpened: true,
        detailNodes: data.content
      });
    });
  }
  handleClose(){
    this.setState({
      isOpened: false
    });
  }
  handleExploit(){
    Taro.showToast({
      title: '功能开发中',
      icon: 'none',
      mask: true
    });
  }
  render () {
    let {school, majors,schoolNewsList,isOpened,detailNodes} = this.state;
    return (
      <View className='schoolDetail'>
        <View className='schoolTop'>
          {/*大学画报*/}
          <Image src={require('@images/home/banner.jpg')} className='schoolImg' />
          <Image src={school.logoPath} className='schoolLogo' />
          <Text className='schoolName'>{school.schoolName}</Text>
        </View>
        <View>
          <AtGrid style='padding:0px 20px' columnNum={3} mode='rect' hasBorder={false} data={
            [
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                value: '1912'
              },
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: '教育部'
              },
              {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: school?school.province:''
              },
              {
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                value: school?school.nature:''
              },
              {
                image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                value: school?school.eduLevel:''
              },
              {
                image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                value: school?school.type:''
              }
            ]
          } />
        </View>
        <View className='shortDes' onClick={this.handleShowDetail.bind(this)}>
          {school.content}
        </View>

        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular={false}
          displayMultipleItems={3}
          >
          <SwiperItem className='SwiperItem'>
            <View className='demo-text-1'>
              <Image src={require('@images/home/banner.jpg')} className='ImgSwiper' />
              <Text className='imgText'>测试文字6</Text>
            </View>
          </SwiperItem>
          <SwiperItem className='SwiperItem'>
            <View className='demo-text-2'>
              <Image src={require('@images/home/banner.jpg')} className='ImgSwiper' />
              <Text className='imgText'>测试文字1</Text>
            </View>
          </SwiperItem>
          <SwiperItem className='SwiperItem'>
            <View className='demo-text-3'>
              <Image src={require('@images/home/banner.jpg')} className='ImgSwiper' />
              <Text className='imgText'>测试文字5</Text>
            </View>
          </SwiperItem>
          <SwiperItem className='SwiperItem'>
            <View className='demo-text-3'>
              <Image src={require('@images/home/banner.jpg')} className='ImgSwiper' />
              <Text className='imgText'>测试文字4</Text>
            </View>
          </SwiperItem>
          <SwiperItem className='SwiperItem'>
            <View className='demo-text-3'>
              <Image src={require('@images/home/banner.jpg')} className='ImgSwiper' />
              <Text className='imgText'>测试文字3</Text>
            </View>
          </SwiperItem>
          <SwiperItem className='SwiperItem'>
            <View className='demo-text-3'>
              <Image src={require('@images/home/banner.jpg')} className='ImgSwiper' />
              <Text className='imgText'>测试文字2</Text>
            </View>
          </SwiperItem>
        </Swiper>

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

        <View className='counselor firstItem'>
          <View>
            <Text className="title">开设专业</Text>
            <Text className="more" onClick={this.handleExploit.bind(this)}>更多</Text>
          </View>
        </View>
        <View className = 'ItemAll'>
          <View className='fon1'>国家特色专业</View>
          <View className ='zyAll'>
            {
              majors.map((item)=>{
                return (<Text className="zyItem">{item.majorName}</Text>);
              })
            }
          </View>
        </View>
        <View className='bottomBtn'>
          <View className='btn leftBtn'>招生计划</View>
          <View className='btn rightBtn'>历年分数线</View>
        </View>
        <AtFloatLayout isOpened={isOpened} title="学校简介" onClose={this.handleClose.bind(this)}>
          <RichText nodes={detailNodes} />
        </AtFloatLayout>
      </View>
    )
  }
}

export default Index
