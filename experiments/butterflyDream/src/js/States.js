import State from "object-states";

const _state = new State({
  currentState: "init",
});

const setState = (mState) => {
  _state.setState({
    currentState: mState,
  });
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

export { States, setState, onStateChange };
