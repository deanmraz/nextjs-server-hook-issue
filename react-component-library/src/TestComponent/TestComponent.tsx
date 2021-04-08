import React, { useState } from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) =>  {
  const [ number, setNumber ] = useState(0);
  return (
    <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
    {number}
    <button onClick={() => setNumber(number + 1)}>
      Change State
    </button>
  </div>
  )
}

export default TestComponent;
