import React from 'react';

const ErrorPage = ({ history }) => {
  const onClick = () => {
    history.goBack();
  };

  return (
    <div className="error_w">
      <div className="error">
        <ul>
          <li> 서비스 이용에 불편을 드려 죄송합니다.</li>
          <li>
            존재하지 않는 페이지거나
            <br />
            오류로 인하여 현재 페이지를 볼 수 없습니다.
          </li>
          <li>
            <button
              type="button"
              onClick={onClick}
              className="btn btn-default btn-lg"
            >
              돌아가기
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorPage;
