import React from "react";
import Enzyme from "Enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Box from "../components/Box/Box";
import Form from "../components/Form/Form";
import App from "../App";
import Results from "../components/Results/Results";

Enzyme.configure({ adapter: new Adapter() });

describe("first rendering", () => {
  it("should render box", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Box)).toHaveLength(1);
  });

  it("should render form component", () => {
    const wrapper = shallow(<Box />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it("should render result component", () => {
    const wrapper = shallow(<Box />);
    expect(wrapper.find(Results)).toHaveLength(1);
  });
});
