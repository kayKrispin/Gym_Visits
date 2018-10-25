import React from 'react';
import styles from './styles.scss';
import Button from '../../../../components/Buttons';
import Select from '../../../../components/Fields/Select';
import Input from '../../../../components/Fields/Input';
import * as options from './options';




class Home extends React.Component {
    render() {
        const { newSubscription, getAll, showHide,  } = options.BUTTON_LABELS;
        return (
            <div className="main">
                <h1 class="header">Please input user credentials</h1>
            <div className="left">
                <Input classname='input' placeholder="name" type="text" />
                <Input classname='input' placeholder="surname" type="text" />
                <Select
                    placeholder={'12 trainings'}
                    options={options.HOME_PAGE_OPTIONS}
                    searchable={false}
                    className='sel'
                />
            </div>
            <div className="right">
                <Button name={newSubscription} onClick={()=>{createVisitor()}} />
                <Button name={getAll} onClick={(e)=>{fetchAllusers(e)}} />
                <Button name={showHide}  onClick={(e)=>{handleUserList(e)}} />
            </div>
                <Input onChange={()=>{ fetchUserByKey(e)}} className="large" placeholder="Find User" type="text"/>
            </div>
        )
    }
}
export default Home;