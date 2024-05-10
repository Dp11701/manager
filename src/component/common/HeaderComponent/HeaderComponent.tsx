import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

type HeaderComponentProps = {
  navigateContent: string;
  content: string;
};

const HeaderComponent: React.FC = ({
  navigateContent,
  content,
}: HeaderComponentProps) => {
  const navigate = useNavigate();
  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <Button onClick={() => navigate(`${navigateContent}`)} type="dashed">
        {content}
      </Button>
    </Header>
  );
};

export default HeaderComponent;
