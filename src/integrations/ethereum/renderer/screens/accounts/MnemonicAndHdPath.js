import React, { PureComponent } from "react";

import MnemonicInfoModal from "./MnemonicInfoModal";

import OnlyIf from "../../../../../renderer/components/only-if/OnlyIf";

export default class MnemonicAndHdPath extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: false,
    };
  }

  showWarning() {
    this.setState({
      showWarning: true,
    });
  }

  hideWarning() {
    this.setState({
      showWarning: false,
    });
  }

  render() {
    return (
      <section className="MnemonicAndHdPath">
        <div className="Mnemonic">
          <h4>
            MNEMONIC{" "}
            <span
              className="WarningIndicator"
              onClick={this.showWarning.bind(this)}
            >
              ?
            </span>
          </h4>
          <span className="popover-container">
            {this.props.mnemonic}{" "}
            <span className="popover popunder">
              note: this mnemonic is not secure; don&apos;t use it on a public
              blockchain.
            </span>
          </span>
        </div>
        <div className="HDPath">
          <h4>HD PATH</h4>
          <span>{this.props.hdPath}account_index</span>
        </div>
        <OnlyIf test={this.state.showWarning == true}>
          <MnemonicInfoModal onCloseModal={this.hideWarning.bind(this)} />
        </OnlyIf>
      </section>
    );
  }
}
