## MicroData(마이크로데이터 란?)

> 스코프(scope)로 범위가 제한된 사용자 지정 목록에 `이름/값의 쌍`으로 정의된 속성을 DOM에 추가해 기존 데이터에 주석을 다는 것

- 마이크로데이터를 사용할 최적의 경우는 이미 HTML을 정확하게 사용하고 있지만 HTML만으로 페이지가 포함하는 데이터의 시맨틱을 전부 나타낼수 없는 경우다.

### 마이크로데이터 목록(itemtype)

> 표준에 의해 사전에 정의되어 있는 것을 가져다 쓰거나 직접 원하는 방식으로, 마이크로데이터 목록을 정의할 수 있으며 자신의 웹페이지에 사용자 지정 속성으로 삽입할 수 있다.
> <br>특정 형식을 기준으로 정의된 아이템은 그 형식을 해석할 수 있는 모든 프로그램에 의해 처리가 가능하므로 범용성이 매우 높다.

- 마이크로데이터 목록을 정의하기 위해서는 **네임스페이스(namespace)**가 필요한데 `URL`을 사용하면 된다.
  - 강제사항은 아니지만 네임스페이스 URL은 실제 동작하는 웹페이지를 가리키는 것이 좋다.
- ```html
  <div itemtype="http://data-vocabulary.org/Person"></div>
  ```

#### `http://data-vocabulary.org`에 미리 정의된 목록

- 인물 정보 마크업
  - 이름, 별명, 이미지(사진), 직함, 직무, 위치(address)
  - `itemtype="http://data-vocabulary.org/Person`
- 조직 정보 마크업
  - 조직의 이름, 조직의 홈페이지, 조직의 위치, 전화번호, 위치정보
  - `itemtype="http:/data-vocabulary.org/Orgaization`
- 이벤트 마크업
  - 이벤트 이름, 이벤트 상세보기 링크, 이벤트 장소, 이벤트 설명, 이벤트 시작일시, 이벤트 종료일시, 이벤트 분류, 위치정보 등
  - `itemtype="http://data-vocabulary.org/Event`
- 리뷰 마크업
  - 리뷰중인 아이템 1~5사이의 점수, 리뷰 작성자, 리뷰 요약 리뷰 내용 등
  - `itemtype="http://data-vocabulary.org/Review`

### 마이크로데이터 스코프(itemscope)

> 마이크로데이터에 정의한 속성은 일정의 범위안에서 적용되는데, 이 범위를 `스코프(scope)`라 한다.<br> DOM의 부모-자식 관계와 유사하며 모든 마이크로데이터의 속성은 이 목록 내에 포함된다.

- ```html
  <div itemscope itemtype="http://data-vocabulary.org/Person"></div>
  ```

### 마이크로데이터 속성(itemprop)

> **이름/값**의 쌍으로 이루어지며 속성 이름의 집합이 마이크로데이터 목록이된다. <br>예를 들어 Person이라는 목록이 있다면 name이나 photo 같이 목록에 포함되는 속성을 정의할 수 있다.

- ```html
  <div itemscope itemtype="http://data-vocabulary.org/Person">
    <h1 itemprop="name">홍길동</h1>
    <p>
      <img itemprop="photo" src="" alt="홍길동 사진" />
    </p>
    <a itemprop="url" href="">홍길동은 누구인가</a>
  </div>
  ```

- 속성은 이름/값의 쌍으로 이루어진다고 했는데 itemprop의 값들은 이름에 해당하고 각각의 속성값은 대부분 각각의 요소의 텍스트노드를 의미한다.
- 텍스트노드외에 값을 가지는 경우
  - `<meta>`/ content 속성 값
  - `<audio>,<embed>,<iframe>,<img>,<source>,<video>` / src 속성 값
  - `<a>,<area>,<link>` / href 속성 값
  - `<object>` / data 속성 값
  - `<time>` / datetime 속성 값
  - 그밖의 요소 / 텍스트 값
