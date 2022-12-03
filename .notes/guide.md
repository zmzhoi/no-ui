# Guide

## Develop

Start development server:

```
npm start -w zmzhoi-cra
```

And then, run as watch mode package you want to develop:

```
npm run dev -w @no-ui/{package-name}
```

## Etc.

```sh
# init
npm init -w packages/portal
# package.json의 name이 portal로 되니, @no-ui/portal로 수동 변경 필요.

# install
npm install -w packages
```

1. tsconfig.json, rollup.config.js 통일 필요? 🎉
2. build:all 이 안됨 pareelr도 마찬가지.. tooltip이 portal에 의존하다보니..
3. package 생성 스크립트 필요 🎉
   1. plop 추가했는데.. 버전은 일단을 알파인데 앞으로 어케해야하지?
4. 스토리북
5. example 좀더 좋은 환경.. 롤업 watch 이용
6. 각 컴포넌트 코드별 주석
7. 문서화
8. clean after build
9. 컴포넌트
   1. popper 🎉
   2. skeleton 🎉
   3. modal
   4. spinner
   5. alert
   6. toast
   7. button humn...
   8. input ?
   9. selector ?
   10. 팔레트?
   11.
10. husky

모노레포에서는 스크립트실행을 루트에서한다.
하지만 -w 옵션으로 스크립트실행시 실제 스크립트실행되는 곳은 각 패키지지점이다.
jest.config.js는 스크립트실행 지점을 루트로 보는데, 이 곳이 각 패키지의 지점이 되고 그곳에서 jest.config.js를 찾는다
없으면. 위로올라가거나하지 않는것으로보인다.
고로 jest.config.js는 각 패키지마다 존재해야한다.
다행이 jest에서 바벨config는 위로올라가며찾기때문에 각 패키지마다 없어도 된다.

jest는 바벨을 읽을때 .babelrc, .babelrc.js 등을 무시한다. babel.config.js 가 추천됨

### 트러블슛

popper 만드는데 ref를 prop으로 사용하니(positionerRef 이런식) 워닝이뜬다. 원래안떳었는데 리액트버전올라가서그런가?
무튼 오류지우려고 포워드레프쓰는데 부모에서 자식 ref 가 undefined로 잡힌다..
많은 삽질끝에
useOutsideClick 훅을 자식에서 사용하기로 했다.
자식(Positioner)에선 부모(Popper) 의 ref가 잡힌다..
아 그래서 useOutsideClick을 Positioner에서 사용하기로하고끝..
포워드레프가 타입이 좀 달라서(함수이거나 뮤터블옵젝트,,, 원래대로면 레프옵젝트인데..) 좀 코드도이상하다. as도 썻고.. 함수인지아닌지검사도하고. 참..

## bootstrap

lerna의 bootstrap이 모든패키지에서 npm i 하는걸로아는데
npm workspaces 에서는 그냥 루트에서 npm i하면 모든 패키지의 의존성을 다 설치한다.

## Changeset

changeset은 패키지 업데이트 내역을 git 커밋 메세지로 관리하는게 적합하지 않다고판단한다.
개발자들이 원하는 시점에 불편함없이 CHANGELOG를 작성할 수 있어야한다고 말한다.
그래서 별도의 파일시스템(root/.changeset)을 만들어 저장한다.
그리고 changeset은 모노레포 버전관리 및 배포에 특화되었다. 싱글레포도 가능.

Install

```sh
npm i @changesets/cli
```

Initialize

```
npm run changeset:init   // changeset init
```

1. 특정 패키지를 수정하고 커밋까지 한다.
2. 변경사항을 기록하기 한다.
   1. npm run changeset // changeset
      1. 변경된 packages 선택.
      2. 변경될 버전 타입(major, minor, patch) 선택.
      3. 메모 입력
   2. 그러면, .changeset 디렉토리 하위에 특정 키 값으로 된 md파일이 생성되고, 그 곳에 입력된 정보들(변경사항)이 기록된다.
3. 이제, 기록된 변경사항(md파일)을 바탕으로 버전을 업데이트한다.
   1. npm run changeset -- version // changeset version
   2. 그러면, 기록된 변경사항을 바탕으로, CHANGELOG.md가 생성되고 기록된 패키지의 각 package.json의 version이 기록된 버저닝을 토대로 업데이트된다.

## Installation

```
npm i @changesets/cli
```

## Flow

### Initialize

1. Set version to `0.1.0` in All of packages. because i want to publish from version `0.1.1`.
2. `npx changeset init`
   1. Created `.changesets/config.json` `.changesets/README.md`.
3. Add ignore item of list in `.changes/config.json` (e.g. examples)
   1. Push item to `ignore` key in `.changes/config.json`
   2. Do not forget to set private to true in package.json of that package.
4. `npx changeset pre enter alpha` // enter/exit, rc/alpha/beta/ etc..
   1. Created `.changesets/pre.json`.

### Publish

1. Code whatever -> commit.
2. When you dicided release package, go below.
3. `npx changeset`
4. `npx changeset version` when you dicided release package.
   1. Updated version.
   2. Created CHANGELOG.md.
5. `npx changeset`

npm run changeset -- pre enter rc

### Changeset은 언제 만드나?

1. 기능 개발을 위해 코드를 수정하고 커밋을 한다.
2. changeset을 만든다.
3. versioning을 한다.
4. publish를 한다.
   이게 내가 이해한 일반적인 프로세스이다.
   Changeset을 여러 개 만들땐?
5. 기능 개발을 위해 코드를 수정하고 커밋을 한다.
6. changeset을 만든다.
7. 기능 개발을 위해 코드를 수정하고 커밋을 한다.
8. changeset을 만든다.
9. ... 반복 ...
10.

### Changeset Summary guide

New Changes.

- kiki
- huhu

이러면 아래처럼 CHANGELOG가 생성된다.

- <hash for commit added changeset>: New Changes.
  - kiki
  - huhu

### 패키지별 Semver 버전 관리에 대해

음.. chakra-ui는 패키지별로 메이저버전이 조금 다르다.
현재 @chakra-ui/react 의 최신버전은 2.4.1버전인데
각각의 패키지들이 minor patch 버전들은 다른게 당연하지만, (모노레포 -> 각각 독립적으로 관리되니까)
major버전은 하위호환성이 보장되지않을 때 변경되는 버전이므로
major가 서로 다르면 안되는거아닌가?
이건, @chakra-ui/toast 가 2에서 3버전으로 오를때
@chakra-ui/react의 2버전은 patch or minor가 업데이트되었다는건데
이건 toast 2버전을 사용하다가 3버전으로 업그레이드하면 기존소스에 문제가생길수있다는거다
근데 @chakra-ui/react에서 package-lock을 지우고 재인스톨하게되면 semver에 의해
버전이 업글되면서 기존 toast가 2에서 3버전으로 업데이트될수 있다.
??????? 예넨 왜 이렇게되어있을까?
일단, 모르겠다.
난 서로의 메이저버전은 동일하게 가는걸로 해야될 것 같다.

### 정리좀..

### changeset 생성 시점.?

changeset은 version시 CHANGELOG.md 파일의 각 항목에 들어간다.
즉, 어떠한 변경사항이 있을 때 changeset을 생성하면 그게 CHANGELOG에 기입된다는 소리다.
우리는 변경사항이 있으면 커밋을 한다. 커밋을 의미없이 하지 않는다.
changeset이 쌓일 때 해당 changeset이 생성된 시점의 커밋 해시가 CHANGELOG에 기입되므로
changeset 생성 커밋과 코드 변경사항 커밋은 따로가지않는게 좋은 것 같다.
즉, 기능을 개발후, changeset 생성한 후 같이 커밋을 하는게 맞는것 같다.
참고로 changeset으로 변경사항을 기록하는데, 쌓인 changeset들이 모두 같은 버전타입의 범프를 한다면 문제가안되지만,
만약 patch -> patch -> major로 된다면 version시 major만 변경된다.
혹은 patch -> major -> minor로 된다면 version시 major만 변경된다.
**즉, changelog가 여러 개 있어도 버전 범프는 하나만 변경되므로, 가장 높은 버전 타입만 범프되고, 나머지 changeset은 CHANGELOG에 버전타입별로 분류되서 기입될 뿐이다.**

### version전에 하나의 changeset만 생성해야하나? 아니다.

이전에 라이브러리를 배포할때도 커밋을 자유자재로 하다가 릴리즈시점에 npm version을 실행한 후 그 커밋에 태그를 달아서 배포를 했었다.
이것도 동일하다.
자유자재로 커밋하다가 (물론 커밋에는 changeset 포함되는게 좋다.) 릴리즈시점에 npx changeset version을 실행해서 여태쌓인 chaneset을 토대로 버전업을 한다.

version 실행 시점.

1. 쌓여있는 changeset과, pre.json에 쌓인 changeset을 비교해서 새로 쌓인 changeset을 뽑는다.
2. 새로 쌓인 changeset을 가지고 CHANGELOG를 만들고, 해당되는 패키지의 버전을 범프한다.
