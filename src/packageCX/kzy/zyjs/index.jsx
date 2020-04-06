import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtAccordion, AtList, AtListItem} from 'taro-ui'
import classNames from 'classnames'
import $ from '@utils/http'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '职业介绍'
  }

  constructor(props) {
    super(props)
    this.state = {
      arryList: []
    };
  }

  componentDidMount() {
    let introducePath = this.$router.params.introducePath;
    console.log(introducePath);
    let storeState = Taro.$store.getState();
    debugger
    Taro.request({
      isShowLoading: true,
      loadingText: '正在加载',
      url: introducePath,
      method: "GET",//taro规定必须大写
      header: {
        'content-type': 'application/json',
        'Authorization': storeState.counter.authorize?storeState.counter.authorize:'Bearer'
      }
    }).then(({data})=>{
      console.log(data);
    });
    // getOccupationList({type: type}).then(({data})=>{
    //   this.setState({
    //     arryList: data
    //   });
    // });
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
    Taro.navigateTo({
      url: '/packageCX/kzy/zyjs/index?introducePath='+introducePath,
    })
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
