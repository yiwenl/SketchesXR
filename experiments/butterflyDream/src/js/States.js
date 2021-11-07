import State from "./objState/State";

const _state = new State({
  currentState: "init",
});

const setState = (mState) => {
  _state.setState({
    currentState: mState,
  });
};

const getState = () => {
  return _state.currentState.value;
};

const onStateChange = (mHandler) => {
  _state.currentState.onChange(mHandler);
};

const States = {
  INIT: "init",
  INTRO: "intro",
  LANDED: "landed",
  CIRCLING: "circling",
  SWARMING: "swarming",
};

export { States, setState, onStateChange, getState };
