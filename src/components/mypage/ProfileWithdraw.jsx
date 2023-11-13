import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const ProfileWithdraw = () => {
  return (
    <>
      <div className="border rounded-4 px-3 pt-3 mt-4 text-uppercase fs-sm">
        <p>
          회원 탈퇴일로부터 모든 개인 정보는 완전히 삭제되며 더 이상 복구할 수
          없게 됩니다.
        </p>
        <p>
          작성된 게시물은 삭제되지 않으며, 익명처리 후 com 로 소유권이
          귀속됩니다.
        </p>
      </div>
      <div className="mt-3 d-flex justify-content-between">
        <InputGroup className="w-75" size="sm">
          <InputGroup.Checkbox
            aria-label="Checkbox for following text input"
            
          />
          <Form.Control
            className="border-0"
            aria-label="Text input with checkbox"
            value="계정 삭제에 관한 정책을 읽고 이에 동의합니다"
          />
        </InputGroup>
        <Button className="w-25 px-4 btn-danger text-center">회원탈퇴</Button>
      </div>
    </>
  );
};

export default ProfileWithdraw;
