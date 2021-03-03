const todoDeleteApi = async (axios, todo_id) => {
  try {
    const url = '/todos/' + todo_id;
    const response = await axios.delete(url, {
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default todoDeleteApi;
