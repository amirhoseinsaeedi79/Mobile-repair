
 import  Home  from './components/home/home'
 import Login from './components/login/login'
 import Signup from './components/login/signup'
 import About from './components/about/about'
 import Base from './components/courses/base'
 import  Hardware from './components/courses/hardware'
 import Software from './components/courses/software'
 import Tools from './components/courses/tools'
import Password from './components/login/password'
import Course from './components/courses/course'
 
 let routes = [
    { path: '/', element: < Home /> },
    {path: '/about', element: <About />},
    {path: '/login', element: <Login />},
    {path: '/software', element: <Software />},
    {path: '/hardware', element: <Hardware />},
    {path: '/tools', element: <Tools />},
    {path: '/base', element: <Base />},
    {path: '/signup', element: <Signup />},
    {path: '/password', element: <Password />},
    {path: '/courses', element: <Course />},



    
]

export default routes