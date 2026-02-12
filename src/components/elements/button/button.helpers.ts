// Types
import { RouteProps } from "react-router-dom";

export const isButtonActive = (navigationSource: string, route: RouteProps) => {
    if (navigationSource === route.path) {
        return true;
    } else {
        return false;
    }
};
