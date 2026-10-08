# Next.js 메모 연습장

SKT ALEPH 대전 A반 · Next.js 메모 앱과 Git 브랜치 협업 과제

## 설치 및 실행

Node.js 20.9 이상 권장. `next-practice` 폴더에서 실행한다.

```bash
npm ci
npm run dev
```

브라우저에서 http://localhost:3000 접속. 개발 서버 종료: Ctrl+C.

배포 모드 확인:

```bash
npm run build
npm run start
```

## 구조와 개념

- Next.js는 React 기반의 웹 앱 프레임워크로 라우팅, 빌드, 서버 렌더링 등을 제공한다.
- `app/page.js`는 홈(`/`) 화면, `app/notes/page.js`는 메모(`/notes`) 화면이다.
- `app/layout.js`는 공통 HTML 레이아웃과 홈·메모 Link 내비게이션을 제공한다.
- `components/Counter.js`, `components/Notes.js`에는 `'use client'`가 있다. 브라우저 버튼 클릭, 입력, 상태 변경을 위해 Client Component여야 하기 때문이다.
- React `useState`로 카운터와 메모 배열을 관리한다. DB나 localStorage에 저장하지 않으므로 새로고침하면 초기 state로 복원된다. DB 저장 방식이면 서버에 보존하므로 새로고침 후 재조회해도 내용이 유지된다.
- 메모는 고유 ID를 갖고 목록을 `map()`으로 표시하며 ID를 `key`로 사용한다. 수정과 삭제도 ID로 처리한다.

## 직접 구현한 내용

홈의 카운터 증가/초기화, 홈·메모 Link, 메모 등록/수정/취소/삭제 확인, 중복 내용 메모의 ID별 관리, 공백 입력 거부, 빈 목록 안내, 반응형 스타일을 구현했다.

## 확인 순서

1. 홈에서 +1과 초기화를 누르고 메모 링크로 이동한다.
2. 같은 글을 두 개 추가해 한쪽만 수정하고 다른 항목은 유지되는지 확인한다.
3. 수정 취소, 저장, 공백만 있는 수정 시 오류 표시 및 원본 유지 확인.
4. 삭제 창 취소와 확인, 수정 중 메모 삭제 시 입력 폼 초기화 확인.
5. 모두 삭제 후 빈 목록 안내, 새로고침 후 기본 메모 2개 복원 확인.
6. 개발 서버 종료 후 `npm run build`, `npm run start`로 두 화면 동작 확인.

**검증 상태:** 사용자 PC에서 실제 클릭과 빌드 결과를 확인한 후 `TEST_RESULTS.md`를 작성한다. 실행하지 않은 검사를 통과한 것으로 기록하지 않는다.

## Git 협업 과제

상위 제출 폴더의 `GIT_WORK.md` 및 `git-practice-run.bat` 참조. PR 3개와 로컬의 두 폴더에서 실행한 Git 출력 기록이 필요하다.
