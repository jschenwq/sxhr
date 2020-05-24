import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtRate   } from 'taro-ui'
import classNames from 'classnames'
import $ from '@utils/http'

import './index.scss'


class Index extends Component {
  config = {
    navigationBarTitleText: '成功案例'
  }

  constructor(props) {
    super(props)
    this.state = {
      stars:4,
      detailObj:{}
    };
  }

  componentDidMount(){
    const path = this.$router.params.path;
    $.ajaxJson(path,'GET').then(({data})=>{
      this.setState({
        detailObj: data
      });
      console.log(JSON.stringify(data))
    });


  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    const {detailObj} = this.state;
    return (
      <View className = 'zsxDetail'>
        <View className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={detailObj.imgPath} className='counselorImg1' />
          </View>
          <View className='at-col at-col-9'>
            <View>
              <Text className='title'>{detailObj.title}</Text>
            </View>
          </View>
        </View>

        <View className ='introduce'>
          <RichText nodes={detailObj.content}/>
        </View>
      </View>
    )
  }
}

export default Index
