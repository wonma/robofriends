import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'
import { robots } from './robots'; // robots는 오브젝트들로 구성된 array
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div>
		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
		<Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
		<Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
	</div>, 
	document.querySelector('#root')
);

// <Card /> 이런식으로 (execute 될) function의 이름이  JSX신택스의 '< , > ' 안에 들어가있으면,
// argument(늘? object로서 들어감)를 넣는 방법은, 바로 옆에 속성='값' 처럼 작성만 해 주면 됨. 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
