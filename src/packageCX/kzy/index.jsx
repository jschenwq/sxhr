import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtAccordion, AtList, AtListItem} from 'taro-ui'
import classNames from 'classnames'
import {getOccupationType} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '看职业'
  }

  constructor(props) {
    super(props)
    this.state = {
      arryList: []
    };
  }

  componentDidMount() {
    getOccupationType({}).then(({data})=>{
      this.setState({
        arryList: data
      });
    });
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
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
  gotoZyfl(type){
    Taro.navigateTo({
      url: '/packageCX/kzy/zylb/index?type='+type,
    });
  }
  render() {
    let {arryList} = this.state;
    return (
      <View className='kzy'>
        <View className="search" onClick={this.searchZy.bind(this)}>
          <Icon className='searchIcon' color='#999' size='20' type='waiting'/>
          <Text className='searchText'>请输入职业名称</Text>
        </View>

        <View className='zyk'>
          {
            arryList.map((item, index) => {
              return (
                <View>
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
      </View>
    )
  }
}

export default Index
