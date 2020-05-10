import Taro from '@tarojs/taro'
import auth from './auth';
function pageInit(){
  return function Component(Component){
    return class extends Component{
      constructor(props) {
        super(props);
      }
      //onLoad
      componentDidShow(){
        auth.pageCheckToken().then((result)=>{
          //授权成功
          if(result){
            //调用父组件的函数
            super.componentDidShow();
          }else{
            Taro.navigateTo({
              url: '/pages/login/index'
            });
          }
        });
      }

      componentWillMount() {
        super.componentWillMount();
      }
    }
  };
}
export default pageInit;
