import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList , AtListItem} from 'taro-ui'

import './index.scss'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current:0
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleClick(){

  }
  //查看学校详情
  gotoSchoolDetail(schoolId){
    Taro.navigateTo({
      url: '/packageCX/zdx/schoolDetail/index?schoolId='+schoolId,
    })
  }
  render () {
    let {item} = this.props;
    return (
      <View className='schoolItem' onClick={this.gotoSchoolDetail.bind(this, item.schoolId)}>
        <View className='itemContent'>
          <View className='schoolImg'>
            <Image src={item.logoPath} className='schoolLogo' />
          </View>
          <View className="schoolInfo">
            <View className="schoolTitle">
              <Text className='schoolName'>{item.schoolName}</Text>
              <Text className='schoolSx'>{item.nature}</Text>
            </View>
            <View className='schoolContent'>
              <View className='schoolaAttr'>{item.eduLevel}</View>
              <View className="schoolLocation">
                <Icon className='noticeIcon' color='#A1A1A1' size='14' type='waiting' />{item.province}
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
