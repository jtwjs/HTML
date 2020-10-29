## CSS(Cascade Style Sheet)

### CSS의 변화

1. CSS3는 없다.
   - 각 기능별 모듈만 존재
   - "There will never be a CSS4" -Tab Atkins
2. CSS 명세가 방대해졌다
   - 2020년 9월 현재, 전체 CSS 프로퍼티 533개
   - 주요 개념과 자주 사용하는 속성 먼저 공부

### 레이아웃

> 렌더링 엔진의 동작과정 중 Layout 단계에서 각 요소의 크기와 위치를 계산한다.

1. 기본 개념 두 가지
   - 크기와 위치
2. CSS Box Model
   - CSS 레이아웃의 기본이 되는 원리
   - 엘리먼트의 크기를 정하는 표준
   - box-sizing 속성으로 크기 계산 방식 변경 가능
3. Flexbox
   - 편리한 레이아웃 작성을 위해 추가된 명세
   - 부모/자식/자식들 사이의 관계를 직관적으로 정의
   - IE도 10부터 제한적 지원
4. Grid Layout
   - 1차원적 Flexbox와 달리 2차원적인 구성

### 논리적 프로퍼티와 값

1. CSS Logical Properties and Values Module
   - 물리적인(physical) 프로퍼티나 값이 아닌 논리적인 프로퍼티와 값으로 레이아웃을 다룰 수 있게 하는 표준
2. inline과 block
   - inline: 텍스트 쓰기 방향
   - block: 텍스트 쓰기 방향에 수직
3. 용어의 변화
   - size: width나 height 대신 사용
   - start: 텍스트 흐름의 시작 위치
   - end: 텍스트 흐름의 끝 위치

![logical property-css](https://user-images.githubusercontent.com/60641307/97530379-56ddf200-19f5-11eb-9952-3f75700fb3a8.png)

![logical property2-css](https://user-images.githubusercontent.com/60641307/97530471-8ee53500-19f5-11eb-9248-52e95a0b1ca7.png)

### 선택자(Selector)

![selector-css](https://user-images.githubusercontent.com/60641307/97530569-c48a1e00-19f5-11eb-8977-8f94dd46224c.png)

1. CSS Selector
   - 문서 트리의 엘리먼트를 찾는 패턴 표준
2. 엘리먼트 선택자(Elemental selector)
   - 타입 선택자: HTML 태그 이름
   - 수도 엘리먼트: 문서 트리에 직접 존재않지만 엘리먼트처럼 취급
   - 유니버설 선택자: 모든 HTML 태그를 선택
3. 속성 선택자(Attribute selectors)
   - 아이디 선택자: 엘리먼트의 id 속성
   - 클래스 선택자: 엘리먼트의 class 속성
   - 수도 클래스: 특정 정보나 상황에 의해 적용
   - 속성 선택자: 엘리먼트의 모든 속성

#### 특정성(Specificit

> 선택자가 얼마나 구체적인지 나타내는 정도. 더 구체적일수록 우선순위가 높다.

![selector-specificity](https://user-images.githubusercontent.com/60641307/97531078-c2748f00-19f6-11eb-92e7-e984814d9067.png)

### BEM 그리고 SMACSS

> 선택자 작성 규칙을 표준화하려는 시도

#### BEM (Block, Element, Modifier)

- ```css
  .block {
  }
  .block__element {
  }
  .block--modifier {
  }
  .block__element--modifier {
  }
  ```

#### SMACSS의 State 표현 방식

- ```css
  .button {
    background: silver;
    color: black;
  }
  .button.is-primary {
    background: blue;
    color: white;
  }
  ```

### JS 안의 CSS

> 공유하지 않으면 충돌도 없다.

- ```js
  import jss from "jss";
  import color from "color";

  const styles = {
    button: {
      fontSize: 12,
      "&:hover": {
        background: "blue",
      },
    },
    ctaButton: {
      extend: "button",
      "&:hover": {
        background: color("blue").darken(0.3).hex(),
      },
    },
  };
  const { classes } = jss.createStyleSheet(styles).attach();
  document.body.innerHTML = `
    <button class="${classes.button}">Button</button>
    <button class="${classes.ctnButton}">CTA Button</button>`;
  ```

### 마진 병합(Margin Collapsing)

> 수직 인접한 두 마진이 더 큰쪽으로 병합되는 현상

1. 인접 형제 노드의 수직 마진은 병합된다.
   - 나중에 나타난 엘리먼트가 clear 되어야 하는 경우 제외
2. 부모와 자식의 인접한 수직 마진은 병합된다.
   - 단, 마진 사이에 다른 컨텐츠가 없어야 함
   - 예)패딩, 보더 등
3. 빈 블록의 수직 마진은 병합된다.
   - 한 블럭의 margin-top과 margin-bottom도 병합된다.
   - 두 마진을 분리할 높이, 패딩, 보더, 인라인 컨텐츠가 없을 때 발생

![margin-collapsing](https://user-images.githubusercontent.com/60641307/97531681-061bc880-19f8-11eb-81ed-2256be6f014d.png)
