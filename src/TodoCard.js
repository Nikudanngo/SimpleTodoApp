export const TodoCard = ({ item, index, setContent, setTitle }) => {
  return (
    <div
      key={index}
      className="TodoCard"
      onClick={() => {
        setTitle(item);
      }}
    >
      <p style={{ marginLeft: "10px" }}>{item}</p>
      <button
        style={{ marginRight: "10px" }}
        className="TodoCard-Button"
        onClick={() => {
          setContent((prevContent) => {
            const newContent = [...prevContent];
            newContent.splice(index, 1);
            return newContent;
          });
        }}
      >
        削除
      </button>
    </div>
  );
};
