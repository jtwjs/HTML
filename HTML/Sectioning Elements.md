## Sectioning Elements 사용법
>section = 단원<br> section, nav, article, sidebar
1. Sectioning element 내에는 반드시 **heading 태그**를 작성해야한다.

### Header 	&#60;header&#62;
> 문서 전체페이지나 각 섹션의 최상단 부분에서 제목과 header 영역 담당
- 가장 최상단부분 또는 도입부를 나타내고 있는 뉘앙스를 내포
- div와 동일하지만 좀 더 시멘틱 의미 포함

### Navigation 	&#60;nav&#62;
>문서만으로 이동할수있는 메뉴가 있는경우 사용
- sectioning elements이기 때문에 문법적으로 그 안에 heading 태그 하나를 사용해야함 (제목을 명시)

### Main &#60;main&#62;
>본문에 있어서 가장 핵심이되는 부분을 묶는데 사용
- 하나의 html에 있어 단 한개의 main만 사용해야함

### Section &#60;section&#62;
>논리적으로 완결성이 있는 경우 사용~
- sectioning elements이기 때문에 문법적으로 그 안에 heading 태그 하나를 사용해야함 (제목을 명시)

### Article &#60;article&#62;
>뉴스기사라던가 블로그처럼 그 안에 내용이 컨텐츠로서 완결성이 있는경우 section보다는 뉘앙스를 더살릴경우에 사용
- sectioning elements이기에 heading 태그 필수! 
- 정보 컨텐츠로서 독립적인 완결성이 있는경우..

### Footer &#60;footer&#62;
> 하단부의 뉘앙스를 내뿜는 태그!

### Aside &#60;aside&#62;
>사이드 쪽에 위치하거나 배너,광고등을 나타낼때 사용하는 태그
- sectioning elements이기에 heading 태그 필수! 
- 논리적으로 완결이 되었되 본문 내용과 직접적인 관련성이없고 따로 역할을 하는 경우 사용하면 된다.