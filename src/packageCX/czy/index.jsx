import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtList, AtListItem  } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '查专业'
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
      selector: ['本科', '专科'],
      selectorChecked: '本科',
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  gotoCP(){
    Taro.switchTab({
      url: '/pages/evaluation/index',
    })
  }
  //报考热度更多
  bkrdGetMore(){
    Taro.navigateTo({
      url: '/packageCX/czy/bkrd/index',
    })
  }
  //就业前景更多
  jyqjGetMore(){
    Taro.navigateTo({
      url: '/packageCX/czy/jyqj/index',
    })
  }

  render () {
    const tabList = [{ title: '专业推荐' }, { title: '全部专业' }]
    return (
      <View className ='czy'>
        <View className="search">
          <Icon className='searchIcon' color='#999' size='20' type='waiting' />
          <Text className='searchText'>请输入专业名称</Text>
        </View>
        <View className ='selectZy'>
          <Picker style = 'display:inline-block;margin-left:10px' mode='selector' range={this.state.selector} onChange={this.onChange}>
            <View className='picker'>
              {this.state.selectorChecked}
            </View>
            <Icon className='home_icon' color='#999' size='18' type='waiting' />
          </Picker>
        </View>

        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className ='qbzy'>
              <View className ='zyLogo'>
                <Image src={require('@images/home/banner.jpg')} className='zyLogoImg' />
                <Text onClick={this.gotoCP.bind(this)} className ='ljcp'>立即测评</Text>
              </View>

              <View className='counselor'>
                <View>
                  <Text className="title">报考热度</Text>
                  <Text onClick={this.bkrdGetMore.bind(this)} className="more">更多</Text>
                </View>
              </View>
              <AtList>
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
              </AtList>

              <View className='counselor firstItem'>
                <View>
                  <Text className="title">就业前景</Text>
                  <Text onClick={this.jyqjGetMore.bind(this)} className="more">更多</Text>
                </View>
              </View>
              <AtList>
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
              </AtList>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className ='qbzy'>
              <View className='counselor'>
                <View>
                  <Text className="title">特色专业</Text>
                </View>
              </View>
              <AtList>
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
              </AtList>

              <View className='counselor firstItem'>
                <View>
                  <Text className="title">特色专业</Text>
                </View>
              </View>
              <AtList>
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
              </AtList>

              <View className='counselor firstItem'>
                <View>
                  <Text className="title">特色专业</Text>
                </View>
              </View>
              <AtList>
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
              </AtList>

              <View className='counselor firstItem'>
                <View>
                  <Text className="title">特色专业</Text>
                </View>
              </View>
              <AtList>
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
                <AtListItem title='标题文字' extraText='10个专业' arrow='right' />
              </AtList>
            </View>

          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index
