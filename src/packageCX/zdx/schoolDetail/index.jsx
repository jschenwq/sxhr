import Taro, { Component } from '@tarojs/taro'
import { View,Swiper, SwiperItem } from '@tarojs/components'
import { AtGrid , AtList, AtListItem   } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '清华大学'
  }

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return (
      <View className='schoolDetail'>
        <View className='schoolTop'>
          {/*大学画报*/}
          <Image src={require('@images/home/banner.jpg')} className='schoolImg' />
          <Image src={require('@packageCP/images/boy.png')} className='schoolLogo' />
          <Text className='schoolName'>清华大学</Text>
        </View>
        <View className='schoolAttr'>
          <Text className='Item'>985</Text>
          <Text className='Item'>211</Text>
        </View>
        <View>
          <AtGrid style='padding:0px 20px' columnNum={4} mode='rect' hasBorder={false} data={
            [
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                value: '1912'
              },
              {
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                value: '公立'
              },
              {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: '北京'
              },
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: '教育部'
              },
              {
                image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                value: '本科'
              },
              {
                image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                value: '医药'
              }
            ]
          } />
        </View>
        <View className='shortDes'>
          这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字这事一段测试文字
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
            <Text className="more">更多</Text>
          </View>
        </View>
        <AtList>
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
        </AtList>

        <View className='counselor firstItem'>
          <View>
            <Text className="title">特色专业</Text>
            <Text className="more">更多</Text>
          </View>
        </View>
        <View className = 'ItemAll'>
          <View className='fon1'>国家特色专业</View>
          <View className ='zyAll'>
            <Text className="zyItem">地质学</Text>
            <Text className="zyItem">地质学阿萨大</Text>
            <Text className="zyItem">地质学达萨达 大师</Text>
            <Text className="zyItem">地质学阿三打撒</Text>
            <Text className="zyItem">地质学啊</Text>
            <Text className="zyItem">地质学222</Text>
            <Text className="zyItem">地质学阿三打撒萨达</Text>
            <Text className="zyItem">地质打撒萨达</Text>
            <Text className="zyItem">地质学打撒萨达</Text>
            <Text className="zyItem">地质学阿三打撒萨达</Text>
          </View>
        </View>

        <View className='counselor firstItem'>
          <View>
            <Text className="title">院系/专业</Text>
            <Text className="more">更多</Text>
          </View>
        </View>
        <AtList>
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' arrow='right' />
        </AtList>

        <View className='bottomBtn'>
          <View className='btn leftBtn'>招生计划</View>
          <View className='btn rightBtn'>历年分数线</View>
        </View>
      </View>
    )
  }
}

export default Index
