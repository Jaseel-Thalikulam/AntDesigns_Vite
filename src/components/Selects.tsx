import React, { useEffect, useState } from 'react'
import { Select } from "antd";
import { DownOutlined } from '@ant-design/icons'
function Selects() {
    const [options, setOptions] = useState([
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ])

    const MAX_COUNT = 3;
    const [value, setValue] = useState([])
    const suffix = (
        <>
          <span>
            {value.length} / {MAX_COUNT}
          </span>
          <DownOutlined />
        </>
      );

    useEffect(() => {
        // Make sure the state is set before rendering the component
      }, [options]);
  return (
    <div className="text-center pt-10">

    <h1 className="text-primary text-lg font-black tracking-wide sm:tracking-wider md:tracking-widest lg:tracking-2xl xl:tracking-3xl 2xl:tracking-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl 6xl:text-9xl 7xl:text-10xl 8xl:text-11xl relative">
  SELECTS
    </h1>
    
          <div className="mt-16  4 m-16 space-y-4">
              <Select options={options} style={{width:"100%"}} placeholder="Select Option" bordered={false}>
                  
        </Select>

        <h1 className="text-secondary font-black">TAGS</h1>
        
              <Select mode='tags' options={options} style={{width:"100%"}} placeholder="Select Tags" maxTagCount={2} bordered={false} />
                  
        <h1 className="text-secondary font-black">MULTIPLE</h1>
           
              <Select mode='multiple' options={options} style={{width:"100%"}} placeholder="Select Multiple" bordered={false}>
                  
              </Select>

        <h1 className="text-secondary font-black">MULTIPLE WITH SUFFIX AND MAXCOUNT</h1>

        <Select
      mode="multiple"
      maxCount={MAX_COUNT}
      value={value}
      style={{ width: '100%' }}
      onChange={setValue}
      suffixIcon={suffix}
      placeholder="Please select"
      options={[
        { value: 'Ava Swift', label: 'Ava Swift' },
        { value: 'Cole Reed', label: 'Cole Reed' },
        { value: 'Mia Blake', label: 'Mia Blake' },
        { value: 'Jake Stone', label: 'Jake Stone' },
        { value: 'Lily Lane', label: 'Lily Lane' },
        { value: 'Ryan Chase', label: 'Ryan Chase' },
        { value: 'Zoe Fox', label: 'Zoe Fox' },
        { value: 'Alex Grey', label: 'Alex Grey' },
        { value: 'Elle Blair', label: 'Elle Blair' },
      ]}
        />
        

    </div>
      
    </div>
  )
}

export default Selects
