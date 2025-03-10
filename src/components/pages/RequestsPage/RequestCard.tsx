import { API_URL } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import './requestsPage.scss';
import { Request } from "@/shared/types/Request";

export interface RequestCardProps {
    request: Request
}

const RequestCard = ({ request }: RequestCardProps) => {

  return (   
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
                        <button className="button accept" />
                        <button className="button reject" />
                    </div>
                </div>} 
    )

};
  
export default RequestCard;