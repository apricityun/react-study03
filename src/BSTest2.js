// import { Button } from 'bootstrap';
import React from 'react';

function click() {
  alert('!! Click !!');
}

function BSTest2() {
  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={click}>
        PRIMARY BUTTON
      </button>
      <button type="button" class="btn btn-success" onClick={click}>
        SUCCESS BUTTON
      </button>
      <button type="button" class="btn btn-info" onClick={click}>
        INFO BUTTON
      </button>
      <button type="button" class="btn btn-warning" onClick={click}>
        WARNGING BUTTON
      </button>
      <button type="button" class="btn btn-outline-danger" onClick={click}>
        OUTLINE-DANGER BUTTON
      </button>
      <button type="button" class="btn btn-link" onClick={click}>
        LINK BUTTON
      </button>
    </div>
  );
}

export default BSTest2;
