const todoDeleteApi = async (axios, todo_id, todo_done, todo_text) => {
  try {
    const url = '/todos/' + todo_id;
    console.log(url);

    const response = await axios.delete(url, {
      //   todo_id,
      //   params: {
      //     id: todo_id,
      //     // text: todo_text,
      //     // done: todo_done,
      //   },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default todoDeleteApi;
