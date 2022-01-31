import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React from 'react';
import "./list.scss"

export default function List() {
  return <div className='list'>
      <span className="lsitTitle">Continue to watch</span>
      <div className='wrapper'>
          <ArrowBackIosOutlined/>
          <div className='container'>
              
          </div>

          <ArrowForwardIosOutlined/>

      </div>
    
  </div>;
}
