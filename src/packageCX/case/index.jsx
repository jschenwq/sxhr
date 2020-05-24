import Taro, { Component } from '@tarojs/taro'
import { View,Text, Image, } from '@tarojs/components'
import {getzxsList} from '@utils/api'
import $ from '@utils/http'

import { add, minus, asyncAdd } from '@actions/counter'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '成功案例'
  }

  constructor(props) {
    super(props)
    this.state = {
      stars:4
    };
  }

  componentDidMount(){

  }

  //跳转成功案例详情
  gotoCaseDetail(path){
    Taro.navigateTo({
      url: '/packageCX/case/detail/index?path='+path,
    })
  }

  render () {
    const {caseList} = this.state;
    return (
      <View className ='zxs'>
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

        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10005.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10005.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>张*媛成功被滨州医学院录取</Text>
            <Text className='caseDetail'>该考生为理科考生，高考总分为539分，在河南省内理科位次为63318，高于一本院校批次控制37分，家长和孩子无地域要求，希望能够学习医学类、电经济学类、管理学类、教育学类等热门专业。</Text>
          </View>
        </View>

        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10006.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10006.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>汪*坤成功被河南工学院录取</Text>
            <Text className='caseDetail'>该考生为理科考生，高考总分为476分，在河南省内理科位次为143428，低于一本院校批次控制线26分，家长和孩子要求在省内院校，不想离家太远，希望能够学习电气类、电子信息类、机械类、计算机类等热门专业。</Text>
          </View>
        </View>

        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10007.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10007.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>王*宜低分高就，成功被西安汽车职业大学录取</Text>
            <Text className='caseDetail'>该同学为理科考生，高考总分为386分，在河南省内理科位次为279199,仅高出二本批次控制线1分，属于压线考生，家长希望孩子在本科院校学习。</Text>
          </View>
        </View>

        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10008.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10008.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>杨*同学成功被提前批新乡医学院录取</Text>
            <Text className='caseDetail'>该同学为文科考生，高考总分为533分，在河南省内文科位次为69714,低于一本批次控制线3分，家长和孩子无地域要求，希望能够学习文学类、管理类、医学类、经济学类等热门专业。</Text>
          </View>
        </View>

        <View className='at-row item1' onClick={this.gotoCaseDetail.bind(this,"https://oss.srwmedu.cn/case/10009.json")}>
          <View className='at-col at-col-1 at-col--auto'>
            <Image class='caseImg' src='https://oss.srwmedu.cn/case/img/10009.jpg'/>
          </View>
          <View className='at-col exmpole'>
            <Text className='exmpoleTitle'>王*皓同学成功被井冈山大学录取</Text>
            <Text className='caseDetail'>该考生为理科考生，高考总分为498分，在河南省内理科位次为112391，低于一本院校批次控制线4分，家长和孩子无地域要求，希望能够学习电气类、电子信息类、机械类、计算机类等热门专业。</Text>
          </View>
        </View>

      </View>
    )
  }
}

export default Index
