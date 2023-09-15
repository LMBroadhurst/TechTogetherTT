import React, {PropsWithChildren} from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/rtk/store'
import { PersistGate } from 'redux-persist/integration/react'

const Providers: React.FC<PropsWithChildren> = ({children}) => {

    return <React.StrictMode>
        {/* <Provider store={store}> */}
            {/* <PersistGate persistor={persistor}> */}
                {children}
            {/* </PersistGate> */}
        {/* </Provider> */}
    </React.StrictMode>
}

export default Providers