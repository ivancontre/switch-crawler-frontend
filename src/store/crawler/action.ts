import { Dispatch } from "react";
import { Crawler, CrawlerActionTypes, crawlerLoad } from "./types";
import { runFetch } from "../../helpers/fetch";
import { message } from "antd";

export const startLoadCrawler = () => {
    return async (dispatch: Dispatch<CrawlerActionTypes>) => {

        try {
            const token = localStorage.getItem('token') as string;
            const resp = await runFetch('api/crawler', {}, 'GET', token);
            const respJson = await resp.json();

            if (resp.status === 200) {
                dispatch(loadCrawler(respJson));
            } else {
                message.warn(respJson.msg, 7);
                console.log(respJson.msg);  
            }

        } catch (error) {
            console.log(error);
            message.error('Error al obtener mazos!');
        }
    }
};

export const startPlayCrawler = (id: string, minutes: number) => {
    return async (dispatch: Dispatch<CrawlerActionTypes>) => {


        try {
            const token = localStorage.getItem('token') as string;
            const resp = await runFetch('api/crawler/' + id + '/play', {minutes}, 'PUT', token);
            const respJson = await resp.json();

            if (resp.status === 200) {
                dispatch(loadCrawler(respJson));
            } else {
                message.warn(respJson.msg, 7);
                console.log(respJson.msg);  
            }


        } catch (error) {
            console.log(error);
            message.error('Error al obtener mazos!');
            
        }
    }
};

export const startStopCrawler = (id: string) => {
    return async (dispatch: Dispatch<CrawlerActionTypes>) => {


        try {
            const token = localStorage.getItem('token') as string;
            const resp = await runFetch('api/crawler/' + id + '/stop', {}, 'PATCH', token);
            const respJson = await resp.json();

            if (resp.status === 200) {
                dispatch(loadCrawler(respJson));
            } else {
                message.warn(respJson.msg, 7);
                console.log(respJson.msg);  
            }


        } catch (error) {
            console.log(error);
            message.error('Error al obtener mazos!');
            
        }
    }
};

export const startPauseCrawler = (id: string) => {
    return async (dispatch: Dispatch<CrawlerActionTypes>) => {


        try {
            const token = localStorage.getItem('token') as string;
            const resp = await runFetch('api/crawler/' + id + '/pause', {}, 'PATCH', token);
            const respJson = await resp.json();

            if (resp.status === 200) {
                dispatch(loadCrawler(respJson));
            } else {
                message.warn(respJson.msg, 7);
                console.log(respJson.msg);  
            }


        } catch (error) {
            console.log(error);
            message.error('Error al obtener mazos!');
            
        }
    }
};

const loadCrawler = (crawler: Crawler[]): CrawlerActionTypes => {
    return {
        type: crawlerLoad,
        payload: crawler
    }
};
