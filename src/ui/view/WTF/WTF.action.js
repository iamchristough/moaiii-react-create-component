// @flow
import {networkActionCreator} from "../../lib/redux";
import type {NetworkActionCreator} from "../../lib/redux";

export const exampleActionCreator: NetworkActionCreator<any, void> 
  = networkActionCreator("[WTF] AN_EXAMPLE_ACTION_TYPE");
