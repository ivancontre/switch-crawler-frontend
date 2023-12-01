import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';

import AuthRouter from './AuthRouter';
import { SingedRouter } from './SingedRouter';

import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { startChecking } from '../store/auth/action';
import { Spin } from 'antd';
import { startLoadCrawler } from '../store/crawler/action';


const AppRouter: FC = () => {

    const dispatch = useDispatch();
    const { checking, logged } = useSelector((state: RootState) => state.auth); 

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    useEffect(() => {
        
        if (logged) {
            dispatch(startLoadCrawler());
        }
        
    }, [dispatch, logged]);

    if (checking) {
        return (
            <div className='spinner-general'>
                <Spin size="large" tip='Cargando...'/>
            </div>
            
        )
    }

    return (
        
        <Router>
            <div>
                <Switch>
                    <PublicRouter isAuthenticated={ logged } component={ AuthRouter } path="/auth" />

                    <PrivateRouter isAuthenticated={ logged } component={ SingedRouter } path="/" />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>    
        
    )

};

export default AppRouter;