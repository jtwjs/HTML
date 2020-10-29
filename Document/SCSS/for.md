## @for

> `@for`는 스타일을 반복적으로 출력함

- `@for`는 `throught`를 사용하는 형식과 `to`를 사용하는 형식으로 나뉨
  - 두 형식은 종료 조건이 해석되는 방식이 다름
- ```scss
  //through
  //종료 만큼 반복
  @for $변수 from 시작 through 종료 {
    //반복 내용
  }

  //to
  //종료 직전까지 반복
  @for $변수 from 시작 to 종료 {
    //반복 내용
  }
  ```

- 변수는 관례상 `$i`를 사용한다.
- ```scss
  //1부터 3번 반복
  @for $i from 1 through 3 {
    .throught:nth-child(#{$i}) {
      width: 20px * $1;
    }
  }

  //1부터 3직전까지만 반복(2번 반복)
  @for $i form 1 to 3 {
    .to:nth-child(#{$i}) {
      width: 20px * $i;
    }
  }

  //Complied to
  .through:nth-child(1) {
    width: 20px;
  }
  .through:nth-child(1) {
    width: 40px;
  }
  .through:nth-child(1) {
    width: 60px;
  }

  .to:nth-child(1) {
    width: 20px;
  }
  .to:nth-child(2) {
    width: 40px;
  }
  ```

- `to`는 주어진 값 직전까지만 반복해야 할 경우 유용하다.
- `:nth-child()`에서 특히 유용하게 사용되는 `@for`는 일반적으로 `through`를 사용

### @each

> `@each`는 List와 Map 데이터를 반복할 때 사용함 (for-in문과 유사함)

- ```scss
  @each $변수 in 데이터 {
    //반복 내용
  }
  ```

- ```scss
    //List Data
    $fruits: (apple, orange, banana, mango);

    .fruits {
        @each $fruit in $fruits {
            li.#{$fruit) {
                background-images: url("/images/#{$fruit}.png");
            }}
        }
    }

    //index()내장함수
    .fruits {
        @each $fruit in $fruits {
            $i: index($fruits, $fruit);
            li:nth-child(#{$i}) {
                left: 50px * $i;
            }
        }
    }
  ```

#### Map 데이터 반복

> Map 데이터를 반복할 경우 하나의 데이터에 두 개의 변수가 필요

- ```scss
  @each $key변수, $value변수 in 데이터 {
    //반복 내용
  }
  ```
- ```scss
    $fruit-data: {
        apple : korea,
        orange: china,
        banana: japan
    };

    @each $fruit, $country in $fruit-data {
        .box-#{$fruit} {
            background-image: url("/images/#{$country}.png");
        }
    }
  ```

### @while

> `@while`은 조건이 `false`로 평가될 때까지 내용을 반복

- 잘못된 조건으로 인해 컴파일 중 무한루프에 빠질수 있기에 사용 권장 X
- ```scss
  @while 조건 {
    //반복 내용
  }

  $i: 6;

  @while $i > 0 {
    .item-#{$i} {
      width: 2px * $i;
    }
    $i: $i - 2;
  }

  //Complid to
  .item-6 {
    width: 12px;
  }
  .item-4 {
    width: 8px;
  }
  .item-2 {
    width: 4px;
  }
  ```
