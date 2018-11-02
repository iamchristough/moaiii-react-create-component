// @flow
import {connect} from "react-redux";
import store from "../../../db/store";
import ExampleComp from "./ExampleComp.jsx";
import * as action from "./ExampleComp.action";

function mapStoreToProps( store ) {
  return {

  }
}
 
function mapDispatchToProps( dispatch ) {
  return {

  }
}


export default connect( mapStoreToProps, mapDispatchToProps )( ExampleComp );
