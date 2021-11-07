// State.js

import { EventEmitter } from "events";
import Attribute from "./Attribute";

const isObject = (o) =>
  typeof o === "object" && !Array.isArray(o) && o.length === undefined;

class State extends EventEmitter {
  constructor(mInitState = {}) {
    super();

    this._state = {};

    for (const s in mInitState) {
      if (!isObject(mInitState[s])) {
        this[s] = new Attribute(s, mInitState[s]);
        this._state[s] = this[s];
      } else {
        this[s] = new State(mInitState[s]);
        this._state[s] = this[s];
      }
    }

    this._changeBinds = [];
    this._addBinds = [];
  }

  onChange(mCb) {
    this._changeBinds.push(mCb);
  }

  onAdd(mCb) {
    this._addBinds.push(mCb);
  }

  setState(mNewState) {
    let hasChanged = false;
    let hasNewState = false;
    const stateChanged = {};
    const stateAdded = {};

    for (const s in mNewState) {
      if (this[s] === undefined) {
        if (!isObject(mNewState[s])) {
          this[s] = new Attribute(s, mNewState[s]);
        } else {
          this[s] = new State(mNewState[s]);
        }

        hasNewState = true;
        stateAdded[s] = mNewState[s];
      } else {
        if (!isObject(mNewState[s])) {
          const attrChanged = this[s].setValue(mNewState[s]);
          hasChanged = hasChanged || attrChanged;
          if (attrChanged) {
            stateChanged[s] = mNewState[s];
          }
        } else {
          const attrChanged = this[s].setState(mNewState[s]);
          if (attrChanged) {
            stateChanged[s] = mNewState[s];
          }
        }
      }
    }

    if (hasChanged) {
      this._changeBinds.forEach((cb) => {
        cb(stateChanged);
      });

      this.emit("changed", stateChanged);
    }

    if (hasNewState) {
      this._addBinds.forEach((cb) => {
        cb(stateAdded);
      });

      this.emit("added", stateAdded);
    }

    return hasChanged;
  }

  getState() {
    return this._state;
  }

  getValue() {
    const o = {};
    for (let s in this._state) {
      o[s] = this._state[s].getValue();
    }

    return o;
  }

  set value(mState) {
    return this.setState(mState);
  }

  get value() {
    return this.getValue();
  }
}

export default State;
