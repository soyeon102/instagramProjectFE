import Comment from './Comment';

const CommentList = ({ commentList }) => {
  return (
    <>
      {commentList.map((comments) => (
        <Comment key={comments.id} comments={comments} />
      ))}
    </>
  );
};

export default CommentList;
