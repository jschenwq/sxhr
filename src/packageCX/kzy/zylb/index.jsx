import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtAccordion, AtList, AtListItem} from 'taro-ui'
import classNames from 'classnames'
import {getOccupationList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '职业列表'
  }

  constructor(props) {
    super(props)
    this.state = {
      arryList: []
    };
  }

  componentDidMount() {
    let type = this.$router.params.type;
    getOccupationList({type: type}).then(({data})=>{
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
  gotoZyjs(introducePath){
    Taro.setStorageSync('introducePath',introducePath);
    Taro.navigateTo({
      url: '/packageCX/kzy/zyjs/index',
    });
  }
  render() {
    let {arryList} = this.state;
    return (
      <View className='kzy'>
        <View className="search">
          <Text>包含职业</Text>
          <Text className='searchText'>{arryList.length}</Text>
          <Text>个</Text>
        </View>
        <AtList>
          {
            arryList.map((item,index) => {
              return(
                <AtListItem key={index} onClick={this.gotoZyjs.bind(this,item.introducePath)} title={item.occupationName} arrow='right' />
              )
            })
          }
        </AtList>
      </View>
    )
  }
}

export default Index
