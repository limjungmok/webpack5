# Webpack
웹팩은 모던 자바스크립트 앱을 위한 정적모듈 번들러다. 웹팩이 앱을 처리할 때, 프로젝트에 필요한 모든 모듈을 매핑하는 의존성 그래프를 만들며, 필요에 따라 N개의 번들을 생성한다.

### Entry
엔트리에서 폴리필을 설정해주고, 통합 모듈의 입구를 설정한다.
entry 의 key 값을 설정하여 파일명에 추가할수있다.

### Output
하나 이상의 번들파일을 내보낼 위치를 설정, 파일이름을 설정한다.

### Loaders
로더는 전처리기다. JS코드를 번들링 하기 전에 처리하는 모듈
로더는 여러개를 추가하며, 밑에서부터 역순으로 처리된다.

`test`: regex를 통해 로더를 적용할 파일 확장자를 지정합니다.
`exclude`: 로더를 적용할 때 제외할 파일을 지정합니다.
`use`: 사용할 모듈 및 모듈에 대한 옵션을 지정합니다. (`.babelrc`로 빼서 관라하기도 합니다.)
`include`: 로더를 적용 할 


### Plugins
`HtmlWebpackPlugin`: index.html 파일을 추가로 생성하여 js파일을 매핑시켜준다.
`CleanWebpackPlugin`: 특정 폴더를 번들링마다 초기화시켜준다.
`MiniCssExtractPlugin`: `css`파일을 추출할때 사용한다.

### Mode
'development', 'production', 'custom..'

### Browser Compatibility

### Environment
`webpack-dev-server`: 로컬 웹서버를 제공하고 라이브 리로딩 제공한다. `contentBase`는 `output`과 동일하다.


### packages.json

`@babel/core` : 바벨은 JS 컴파일러. 트랜스파일러다. 트랜스파일 시 이용되는 코어 모듈
`@babel/preset-env`: 최신 JS를 이용할 수 있도록 도와주는 프리셋. 타겟환경을 지정하지 않아도 되며 세부 매니징을 할 필요가 없어서 편하고 번들사이즈도 작다.
`@babel/polyfill` : ES6+ 환경을 제공. 폴리필은 글로벌 스코프 혹은 native prototypes 로 추가될 것이다.


### dev-dependency vs dependency
사용되는 노드 패키지가 서비스코드에 나가야할지, 내부적인 번들링에만 포함되어야 할지 구분


## ETC
### 코드 스플릿
- `SplitChunksPlugin`: 중복되는 의존성을 제거하고 번들파일을 쪼갠다.
- `Entry Points`: 엔트리를 쪼개서 입력한다.
- `Dynamic Import`: 

### 번들 애널라이저
- 번들 내부에 어떤것들이 종속되어있는지 체크가능

