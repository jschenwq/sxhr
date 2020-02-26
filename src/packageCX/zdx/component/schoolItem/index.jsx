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

  render () {
    return (
      <View className='schoolItem'>
        <View className='itemContent'>
          <View className='schoolImg'>
            <Image src={require('@packageCP/images/boy.png')} className='schoolLogo' />
          </View>
          <View className="schoolInfo">
            <View className="schoolTitle">
              <Text className='schoolName'>北京大学</Text>

              {/*{this.state.contents.map((item, index) => (*/}
                {/*<Text key={index}>{item.text}</Text>*/}
              {/*))}*/}
              <Text className='schoolSx'>211</Text>
              <Text className='schoolSx'>985</Text>
              <Text className='schoolSx'>双一流</Text>
            </View>
            <View className='schoolaAttr'>综合 / 教育 / 工作</View>
          </View>
          <View className="schoolLocation">
            <Icon className='noticeIcon' color='#A1A1A1' size='14' type='waiting' />北京
          </View>
        </View>
      </View>
    )
  }
}

export default Index
