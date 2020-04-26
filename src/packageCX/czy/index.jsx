import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtList, AtListItem  } from 'taro-ui'
import classNames from 'classnames'
import {getAllZy} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '查专业'
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
      selector: ['普通本科', '专科（高职）'],
      level: '普通本科',
      secondMajorList:[],
    };
  }

  componentDidMount(){
    getAllZy({level:this.state.level}).then(({data}) => {
      console.log(data);
      this.setState({
        secondMajorList: data
      })
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  onChange = e => {
    this.setState({
      level: this.state.selector[e.detail.value]
    })

    //获取全部专业
    getAllZy({level:this.state.selector[e.detail.value]}).then(({data}) => {
      console.log(data);
      this.setState({
        secondMajorList: data
      })
    });
  }

  handleClick (value) {
    this.setState({
      current: value
    })

    if(value == 1){
      Taro.showToast({
        title: '开发中敬请期待...',
        icon: 'none',
        mask: true,
      });
    }
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

  //跳转职业详情
  gotoZyxq(){
    Taro.navigateTo({
      url: '/packageCX/czy/zyxq/index',
    })
  }

  //跳转专业分类
  gotoZyfl (type){
    Taro.navigateTo({
      url: '/packageCX/czy/zyfl/index?type=' + type,
    })
  }
  //查询专业
  searchZy(){
    Taro.navigateTo({
      url: '/component/search/index?type=2',
    })
  }

  render () {
    const tabList = [{ title: '全部专业' }, { title: '专业推荐' }];
    const {secondMajorList} = this.state;
    return (
      <View className ='czy'>
        <View className="search" onClick={this.searchZy.bind(this)}>
          <Icon className='searchIcon' color='#999' size='20' type='waiting' />
          <Text className='searchText'>请输入专业名称</Text>
        </View>
        <View className ='selectZy'>
          <Picker style = 'display:inline-block' mode='selector' range={this.state.selector} onChange={this.onChange}>
            <View className='picker'>
              {this.state.level}
            </View>
            <Text className='at-icon at-icon-chevron-down'></Text>
          </Picker>
        </View>

        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View className ='qbzy'>
              {
                secondMajorList.length>0 && secondMajorList.map((item,index) => {
                  return (
                    <View key={index}>
                      <View className={classNames('counselor',index!=0?'firstItem':'')}>
                        <View>
                          <Text className="title">{item.name}</Text>
                        </View>
                      </View>
                      <AtList>
                        {
                          item.child && item.child.length>0 && item.child.map((childItem,childIndex) => {
                            return(
                              <AtListItem key={childIndex} onClick={this.gotoZyfl.bind(this,childItem.type)} title={childItem.type} extraText={childItem.num + '个专业'} arrow='right' />
                            )
                          })
                        }
                      </AtList>
                    </View>
                  )
                })
              }
            </View>

          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1} >
            <View>敬请期待...</View>
            <View className ='qbzy'>
              <View className ='zyLogo'>
                <Image src='https://sxhr-school.oss-cn-beijing.aliyuncs.com/banner/banner1.jpg' className='zyLogoImg' />
                <Text onClick={this.gotoCP.bind(this)} className ='ljcp'>立即测评</Text>
              </View>

              <View className='counselor'>
                <View>
                  <Text className="title">报考热度</Text>
                  <Text onClick={this.bkrdGetMore.bind(this)} className="more">更多</Text>
                </View>
              </View>
              <AtList>
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
              </AtList>

              <View className='counselor firstItem'>
                <View>
                  <Text className="title">就业前景</Text>
                  <Text onClick={this.jyqjGetMore.bind(this)} className="more">更多</Text>
                </View>
              </View>
              <AtList>
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
              </AtList>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index
