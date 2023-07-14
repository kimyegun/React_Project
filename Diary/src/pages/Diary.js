import { useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../component/Button";
import Header from "./../component/Header";
import Button from "./../component/Button";
import { useNavigate, useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  console.log(data);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))}기록`;
    return (
      <div>
        <Header
          title={title}
          leftChild={<Button text={"< 뒤로 가기"} />}
          rightChild={<Button text={"수정하기"} />}
        />
        <div>{id}번 일기</div>
        <div>Diary 페이지</div>
      </div>
    );
  }
};
export default Diary;
