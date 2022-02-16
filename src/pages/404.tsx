import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Result
            status="404"
            title="404"
            subTitle="page not found"
            extra={
                <Button type="primary" onClick={() => navigate('/')}>
                    Back Home
                </Button>
            }
        />
    )
}

export default NotFoundPage