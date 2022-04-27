import React from 'react';
import { Button } from 'react-bootstrap';

function BSTest1() {
  return (
    <div>
      <h1>기본 방식으로 부트스트랩 사용</h1>
      {/* react bootstrap homepage compoents에 사용방법 참고 */}
      <Button variant="btn"> 기본버튼 </Button>
      <Button variant="btn btn-primary">Primary type</Button>
      <Button variant="btn btn-success">Success type</Button>
      <Button variant="btn btn-outline-primary">Outline-primary type</Button>
      <Button variant="btn btn-outline-info">Outline-info type</Button>
      <Button variant="btn btn-outline-warning">Outline-warning type</Button>
      <Button variant="danger">Theme Color : danger</Button>
      <Button variant="light">Theme Color : light</Button>
      <Button variant="link">link button type</Button>
    </div>
  );
}

export default BSTest1;
