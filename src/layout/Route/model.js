import React from 'react';
import mirror from 'mirrorx';

export default mirror.model({
    name: 'route',
    initialState: {
        collapsed: false,
    },
    reducers: {
        setState(state, data) {
            return {
                ...state,
                ...data,
            }
        }
    }
})