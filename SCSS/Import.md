## SCSS Import(가져오기)

> @import로 외부에서 가져온 Sass 파일은 모두 단일 CSS출려파일로 병합된다.
> <br> 또한 가져온 파일에 정의된 모든 변수 또는 Mixins 등을 주 파일에서 사용 가능

- Sass `@import`는 기본적으로 Sass파일을 가져오는데, CSS `@import` 규칙으로 컴파일되는 몇가지 상황이 있다.
  - 파일 확장자가 `.css`일 때
  - 파일 이름이 `http://`로 시작하는 경우
  - `url()`이 붙었을 경우
  - 미디어쿼리가 있는 경우
- ```css
  /*CSS의 @import 규칙대로 컴파일되는 경우들*/
  @import "hello.css";
  @import "http://hello.com/hello";
  @import url(hello);
  @import "hello" screen;
  ```

#### 여러 파일 가져오기

> 파일 이름을 ,로 구분해서 여러파일 가져오기 가능

- ```scss
  @import "header", "footer";
  ```

### 파일 분할(Partials)

> 프로젝트 규모가 커지면 파일들을 `header`나 `side-menu` 같이 각 기능과 부분으로 나눠 유지보수가 쉽도록 관리한다.

- 모든 파일이 컴파일 시 각각의 `~.css`파일로 나눠서 저장된다면 관리나 성능차원에 문제가될수 있다.
  - 그래서 Sass는 Partials 기능을 제공
  - 파일 이름 앞에 `_(언더바)`를 붙여 @import로 가져오면 컴파일 시 `~.css`파일로 컴파일하지 않는다.
- `Webpack`이나 `Parcel`, `Gulp`같은 일반적인 빌드툴에서는 Partials 기능을 사용하지 않아도 설정된 값에 따라 빌드된다.
  - 하지만 되도록 `_`를 사용하는 것을 권장!
