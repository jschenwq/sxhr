import Taro, { Component } from '@tarojs/taro'
import {View, Swiper, SwiperItem, RichText, Text, Image} from '@tarojs/components'
import { AtGrid , AtList, AtListItem,AtFloatLayout } from 'taro-ui'
import { getSchoolDetail,getSchoolIntr,getSchoolImg} from '@utils/api'
import { MySwiper } from '../../../component/mySwiper/index'
import $ from '@utils/http'

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
      introductionPath: '',
      introduceTitle:'',
      introduction: '',
      schoolNewsList: [],
      banner:[]
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

    getSchoolImg({schoolId: schoolId,type:10}).then(({data})=>{
      this.setState({
        banner: data
      });
    });

  }

  handleShowDetail(){
    getSchoolIntr(this.state.school.schoolId).then(({data})=>{
      var path = data.contentPath;
      this.setState({
        introductionPath: data.contentPath,
      });
      this.handleGetSchoolIntr('学校介绍',path)
    });
  }

  handleGetSchoolIntr (title,path) {
    $.ajaxJson(path,'GET').then(({data})=>{
      this.setState({
        isOpened: true,
        introduceTitle:title,
        introduction: data
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
  gotoZsjh(){
    //招生计划
    Taro.navigateTo({
      url: '/packageCX/fsx/index?current=2&schoolId=' + this.$router.params.schoolId
    })
  }
  gotoLnfsx(){
    //历年分数线
    Taro.navigateTo({
      url: '/packageCX/fsx/index?current=0&schoolId=' + this.$router.params.schoolId
    })
  }
  render () {
    let {school, majors,schoolNewsList,isOpened,introduction,introduceTitle,banner} = this.state;
    // const { banner } = this.props;
    return (
      <View className='schoolDetail'>
        <View className='schoolTop'>
          {/*大学画报*/}
          <View >
            <MySwiper banner={banner} className='schoolImg'/>
          </View>
          <Image src={school.logoPath} className='schoolLogo' />
          <Text className='schoolName'>{school.schoolName}</Text>
        </View>

        <View>
          <AtGrid style='padding:0px 20px' columnNum={3} mode='rect' hasBorder={false} data={
            [
              {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: school?school.province:''
              },
              {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: school?school.city:''
              },
              {
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                value: school?school.nature:''
              }

            ]
          } />
          <View className='attrDetail'>
            {
              school.attribute && school.attribute.split(',').map((item1,index1) => {
                return(
                  <Text className ='attr' key={index1}>{item1}</Text>
                )
              })
            }
          </View>
        </View>
        <View className='shortDes'>
          {school.content}
          <Text onClick={this.handleShowDetail.bind(this)} className ='more'>更多</Text>
        </View>

        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular={true}
          displayMultipleItems={3}
          autoplay={true}
        >
          { banner.map((item, index) => (
            <SwiperItem className='SwiperItem'>
              <View className='demo-text-1'>
                <Image src={item} className='ImgSwiper' />
                <Text className='imgText'></Text>
              </View>
            </SwiperItem>
          ))}

        </Swiper>

        <View className='counselor firstItem'>
          <View>
            <Text className="title">招生简章</Text>
            {/*<Text className="more" onClick={this.handleExploit.bind(this)}>更多</Text>*/}
          </View>
        </View>
        <AtList>
          {
            schoolNewsList.map((item)=>{
              return <AtListItem title={item.title}  onClick={this.handleGetSchoolIntr.bind(this,item.title,item.contentPath)} arrow='right' />;
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
          <View onClick={this.gotoZsjh.bind(this)} className='btn leftBtn'>招生计划</View>
          <View onClick={this.gotoLnfsx.bind(this)} className='btn rightBtn'>历年分数线</View>
        </View>
        <AtFloatLayout isOpened={isOpened} title={introduceTitle} onClose={this.handleClose.bind(this) }>
          <RichText nodes={introduction} />
        </AtFloatLayout>
      </View>
    )
  }
}

export default Index
