// @flow
import * as React from "react";

type Props = {};
type State = {};

export default class ExampleComp extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount(): void {}

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return true;
  };

  render(): React.Element<"div"> {
    
    const { } = this.props;
    const { } = this.state;

    return (
      <div className={`ExampleComp`}>
      </div>
    );
  }
}
