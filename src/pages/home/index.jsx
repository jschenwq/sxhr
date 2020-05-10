import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Icon,Picker  } from '@tarojs/components'
import { AtGrid , AtRate   } from 'taro-ui'
import classNames from 'classnames'
import { connect } from '@tarojs/redux'
import {getzxsList} from '@utils/api'
import auth from '@utils/auth';
import { add, minus, asyncAdd } from '@actions/counter'
import './index.scss'
import {getGlobalData, setGlobalData} from "../../utils/global";
import {getUserInfo, updateUserInfo} from "../../utils/api";



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

// @pageInit()
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      currentCourse:0,
      scoreValue:500,
      current: 0,
      selector: ['本一批', '本二批', '专科批'],
      selectorChecked: '本一批',
      stars:4,
      provinceSelected:"",
      provinceOptions:[],
      zxsList:[],//咨询师列表-首页默认展示5个
    };
    this.toFenbao1 = this.toFenbao1.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){

    //获取咨询师
    getzxsList({currentPage:1,pageSize:5}).then(({data}) => {
      this.setState({
        zxsList: data.list
      })
    });

  }

  componentWillUnmount () {
  }

  componentDidShow () {
    //判断是否有省份
   if(getGlobalData("userInfo")==null){
      return
    }
    var province=""
    if(getGlobalData("userInfo").province==null||getGlobalData("userInfo").province==""){
      province="点击设置"
    }else {
      province=getGlobalData("userInfo").province
    }

    this.setState({
      provinceSelected:province,
      provinceOptions:getGlobalData("province")
    });
  }

  componentDidHide () {
  }


  toFenbao1(){
    if (Taro.getEnv() == Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        // url: 'packageCustomerData/pages/customerDataList/customerDataList',
      })
    } else {
      Taro.switchTab({
        // url: 'packageCustomerData/pages/customerDataList/customerDataList',
      })
    }
  }
  //省份切换
  handleProvince = e => {
    this.setState({
      provinceSelected: this.state.provinceOptions[e.detail.value]
    },()=>{
      // 更新用户信息
      updateUserInfo({province: this.state.provinceOptions[e.detail.value]}).then(({}) => {
        //获取用户信息
        getUserInfo({}).then(({data}) => {
          setGlobalData("userInfo",data);
        })
      })
    });
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
  //智能推荐
  gotoZntj(){
    Taro.showToast({
      title: '敬请期待！',
      icon: 'none',
      mask: true,
    });
  }
  //信息查询
  infomationSearch(data,index){
    //找大学
    if(index == 0){
      Taro.navigateTo({
        url: '/packageCX/zdx/index',
      })
    }
    //查专业
    if(index == 1){
      Taro.navigateTo({
        url: '/packageCX/czy/index',
      })
    }
    //分数线
    if(index == 2){
      Taro.navigateTo({
        url: '/component/search/school/index?type=school&type2=score'
      })
    }
    //招生计划
    if(index == 3){
      Taro.navigateTo({
        url: '/component/search/school/index?type=school&type2=plan',
      })
    }
    //批次线
    if(index == 4){
      Taro.navigateTo({
        url: '/packageCX/pcx/index',
      })
    }
    //提前批
    if(index == 5){
      Taro.showToast({
        title: '开发中敬请期待...',
        icon: 'none',
        mask: true,
      });
    }
    //位次查询
    if(index == 6){
      Taro.navigateTo({
        url: '/packageCX/wccx/index',
      })
    }
    //看职业
    if(index == 7){
      Taro.navigateTo({
        url: '/packageCX/kzy/index',
      });
    }
  }

  //获取更多咨询师
  getMoreZxs(){
    Taro.navigateTo({
      url: '/packageCX/zixunshi/index',
    })
  }

  //跳转咨询师详情
  gotozxsDetail(counselorId){
    Taro.navigateTo({
      url: '/packageCX/zixunshi/zxsDetail/index?counselorId='+counselorId,
    })
  }

  //获取更多成功案例
  getMoreCase(){
    Taro.navigateTo({
      url: '/packageCX/case/index',
    })
  }

  //跳转成功案例详情
  gotoCaseDetail(path){
    Taro.navigateTo({
      url: '/packageCX/case/detail/index?path='+path,
    })
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  gotoCPPage(index){
    auth.pageCheckToken().then((result)=>{
      //授权成功
      if(result){
        Taro.navigateTo({
          url: '/packageCP/sketch/index?index='+index
        });
      }else{
        Taro.navigateTo({
          url: '/pages/login/index'
        });
      }
    });
  }
  render () {
    const {currentCourse, current, zxsList,provinceSelected,provinceOptions} = this.state;
    return (
      <View className='home'>
        {/*宣传画报*/}
        <Image src='https://sxhr-school.oss-cn-beijing.aliyuncs.com/banner/banner1.jpg' className='home_banner' />

        {/*分数帅选*/}
        <View className='home_wish'>
          <View className='home_select'>
            <Icon className='home_icon' color='#999' size='18' type='waiting' />
            {/*<Text className='home_location'>{province}</Text>*/}
            <View className='home_location'>
              <Picker className='province home_location' mode='selector' range={provinceOptions} onChange={this.handleProvince}>
                <View className='picker'>
                  {provinceSelected}
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </View>
              </Picker>
            </View>

            <View className='home_course'>
              <Text onClick={this.handleCourse.bind(this,0)} className={classNames('home_wl',currentCourse == 0?'home_active':'')}>文</Text>
              <Text onClick={this.handleCourse.bind(this,1)} className={classNames('home_wl',currentCourse == 1?'home_active':'')}>理</Text>
            </View>
            <Text onClick={this.handleTab.bind(this,0)} className={classNames('home_score',current == 0?'home_font':'')}>高考/模拟总分</Text>
            <Text onClick={this.handleTab.bind(this,1)} className={classNames('home_scoreLine',current == 1?'home_font':'')}>线差</Text>
          </View>
          <View className='home_zntj' onClick={this.gotoZntj.bind(this)}>
            <View>智能</View>
            <View>推荐</View>
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
        {/*<View className = 'notice'>*/}
          {/*<Icon className='noticeIcon' color='#A3A3A3' size='14' type='waiting' />*/}
          {/*<Text className='noticeText'>这是一段测试文字，这是一段测试文字</Text>*/}
        {/*</View>*/}

        {/*九宫图*/}
        <AtGrid columnNum={4} hasBorder={false} onClick={this.infomationSearch.bind(this)} data={
          [
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E6%89%BE%E5%A4%A7%E5%AD%A6.png',
              value: '找大学'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E6%9F%A5%E4%B8%93%E4%B8%9A.png',
              value: '查专业'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E5%88%86%E6%95%B0%E7%BA%BF.png',
              value: '分数线'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E6%8B%9B%E7%94%9F%E8%AE%A1%E5%88%92.png',
              value: '招生计划'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E6%89%B9%E6%AC%A1%E7%BA%BF.png',
              value: '批次线'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E6%8F%90%E5%89%8D%E6%89%B9.png',
              value: '提前批'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E4%BD%8D%E6%AC%A1%E6%9F%A5%E8%AF%A2.png',
              value: '位次查询'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E7%9C%8B%E8%81%8C%E4%B8%9A.png',
              value: '看职业'
            }
          ]
        } />

        {/*卡片*/}
        <View className='card'>
          <View className='cardLeft' onClick={this.gotoCPPage.bind(this,1)}>
            <Image src='http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E4%BD%8D%E6%AC%A1%E6%9F%A5%E8%AF%A2.png' className='cardLeftImg' />
            <View className='cardLeftText'>
              <Text className= 'cardTitle'>高考选科测评</Text>
              <Text className= 'cardPerson'>大数据智能选科</Text>
            </View>
          </View>
          <View className='cardRight' onClick={this.gotoCPPage.bind(this,3)}>
            <Image src='http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E7%9C%8B%E8%81%8C%E4%B8%9A.png' className='cardLeftImg' />
            <View className='cardLeftText'>
              <Text className= 'cardTitle'>专业定位测评</Text>
              <Text className= 'cardPerson'>五大维度专业</Text>
            </View>
          </View>
        </View>

        <View className='cardSceond' >
          <View className='cardLeft' onClick={this.gotoCPPage.bind(this,2)}>
            <Image src='http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E6%89%B9%E6%AC%A1%E7%BA%BF.png' className='cardLeftImg' />
            <View className='cardLeftText'>
              <Text className= 'cardTitle'>志愿填报测评</Text>
              <Text className= 'cardPerson'>（普高）志愿填报</Text>
            </View>
          </View>
          <View className='cardRight' onClick={this.gotoCPPage.bind(this,4)}>
            <Image src='http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E6%8F%90%E5%89%8D%E6%89%B9.png' className='cardLeftImg' />
            <View className='cardLeftText'>
              <Text className= 'cardTitle'>志愿填报测评</Text>
              <Text className= 'cardPerson'>（艺术）志愿填报</Text>
            </View>
          </View>
        </View>

        {/*咨询师*/}
        <View className='counselor'>
          <View>
            <Text className="title">咨询师</Text>
            <Text onClick={this.getMoreZxs.bind(this)} class="more">更多</Text>
          </View>
        </View>

        {
          zxsList.length > 0 && zxsList.map((item,index) => {
            return (
              <View key={index} onClick={this.gotozxsDetail.bind(this,item.counselorId)} className={classNames('at-row','itemPerson')}>
                <View className='at-col at-col-3' style='text-align:center'>
                  <Image src={item.headPath} className='counselorImg1' />
                </View>
                <View className='at-col at-col-9'>
                  <View>
                    <Text className='name'>{item.counselorName}</Text>
                  </View>
                  <View className='detailJob'>
                    {
                      item.tag && item.tag.split('、').map((item1,index1) => {
                        return(
                          <Text className ='job' key={index1}>{item1}</Text>
                        )
                      })
                    }
                  </View>
                  <View className='yearAndPj'>
                    <Text className='year'>从业{item.workingYear}年</Text><AtRate className='starts' value={this.state.stars}/>
                  </View>
                </View>
              </View>
            )
          })
        }

        {/*成功案例*/}
        <View className='counselor'>
          <View>
            <Text className="title">成功案例</Text>
            {/*<Text onClick={this.getMoreCase.bind(this)} class="more">更多</Text>*/}
          </View>
        </View>
        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10000.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10000.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>刘同学被211背景高校河海大学文天学院会计录取</Text>
            <Text className='caseDetail'>第一轮指导BC志愿：成都工业学院，乐山师范学院，宜宾学院，内江师范学院，西昌学院，广西民族大学</Text>
          </View>
        </View>
        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10001.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10000.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>专业指导，上到心仪学校专业</Text>
            <Text className='caseDetail'>徐<span>同学：理科 分数</span>326 选测BB+ 位次69880。最终被南京理工大学紫金学院电气工程与自动化专业录取。</Text>
          </View>
        </View>

        {/*<Button className='add_btn' onClick={this.toFenbao.bind(this)}>前往分包页面</Button>*/}
        {/*<Button className='add_btn' onClick={this.toFenbao1}>前往分包页面111</Button>*/}

      </View>
    )
  }
}

export default Index
