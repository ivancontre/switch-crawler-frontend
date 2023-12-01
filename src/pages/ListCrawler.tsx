import React from 'react'

import { FC } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ItemCrawler from '../components/ItemCrawler';

const ListCrawler: FC = () => {

    const { crawlers } = useSelector((state: RootState) => state.crawlers); 
    console.log(crawlers)

    return <>
        {
            crawlers?.map((c, index) => (
                <ItemCrawler key={index} c={c}/>
            ))
        }

    
    </>;
};

export default ListCrawler;