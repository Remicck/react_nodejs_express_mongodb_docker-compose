import request from 'superagent';

const url = 'http://localhost';

export const getAllFeed = async () => {
  const endPoint = url;
  try {
    const res = await request.get(endPoint);
    return res.body;
  } catch (error) {
    console.log(error);
    return {};
  }
};
