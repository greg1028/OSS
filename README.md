README.md

# 슬랙에서 작동하는 봇 프로그램 개발  



## 기능
  + 제곱 기능 (square.js) : 숫자를 입력하면 제곱한 값을 답장해줍니다.
  + 인사 기능 (greeting.js) : hi를 입력하면 봇이 3가지 인삿말중 한가지를 랜덤으로 답장해줍니다. 
  + 학과 사무실 안내 기능 (dept.js): 학과사무실을 입력하면 어느 건물에 위치해있는지 답장해줍니다. 
  + 학사일정 안내 기능 (haksa.js)  : 날짜를 입력하면 전북대 학사일정을 답장해줍니다. ex) 11/24
  + 메뉴 안내 기능 (menu.js)  : '밥'을 입력하면 전북대학교 진수원 오늘의 중식 메뉴를 답장해줍니다.
  + 주간 메뉴 안내 기능 (weak_menu.js)  : '이번주 뭐 나와' 입력하면 전북대 진수원 주간 메뉴 평가를 답장해줍니다.


## 개발진행 상황
+ v1.0.0  
  + 인사 기능 추가
+ v1.1.0  
  + 학과 사무실 안내 기능 추가  
  + 학사일정 안내 기능 추가  
  + 메뉴 안내 기능 추가
+ v1.2.0
  + 학과이름 입력시, 대/소문자 및 띄어쓰기에 대해 모두 허용
  + 입력된 학과 이름이 정확하지 않다면, 가장 유사한 학과에 대한 정보를 안내
  + 주간 메뉴 평가 기능 추가
  + 통합 테스트봇 추가


## 본 프로젝트 개발 환경
- 봇 작동 : 네이버 클라우드 활용, Ubuntu에서 작동시켰다.
- 사용 언어 : JavaScript
- npm: 8.19.2
- eslint : 코드 문법 검사 및 코드 포맷팅 
- husky : hook
- mocha : 함수 테스트
- axios, cheerio : 웹스크래핑  

## 개발 환경 설정
(Windows 기준)  
+ GitHub 프로젝트 Collaborater에 초대를 받는다
+ Node.js 설치
+ vscode 확장프로그램 Eslint설치
+ Github에서 프로젝트 설치
+ npm install 명령어를 사용하면 개발환경이 세팅됩니다.
>선택사항(Eslint 자동적용)
>>VSCODE 기본 설정 :사용자 설정
>>>"editor.codeActionsOnSave": {
>>>    "source.fixAll.eslint": true
>>>    },

## 작업 프로세스(혼자)

+ Develop 브랜치에서 새로운 기능을 개발할 브랜치 생성
+ Commit을 하면 ESLint 자동 검사
+ 작업 완료 후, develop 브랜치의 변경사항이 있을지 모르기때문에 develop 브랜치에서 pull을 해서 확인하고 개발한 브랜치에서 develop 브랜치를 병합한다.
+ (봇 실행 서버가 아닌 다른 에디터에서 작업한 경우) 
1. push (자동으로 hook, mocha 테스트 진행)
2. 서버에서 pull -> 작업한 브랜치 checkout
+ 봇을 작동시켜 작업한 내용이 잘 작동하는지 확인
+ Develop 브랜치로 Pull Request (GitHub Action을 통해 mocha, ESLint 자동검사를 통과 해야만 develop에 merge 가능)
+ 통과시 팀원 2명의 approve가 있어야 merge가능


## 작업 프로세스(협업)
+ Develop 브랜치에서 사용할 협업 브랜치 생성
+ 생성한 협업 브랜치에서 개인 브랜치 생성
+ 작업 분할
+ 개인 작업 완료 후, 협업 브랜치의 변경사항이 있을지 모르기때문에 협업 브랜치에서 pull을 해서 확인하고 개인 브랜치에서 협업 브랜치를 병합한다.
+ 이후 혼자 작업할 때와 같음(push, 봇 작동 확인, PR)


## 실행 방법
+ 서버 세팅 (Ubuntu 기준)
1. sudo apt-get update
2. sudo apt-get install nodejs npm 
3. sudo npm install @slack/rtm-api dotenv
4. Slack에서 봇 생성, 봇의 토큰을 서버에 token파일을 생성해 저장합니다.
5. nodejs index.js 명령어로 봇을 실행합니다. (또는 node index.js)

## 기여 방법
1. 본 프로젝트를 포크합니다.
2. 본인의 깃허브에 복제된 repository를 clone 하세요.
3. 새로 브랜치를 만들어 작업을 완료한 후 push 해주세요.
4. develop브랜치로 PR을 보내주세요.

>커밋 말머리에 어떤 수정이 있었는지 명시해주세요.
>> (feat) : 새로운 기능에 대한 커밋  
>> (fix) : 버그 수정에 대한 커밋  
>> (build) : 빌드 관련 파일 수정에 대한 커밋  
>> (chore) : 그 외 자잘한 수정에 대한 커밋  
>> (ci) : ci관련 설정 수정에 대한 커밋  
>> (docs) : 문서 수정에 대한 커밋  
>> (style) : 코드 스타일 혹은 포맷 등에 관한 커밋  
>> (refactor) : 코드 리팩토링에 대한 커밋  
>> (test) : 테스트 코드 수정에 대한 커밋





#### 개발 주의사항
+ ESLint 규칙을 통과하지 못하면 커밋, PR이 불가능합니다.
+ 테스트 파일이 Mocha Test를 통과하지 못하면 PR이 불가능합니다.
