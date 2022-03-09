# Webpack

- 의존 관계에 있는 자바스크립트, CSS, 이미지 등의 리소스들을 하나(또는 여러개)의 파일로 번들링하는 모듈 번들러

> 번들링: 여러개의 파일 중에서 종속성이 존재하는 파일을 하나의 파일로 묶어 패키징 시키는 과정
> 
- 의존 모듈이 하나의 파일로 번들링되므로 별도의 모듈 로더가 필요 없음
- HTML파일에서 script 태그로 여러 개의 자바스크립트 파일을 로드해야 하는 번거로움이 사라짐
- 여러개의 파일을 하나로 묶어주기 때문에 네트워크접속 부담을 줄여 더 빠른 서비스를 제공

### 개발환경 구축

- Webpack 설치

```bash
yarn add webpack webpack-cli
```

- babel 설치

```bash
yarn add @babel/core @babel/cli
yarn add @babel/preset-env
```

- babel-loader 설치
    - webpack이 모듈을 번들링할 때 babel을 사용하여 트랜스파일링하도록 설치
    - babelp-core을 이용해서 소스코드를 변환하고 변환된 소스코드를 웹팩에 전달하는 역할

```bash
yarn add babel-loader
```

- package.json 수정

```bash
{
	//...,
	scripts:{
		"build": "webpack -w"
	}
}
```

- webpack.config.js 작성
    - mode: 모드에 따라 번들링 최적화 진행(development/production)
    - entry: 웹팩에서 웹 자원을 변환하는 데 필요한 진입점이자 자바스크립트 파일 경로(번들링 시작점)
    - module: 웹팩에서 사용하는 모듈에 대한 설정
        - rules로 loader를 설정
    - output: 번들링 결과물 경로 및 이름을 지정
    - plugins: 기본적인 동작에 추가적인 기능을 제공
    - target: 웹팩에서 번들링 결과를 어떤 목표로 하는지 설정(wev, webworker, es5, es2020, node)
    - devtool: 소스맵 생성 관련 설정(source-map, inline-source-map 등)

```bash
const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스에서는 production
    devtool: 'source-map',
    entry: './src/js/main.js',
    // 번들링 된 js파일의 이름과 저장될 경로를 지정
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src/js')
            ],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            }

        }],
    },

}
```

- 테스트 코드 작성
- 번들링 실행
    - entry에 있는 파일에 module을 적용하고 추가적으로 plugins를 사용해 output을 출력

```bash
yarn run build
```