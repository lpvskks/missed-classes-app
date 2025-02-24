import { UserCard } from '@/components/UserCard/UserCard';
import './requestPage.scss'; 
import { useState } from 'react';

export const RequestPage = () => {
  const [showGraySquare, setShowGraySquare] = useState(false);

  const handleCardClick = () => {
      setShowGraySquare((prev) => !prev); 
  };

  return (
      <div className="request-page">
          <h1>Заявки</h1>
          <div className="user-card-container" onClick={handleCardClick}>
              <UserCard width='400px' height='90px' showRoleButton={false} /> 
              {showGraySquare && <div className="gray-square">
                <div className="info-section">
                <p className="header-text">Пропускаемые даты:</p>
                <p className="dates-text">1-7 марта</p>
                <p className="document-text">Посмотреть документ</p>
                <p className="file-name">spravka.docx</p>
            </div>
            <div className="buttons-section">
                <button className="accept-button" />
                <button className="reject-button" />
            </div>
            </div>}
          </div>
      </div>
  );
};
