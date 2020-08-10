## Screen reader only
> 화면에 보이진 않지만 스크린리더기에 읽힘
- ```CSS
    .sr-only {
        position: absolute;
        top: -9999px;
        left: -9999px;
        z-index: -1;
        width: 1px;
        height: 1px;
        overflow: hidden;
        visibility: hidden;
    }
 ```