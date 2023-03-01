var BDY = document.body;

function changeTheme(){
    BDY.classList.toggle("dark-mode");
}

async function jsonChecker(i){
    const response = await fetch('http://localhost:7000/blogs');
    const blogs = await response.json();
    document.getElementsByClassName('heading-h1')[0].innerHTML = blogs[i].heading;
    document.getElementsByClassName('blog-info-content')[0].innerHTML = blogs[i].blogContent;
    document.getElementsByClassName('blog-info-knowledge')[0].innerHTML = blogs[i].blogInfo;
}

async function createBlog(){
    var heading = document.getElementById('heading').value;
    var blogContent = document.getElementById('blogContent').value;
    var blogInfo = document.getElementById('blogInfo').value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const newBlog = {
        "heading":heading,
        "blogContent":blogContent,
        "blogInfo":blogInfo
    };
    console.log(JSON.stringify(newBlog));
    const response = await fetch('http://localhost:7000/blogs',{
        method: 'POST',
        body: JSON.stringify(newBlog),
        headers: myHeaders,
        // redirect: 'follow'
    });
    const responseText = await response.text();
    console.log(responseText);
    
}