import React, { FC, useContext } from 'react';
//import '../css/signed.css'
import { Layout, Spin  } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
//import { LoadingContext } from '../context/LoadingContext';
import ListCrawler from '../pages/ListCrawler';
import NewCrawler from '../pages/NewCrawler';

const { Content } = Layout;


export const SingedRouter: FC = () => {

    //const { loading } = useContext(LoadingContext);

    // const props = {
    //     spinning: loading,
    //     tip: "Espere por favor..."
    // }

    return (
            <Layout>
                <Content>
                    <Switch>
                        <Route exact strict path="/crawler" component={ ListCrawler } />
                        <Route exact strict path="/crawler/new" component={ NewCrawler } />
                        <Redirect to="/crawler" />
                    </Switch>
                </Content>
            </Layout>
    )
    
    
};