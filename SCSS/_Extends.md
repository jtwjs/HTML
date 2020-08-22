## SCSS Extends (확장)

> 같은 코드를 중복하고 싶지 않을 때, 다른 코드를 확장(extend)하거나 코드를 재사용하고 싶을 때 사용<br>특정 선택자가 다른 선택자의 모든 스타일을 가져야하는 경우가 종종있는데 이럴 경우 확장기능 사용

- ```scss
  @extend 선택자;
  ```
- ```scss
  .btn {
    padding: 10px;
    margin: 10px;
    background-color: blue;
  }

  .btn-danger {
    @extend .btn;
    background-color: red;
  }

  //Complied to
  .btn,
  .btn-danger {
    padding: 10px;
    margin: 10px;
    background-color: blue;
  }

  .btn-danger {
    background-color: red;
  }
  ```

- 확장은 사용을 권장하지 않으며, Mixin을 대채 기능으로 사용하는것을 권장

#### '%' 사용

- ```scss
  %button {
    border-radius: 7px;
    font-size: 13px;
    text0transform: upercase;
    padding: 5px 10px; /*공통사항*/
  }
  ```
- ```scss
  @import "_buttons";

  a {
    @extend %button;
    text-decoration: none;
  }

  button {
    @extend %button;
    border: none;
  }
  ```
