## Nesting(중첩)

> 상위 선택자의 반복을 피하고 좀 더 편리하게 복잡하 구조를 작성할 수 있음

- ```scss
  .section {
    width: 100%;
    .list {
      padding: 20px;
      li {
        float: left;
      }
    }
  }

  /* Compiled to */
  .section {
    width: 100%;
  }
  .section .list {
    padding: 20px;
  }
  .section .list li {
    float: left;
  }
  ```

### Ampersand (상위 선택자 참조)

> 중첩 안에서 `&` 키워드는 상위(부모)선택자를 참조하여 치환함

- ```scss
  .btn {
    position: absolute;
    &.active {
      color: red;
    }
  }

  .list {
    li {
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .fs {
    &-small {
      font-size: 12px;
    }
    &-medium {
      font-size: 14px;
    }
    &-large {
      font-size: 16px;
    }
  }

  /*Complied to*/
  .btn {
    position: absolute;
  }
  .btn.active {
    color: red;
  }

  .list li:last-child {
    margin-right: 0;
  }

  .fs-small {
    font-size: 12px;
  }
  .fs-medium {
    font-size: 14px;
  }
  .fs-large {
    font-size: 16px;
  }
  ```

### @at-root (중첩 벗어나기)

> 중첩에서 벗어나고 싶을 때 @at-root 키워드 사용<br>중첩 안에서 생성하되 중첩 밖에서 사용해야 경우에 유용

- ```scss
  .list {
    $w: 100px;
    $h: 50px;

    li {
      width: $w;
      height: $h;
    }
    @at-root .box {
      width: $w;
      height: $h;
    }
  }

  .box2 {
    //Error
    width: &w;
    height: &h;
  }

  /*Complied to*/

  .list li {
    width: 100px;
    height: 50px;
  }
  .box {
    width: 100px;
    height: 50px;
  }
  ```

### 중첩된 속성

> `font-, margin-`등과 같이 동일한 네임 스페이스를 가지는 속성들을 다음과 같이 사용 가능

- ```scss
  .box {
    font: {
      weight: bold;
      size: 10px;
      family: sans-serif;
    }
    margin: {
      top: 10px;
      left: 20px;
    }
    padding: {
      bottom: 40px;
      right: 30px;
    }
  }

  /*Complid to*/
  .box {
    font-weight: bold;
    font-size: 10px;
    font-family: sans-serif;
    margin-top: 10px;
    margin-left: 20px;
    padding-bottom: 40px;
    padding-right: 30px;
  }
  ```
