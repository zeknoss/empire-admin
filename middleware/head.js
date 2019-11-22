import Sitemap from "../data/sitemap";
import {flatMapDeep, find} from "lodash";

export default ({store, route}) => {
    let path = route.path,
        rawSm = JSON.parse(JSON.stringify(Sitemap));
    let sm = flatMapDeep(rawSm, item => {
        let children = item.node || [];
        delete item.node;
        return [item].concat(children);
    });
    let cNode = find(sm, ['path', path]);
    store.dispatch('updateHead', cNode ? {title: cNode.title, description: cNode.description} : {title: 404, description: 'Page not found'});
};
