// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";




// const button = document.querySelector("button");

// button.onclick = function () {
//   let name = prompt("What is your name?");
//   alert("Hello " + name + ", nice to see you!");
// };
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.PNG") {
    myImage.setAttribute("src", "images/2.PNG");
  } else {
    myImage.setAttribute("src", "images/1.PNG");
    }
    
};
// 每次点击按钮时都会重新获取图片的 src 值，确保条件判断能够正确执行。
myButton.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/1.PNG") {
        myImage.setAttribute("src", "images/2.PNG");
    } else {
        myImage.setAttribute("src", "images/1.PNG");
    }
};

// 是的，你理解得很对。在事件监听中，整个 JavaScript 文件不会重新执行，而是只有特定的事件发生时，与该事件相关的函数或回调会被执行。

// 当你设置事件监听器，比如通过 onclick、addEventListener 等，你实际上是在告诉浏览器：“当某个事件发生时，请执行这个特定的函数或回调函数。”这样，只有当事件被触发时，相应的函数才会被执行，而不是整个 JavaScript 文件。
