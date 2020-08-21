## SCSS variable

> variable은 기본적으로 website에서 가장 중요한 colors나 가장 중요한 styles를 저장하고싶을때 사용

1. \_파일명.scss 생성
   - 파일명앞에 \_(언더바)를 붙이는 이유: css로 변하지 않았으면 하는 것들 표시
   - scss만을 위한 파일이란 의미
2. ```scss
   $bg: #e7483c;
   ```

3. 다른 scss파일에서 import로 추가

```scss
@import "_파일명";

body {
  background: $bg;
}
```

- 모든 property를 변수설정 가능
