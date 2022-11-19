import React, { useState, useEffect } from "react";
import { useIsMobile } from "../../hooks";
import "./css.scss";

type Props = {
  activeId: number
}

const Tab: React.FC <Props>= ({activeId})  => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const isMobile = useIsMobile();
  const tabs = [
    {
      id: 1,
      text: '董事會名單'
    },
    {
      id: 2,
      text: '審計委員會'
    },
    {
      id: 3,
      text: '薪酬委員會'
    },
    {
      id: 4,
      text: '內部稽核'
    },
    {
      id: 5,
      text: '誠信經營'
    },
    {
      id: 6,
      text: '風險管理'
    },
    {
      id: 7,
      text: '資訊安全管理'
    },
    {
      id: 8,
      text: '內部重大資訊處理既防範內線交易管理'
    },
    {
      id: 9,
      text: '公司治理章程與程序'
    },
  ]

  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id:any) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }

  return (
      <div className="TabBlock">
        {
          isMobile?
          (
            <div className='dropdown'>
            <div className={`dropdown-header active`}onClick={toggleDropdown}>
              {selectedItem ? 
                tabs.filter(item => item.id === selectedItem)[0].text : 
                tabs.filter(item => item.id === activeId)[0].text}
              <i className={`icon ${isOpen && "open"}`}></i>
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
              {tabs.map(item => (
                <div className="dropdown-item" onClick={e => handleItemClick(e)} >
                  {item.text}
            </div>
          ))}
        </div>
      </div>
          )
          :
          (
            <ul>
            {
              tabs && tabs.map(tab=>( 
                <li className={`${activeId === tab.id ?"active":""}`}>
                  <a href="#">{ tab.text }</a>
                  </li> 
              ))
            }
          </ul>
          )
        }
      </div>
  );
};

export default Tab;