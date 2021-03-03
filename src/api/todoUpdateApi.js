const todoUpdateApi = async (axios, todo_id, todo_done) => {
    try {
      const url = '/todos/' + todo_id;
      const response = await axios.patch(url, {
          done: todo_done
      });
      //PUT 메소드는 데이터를 아예 대치, PATCH 메소드는 리퀘스트 바디에서 주어진 필드만 수정
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  export default todoUpdateApi;
  