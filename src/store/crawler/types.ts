export const crawlerLoad = '[crawler] Load';
export const crawlerUpdate = '[crawler] update';
export const crawlerPlay = '[crawler] play';
export const crawlerStop = '[crawler] stop';
export const crawlerPause = '[crawler] pause';


export type Crawler = {
    id: string;
    car_name: string;
    expiredAt: number;
    pausedAt: number;
    status: string;
};

export type CrawlerState = {
    crawlers: Crawler[];
};

type CrawlerLoadAction = {    
    type: typeof crawlerLoad,
    payload: Crawler[]
};

type CrawlerPlayAction = {    
    type: typeof crawlerPlay,
    payload: number
};

type CrawlerStopAction = {    
    type: typeof crawlerStop
};

type CrawlerPauseAction = {    
    type: typeof crawlerPause
};

export type CrawlerActionTypes = CrawlerLoadAction | CrawlerPlayAction | CrawlerStopAction | CrawlerPauseAction;