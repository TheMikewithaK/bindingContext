import {customElement} from "aurelia-framework";

@customElement('child')
export class Child {

  private _parent;

  bind(bindingContext, overrideContext) {
    console.log(bindingContext);
    console.log(overrideContext);
    this._parent = overrideContext.parentOverrideContext.bindingContext;
  }

  hideMe() {
    this._parent.hideChild();
  }

}
