import "./Editor.css";

const Editor = ({ initData, onSubmit}) => {
    return (
        <div className="Editor">
            <div className="editor_section">
                {/* 날짜 */}
                <h4>오늘의 날짜</h4>
            </div>
            <div className="editor_section">
                {/* 감정 */}
                <h4>오늘의 감정</h4>
            </div>
            <div className="editor_section">
                {/* 일기 */}
                <h4>오늘의 일기</h4>
            </div>
            <div className="editor_section">
                {/* 작성 완료, 취소 */}             
            </div>
        </div>
    )
}
export default Editor;