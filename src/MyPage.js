// MyPage.jsx
import React from 'react';
import PropTypes from 'prop-types';
// function MyPage() {
  class MyPage extends React.Component{
  render(){
  return (
    <div>
      <div>
        <div>
          <span>Mypage</span> {/*<button>logout</button>*/}
        </div>
        <hr />

        <div>안녕하세요. 로그인이 완료되었습니다.</div>
        <br />
        <div className='message-container'>나의 유저 네임: {this.props.info}</div>
        <div>나의 이메일 주소: </div>
      </div>
    </div>
  );}
}

MyPage.propTypes={
  info:PropTypes.string,
}

export default MyPage;