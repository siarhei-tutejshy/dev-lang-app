
import  React  from 'react';

import Dashboard from './Dashboard';
import { connect } from 'react-redux';


let mapStateToProps =(state) => {
    return {
        totalPoints: state.progress.totalPoints
    }
}
export default connect(mapStateToProps,{})(Dashboard)
