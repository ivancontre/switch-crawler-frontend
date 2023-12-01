import { CrawlerActionTypes, CrawlerState, crawlerLoad, crawlerPause, crawlerPlay, crawlerStop } from "./types";

const initialState: CrawlerState = {
    crawlers: []
};

export const crawlerReducer = (state: typeof initialState = initialState, action: CrawlerActionTypes): CrawlerState => {

    switch (action.type) {
        case crawlerLoad:
            return {
                ...state,
                crawlers: [...action.payload]
            };

        case crawlerPlay:
            return {
                ...state
            };

        case crawlerStop:
            return {
                ...state
            };
        
        case crawlerPause:
            return {
                ...state
            };
    

        default:
            return state;
    }
};