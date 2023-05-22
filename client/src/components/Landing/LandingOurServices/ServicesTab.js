import React from 'react'
import { Tabs } from 'antd';
import TabsOne from './Tabs/TabsOne';
import TabTwo from './Tabs/TabTwo';

const ServicesTab = () => {
  return (
    <div className='flex items-center'>
        <Tabs
        className=''
        defaultActiveKey="1"
        items={[
        {
            label: <span style={{ color: 'orange' }}>Inbound services</span>,
            key: '1',
            children: <TabsOne/>,

        },
        {
            label: <span style={{ color: 'orange' }}>Outbound services</span>,
            key: '2',
            children: <TabTwo/>,
            
        },
        ]}
        />
    </div>
  )
}

export default ServicesTab