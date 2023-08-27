/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  
  //let post = "강남 우동 맛집";
  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [title1, setTitle1] = useState('남자 코트 추천');
  let [title2, setTitle2] = useState('여자 코트 추천');
  let [title3, setTitle3] = useState('아무거나 추천');
  let [like1, setLike1] = useState(0);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState('');
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      <button onClick={() => {
        let copy = [...title];
        copy = copy.sort((a, b) => {
          if(a < b) return 1;
          if(a > b) return -1;
          if(a === b) return 0;
        });
        setTitle(copy);
      }}>가나다라순정렬

      </button>
      
      {
        title.map((a, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setModal(true);
                setModalTitle(title[i]);
              }}>{ title[i] }
                <span onClick={() => {
                  let copyLike = [...like];
                  copyLike[i] = copyLike[i] + 1;
                  setLike(copyLike);
                }}>👍</span>
                { like[i] }
              </h4>
            </div>
          )
        })
      }

      {
        modal === true ? <Modal modalTitle={ modalTitle } setTitle={ setTitle }></Modal> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{ props.modalTitle }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copyTitle = [...props.title];
        copyTitle[0] = '여자코트 추천';
        props.setTitle(copyTitle);
      }}>글수정</button>
    </div>
  );
}

export default App;
