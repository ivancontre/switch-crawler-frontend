import type { TagProps } from 'antd';

import { Col, Row, InputNumber, Tag, Typography, Button } from "antd";

import React, { FC, useState } from "react";

import { Crawler } from "../store/crawler/types";


import { CaretRightOutlined, PauseOutlined, BorderOutlined, FormOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { startPauseCrawler, startPlayCrawler, startStopCrawler } from '../store/crawler/action';
import Timer from './Timer';


export interface ItemCrawlerProps {
    c: Crawler;
}

const { Title } = Typography;

const ItemCrawler: FC<ItemCrawlerProps> = ({c}) => {

    const dispatch = useDispatch();       
    const [mins, setMins] = useState(5);

    let icon: TagProps["icon"] = null;
    let color : string = '';
    
    switch (c.status) {
        case 'stopped':
            color = '#f50';
            icon = <BorderOutlined />
            break;
        case 'playing':
            color = '#87d068';
            icon = <CaretRightOutlined />
            break;
        case 'paused':
            color = '#55acee';
            icon = <PauseOutlined />
            break;    
        default:
            break;
    }

    const tags: TagProps = {
        icon, 
        color
    };

    const onClickPlay = (id: string) => {
        dispatch(startPlayCrawler(id, mins));
    };

    const onClickStop = (id: string) => {
        dispatch(startStopCrawler(id));
    };

    const onClickPause = (id: string) => {
        dispatch(startPauseCrawler(id));
    };

    const onChangeMinutes = (value: any) => {
        console.log('changed', value);
        setMins(value);
    };

    return (
            <Row style={{'margin': '5px', padding: '5px', backgroundColor: 'white'}} justify="space-around" align="middle">
                <Col span={8}>                    
                    <Title level={5}>{c.car_name}</Title>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {c.status && <Tag {...tags}>{c.status}</Tag> }
                    </div>
                </Col>

                <Col span={5}>
                    <div>
                        <InputNumber style={{'maxWidth': '4em'}} onChange={onChangeMinutes} min={1} max={10} defaultValue={5} disabled={c.status === 'playing' || c.status === 'paused'} />
                    </div>                    
                </Col>
                
                <Col span={4}>
                    <Timer id={c.id} expiredAt={c.expiredAt} isPaused={c.status === 'paused' ? true : false}/>
                </Col>

                <Col span={7}>
                    <Button type="default" icon={<CaretRightOutlined />} size="small" disabled={c.status === 'playing'} onClick={() => onClickPlay(c.id)}/>
                    {/* <Button type="default" icon={<PauseOutlined />} size="small" disabled={c.status === 'stopped' || c.status === 'paused'} onClick={() => onClickPause(c.id)}/> */}
                    <Button type="default" icon={<BorderOutlined />} size="small" disabled={c.status === 'stopped'} onClick={() => onClickStop(c.id)}/>
                    <Button type="default" icon={<FormOutlined />} size="small" />
                </Col>
            </Row>    
    );
}

export default ItemCrawler;