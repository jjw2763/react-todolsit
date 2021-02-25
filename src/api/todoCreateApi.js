const todoCreateApi = async (axios, todo) => {
  try {
    const response = await axios.post('/todos', {
      text: todo.text,
      done: todo.done,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default todoCreateApi;
