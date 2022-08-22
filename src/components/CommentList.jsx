import Comment from './Comment';

const CommentList = () => {
  const data = [
    {
      id: 1,
      profile: 'img',
      name: 'abc',
      comment: 'aaaa',
      date: '2주',
    },
    {
      id: 2,
      profile: 'img',
      name: 'abc',
      comment: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
      date: '2주',
    },
    {
      id: 3,
      profile: 'img',
      name: 'abc',
      comment: 'aaaaaaaaaaaaaaa',
      date: '2주',
    },
    {
      id: 4,
      profile: 'img',
      name: 'abc',
      comment: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      date: '2주',
    },
    {
      id: 5,
      profile: 'img',
      name: 'abc',
      comment: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
      date: '2주',
    },
    {
      id: 6,
      profile: 'img',
      name: 'abc',
      comment:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      date: '2주',
    },
  ];

  return (
    <>
      {data.map((item) => (
        <Comment key={item.id} comments={item} />
      ))}
    </>
  );
};

export default CommentList;
