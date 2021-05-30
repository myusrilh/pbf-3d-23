const baseUrlApi = 'http://localhost:3001';

const GetAPI = (path) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${baseUrlApi}/${path}`)
        .then(response => response.json())
        .then((result) => {
          resolve(result);
        }, (err) => {
          reject(err);
        })
    })
    return promise;
}

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${baseUrlApi}/${path}`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((result) => {
          resolve(result);
        }, (err) => {
          reject(err);
        })
    })
    return promise;
}

const DeleteAPI = (path,userId) =>{
    const promise = new Promise((resolve,reject)=>{
        fetch(`${baseUrlApi}/${path}/${userId}`,{
            method: 'delete',
            headers: { 
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            }
        })
        .then((result)=>{
            resolve(result);
        }, (err)=>{
            reject(err);
        })
    })
    return promise;
}


const getKomentar = () => GetAPI('comments?_sort=id&_order=desc');
const postKomentar = (dataYgDikirim) => PostAPI('comments', dataYgDikirim);
const deleteKomentar = (idDataYgDihapus) => DeleteAPI('comments',idDataYgDihapus);

const API = {
    getKomentar,
    postKomentar,
    deleteKomentar
}

export default API;