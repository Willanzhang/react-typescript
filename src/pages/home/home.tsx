// import Hello from '../../components/Hello'
// import * as actions from '../../store/actions/'
// import { StoreState } from '../../store/types/index'
// import { connect, Dispatch } from 'react-redux'
import * as React from 'react';
import { connect } from 'react-redux'
import {StoreState} from '../../store/types'
import {changLanguage} from '../../store/actions'




class Home extends React.Component<StoreState,{}> {
  constructor(props: any){
    super(props)
    props.dispatch(changLanguage('php'))
    console.log(11)
    // this.props.getState('languageName')
    console.dir(props, 'props')
    console.log(222)
  }
  render() {
    console.log(this.props, 'this.props+++99')
    let {languageName} = this.props
    return (
      <div className="App">
        <h1>    
          首页{languageName}
        </h1>
      </div>
    );
  }
}
function type(state: any) {
  console.log(state, '6666666')
  return {
    languageName: state.languageName
  }
}
export default connect(type)(Home);
