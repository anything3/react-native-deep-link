import React from 'react';
import { createDeepLinkingHandler } from 'react-native-deep-link';
import { NavigationActions } from 'react-navigation';

export default createDeepLinkingHandler([
    {
        name: 'example:',
        routes: [
            {
                name: '/colors/:color',
                callback: ({ dispatch }) => ({ params: { color } }) => {
                    dispatch(NavigationActions.navigate({
                        routeName: 'Color',
                        params: {
                            color: color
                        }
                    }));
                }
            }
        ]
    }
]);