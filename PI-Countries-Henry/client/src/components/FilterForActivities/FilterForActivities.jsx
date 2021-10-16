import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from "./FilterForActivities.module.css";

import { getActivities, filterByActivity } from '../../actions/index';

export default function FilterForActivities(){
    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.activities);
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch]);

    const handleFilterByActivity = (act)=>{
        dispatch(filterByActivity(act))
    };

    return (
        <div>
            {/* <label>Tourist Activities:</label> */}
            <select className={s.select} defaultValue={''} name='activity' id='forActivities' onChange={(e) =>handleFilterByActivity(e.target.value) }>
            <option value=''>Search by Tourist Activity</option>
            {allActivities.length > 0 && allActivities.map((a)=>(
                <option value= {a.name} key={a.id}>{a.name}</option>
            ))}
            </select>
        </div>
    )
}