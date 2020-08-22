## 함수 (Functions)

> 자신의 함수를 정의하여 사용할수있다.

- 함수와 Mixins은 거의 유사하지만 반환되는 내용이 다르다.
  - Mixin은 지정한 스타일(Style)을 반환한다.
  - 함수는 보통 연산된(Computed) 특정 값을 `@return` 지시어를 통해 반환함
- ```scss
    //Mixins
    @mixin 믹스인이름($매개변수) {
        스타일;
    }

    //Functions
    @function 함수이름($매개변수) {
        @return 값;
    }

    /*사용*/
    //Mixin
    @include 믹스인이름(인수);

    //Functions
    함수이름(인수);
  ```

- ```scss
  $max-width: 980px;
  @function columns($number: 1, $columns: 12) {
    @return $max-width * ($number / $columns);
  }

  .box_group {
    width: $max-width;

    .box1 {
      width: columns();
    }
    .box2 {
      width: columns(8);
    }
  }

  //Complid to
  .box_group {
    width: 980px;
  }

  .box_group .box1 {
    /*총 너비의 약 8.3%*/
    width: 81.66667px;
  }
  .box_group .box2 {
    /*총 너비의 약  66.7%*/
    width: 653.3333px;
  }
  ```

- `@include`같은 별도의 지시어 없이 사용하기에 내가 지정한 함수이름과 내장함수 이름이 충돌할 수 있다.
  - 따라서 내가 지정한 함수에는 별도의 접두어를 붙여주는 것이 좋다.
  - 별도의 접두어 `extract-함수이름()`
