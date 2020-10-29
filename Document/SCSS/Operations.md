## Sass Operation (연산)

> Sass는 기본적인 연산 기능을 지원함<br>레이아웃 작업시 상황에 맞게 크기를 계산을 하거나 정해진 값을 나눠서 작성할 경우 유용

#### 산술 연산자

- `+` 더하기
- `-` 빼기
- `*` 곱하기
  - 하나 이상의 값이 반드시 숫자(Number)
- `/` 나누기
  - 오른쪽 값이 반드시 숫자(Number)
- `%` 나머지

#### 비교 연산자

- `==` 동등
- `!=` 부등
- `<` 대소 / 보다 작은
- `>` 대소 / 보다 큰
- `<=` 대소 및 동등 / 보다 작거나 같은
- `>=` 대소 및 동등 / 보다 크거나 같은

#### 논리(Boolean) 연산자

- `and` 그리고
- `or` 또는
- `not` 부정

### 숫자 (Numbers)

#### 1. 상대적 단위 연산

> 일반적으론 절대값을 나타내는 `px`단위로 연산을 하지만, 상대적 단위(%,em,vw 등)의 연산의 경우 `CSS calc()`로 연산해야함

- ```scss
  width: 50% - 20px; //단위 모순 에러
  width: calc(50% - 20px); //연산 가능
  ```

#### 2. 나누기 연산의 주의사항

> CSS는 속성 값의 숫자를 분리하는 방법으로 `/`를 허용하기에 `/`가 나누기 연산으로 사용되지 않을 수 있다.

- `font: 16px / 22px serif;` 같은 경우 `font-size: 16px`와 `line-height: 22px`의 속성값 분리를 위해 `/`를 사용함
- ```scss
    div {
        width: 20px + 20px; //더하기
        height: 40px - 10px; //빼기
        font-size: 10px * 2; //곱하기
        margin: 30px / 2; //나누기
    }

    /*Complied to*/

    div {
        width: 40px;
        height: 30px;
        font-size: 20px;
        margin: 30px / 2; /* ?? *//
    }
  ```

- `/`를 나누기 연산 기능으로 사용하려면 다음과 같은 조건을 충족시켜야함
  1. 값 또는 그 일부가 변수에 저장되거나 함수에 의해 반환되는 경우
  2. 값이 `()`로 묶여있는 경우
  3. 값이 다른 산술 표현식의 일부로 사용되는 경우
- ```scss
  div {
    $x: 100px;
    width: $x / 2; /*변수에 저장된 값을 나누기*/
    height: (100px / 2); //괄호로 묶어서 나누기
    font-size: 10px + 12px /3; //더하기 연산과 같이사용
  }
  ```

### 문자 (Strings)

> 문자 연산에는 `+`가 사용됨

- 문자 연산의 결과는 첫 번째 피연산자를 기준으로 함
- 첫 번째 피연산자에 따옴표가 붙어있다면 연산 결과를 따옴표로 묶음<br>반대로 첫 번째 피연산자에 따옴표가 붙어있지 않다면 연산결과도 따옴표를 처리하지않음

- ```scss
  div::after {
    content: "Hello " + World;
    flex-flow: row + "-reverse" + " " + wrap;
  }

  /*Complied to*/
  div::after {
    content: "Hello World";
    flex-flow: row-reverse wrap;
  }
  ```

### 색상 (Colors)

- ```scss
  div {
    color: #123456 + #345678;
    //R: 12 + 34 = 46
    //G: 34 + 56 = 9a
    //B: 56 + 78 = ce
    background-color: rgba(50, 100, 150, 0.5) + rgba(10, 20, 30, 0.5);
    //R: 50 + 10 = 60
    //G: 100 + 20 = 120
    //B: 150 + 30 = 180
    //A: Alpha channels must be equal
  }

  //Complied to
  div {
    color: #469ace;
    background-color: rgba(60, 120, 180, 0.5);
  }
  ```

- RGBA에서 Alpha 값은 연산되지 않으며 서로 동일해야 다른 값의 연산이 가능
- `opacity(), transparentize()`
  - Alpha 값을 연산하기 위한 색상 함수(Color Functions)
- ```scss
    $color: rgba(10,20,30,.5);
    div{
        color: opacity($color, .3) // 30% 더 불투명하게 (0.5 + 0.3 )
        background-color: transparentize($color, .2); //20% 더 투명하게 (0.5 - 0.2)
    }
  ```

### 논리 (Boolean)

> Sass의 `@if`조건문에서 사용되는 논리(Boolean)연산에는 `and, or, not` 이 있다.

- ```scss
  $width: 90px;
  div {
    @if not($width > 100px) {
      height: 300px;
    }
  }
  ```
