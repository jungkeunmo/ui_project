import React from "react";
import { Switch, Button, Modal, Carousel } from "antd";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
};

class App extends React.Component {
  state = {
    scv: false,
    modalOpen: false,
  };

  _checkHandler = (checked) => {
    console.log(checked);

    this.setState((prev) => {
      return {
        scv: checked,
      };
    });
  };

  _modalToggle = () => {
    this.setState((prev) => {
      return {
        modalOpen: !prev.modalOpen,
      };
    });
  };

  _imageChangeHandler = (idx) => {
    console.log(idx);
  };

  render() {
    return (
      <section>
        <h3>swtich {this.state.scv ? "체크됨" : "체크안됨"}</h3>
        <Switch
          defaultChecked={false}
          checked={this.state.scv}
          onChange={this._checkHandler}
        />
        <h3>Button</h3>
        <Button type="primary" size="small">
          확인
        </Button>
        <Button type="danger" size="large">
          취소
        </Button>
        <Button type="link">링크</Button>
        <Button type="primary" loading={true}>
          로딩
        </Button>
        <h3>Modal</h3>
        <Button type="primary" onClick={() => this._modalToggle()}>
          Modal OPEN
        </Button>
        <Modal
          title="MY First Modal"
          width="600px"
          visible={this.state.modalOpen}
          onCancel={() => this._modalToggle()}
          onOk={() => alert("OK")}
        >
          <h3>Hello</h3>
          <h3>Hello</h3>
        </Modal>

        <Carousel afterChange={this._imageChangeHandler} autoplay={true} dotPosition="top" effect="scrollx">
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </section>
    );
  }
}

export default App;
