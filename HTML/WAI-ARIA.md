## WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)
> 인터넷을 사용하는 사용자들에게 쉽게 접근하기위한 장치<br> HTML을 보충해, 일반적으로 보조 기술이 알 수 없는 상호작용 및 흔히 쓰이는 어플리케이션 위젯에 필요한 정보를 제공한다.
- **WAI**: W3C에서 웹 접근성을 담당하는 조직
- **ARIA**: 리치 인터넷을 위한 W3C 접근성 명세
    - 장애를 가진 사용자가 웹 콘텐츠와 웹 어플리케이션(특히 JS를 사용하여 개발한 경우)에 더쉽게 접근할 수 있는 방법을 정의하는 여러 특성을 말함
- 즉, Ajax 같은 새로운(?) 기술에 대응하는 접근성 명세
- **Global attribute**: 어느곳에나 쓸수 있는 attribute
- 눈에 보이는것과 다르게 읽히고 싶을때 사용 ~!

```HTML
<a href="#" aria-label="Go to previous page"> <!-->Previous대신 aria-label의 값으로 읽힌다. <-->
    Previous
</a>

<span aria-hidden="ture">
    읽지마라! 중요하지않으니
</span>
```

### WAI-ARIA 가이드라인
1. HTML을 의미있게 작성한다.
2. 탭 목록, 탭, 탭 패널(```role="tablist|tab|tabpanel"```)
3. 툴팁(```role="tooltip"```)
4. 알럿(```role="alert"```)
5. 알럿 대화상자(```role="alertdialog"```)
6. 대화상자(```role="dialog"```)
7. 탐색(```nav, role="navigation"```)
8. 보충(```aside, role="complementary"```)
9. 의미없음(```role="none presentation"```)
10. 현재 상태(```aria-current="token"```)
11. 선택 상태(```aria-selected="true|false|undefined"```)
12. 팝업 상태(```aria-haspopup="token"```)
13. 확장 상태(```aria-expanded="true|false|undefined"```)
14. 눌림 상태(```aria-pressed="tristate"```)
15. 숨김 상태(```aria-hidden="true|false|undefined"```)
16. 제어 대상(```aria-controls="ID reference list"```)
17. 실시간(```aria-live="token"```)
    - 실시간으로 내용을 갱신하는 영역을 의미
    - 값으로 ```polite```, ```assertive```, ```off(default)```를 설정할수 있음
        - 갱신하는 내용의 중요도에 따라 선택
        - ```polite``` 중요도가 낮은 내용에 사용하여 현재 진행중인 음성 또는 타이핑을 방해하지 않고 뒤늦게 전달
        - ```assertive``` 중요도가 높은 내용에 사용하여 현재 진행중인 보조기기 작업을 중단하고 갱신 내용을 즉시 사용자에게 전달
    - 일반적으로 ```role```속성의 값이 ```alert```, ```alertdialog```, ```dialog```인 경우 사용하면 적절함
    - 그밖에 Ajax기법을 이용하여 실시간으로 내용을 갱신하는 모든 영역에 사용가능
18. 간결한 설명 참조(```aria-labelledby="ID reference list"```)
19. 간결한 설명(```aria-label="String"```)
20. 자세한 설명 참조(```aria-describedby=" ID reference list"```)
21. 모달(```aria-modal="true|false"```)




