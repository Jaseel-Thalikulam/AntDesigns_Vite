import React from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Inputs() {
  return (
    <div className="text-center pt-10">

          <h1 className="text-primary text-lg font-black tracking-wide sm:tracking-wider md:tracking-widest lg:tracking-2xl xl:tracking-3xl 2xl:tracking-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl 6xl:text-9xl 7xl:text-10xl 8xl:text-11xl relative">
        INPUTS
          </h1>
          
          <div className="mt-16  4 m-16 space-y-4">
              <h1 className="text-secondary font-black">SIZE</h1>
        <Input size="large" placeholder="Large Input" maxLength={10}  ></Input>
        <Input size="middle" placeholder="Middle Input" maxLength={10}  ></Input>
              <Input size="small" placeholder="Small Input" maxLength={10}  ></Input>

              <h1 className="text-secondary font-black">TYPE</h1>
              

        <Input size="large" placeholder="Username" prefix={<UserOutlined />} ></Input>
        <Input size="large" placeholder="Password" type="password" prefix={<UserOutlined />} ></Input>
              <h1 className="text-secondary font-black">VARIENT</h1>
        <Input size="large" placeholder="Borderless" variant="borderless"></Input>
        <Input size="large" placeholder="Filled" variant="filled"></Input>
        <Input size="large" placeholder="Outlined" variant="outlined"></Input>
              <h1 className="text-secondary font-black">ALLOW CLEAR</h1>
        <Input size="large" placeholder="Allow Clear" variant="outlined" allowClear></Input>
              <h1 className="text-secondary font-black">DISABLED</h1>
        <Input size="large" placeholder="Allow Clear" variant="outlined" disabled></Input>
              <h1 className="text-secondary font-black">SEARCH</h1>
        <Input.Search size="large" placeholder="Search" variant="outlined" ></Input.Search>
              <h1 className="text-secondary font-black">TEXTAREA</h1>
              <Input.TextArea size="large" placeholder="Textarea" variant="outlined" ></Input.TextArea>

              <h1 className="text-secondary font-black">FILE</h1>
        <Input size="large" placeholder="Borderless" type="file" variant="borderless"></Input>
         

      </div>
    </div>
  );
}

export default Inputs;
