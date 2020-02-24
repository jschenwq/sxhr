import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Icon, Switch,Picker  } from '@tarojs/components'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import { connect } from '@tarojs/redux'
import {login} from '@utils/api'


import { add, minus, asyncAdd } from '@actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      currentCourse:0,
      scoreValue:500,
      current: 0,
      selector: ['本一批', '本二批', '专科批'],
      selectorChecked: '本一批',
      stars:4
    };
    this.toFenbao1 = this.toFenbao1.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){

  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  toFenbao(){
    Taro.showToast({
      title: '22222',
      icon: 'none',
      mask: true,
    });
  }

  toFenbao1(){
    if (Taro.getEnv() == Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: 'packageCustomerData/pages/customerDataList/customerDataList',
      })
    } else {
      Taro.switchTab({
        url: 'packageCustomerData/pages/customerDataList/customerDataList',
      })
    }
  }
  //科目切换
  handleCourse(value){
    this.setState({
      currentCourse: value
    })
  }
  //分数切换
  handleTab(value){
    this.setState({
      current: value
    })
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  render () {
    const {currentCourse, current} = this.state;
    return (
      <View className='home'>
        {/*宣传画报*/}
        <Image src={require('@images/home/banner.jpg')} className='home_banner' />

        {/*分数帅选*/}
        <View className='home_wish'>
          <View className='home_select'>
            <Icon className='home_icon' color='#999' size='18' type='waiting' /><Text className='home_location'>湖北</Text>
            <View className='home_course'>
              <Text onClick={this.handleCourse.bind(this,0)} className={classNames('home_wl',currentCourse == 0?'home_active':'')}>文</Text>
              <Text onClick={this.handleCourse.bind(this,1)} className={classNames('home_wl',currentCourse == 1?'home_active':'')}>理</Text>
            </View>
            <Text onClick={this.handleTab.bind(this,0)} className={classNames('home_score',current == 0?'home_font':'')}>高考/模拟总分</Text>
            <Text onClick={this.handleTab.bind(this,1)} className={classNames('home_scoreLine',current == 1?'home_font':'')}>线差</Text>
          </View>
          <View className='home_zntj'>
            <Text className="home_font2">
              <Text className='home_font3'>智能</Text>
              <Text>推荐</Text>
            </Text>
          </View>
          {
            current == 0 ?
              <View className='home_scoreContent'>
                <Input value={this.state.scoreValue} className="home_scoreIpt" type='text' placeholder={currentCourse == 0?'请输入高考/模考总数(文科)':'请输入高考/模考总数(理科)'}/><Text className = 'home_font1'>分</Text>

              </View>:
              <View className='home_scoreContent'>
                <Input className="home_scoreIpt1" type='text' placeholder='请输入线分差'/><Text className = 'home_font1'>分</Text>
                <Picker style = 'display:inline-block;margin-left:10px' mode='selector' range={this.state.selector} onChange={this.onChange}>
                  <View className='picker'>
                    {this.state.selectorChecked}
                  </View>
                </Picker>
              </View>

          }
        </View>

        {/*通知通告*/}
        <View className = 'notice'>
          <Icon className='noticeIcon' color='#A3A3A3' size='14' type='waiting' />
          <Text className='noticeText'>这是一段测试文字，这是一段测试文字</Text>
        </View>

        {/*九宫图*/}
        <AtGrid columnNum='4' data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '领取中心'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '领取中心'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '领取中心'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '找折扣'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '领会员'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '新品首发'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '领京豆'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '手机馆'
            }
          ]
        } />

        {/*卡片*/}
        <View className='card'>
          <View className='cardLeft'>
            <Image src={require('@images/evaluation/boy.png')} className='cardLeftImg' />
            <View className='cardLeftText'>
              <Text className= 'cardTitle'>新高考选课</Text>
              <Text className= 'cardPerson'>大数据智能选课</Text>
            </View>
          </View>
          <View className='cardRight'>
            <Image src={require('@images/evaluation/boy.png')} className='cardLeftImg' />
            <View className='cardLeftText'>
              <Text className= 'cardTitle'>定位测评</Text>
              <Text className= 'cardPerson'>五大维度专业</Text>
            </View>
          </View>
        </View>

        {/*咨询师推荐*/}
        <View className='counselor'>
          <View>
            <Text className="title">咨询师推荐服务</Text>
            <Text class="more">更多</Text>
          </View>
        </View>

        <View className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={require('@images/evaluation/boy.png')} className='counselorImg' />
          </View>
          <View className='at-col at-col-7'>
            <View>
              <Text className='name'>张三</Text><Text className='year'>从业2年</Text>
            </View>
            <View className='detail'>
              张三这是一段测试文字，张三这是一段测试文<Text className='moreDetail'>详情</Text>
            </View>
          </View>
          <View className='at-col at-col-2'>
            <AtButton className='btn' type='primary' size='small' circle='true'>预约</AtButton>
          </View>
        </View>
        <View className='item'>
          <Text>高校一对一服务</Text>
          <Image class='ItemImg' src={require('@images/evaluation/evaStart4.png')}/>
        </View>

        <View className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={require('@images/evaluation/boy.png')} className='counselorImg' />
          </View>
          <View className='at-col at-col-7'>
            <View>
              <Text className='name'>张三2</Text><Text className='year'>从业2年</Text>
            </View>
            <View className='detail'>
              张三这是222一段测试文字，张2222三这是一<Text className='moreDetail'>详情</Text>
            </View>
          </View>
          <View className='at-col at-col-2'>
            <AtButton className='btn' type='primary' size='small' circle='true'>预约</AtButton>
          </View>
        </View>
        <View className='item'>
          <Text>升学卡服务</Text>
          <Image class='ItemImg' src={require('@images/evaluation/evaStart5.png')}/>
        </View>

        <View className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={require('@images/evaluation/boy.png')} className='counselorImg' />
          </View>
          <View className='at-col at-col-7'>
            <View>
              <Text className='name'>张三1</Text><Text className='year'>从业2年</Text>
            </View>
            <View className='detail'>
              张三这是一段测试文字，张三333这是一<Text className='moreDetail'>详情</Text>
            </View>
          </View>
          <View className='at-col at-col-2'>
            <AtButton className='btn' type='primary' size='small' circle='true'>预约</AtButton>
          </View>
        </View>
        <View className='item lastItem'>
          <Text>会员服务</Text>
          <Image class='ItemImg' src={require('@images/evaluation/evaStart6.png')}/>
        </View>

        {/*咨询师*/}
        <View className='counselor firstItem'>
          <View>
            <Text className="title">咨询师</Text>
            <Text class="more">更多</Text>
          </View>
        </View>

        <View className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={require('@images/evaluation/boy.png')} className='counselorImg1' />
          </View>
          <View className='at-col at-col-7'>
            <View>
              <Text className='name'>张三</Text>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View>
             <Text className='year'>从业2年</Text><AtRate className='starts' value={this.state.stars}/>
            </View>
          </View>
        </View>
        <View className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={require('@images/evaluation/boy.png')} className='counselorImg1' />
          </View>
          <View className='at-col at-col-7'>
            <View>
              <Text className='name'>张三</Text>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View>
              <Text className='year'>从业2年</Text><AtRate className='starts' value={this.state.stars}/>
            </View>
          </View>
        </View>
        <View className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={require('@images/evaluation/boy.png')} className='counselorImg1' />
          </View>
          <View className='at-col at-col-7'>
            <View>
              <Text className='name'>张三</Text>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View>
              <Text className='year'>从业2年</Text><AtRate className='starts' value={this.state.stars}/>
            </View>
          </View>
        </View>
        <View className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={require('@images/evaluation/boy.png')} className='counselorImg1' />
          </View>
          <View className='at-col at-col-7'>
            <View>
              <Text className='name'>张三</Text>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View>
              <Text className='year'>从业2年</Text><AtRate className='starts' value={this.state.stars}/>
            </View>
          </View>
        </View>

        {/*成功案例*/}
        <View className='counselor firstItem'>
          <View>
            <Text className="title">成功案例</Text>
            <Text class="more">更多</Text>
          </View>
        </View>
        <View className='at-row item1'>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='ItemImg1' src={require('@images/evaluation/evaStart4.png')}/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleDetail'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
          </View>
        </View>
        <View className='at-row item1'>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='ItemImg1' src={require('@images/evaluation/evaStart4.png')}/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleDetail'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
          </View>
        </View>
        <View className='at-row item1'>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='ItemImg1' src={require('@images/evaluation/evaStart4.png')}/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleDetail'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
          </View>
        </View>
        <View className='at-row item1'>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='ItemImg1' src={require('@images/evaluation/evaStart4.png')}/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleDetail'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
          </View>
        </View>

        {/*高考咨询*/}
        <View className='counselor firstItem'>
          <View>
            <Text className="title">高考咨询</Text>
            <Text class="more">更多</Text>
          </View>
        </View>
        <View className='at-row item1'>
          <View className='at-col exmpole1'>
            <Text className='exmpoleTitle'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleDetail'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleTime'>2019/02/02 10:19<Text className='readNum'>256</Text></Text>
          </View>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='ItemImg1' src={require('@images/evaluation/evaStart4.png')}/>
          </View>
        </View>
        <View className='at-row item1'>
          <View className='at-col exmpole1'>
            <Text className='exmpoleTitle'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleDetail'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleTime'>2019/02/02 10:19<Text className='readNum'>256</Text></Text>
          </View>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='ItemImg1' src={require('@images/evaluation/evaStart4.png')}/>
          </View>
        </View>
        <View className='at-row item1'>
          <View className='at-col exmpole1'>
            <Text className='exmpoleTitle'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleDetail'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleTime'>2019/02/02 10:19<Text className='readNum'>256</Text></Text>
          </View>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='ItemImg1' src={require('@images/evaluation/evaStart4.png')}/>
          </View>
        </View>
        <View className='at-row item1'>
          <View className='at-col exmpole1'>
            <Text className='exmpoleTitle'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleDetail'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleTime'>2019/02/02 10:19<Text className='readNum'>256</Text></Text>
          </View>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='ItemImg1' src={require('@images/evaluation/evaStart4.png')}/>
          </View>
        </View>
        <View className='at-row item1'>
          <View className='at-col exmpole1'>
            <Text className='exmpoleTitle'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleDetail'>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</Text>
            <Text className='exmpoleTime'>2019/02/02 10:19<Text className='readNum'>256</Text></Text>
          </View>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='ItemImg1' src={require('@images/evaluation/evaStart4.png')}/>
          </View>
        </View>
        {/*<Button className='add_btn' onClick={this.toFenbao.bind(this)}>前往分包页面</Button>*/}
        {/*<Button className='add_btn' onClick={this.toFenbao1}>前往分包页面111</Button>*/}
      </View>
    )
  }
}

export default Index
