<!--js 파일 import, rendering-->
## js 파일 import, rendering
1. index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById("root"));
```
2. App.js
* react application이 하나의 component(App)만을 rendering 해야 한다.
* 따라서 index.js에 등록한 component에 다른 js를 import 해야 한다.
```js
import React from "react";
// react application이 하나의 component(App)만을 rendering 해야 한다.
// 따라서 index.js에 등록한 component에 다른 js를 import 해야 한다. 
import Potato from "./Potato";

// Potato.js의 위치를 지정해준다. 
function App() {
  return  <div> 
    <h1>'Hello'</h1>
    <Potato />
    </div> ;
}

export default App;
```
3. Potato.js
```js
import React from "react";

function Potato(){
    return <h3>I love potato </h3> 
}

export default Potato;
```
또는 
4. App.js
```js
import React from "react";

function Potato(){
  return <h1> I like potato</h1>
}

function App() {
  return  <div> 
    <h1>'Hello'</h1>
    <Potato />
    </div> 
}

export default App;
```
---
<!--prop-->
## Prop
* component : Food
* value : kimchi
* prop name : name 

```js
import React from "react";

function Food(){
  return <h1> I like potato</h1>
}

// Food component에 kimchi라는 value로 prop name 을 준다. 
function App() {
  return  <div> 
    <h1>'Hello'</h1>
    <Food name ="kimchi" /> 
    </div> 
}

export default App;
```
---
<!--React magic-->
## React magic - props 연결

```js
import React from "react";

// function Food({fav})
function Food(props){
  return <h1> I like {fav}</h1>
}

//배열 
const foodILike=[{
    name : 
}]

function App() {
  return  <div> 
    <h1>'Hello'</h1>

    </div> 
}

export default App;

```
* props 여러번 사용하기 
```js
import React from "react";

function Food({fav}){
  return <h1> I like {fav}</h1>
}

// props 여러번 사용하기 
function App() {
  return  <div> 
    <h1>'Hello'</h1>
    <Food fav ="kimchi"/> 
    <Food fav ="ramen"/> 
    <Food fav ="samgiopsal"/> 
    <Food fav ="chukumi"/> 
    </div> 
}

export default App;
```
<!--배열, map funtion-->
## 배열, map funtion
* array의 각 item에 function을 적용하고 array를 준다. 
* map은 array를 취하고 우리가 원하는 array를 반환한다. 
```js
const friends = ["김", "이", "박", "정"]
friends // ["김", "이", "박", "정"]

friends.map(function(friend){
    return friend + "♥";
})
// ["김♥", "이♥", "박♥", "정♥"]
```
* object
```js
import React from "react";

function Food({name, picture}) {
  return <div>
    <h2> I like {name}</h2>
    <img src = {picture}/>
    </div>
}

//배열 array

const foodILike =[
  {
    name : "찌개",
    image : 
      "http://www.aeriskitchen.com/wp-content/uploads/2021/04/Ground_Soybean_Stew_01-.jpg"
  },
  {
    name : "무나물",
    image : 
      "http://www.aeriskitchen.com/wp-content/uploads/2009/10/radish_sidedish2_01-1-2.jpg"
  },
  {
    name : "곤드레밥",
    image :
      "http://www.aeriskitchen.com/wp-content/uploads/2021/02/GonDeuReBap_01-.jpg"
  }
]
// object : dish : name, image
function App() {
  return  <div> 
    {foodILike.map(dish => (
    <Food name={dish.name} picture={dish.image} />
    ))}
    </div> 
}

export default App;
```
---
<!--propTypes-->
## PropTypes

### 1. 설치 
npm i prop-types
: prop-types : 전달받은 props가 내가 원하는 props 인지 확인한다.

* App.js
```js
import React from "react";
//props type
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return <div>
    <h2> I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src = {picture}/>
    </div>
}
//내가 얻고 싶어하는 props에 대한 설명을 적는다. 
Food.propTypes ={
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}


const foodILike =[
  {
    id : 1,
    name : "찌개",
    image : 
      "http://www.aeriskitchen.com/wp-content/uploads/2021/04/Ground_Soybean_Stew_01-.jpg", 
    rating : 5
  },
  {
    id:2,
    name : "무나물",
    image : 
      "http://www.aeriskitchen.com/wp-content/uploads/2009/10/radish_sidedish2_01-1-2.jpg",
    rating : 4.9
  },
  {
    id:3,
    name : "곤드레밥",
    image :
      "http://www.aeriskitchen.com/wp-content/uploads/2021/02/GonDeuReBap_01-.jpg", 
    rating : 3.8
  }
]

function renderFood(dish){
  return <Food 
            key={dish.id} 
            name={dish.name} 
            picture={dish.image}
            rating={dish.rating}/>
}

// object : dish : name, image
function App() {
  return  <div> 
    {foodILike.map(renderFood) }

    </div> 
}

export default App;
```
---
<!--state-->
## state 
* 동적 데이터와 함께 작업할 때 만들어져 변하지 않는 데이터
* 존재하지 않는 데이터 
```js
// add, minus 버튼 누를때 마다 숫자 바꾸기 

import React from "react";
import PropTypes from "prop-types";

// class React.Component 는 함수가 아니기 때문에 return을 하지 않는다. 
// render method를 자동으로 실행한다. 

// state : 객체(object) 이다. conponent 의 데이터를 넣을 공간이 있고 이 데이터는 변한다. 
// state : 내가 바꿀 데이터를 넣는 공간. conponent의 데이터를 변경하기 위해 
// class에서 state를 render 하려면 {this.state.count}로해야 한다. 함수는 {state}로 하면 된다. 

// set.State를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다. 

// React.Component : 삼성 
// App : React.Component 에서 확장됨 : 휴대폰 
class App extends React.Component{
  state = {
    count : 0
  }; 

// state는 객체이기 때문에 데이터를 변경하기 위해서는 setState라는 새로운 state를 받아야 한다. 
  add= () => {
    this.setState(current => { count : this.state.count + 1 });
  };
  
  minus = () => {
    this.setState(current => { count : this.state.count -1 });
  };

  render (){
    return (
    <div>
    <h1>The number is : {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
  );
  }

}

export default App;


```
---
<!--life cycle method-->
## life cycle method

* react가 component를 생성하고 없애는 방법 
* component가 render된 후 다른 함수가 호출된다. (ex. add 버튼을 누를 때 다른 함수도 호출된다. 
)

* Mount (웹사이트 접속)
  1. render() 실행 ("I'm rendering") 
  2. componentDidMount() 실행 ("component rendered")
</br>

* Update (버튼 누르기. setSate 호출)
   1. render() 실행 ("I'm rendering") 
   2. componentDidUpdate() 실행 ("I just updated")
</br>

* Unmount (다른 페이지 이동)
  1. render() 실행 
  2. omponentWillUnmount()실행 ("Goodbye")

```js
// life Cycle
// 웹사이트 점속 (Mount) : 1. render() 실행 ("I'm rendering") 2. componentDidMount() 실행 ("component rendered")
// 버튼 누르기 setState 호출 (update) : 1. render() 실행 ("I'm rendering") 2. componentDidUpdate() 실행 ("I just updated")
// 다른페이지로 감 (Unmount) : 1. render() 실행 2. omponentWillUnmount()실행 ("Goodbye")

import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(){
    console.log("hello")
  }
  state = {
    count : 0
  }; 

  add= () => {
    this.setState(current => { count : this.state.count + 1 });
  };
  
  minus = () => {
    this.setState(current => { count : this.state.count -1 });
  };
  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("Goodbye"); 
  }
  render(){
    console.log("I am rendering");
  }

  render (){
    return (
    <div>
    <h1>The number is : {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
  );
  }

}

export default App;
```
<!--github 배포 -->
## React, github 배포 
1. 설치 
npm i gh-pages
    * github의 페이지 도메인에 리액트 보여주기 
</br>
2. package.JSON 추가
  * 맨 뒤에 hompage 추가
```js
 "homepage" : "이름.github.io/레퍼지토리 이름"
```
* scripts 에 deploy, predeploy 추가
```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build", 
    "deploy" : "gh-pages -d build",
    "predeploy" : "npm run build"
  },
```
3. npm start build
    * deploy 업로드 
    * npm start build 하면 
