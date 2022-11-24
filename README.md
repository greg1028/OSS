README.md

# 슬랙에서 작동하는 봇 프로그램 개발  



## 기능
  + 제곱 기능 (square.js) : 숫자를 입력하면 제곱한 값을 답장해줍니다.
  + 인사 기능 (greeting.js) : hi를 입력하면 봇이 3가지 인삿말중 한가지를 랜덤으로 답장해줍니다. 
  + 학과 사무실 안내 기능 (office.js): 학과사무실을 입력하면 어느 건물에 위치해있는지 답장해줍니다.
  + 학사일정 안내 기능 (schedule.js)  : 날짜를 입력하면 전북대 학사일정을 답장해줍니다. ex) 11/24
  + 메뉴 안내 기능 (menu.js)  : '밥'을 입력하면 전북대학교 진수원 오늘의 중식 메뉴를 답장해줍니다.  


## 개발진행 상황
+ v1.0.0  
  + 인사 기능 추가
+ v1.1.0  
  + 학과 사무실 안내 기능 추가  
  + 학사일정 안내 기능 추가  
  + 메뉴 안내 기능 추가

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
+ Node.js 설치
+ 프로젝트 설치, npm install 명령어를 사용하면 개발환경이 세팅됩니다.  


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