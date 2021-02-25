const todosApi = async (axios, setTodos) => {
  try {
    const response = await axios.get('/todos');
    console.log(response.data);
    setTodos(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default todosApi;
