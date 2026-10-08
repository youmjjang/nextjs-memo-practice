# 동작 테스트 기록 (2026-10-08)

## 빌드 및 화면 실행 결과

| 항목 | 결과 | 근거 |
|---|---|---|
| `npm run build` | 성공 | PowerShell에서 `Compiled successfully`, `$LASTEXITCODE = 0` 확인 |
| 홈 `/` | 정상 표시 | 사용자 제공 실행 화면에서 카운터 9 및 증가 버튼 표시 확인 |
| 메모 `/notes` | 정상 표시 | 사용자 제공 실행 화면에서 메모 3개와 등록·수정·삭제 인터페이스 확인 |
| 메모 등록 | 정상 동작으로 보고 | 사용자 제공 화면에 `안녕`을 포함한 메모 3개 표시 |
| 메모 수정 | 정상 동작 (사용자 확인) | 사용자가 실제 사용 후 정상 동작한다고 명시적으로 확인함 |
| 메모 삭제 | 정상 동작 (사용자 확인) | 사용자가 실제 사용 후 정상 동작한다고 명시적으로 확인함 |
| `npm run start` | 앱 실행 확인 | 홈과 `/notes` 화면이 로컬에서 정상적으로 열린 결과 확인. 별도의 명령 출력 캡처는 없음 |

## 기능별 검증 범위

- 카운터 증가: 화면에 9가 표시되어 있음.
- 메모 작성 및 목록 표시: 메모 3개 표시 확인.
- 메모 수정·삭제: 사용자가 정상 동작했다고 직접 확인함.
- 초기화 버튼, 같은 내용 메모 2개 구별, 수정 취소, 공백 입력 거부, 삭제 취소, 수정 중 삭제 시 폼 초기화, 모두 삭제 후 빈 목록, 새로고침 시 초기화는 개별 테스트 자료가 없음. 코드 구현 여부와 개별 실행 검증은 구분함.

## Git 협업 결과

- PR #1: https://github.com/youmjjang/nextjs-memo-practice/pull/1 — Merged (merge commit)
- PR #2: https://github.com/youmjjang/nextjs-memo-practice/pull/2 — Merged (merge commit)
- PR #3: https://github.com/youmjjang/nextjs-memo-practice/pull/3 — Merged (merge commit)
- 두 폴더에서 최종 pull 성공 및 세 파일 존재 확인. `GIT_WORK.md`에 실제 명령과 출력 기록 수록.

이 문서는 스크린샷, CMD 빌드 결과, 사용자 직접 확인을 구분해 작성했으며 수행하지 않은 개별 테스트를 성공했다고 주장하지 않는다.
