import { DRACULA, BASIC, APPLE } from './themes/';
import THEMES from './constants/theme';


export const getTheme = themeName => {
    switch(themeName){
        case THEMES.APPLE:
            return APPLE;
        case THEMES.DRACULA:
            return DRACULA;
        default:
            return BASIC;
    }
};