import Taro, { Component } from '@tarojs/taro'
import {View, Text, Image, Icon, Picker, Swiper, SwiperItem} from '@tarojs/components'
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
      banner:[
        'https://oss.srwmedu.cn/banner/banner1.jpg',
        'https://oss.srwmedu.cn/banner/banner2.jpg'
      ]
    };
    this.toFenbao1 = this.toFenbao1.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){
    //自动登录
    auth.appCheckAuth().then((result)=>{

      if (!result){
        Taro.switchTab ({
          url: '/pages/user/index'
        });
      }

      Taro.showToast({
        title: result?'自动登录成功！':'自动登录失败！',
        icon: 'none',
        mask: true
      });

      this.setProvince();

    });

    //获取咨询师
    getzxsList({currentPage:1,pageSize:5}).then(({data}) => {
      this.setState({
        zxsList: data.list
      })
    });

  }

  componentDidShow () {
    this.setProvince();
  }

  //设置省份
  setProvince(){

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
  //分数修改
  onScoreChange=(e)=> {
    this.setState({
      scoreValue: e.detail.value
    });
  }
  //分数切换
  handleTab(value){
    this.setState({
      current: value
    })
  }
  //智能推荐
  gotoZntj(){
    Taro.navigateTo({
      url: '/packageCX/zntj/index?type='+ this.state.currentCourse+'&score='+this.state.scoreValue,
    })
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
      Taro.navigateTo({
        url: '/packageCX/tqp/index',
      })
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

  //跳转服务页面
  gotoService(){
    Taro.switchTab ({
      url: '/pages/service/index'
    });
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
    const {currentCourse, current, zxsList,provinceSelected,provinceOptions,banner} = this.state;
    return (
      <View className='home'>
        {/*宣传画报*/}
        <Swiper
          className='home_banner'
          vertical={false}
          circular={true}
          displayMultipleItems={1}
          autoplay={true}
        >
          { banner.map((item, index) => (
            <SwiperItem>
              <View >
                <Image className='home_banner' src={item} onClick={this.gotoService.bind(this)}/>
              </View>
            </SwiperItem>
          ))}

        </Swiper>

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
            <Text  className={classNames('home_score',current == 0?'home_font':'')}>高考/模拟总分</Text>
            {/*<Text onClick={this.handleTab.bind(this,0)} className={classNames('home_score',current == 0?'home_font':'')}>高考/模拟总分</Text>*/}
            {/*<Text onClick={this.handleTab.bind(this,1)} className={classNames('home_scoreLine',current == 1?'home_font':'')}>线差</Text>*/}
          </View>
          <View className='home_zntj' onClick={this.gotoZntj.bind(this)}>
            <View>智能</View>
            <View>推荐</View>
          </View>
          {
            current == 0 ?
              <View className='home_scoreContent'>
                <Input value={this.state.scoreValue} onChange={this.onScoreChange} className="home_scoreIpt" type='text' placeholder={currentCourse == 0?'请输入高考/模考总数(文科)':'请输入高考/模考总数(理科)'}/><Text className = 'home_font1'>分</Text>
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
            <Text className="title">典型成功案例</Text>
            <Text onClick={this.getMoreCase.bind(this)} class="more">更多</Text>
          </View>
        </View>
        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10000.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10000.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>曹*阳成功被985院校厦门大学录取</Text>
            <Text className='caseDetail'>该同学为理科考生，高考总分为589分，在河南省内理科位次为22024,高出一本批次控制线87分，家长和孩子不要求地域，要求专业是电气类、机械类、计算机类、管理类等热门专业。</Text>
          </View>
        </View>

        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10001.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10001.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>顾*尧同学成功被郑州电力高等专科学校录取</Text>
            <Text className='caseDetail'>该考生为理科考生，高考总分为332分，在河南省内理科位次为339721，低于本科院校批次控制线53分，家长和孩子无地域要求，希望能够学习自动化类、土木类、机械类、计算机类等热门专业。</Text>
          </View>
        </View>

        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10002.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10002.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>刘*莹低分高就成功被天津师范大学录取</Text>
            <Text className='caseDetail'>该考生为艺术生文科考生，高考总分为434分，在河南省内文科位次为112659，低于本科院校批次控制线13分，家长和孩子无地域要求，希望能够学习管理学类、经济学类、教育学类等热门专业。</Text>
          </View>
        </View>

        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10003.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10003.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>常*洋同学成功被河南农业大学录取</Text>
            <Text className='caseDetail'>该同学为理科考生，高考总分为460分，在河南省内理科位次为167432,低于一本批次控制线42分，家长和孩子希望能够在省内院校学习，不要离家太远，要求专业是电气类、机械类、计算机类、农业类等热门专业。</Text>
          </View>
        </View>

        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10004.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10004.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>崔*弈同学成功被河南科技大学录取</Text>
            <Text className='caseDetail'>该考生为理科考生，高考总分为547分，在河南省内理科位次为55105，高于一本院校批次控制线45分，家长和孩子无地域要求，希望能够学习自动化类、电子信息类、机械类、计算机类等热门专业。</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
