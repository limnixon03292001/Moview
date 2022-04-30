import { MdLocalMovies } from 'react-icons/md'
import { RiSlideshow3Fill } from 'react-icons/ri'

export const sideNav = [
    {
        path: '/',
        icon: <MdLocalMovies size={23}/>,
        label: 'Movies'
    },
    {
        path:'/tv-shows',
        icon: <RiSlideshow3Fill size={23}/>,
        label: 'Tv-shows'
    },
]