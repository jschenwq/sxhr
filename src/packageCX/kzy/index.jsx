import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtAccordion, AtList, AtListItem} from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '看职业'
  }

  constructor(props) {
    super(props)
    this.state = {
      open: [],
      open1: [],
      arryList: [
        {
          name: '番茄A',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: true
            },
            {
              name: '番茄鸡蛋3',
              isLeaf: true
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒傻逼1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒傻逼2',
                  isLeaf: true
                }
              ]
            },
          ]
        },
        {
          name: '黄瓜B',
          isLeaf: false,
          child1: [
            {
              name: '黄瓜请教1',
              isLeaf: false,
              child2: [
                {
                  name: '黄瓜请教2221',
                  isLeaf: true
                }
              ]
            },
            {
              name: '黄瓜请教2',
              isLeaf: false,
              child2: [
                {
                  name: '黄瓜请教二货1',
                  isLeaf: true
                },
                {
                  name: '黄瓜请教二货2',
                  isLeaf: true
                },
                {
                  name: '黄瓜请教二货3',
                  isLeaf: true
                },
              ]
            },
          ]
        },

        {
          name: '番茄B',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒二货2221',
                  isLeaf: true
                }
              ]
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒二货1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒二货2',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒二货3',
                  isLeaf: true
                },
              ]
            },
          ]
        },
        {
          name: '番茄A',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: true
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒傻逼1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒傻逼2',
                  isLeaf: true
                }
              ]
            },
          ]
        },
        {
          name: '番茄B',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒二货2221',
                  isLeaf: true
                }
              ]
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒二货1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒二货2',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒二货3',
                  isLeaf: true
                },
              ]
            },
          ]
        },
        {
          name: '番茄A',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: true
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒傻逼1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒傻逼2',
                  isLeaf: true
                }
              ]
            },
          ]
        },
        {
          name: '番茄B',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒二货2221',
                  isLeaf: true
                }
              ]
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒二货1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒二货2',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒二货3',
                  isLeaf: true
                },
              ]
            },
          ]
        },
        {
          name: '番茄A',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: true
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒傻逼1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒傻逼2',
                  isLeaf: true
                }
              ]
            },
          ]
        },
        {
          name: '番茄B',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒二货2221',
                  isLeaf: true
                }
              ]
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒二货1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒二货2',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒二货3',
                  isLeaf: true
                },
              ]
            },
          ]
        },
        {
          name: '番茄A',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: true
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒傻逼1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒傻逼2',
                  isLeaf: true
                }
              ]
            },
          ]
        },
        {
          name: '番茄A',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: true
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒傻逼1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒傻逼2',
                  isLeaf: true
                }
              ]
            },
          ]
        },
        {
          name: '番茄A',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: true
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒傻逼1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒傻逼2',
                  isLeaf: true
                }
              ]
            },
          ]
        },
        {
          name: '番茄A',
          isLeaf: false,
          child1: [
            {
              name: '番茄鸡蛋1',
              isLeaf: true
            },
            {
              name: '番茄鸡蛋2',
              isLeaf: false,
              child2: [
                {
                  name: '番茄鸡蛋炒傻逼1',
                  isLeaf: true
                },
                {
                  name: '番茄鸡蛋炒傻逼2',
                  isLeaf: true
                }
              ]
            },
          ]
        }
      ]
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleClick(index, value) {
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
      open1: [],
    })
  }

  handleClick1(index, index1, value) {
    var arr = [];
    for (var i = 0; i < this.state.arryList[index].child1.length; i++) {
      if (index1 == i) {
        arr[i] = value;
      } else {
        arr[i] = false;
      }
    }
    this.setState({
      open1: arr,
    })
  }

  gotoDetail(index){
    Taro.navigateTo({
      url: '/packageCX/kzy/zyxq/index',
    })
  }
  //查询职业
  searchZy(){
    Taro.navigateTo({
      url: '/component/search/index?type=3',
    })
  }

  render() {
    const {arryList, open, open1} = this.state;
    return (
      <View className='kzy' onClick={this.searchZy.bind(this)}>
        <View className="search">
          <Icon className='searchIcon' color='#999' size='20' type='waiting'/>
          <Text className='searchText'>请输入职业名称</Text>
        </View>

        <View className='zyk'>
          {
            arryList.map((obj, index) => {
              return (
                <AtAccordion
                  key={index}
                  open={open[index]}
                  onClick={this.handleClick.bind(this, index)}
                  title={obj.name}
                  isAnimation
                >
                  {!obj.isLeaf &&
                  obj.child1.map((obj1, index1) => {
                    return (
                      obj1.isLeaf ?
                        <AtList>
                          <AtListItem key={index1} title={obj1.name}/>
                        </AtList> :
                        <AtAccordion
                          key={index1}
                          open={open1[index1]}
                          onClick={this.handleClick1.bind(this, index, index1)}
                          title={obj1.name}
                          isAnimation
                        >
                          {
                            !obj1.isLeaf &&
                              obj1.child2.map((obj2, index2) => {
                                return (
                                  <AtList>
                                    <AtListItem onClick={this.gotoDetail.bind(this,index2)} className ='font' arrow='right' key={index2} title={obj2.name}/>
                                  </AtList>
                                )
                              })
                          }
                        </AtAccordion>
                    )

                    // if(obj1.isLeaf){
                    //   return (
                    //     <AtList>
                    //       <AtListItem key={index1} title={obj1.name} />
                    //     </AtList>
                    //   )
                    // }else{
                    //   return(
                    //     <AtAccordion
                    //       className='thirdLits'
                    //       key={index1}
                    //       open={this.state.open1[index1]}
                    //       onClick={this.handleClick2.bind(this,index,index1)}
                    //       title={obj1.name}
                    //       isAnimation
                    //     >
                    //     </AtAccordion>
                    //   )
                    // }


                    // {
                    //   !obj1.isLeaf &&
                    //   obj1.child2.map((obj2,index2) => {
                    //     return(
                    //       <AtAccordion
                    //         className='thirdLits'
                    //         key={index2}
                    //         open={this.state.open2[index2]}
                    //         onClick={this.handleClick2.bind(this,index,index1,index2)}
                    //         title={obj2.name}
                    //         isAnimation
                    //       >
                    //       </AtAccordion>
                    //     )
                    //   })
                    // }
                    // return(
                    //
                    //
                    //   <AtAccordion
                    //     className='secondLits'
                    //     key={index1}
                    //     open={this.state.open1[index1]}
                    //     onClick={this.handleClick1.bind(this,index,index1)}
                    //     title={obj1.name}
                    //     isAnimation
                    //   >
                    //     {!obj1.isLeaf &&
                    //     obj1.child2.map((obj2,index2) => {
                    //       return(
                    //         <AtAccordion
                    //           className='thirdLits'
                    //           key={index2}
                    //           open={this.state.open2[index2]}
                    //           onClick={this.handleClick2.bind(this,index,index1,index2)}
                    //           title={obj2.name}
                    //           isAnimation
                    //         >
                    //         </AtAccordion>
                    //       )
                    //     })
                    //     }
                    //   </AtAccordion>
                    // )
                  })
                  }
                </AtAccordion>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
