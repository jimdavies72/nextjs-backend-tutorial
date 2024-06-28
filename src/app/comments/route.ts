import { comments }  from './data';

exports.GET = async () => {
  
  return Response.json(comments)
}

exports.POST = async (req: Request) => {
  const comment = await req.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text
  };
  
  comments.push(newComment);

  return Response.json(newComment, {
    headers: {
      "Content-Type": "application/json"
    },
    status: 201,
  });
};