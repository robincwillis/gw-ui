import React, { Component } from 'react';

import './ContentEditable.scss';

export class ContentEditable extends Component {

  constructor (props) {
    super(props);
    this.emitChange = this.emitChange.bind(this);
  }

  componentDidMount () {
    if(this.props.autoFocus) {
      this.htmlEl.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.focus) {
      this.htmlEl.focus();
    }
  }

  pasteWithoutStyles (e) {
    // cancel paste
    e.preventDefault();
    // get text representation of clipboard
    var text = e.clipboardData.getData("text/plain");
    // insert text manually
    document.execCommand("insertHTML", false, text);
  }

  render() {
    var { tagName, html, onChange, ...props } = this.props;


    //onKeyPress: this.props.handleKeyPress,
    return React.createElement(
      tagName || 'div',
      {
        ...props,
        ref: (e) => this.htmlEl = e,
        onInput: this.emitChange,
        onPaste: this.pasteWithoutStyles,
        style: this.props.style,
        onFocus: this.props.onFocus || this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        className: this.props.className,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: {__html: html},
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: this.props.spellCheck ? this.props.spellCheck : false,
      },
      this.props.children
    );
  }

  shouldComponentUpdate(nextProps) {
    let shouldStyleUpdate = false;
    if (nextProps.style) {
      //TODO Better deep comparison here
      shouldStyleUpdate = (JSON.stringify(this.props.style) !== JSON.stringify(nextProps.style));
    }
    // We need not rerender if the change of props simply reflects the user's
    // edits. Rerendering in this case would make the cursor/caret jump.
    return (
      // Rerender if there is no element yet... (somehow?)
      !this.htmlEl
      // ...or if html really changed... (programmatically, not by user edit)
      || ( nextProps.html !== this.htmlEl.innerHTML
        && nextProps.html !== this.props.html )
      // ...or if editing is enabled or disabled.
      || this.props.disabled !== nextProps.disabled
      //|| this.props.stlye !== nextProps.style
      || shouldStyleUpdate

    );
  }

  componentDidUpdate() {
    if ( this.htmlEl && this.props.html !== this.htmlEl.innerHTML ) {
      // Perhaps React (whose VDOM gets outdated because we often prevent
      // rerendering) did not update the DOM. So we update it manually now.
      this.htmlEl.innerHTML = this.props.html;
    }
  }

  emitChange(evt) {
    if (!this.htmlEl) return;
    var html = this.htmlEl.innerHTML;
    if (this.props.onChange || this.props.onBlur && html !== this.lastHtml) {
      evt.target = { value: html };
      this.props.onChange(evt);
    }
    this.lastHtml = html;
  }
}

export default ContentEditable;

