const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ab2eb18c7b36c02c1959eed0dfff654a45ab64daf6d7740a96d9c3bbf863f55c66cf48c6e978445f7f2cc0cb3c0119da3cf1ab4f05b7379659b4ea9b369cad7dba3933bbe900c97353c32ed9a03023ab8d1851f01a6331f424d8efeeef06d673352cc1ff0956fc7fd14f96b99cb46fa0d5ce8ae863422a0e417d6f246060874d',
}

export async function getBlog(slug){
    let response = await fetch(process.env.REACT_APP_API_BASE_URL+`/api/blogs?filters[slug]=${slug}&populate=*`);
    let data = await response.json();
    if(data.data.length > 0){
        return data.data[0];
    }
    return null;
}

export async function getLatestBlog(){
    let response = await fetch(process.env.REACT_APP_API_BASE_URL+`/api/blogs?&populate=*`);
    let data = await response.json();
    if(data.data.length > 0){
        return data.data;
    }
    return null;
}

export async function getCategories(){
    let response = await fetch(process.env.REACT_APP_API_BASE_URL+`/api/categories?populate=image`);
    let data = await response.json();
    if(data.data.length > 0){
        return data.data;
    }
    return null;
}

export async function getBlogsByCategory(category){
    let response = await fetch(process.env.REACT_APP_API_BASE_URL+`/api/blogs?populate=*&filters[$and][0][categories][name][$eq]=${category}`);
    let data = await response.json();
    if(data.data.length > 0){
        return data.data;
    }
    return null;
}

export async function searchBlogs(param){
    let response = await fetch(process.env.REACT_APP_API_BASE_URL+`/api/blogs?populate=*&_q=${param}`);
    let data = await response.json();
    if(data.data.length > 0){
        return data.data;
    }
    return null;
}