## SCSS \_minxins

> 상황에 따라 다르게 코딩을 하고 싶을 때 사용

#### @mixin 추가

- ```scss
  /*사용할 mixin명 지정*/
  @mixin name {
    color: blue;
    font-size: 30px;
    margin-bottom: 12px;
  }
  ```
- ```scss
  @import name; /*지정한 mixin 등록*/
  h1 {
    @include name(); /*적용할 element & property에 @include로 추가*/
  }
  ```

#### mixin variable 허용

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

#### paraemter로 문자열 기입

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

#### @content

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
