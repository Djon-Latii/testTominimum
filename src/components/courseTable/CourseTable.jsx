import React from 'react';
import clazz from './CourseTable.module.css'

export default function CourseTable(props) {
    let rates = props.data.rates;
    let ratesList = [];

    for (let key in rates) {
        ratesList.push(<div className={clazz.itemList} key={key}><div>{key}</div><div>{rates[key]}</div></div>);
    }

    return (
        <div>
            <div className={clazz.containerList}>
                <p>Base currency {props.data.base}</p>
                {ratesList}
            </div>
        </div>
    );
}