import React, { useState } from 'react'
import { Table } from "antd";

function Tables() {
const [page,setPage] =useState(1)
const [pageSize,setPageSize] =useState(2)
  function helo(data) {
    try {
      
      alert(`Edit ${data}`)
    } catch (err) {
      console.log(err);
      
    }
  }

    const tableData = [
        { id: 1, name: "John", age: 25, city: "New York" },
        { id: 2, name: "Jane", age: 30, city: "Los Angeles" },
        { id: 3, name: "Bob", age: 22, city: "Chicago" },
        { id: 4, name: "Alice", age: 28, city: "San Francisco" },
    
    ];
    
  const columns = [
    {
      title: "SI NO",
      dataIndex: "id",
      key:1
    },
    {
      title: "Name`",
      dataIndex: "name",
      key:1
    },
    {
      title: "Age",
      dataIndex: "age",
      key: 2,
      sorter:(a,b)=>a.age-b.age
    },
    {
      title: "City",
      dataIndex: "city",
      key:3
    },
    {
      title: "Actions",
      dataIndex: "city",
      key: 4,
      render:( name, record) => {
        return (
        <div className='flex gap-4'>
            
          <button onClick={() => helo(`${record.age}Edit`)}>Edit</button>
          <button onClick={() => helo(`${record.age}Delete`)}>Delete</button>
        </div>
          
        )
      }
    }
  ]

  return (
    <div className="text-center pt-10">

    <h1 className="text-primary text-lg font-black tracking-wide sm:tracking-wider md:tracking-widest lg:tracking-2xl xl:tracking-3xl 2xl:tracking-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl 6xl:text-9xl 7xl:text-10xl 8xl:text-11xl relative">
  TABLES
    </h1>
    
          <div className="mt-16  4 m-16 space-y-4">
        <Table pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page),
              setPageSize(pageSize)
          }

          //Make API Call Here With Page and Pagination
        }}  dataSource={tableData} columns={columns}/>
          
          </div>
      
    </div>
  )
}

export default Tables
