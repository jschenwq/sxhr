import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import { AtTabs, AtTabsPane,  AtList, AtListItem, AtAccordion, AtProgress, AtCurtain } from 'taro-ui'
import {getDetail} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
      open: [],
      zygk:{},
      isOpened:false,
      arryList:[
        {
          title:'销售业务',
          text:'测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
        },
        {
          title:'销售业务',
          text:'测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
        },
        {
          title:'销售业务',
          text:'测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
        }
      ],
      arryList1:[
        {
          title:'建筑/建材/工程',
          count:22
        },
        {
          title:'房地产',
          count:18
        },
        {
          title:'新能源',
          count:11
        },
        {
          title:'建筑/建材/工程',
          count:22
        },
        {
          title:'房地产',
          count:18
        },
        {
          title:'新能源',
          count:11
        },
        {
          title:'建筑/建材/工程',
          count:22
        }
      ],
      arryList2:[
        {
          area:'深圳',
          count:19
        },
        {
          area:'上海',
          count:17
        },
        {
          area:'北京',
          count:18
        },
        {
          area:'深圳',
          count:11
        },
        {
          area:'上海',
          count:8
        },
        {
          area:'北京',
          count:7
        },
        {
          area:'深圳',
          count:5
        },
        {
          area:'上海',
          count:4
        },
        {
          area:'北京',
          count:11
        }
      ]
    };
  }

  componentDidMount(){
    const majorId = this.$router.params.majorId;
    getDetail(majorId).then(({data}) => {
      this.setState({
        zygk: data
      })

      Taro.setNavigationBarTitle({
        title: data.type
      });
    });


  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  handleClickA(index, value) {
    var arr = [];
    for (var i = 0; i < this.state.arryList.length; i++) {
      if (index == i) {
        arr[i] = value;
      } else {
        arr[i] = false;
      }
    }
    this.setState({
      open: arr,
    })
  }

  handleChangeB () {
    this.setState({
      isOpened: true
    })
  }
  onClose () {
    this.setState({
      isOpened: false
    })
  }

  gotoSchoolDetail(){
    Taro.navigateTo({
      url: '/packageCX/zdx/schoolDetail/index',
    })
  }

  //查看专业介绍详情
  gotoDetail(content){
    Taro.navigateTo({
      url: '/packageCX/czy/zyxq/zyjsxq/index?content='+content,
    })
  }

  render () {
    const {arryList, zygk, open , arryList1, arryList2} = this.state;
    const tabList = [{ title: '专业概况' }, { title: '就业前景' }, { title: '开设院校' }];
    return (
      <View className ='zyxq'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className ='qbzy'>
              <View className ='zygl'>
                <View className ='zyglN'>
                  <View className='font1'>专业概览</View>
                  <View className ='font2'><Text>{zygk.type}</Text>><Text>{zygk.pType}</Text></View>

                  <View className='at-row at-row__justify--around itemH'>

                    <View className='at-col at-col-6'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-4'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-8'>
                          <View className ='font3'>{zygk.level}</View>
                          <View className ='font4'>学历层次</View>
                        </View>
                      </View>
                    </View>

                    <View className='at-col at-col-6'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-4'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-8'>
                          <View className ='font3'>{zygk.learnYear}</View>
                          <View className ='font4'>修业年限</View>
                        </View>
                      </View>
                    </View>

                  </View>


                  <View className='at-row at-row__justify--around itemH'>

                    <View className='at-col at-col-6'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-4'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-8'>
                          <View className ='font3'>{zygk.degree}</View>
                          <View className ='font4'>授予学位</View>
                        </View>
                      </View>
                    </View>

                    <View className='at-col at-col-6'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-4'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-8'>
                          <View className ='font3'>{zygk.rate}</View>
                          <View className ='font4'>男女比例</View>
                        </View>
                      </View>
                    </View>

                  </View>

                  <View className='at-row at-row__justify--around itemH'>

                    <View className='at-col at-col-6'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-4'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-8'>
                          <View className ='font3'>{zygk.subjectSuggest}</View>
                          <View className ='font4'>选课建议</View>
                        </View>
                      </View>
                    </View>

                    <View className='at-col at-col-6'>
                      <View className='at-row at-row__justify--center'>
                        <View className='at-col at-col-4'>
                          <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                        </View>
                        <View className='at-col at-col-8'>
                          <View className ='font3'>{zygk.keyWords}</View>
                          <View className ='font4'>关键词</View>
                        </View>
                      </View>
                    </View>

                  </View>
                </View>
              </View>

              <View className='zyjs'>
                <View className='font1'>专业介绍<Text onClick={this.gotoDetail.bind(this,zygk.content)} className= 'font2 font5'>详情</Text></View>
                <View className='font6 font7'>{zygk.majorIntroduce}</View>
              </View>
              <View className ='moreLook'>查看更多  ></View>

              <View className='zyjs jyfs'>
                <View className='font1'>学习课程</View>
                <View className='font6'>{zygk.majorLearn}</View>
              </View>

              <View className='zyjs jyfs'>
                <View className='font1'>专业去向</View>
                <View className='font6'><RichText nodes={zygk.majorDo} /></View>
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
              <View className ='jyqj jyqjOther'>
                <View className ='zyfb'>职业分布</View>
                {
                  arryList.map((obj, index) => {
                    return (
                      <AtAccordion
                        hasBorder={false}
                        key={index}
                        open={open[index]}
                        onClick={this.handleClickA.bind(this, index)}
                        title={obj.title}
                        isAnimation
                      >
                        <View className ='des'>{obj.text}</View>
                      </AtAccordion>
                    )
                  })
                }
              </View>

              <View className ='jyqj'>
                <View className ='zyfb'>行业分布</View>
                {
                  arryList1.map((obj, index) => {
                    return (
                      <View className ='itemHyfb' key={index}>
                        <View className ='titleHyfb'>{obj.title}</View>
                        <AtProgress percent={obj.count} color='#FF4949' />
                      </View>
                    )
                  })
                }
              </View>

              <View className ='jyqj'>
                <View className ='zyfb'>地区分布</View>
                {
                  arryList2.map((obj, index) => {
                    return (
                      <View className ='itemHyfb' key={index}>
                        <View className ='titleHyfb'>{obj.area}</View>
                        <AtProgress percent={obj.count} color='#FF4949' />
                      </View>
                    )
                  })
                }
              </View>

              <View className ='sjlysm'>
                <View className ='sjlysmN'>
                  <View className ='sjltTitle'>
                    <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                    <Text>数据来源说明：</Text>
                  </View>

                  <View className='at-row at-row__align--center detail'>
                    <View className='at-col at-col-1'>
                      <View className ='circle'></View>
                    </View>
                    <View className='at-col textDes'>
                      这事一段测试文字这事一段测试文字
                    </View>
                  </View>

                  <View className='at-row at-row__align--center detail'>
                    <View className='at-col at-col-1'>
                      <View className ='circle'></View>
                    </View>
                    <View className='at-col textDes'>
                      这事一段测试文字这事一段测试文字
                      这事一段测试文字这事一段测试文字
                      这事一段测试文字这事一段测试文字
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={2}>
            <View>
              <View className ='topTip'>
                <Text onClick={this.handleChangeB.bind(this)} className ='sysm'>数据说明</Text>
              </View>

              <View className ='qbzy1'>
                {
                  [1,3,1,1,1,1,1,1,1,1,1,1,1,].map((item,index) =>{
                    return (
                      <View onClick={this.gotoSchoolDetail.bind(this)} className='at-row at-row__align--start schoolItem' key={index}>
                        <View className='at-col at-col-2'>
                          <Image src={require('@packageCP/images/boy.png')} className='schoolItemLogo' />
                        </View>
                        <View className='at-col'>
                          <View className="schoolInfo">
                            <View className="schoolTitle">
                              <Text className='schoolName'>北京大学</Text>
                              <Text className='schoolSx'>211</Text>
                              <Text className='schoolSx'>985</Text>
                              <Text className='schoolSx'>双一流</Text>
                            </View>
                            <View className='schoolaAttr'>综合 / 教育 / 工作</View>
                            <View className='schoolaAttr'>校友会: -/-/-</View>
                            <View className='schoolaAttr'>学校评估:-</View>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
              </View>



              <AtCurtain
                isOpened={this.state.isOpened}
                onClose={this.onClose.bind(this)}
              >
                <Image
                  style='width:100%;height:250px'
                  src={require('@images/home/banner.jpg')}
                />
              </AtCurtain>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index
