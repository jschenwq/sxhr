import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane,  AtList, AtListItem } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '专业动态获取'
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const tabList = [{ title: '专业概况' }, { title: '就业前景' }, , { title: '开设院校' }]
    return (
      <View className ='zyxq'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className ='qbzy'>
              <View className ='zygl'>
                <View className ='zyglN'>
                  <View className='font1'>专业概览</View>
                  <View className ='font2'><Text>工学</Text>><Text>电气类</Text></View>

                  <View className='at-row at-row__justify--around itemH'>

                    <View className='at-col at-col-5'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-5'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-7'>
                          <View className ='font3'>本科</View>
                          <View className ='font4'>学历测试</View>
                        </View>
                      </View>
                    </View>

                    <View className='at-col at-col-1'></View>

                    <View className='at-col at-col-5'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-5'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-7'>
                          <View className ='font3'>四年</View>
                          <View className ='font4'>学历测试</View>
                        </View>
                      </View>
                    </View>

                  </View>


                  <View className='at-row at-row__justify--around itemH'>

                    <View className='at-col at-col-5'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-5'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-7'>
                          <View className ='font3'>本科</View>
                          <View className ='font4'>学历测试</View>
                        </View>
                      </View>
                    </View>

                    <View className='at-col at-col-1'></View>

                    <View className='at-col at-col-5'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-5'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-7'>
                          <View className ='font3'>四年</View>
                          <View className ='font4'>学历测试</View>
                        </View>
                      </View>
                    </View>

                  </View>

                  <View className='at-row at-row__justify--around itemH'>

                    <View className='at-col at-col-5'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-5'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-7'>
                          <View className ='font3'>本科</View>
                          <View className ='font4'>学历测试</View>
                        </View>
                      </View>
                    </View>

                    <View className='at-col at-col-1'></View>

                    <View className='at-col at-col-5'>

                    </View>

                  </View>
                </View>
              </View>

              <View className='zyjs'>
                <View className='font1'>专业介绍<Text className= 'font2 font5'>(培养目标、培养要求、学科要求)</Text></View>
                <View className='font6'>这事一段测试文字这事一段测试文字这事一段测试文字段测试文字这事一段测测试文字这事一段测试文事一段测试文字这事一段测试文字</View>
              </View>
              <View className ='moreLook'>查看更多  ></View>

              <View className='zyjs jyfs'>
                <View className='font1'>考研方向</View>
                <View className='font6'>这事一段测试文字这事一段测试文字这事一段测试文字段测试文字这事一段测测试文字这事一段测试文事一段测试文字这事一段测试文字</View>
              </View>

              <View className='zyjs jyfs'>
                <View className='font1'>主题课程</View>
                <View className='font6'>这事一段测试文字这事一段测试文字这事一段测试文字段测试文字这事一段测测试文字这事一段测试文事一段测试文字这事一段测试文字</View>
              </View>

              <View className='zyjs jyfs'>
                <View className='font1'>就业方向</View>
                <View className='font6'>这事一段测试文字这事一段测试文字这事一段测试文字段一段测试文字这事一段测试文字段一段测试文字这事一段测试文字段一段测试文字这事一段测试文字段测试文字这事一段测测试文字这事一段测试文事一段测试文字这事一段测试文字</View>
              </View>

              <View className='itemList'>
                <AtList>
                  <AtListItem
                    title='主要研究方向'
                    extraText='详细信息'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                  />
                </AtList>
              </View>

              <View className='itemList'>
                <AtList>
                  <AtListItem
                    title='主要研究方向'
                    extraText='详细信息'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                  />
                </AtList>
              </View>

              <View className='itemList'>
                <AtList>
                  <AtListItem
                    title='主要研究方向'
                    extraText='详细信息'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                  />
                </AtList>
              </View>

              <View className ='moreLook1'>查看更多  ></View>
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={1}>
            <View className ='qbzy'>

              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={2}>
            <View className ='qbzy'>

              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index
