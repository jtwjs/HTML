## 내장 함수 (Built-in Functions)

> Sass에서 기본적으로 제공하는 내장 함수

- [Sass Built-in Functions](https://sass-lang.com/documentation/modules)에서 모든 내장 함수를 확인 가능
  - `[]`는 선택 가능한 인수(argument)이다.
  - Zero-base numbering을 사용하지 않는다.

### 색상(RGB / HSL / Opacity) 함수

- **mix($color1, $color2)**
  - 두개의 색을 섞는다.
- **lighten($color, $amount)**
  - 더 밝은색을 만든다.
- **darken($color, $amount)**
  - 더 어두운색을 만든다.
- **saturate($color, $amount)**
  - 색상의 채도를 올린다.
- **desaturate($color, $amount)**
  - 색상의 채도를 낮춘다.
- **grayscale(\$color)**
  - 색상을 회색으로 변환
- **invert(\$color)**
  - 색상을 반전시킴
- **rgba($color, $alpha)**
  - 색상의 투명도를 변경
- **opacity($color, $amount) / fade-in($color,$amount)**
  - 색상을 더 불투명하게 만든다.
- **transparentize($color,$amount) / fade-out($color, $amount)**
  - 색상을 더 투명하게 만듦

### 문자(String) 함수

- **unquote(\$string)**
  - 문자에서 따옴표를 제거
- **quote(\$string)**
  - 문자에서 따옴표 추가
- **str-insert($string,$insert,\$index)**
  - 문자의 index번째에 특정 문자 삽입
- **str-index($string,$substring)**
  - 문자에서 특정 문자의 첫 index 반환
- **str-slice($string, $start-at, [$end-at])**
  - 문자에서 특정 문자를 추출
- **to-upper-case(\$string)**
  - 문자를 대문자로 변환
- **to-lower-case(\$string)**
  - 문자를 소문자로 변환

### 숫자(Number) 함수

- **percentage(\$number)**
  - 숫자(단위 무시)를 백분율로 변환
- **round(\$number)**
  - 정수로 반올림
- **ceil(\$number)**
  - 정수로 올림
- **floor(\$number)**
  - 정수로 내림(버림)
- **abs(\$number)**
  - 숫자의 절대 값 반환
- **min(\$numbers...)**
  - 숫자 중 최소값을 찾음
- **max(\$numbers...)**
  - 숫자 중 최대값을 찾음
- **random()**
  - 0부터 1사이의 난수를 반환

### List 함수

> 모든 List 내장 함수는 기존 List 데이터를 갱신하지 않고 새 List 데이터를 반환<br> 모든 List 내장 함수는 Map 데이터에서도 사용 가능

- **length(\$list)**
  - List의 개수를 반환
- **nth($list, $n)**
  - List에서 n번째 값을 반환
- **set-nth($list, $n, \$value)**
  - List에서 n번째 값을 다른 값으로 변경
- **join($list1, $list2, [$separator])**
  - 두개의 List를 하나로 결합
- **zip(\$lists...)**
  - 여러 List들을 하나의 다차원 List로 결합
- **index($list,$value)**
  - List에서 특정 값의 index를 반환

### Map 함수

> 모든 Map 내장 함수는 기존 Map 데이터를 갱신하지 않고 새 Map 데이터를 반환

- **map-get($map, $key)**
  - Map에서 특정 Key의 value를반환
- **map-merge($map1, $map2)**
  - 두 개의 Map을 병합하여 새로운 Map을 만듦
- **map-key(\$map)**
  - Map에서 모든 key를 List로 반환
- **map-value(\$map)**
  - Map에서 모든 value를 List로 반환

### 관리(Introspection) 함수

- **variable-exists(name)**
  - 변수가 현재 범위에 존재하는지 여부를 반환
  - 인수는 `$`없이 변수의 이름만 사용함
- **unit(\$number)**
  - 숫자의 단위를 반환
- **unitless(\$number)**
  - 숫자에 단위가 있는지 여부를 반환
- **comparable($number1, $number2)**
  - 두 개의 숫자가 연산 가능한지 여부를 반환
