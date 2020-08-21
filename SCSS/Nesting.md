## Nesting

> 타겟하는 element를 더 정확하게 해줌

#### 기존 element의 stlye 지정

- ```html
  <h2>Title</h2>
  <div class="box">
    <h2>box Title</h2>
    <button>box button</button>
  </div>
  <button>button</button>
  ```
- ```css
  h2 {
    color: red;
  }

  .box h2 {
    color: blue;
  }

  .box button {
    color: green;
  }
  button {
    color: red;
  }
  ```

#### SCSS nesting으로 style 지정

- ```scss
  h2 {
    color: red;
  }

  .box {
    margin-top: 20px;
    &:hover {
      background-color: green; /* === .box:hover */
    }
    h2 {
      color: blue;
      &:hover {
        color: red;
      }
    }
    button {
      color: green;
    }
  }
  ```
