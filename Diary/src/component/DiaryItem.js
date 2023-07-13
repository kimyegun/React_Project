import { useNavigate } from "react-router-dom";
import { getEmotionImgById } from "../util";
import "./DiaryItem.css";

const DiaryItem = ({ id, emotionId, content, date }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={["img_section", `img_section_${emotionId}`].join(" ")}
      >
        <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />

        <div onClick={goDetail} className="info_section">
          <div className="date_wrapper">
            {new Date(parseInt(date)).toLocaleDateString()}
          </div>
        </div>
        <div className="content_wrapper">{content.slice(0, 25)}</div>
      </div>
    </div>
  );
};

export default DiaryItem;
