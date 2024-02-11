import React from "react";
import { Button } from "antd";
import { WeiboSquareOutlined } from "@ant-design/icons";

function Buttons() {
  return (
    <div className="text-center pt-10">
      <h1 className="text-primary text-lg font-black tracking-wide sm:tracking-wider md:tracking-widest lg:tracking-2xl xl:tracking-3xl 2xl:tracking-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl 6xl:text-9xl 7xl:text-10xl 8xl:text-11xl relative">
        BUTTONS
      </h1>
      <div className="mt-16 flex gap-4 m-16">
        <Button type="dashed" >Dashed</Button>
        <Button type="link">Link</Button>
        <Button type="primary">Primary</Button>
        <Button type="text">Text</Button>
              <Button type="default">Default</Button>

              <Button loading>Loading</Button>
              <Button icon={<WeiboSquareOutlined />}>Icons</Button>
              <Button size="large" icon={<WeiboSquareOutlined />}>Large Button with Icon</Button>
              <Button size="middle" icon={<WeiboSquareOutlined />}>Middle Button with Icon</Button>
             
              <Button size="small" icon={<WeiboSquareOutlined />}>Small Button with Icon</Button>
              
      </div>
      <div className="mt-16 flex gap-4 m-16">
        <Button type="dashed"  style={{backgroundColor:"orange" ,color:"white" }}>Custom Styled</Button>
        <Button type="dashed"  className="bg-green-700 text-white">Tailwind Styled</Button>
       
              
      </div>
        <Button     block>Block</Button>
    </div>
  );
}

export default Buttons;
