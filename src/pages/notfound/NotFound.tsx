import { Button } from 'components/common/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundDiv } from './styles';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  return (
    <NotFoundDiv>
      <div className="fof">
        <h1>Error 404 PAGE NOT FOUND</h1>
      </div>
      <div>
        <Button type="button" text="메인 화면으로 >" onClick={navigateHome} />
      </div>
    </NotFoundDiv>
  );
};

export default NotFound;
