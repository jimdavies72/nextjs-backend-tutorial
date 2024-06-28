import { comments } from "../data";

exports.GET = async (
  _req: Request, 
  { params }: { params: { id: string } 
}) => {
  
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  console.log(comment);

  return Response.json(comment, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
};

exports.PATCH = async (
  req: Request, 
  { params }: { params: { id: string } 
}) => {

  const body = await req.json()
  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  comments[index].text = text;

  return Response.json(comments[index], {
    headers: {
      "Content-Type": "application/json"
    },
    status: 200,
  });
};

exports.DELETE = async (
  req: Request, 
  { params }: { params: { id: string } 
}) => {

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  const deletedComment = comments[index]
  comments.splice(index, 1)

  return Response.json(deletedComment, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 202,
  });
};
