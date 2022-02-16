import { FC } from 'react'
import { BellOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
//import { useQuery } from '@apollo/client'
//import { GeNotificationDocument } from './data/getNotification.github.gql.generated'

export interface INotificationProps {
    tmp?: string
}
// Todo: not done yet. Just build a layout
const Notifications: FC<INotificationProps> = () => {
    //const { data } = useQuery(GeNotificationDocument, { variables: { userName: "nmdung" } })
    return (
        <Link to="/notifications">
            <BellOutlined />
        </Link>
    )
}
export default Notifications