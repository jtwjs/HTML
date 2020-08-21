## SCSS \_extends

> 같은 코드를 중복하고 싶지 않을 때, 다른 코드를 확장(extend)하거나 코드를 재사용하고 싶을 때 사용

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
