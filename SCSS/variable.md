## SCSS variable

> variable은 기본적으로 website에서 가장 중요한 colors나 가장 중요한 styles를 저장하고싶을때 사용<br>반복적으로 사용되는 값을 변수로 지정 <br>변수 이름 앞에는 항상 `$`를 붙임

1. \_파일명.scss 생성
   - 파일명앞에 \_(언더바)를 붙이는 이유: css로 변하지 않았으면 하는 것들 표시
   - scss만을 위한 파일이란 의미
2. `$변수이름: 속성값;`

3. 다른 scss파일에서 import로 추가

```scss
@import "_파일명";

body {
  background: $변수이름;
}
```

- 모든 property를 변수설정 가능

- ```scss
  $color-primary: #e96900;
  $url-images: "/assets/images/";
  $w: 200px;

  .box {
    width: $w;
    margin-left: $w;
    background-color: $color-primary;
    background-image: url($url-images + "bg.jpg");
  }

  /*Complid to*/
  .box {
    width: 200px;
    margin-left: 200px;
    background-color: #e96900;
    background-image: url("/assets/images/bg.jpg");
  }
  ```

### 변수 유효범위(Variable Scope)

> 변수는 선언된 블록({}) 내에서만 유효범위를 가짐

- ```scss
  .box1 {
    $color: #111;
    background-color: $color;
  }
  //Error
  .box2 {
    background-color: $color;
  }
  ```

### 변수 재 할당(Variable Ressignmnet)

- ```scss
  $red: #ff0000;
  $blue: #0000ff;

  $color-primary: $blue;
  $color-danger: $red;

  .box {
    color: $color-primary;
    background-color: $color-danger;
  }

  /*Complid to*/
  .box {
    color: #0000ff;
    background-color: #ff0000;
  }
  ```

### !global (전역설정)

> `!global` 플래그 사용하면 변수의 유효범위를 전역(Global)로 설정할수 있따.

- ```scss
  .box {
    $color: #111 !global;
    background-color: $color;
  }
  .box {
    background-color: $color;
  }
  ```
- 기존에 사용하던 같은 이름의 변수가 있을 경우 값이 덮어져 사용됨

### !default (초기값 설정)

> `!default` 플래그는 할당되지 않은 변수의 초깃값을 설정
> <br>즉, 할당되어있는 변수가 있다면 변수가 기존 할당 값을 사용

- ```scss
  $color-primary: red;

  .box {
    $color-primary: blue !default;
    background-color: $color-primary;
  }

  /*Complid to*/
  .box {
    backgrowund-color: red;
  }
  ```

- '변수와 값을 설정하겠지만, 혹시 기존 변수가 있을 경우에는 현재 설정하는 변수의 값을 사용하지않겠다'는 의미

### #{} (문자 보관)

> `#{}`를 이용해 코드의 어디든지 변수 값을 넣을 수 있다.

- ```scss
  $family: unquote("Droid+Sans");
  @import url("http://fonts.googleapis.com/css?family=#{$family}");

  /*Complid to*/
  @import url("http://fonts.googleapis.com/css?family=Droid+Sans");
  ```

- Sass 내장 함수 `unquote()`는 문자에서 따옴표를 제거함
