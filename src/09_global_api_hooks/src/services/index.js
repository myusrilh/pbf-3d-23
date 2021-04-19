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


const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteNewsBlog = (idDataYgDihapus) => DeleteAPI('posts',idDataYgDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;