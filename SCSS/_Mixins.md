## Minxins (재활용)

> 스타일 시트 전체에서 **재사용 할 CSS 선언 그룹**을 정의하는 기능

- 선언하기 (`@mixin`)
- 포함하기 (`@include`)

### @mixin 선언

- ```scss
  /*사용할 mixin명 지정*/
  @mixin name {
    /*Style*/
    color: blue;
    font-size: 30px;
    margin-bottom: 12px;
  }
  ```

### @include 포함

- ```scss
  @import name; /*지정한 mixin 추가*/
  h1 {
    @include name(); /*적용할 element & property에 @include로 추가*/
  }
  ```

### 인수(Argumnets)

> Mixin은 함수(Functions)처럼 인수(Arguments)를 가질 수 있다.

- ```scss
  /*programing 처럼 paraemter 지정*/
  @mixin link($color) {
    text-decoration: none;
    display: block;
    color: $color; /*parameter 사용*/
  }
  ```
- ```scss
  @import link;

  a {
    @include link(red); // 파라미터로 색상 지정
  }
  ```

#### 인수의 기본값 설정

> 인수(argument)는 기본 값(default value)을 가질 수 있다.<br>`@include`포함 단계에서 별도의 인수가 전달되지 않으면 기본값이 사용됨

- ```scss
  @mixin 믹스인이름($매개변수: 기본값) {
    스타일;
  }

  @mixin dash-line($width: 1px, $color: black){
    border: $width dashed $color;
  }

  .box1 { @include dash-line;}
  .box2 { @include dash-pline{4px};}

  /*Complied to*/
  .box1 {
    border: 1px dashed black;
  }
  .box2 {
    border: 4px dashed black;
  }
  ```

#### 키워드 인수(Keyword Arguments)

> Mixin에 전달할 인수를 입력할 때 명시적으로 키워드(변수)를 입력하여 작성할 수 있다.<Br>별도의 인수 입력 순서를 필요로 하지 않아 편리하게 작성 가능
> <br>단, 작성하지 않은 인수가 적용될 수 있도록 기본값을 설정해주는 것이좋다.

- ```scss
  @mixin 믹스인이름($매개변수A: 기본값, $매개변수B: 기본값) {
    스타일;
  }
  @include 믹스인이름($매개변수B: 인수);
  ```
- ```scss
  @mixin position($p: absolute, $t: null, $b: null, $l: null, $r: null) {
    position: $p;
    top: $t;
    bottom: $b;
    left: $l;
    right: $r;
  }

  .absolute {
    //키워드 인수로 설정한 값만 전달
    @include position($b: 10px, $r: 20px);
  }
  .fixed {
    //인수가 많아짐에따라 가독성을 확보하기 위해 줄바꿈
    @include position(fixed, $t: 30px, $r: 40px);
  }
  ```

#### argument 조건문 활용

- ```scss
  @mixin test($word) {
    text-decoration: none;
    display: block;
    /* == 사용 가능*/
    @if $word == "odd" {
      color: blue; /* if-else문 사용 가능*/
    } @else {
      color: red;
    }
  }
  ```

* ```scss
  @import test;

  a {
    margin-bottom: 10px;
    &:nth-child(odd) {
      @include test("odd");
    }
    &:nth-child(even) {
      @include link("even");
    }
  }
  ```

#### 가변 인수(Variable Arguments)

> 입력할 인수의 개수가 불확실한 경우 가변인수 사용<Br> 가변 인수는 매개변수 뒤에 `...`을 붙여줌

##### 매개변수에 `...`을 사용하여 가변 인수 활용

- ```scss
  @mixin 믹스인이름($매개변수...) {
    스타일;
  }
  @include 믹스인이름(인수A, 인수B, 인수C);
  ```
- ```scss
  //인수를 순서대로 하나씩 전달받다가, 3번째 매개변수는 이눗의 개수에 상관없이 받음
  @mixin bg($width, $height, $bg-values...) {
    width: $width;
    height: $height;
    background: $bg-value;
  }

  div {
    //Mixin(bg) 설정에 맞게 인수를 순서대로 전달하다가 3번째 이후부터는 개수에 상관없이 전달
    @include bg(100px, 200px, url("/images/a.png") no-repeat 10px 20px, url("/images/b.png") no-repeat, url("/images/c.png"));
  }

  //Complied to
  div {
    width: 100px;
    height: 200px;
    background: url("/images/a.png") no-repeat 10px 20px, url("/images/b.png") no-repeat, url("/images/c.png");
  }
  ```

##### 가변 인수를 전달할 값으로 사용

- ```scss
  @mixin font($style: normal, $weight: normal) {
    font: {
      style: $style;
      weight: $weight;
    }
  }
  div {
    //매개변수 순서와 개수에 맞게 전달
    $font-values: italic, bold;
    @include font($font-value...);
  }
  span {
    //필요한 값만 키워드 인수로 변수에 담아 전달
    $font-values: (
      style: italic,
      size: 22px,
    );
    @include font($font-values...);
  }
  a {
    //필요한 값만 키워드 인수로 전달
    @include font((weight: 900, family: monospace) ...);
  }
  ```

#### @content

> 선언된 Mixindp `@content`이 포함되어 있다면 해당 부분에 원하는 **스타일 블록**을 전달할수 있다.<br>이 방식을 사용하여 기존 Mixin이 가지고 있는 기능에 선택자나 속성 등을 추가할수 있다.

- ```scss
  @mixin 믹스인이름() {
    스타일;
    @content;
  }

  @include 믹스인이름() {
    //스타일 블록
    스타일;
  }
  ```

- ```scss
  $minIphone: 500px;
  $maxIphone: 690px;
  $minTablet: $minIphone + 1;
  $maxTablet: 1120px;

  @mixin responsive($device) {
    @if $device == "iphone" {
      @media screen and (min-width: $minIphone) and (max-width: $maxIphone) {
        @content;
      }
    } @else if $device == "tablet" {
      @media screen and (min-width: $minTablet) and (max-width: $maxTablet) {
        @content;
      }
    } @else if $device == "iphone-l" {
      @media screen and (min-width: $minIphone) and (max-width: $maxIphone) and (orientation: landscape) {
        @content;
      }
    } @else if $device == "ipad-l" {
      @media screen and (min-width: $minIphone) and (max-width: $maxIphone) and (orientation: landscape) {
        @content;
      }
    }
  }
  ```

- ```scss
  @import "_mixins";

  h1 {
    color: red;
    @include responsive("iphone") {
      color: yellow;
    }
    @include responsive("iphone-l") {
      color: 60px;
    }
  }
  ```

- Mixin에게 전달된 스타일 블록은 Mixin의 범위가 아니라 스타일 블록이 정의된 범위에서 평가됨
  - 즉, Mixin의 매개변수는 전달된 스타일 블록 안에서 사용되지 않고 전역값으로 해석됨
- ```scss
  $color: red;
  @mixin colors($color: blue) {
    //Mixin의 범위
    @content;
    background-color: $color;
    border-color: $color;
  }

  div {
    @include colors() {
      //스타일 블록이 정의된 범위
      color: $color;
    }
  }

  //Complied to
  div {
    color: red;
    background-color: blue;
    border-color: blue;
  }
  ```
