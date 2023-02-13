// to merge all providers
import React, { cloneElement } from 'react';
import {UserContextProvider} from './UserContext';
import {LoginContextProvider} from './LoginContext';

function ProviderComposer({ contexts, children }) {
    return contexts.reduce(
        (kids, parent) =>
            cloneElement(parent, {
                children: kids,
            }),
        children
    );
}

export default function MainContextProvider({children}) {

    return (
        <ProviderComposer
            // add providers to array of contexts
            contexts={[
                <UserContextProvider/>,
                <LoginContextProvider/>
            ]}>

            {children}

        </ProviderComposer>
    );

}
