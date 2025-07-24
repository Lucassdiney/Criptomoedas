import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { Notfound } from './pages/notfound'

import { Layout } from './components/layout'

const router = createBrowserRouter([
    {
        element: <Layout></Layout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/detail/:cripto',
                element: <Detail></Detail>
            },
            {
                path: '*',
                element: <Notfound></Notfound>
            }
        ]
    }
])

export { router }