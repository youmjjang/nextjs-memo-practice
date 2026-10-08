# Git 협업 수행 기록

저장소: https://github.com/youmjjang/nextjs-memo-practice

## PR 기록 (GitHub에서 실제 확인)

| PR | 브랜치 → base | 변경 파일 | 커밋 | 상태 |
|---|---|---|---|---|
| [#1 민수](https://github.com/youmjjang/nextjs-memo-practice/pull/1) | feature/minsu → main | minsu.md | 2개 (최초+보완) | Merged, Create a merge commit |
| [#2 지윤](https://github.com/youmjjang/nextjs-memo-practice/pull/2) | feature/jiyun → main | jiyun.md | 1개 | Merged, Create a merge commit |
| [#3 체크리스트](https://github.com/youmjjang/nextjs-memo-practice/pull/3) | feature/checklist → main | checklist.md | 1개 | Merged, Create a merge commit |

원격 merge 커밋: PR #1 `5baa09f`, PR #2 `91bfc30`, PR #3 `901f8b4`.
PR별 변경 파일을 확인한 뒤 merge commit 방식으로 병합했다.

## 로컬 두 폴더에서의 실제 실행 결과

제공된 `git-work-log.txt`, `git-final-pull-log.txt`에서 확인한 출력만 기록한다.

- `git-practice-minsu`: origin = `https://github.com/youmjjang/nextjs-memo-practice.git`; `main`에서 `feature/minsu` 생성. `minsu.md` 추가 후 커밋 `3e7b4ac`.
- `git-practice-jiyun`: 동일 origin; `main`에서 `feature/jiyun` 생성. `jiyun.md` 추가 후 커밋 `47bc284`.
- 민수 폴더는 `feature/minsu` → `main` 전환 후 파일 차이를 확인하고 **main에서 작업 브랜치를 로컬 merge**했다. 출력 `Updating fb4a72b..3e7b4ac`, `Fast-forward`.
- 지윤 폴더는 `feature/jiyun` → `main` 전환 후 차이를 확인하고 **main에서 작업 브랜치를 로컬 merge**했다. 출력 `Updating fb4a72b..47bc284`, `Fast-forward`.
- 작업 브랜치 각각 push 성공: `feature/minsu -> feature/minsu`, `feature/jiyun -> feature/jiyun`.
- 민수 작업 브랜치에 보완 커밋이 추가된 상태에서 PR #1의 총 커밋 수 2개를 확인했다.
- `feature/checklist`는 지윤 폴더에서 작성했고 `bb1537e`로 커밋 후 push했다. 다만 **최초 두 PR 병합 후 최신 main을 pull하기 전에 이 브랜치를 만든 것**이 로그에 나타난다. 이 순서는 교안과 다르지만 PR #3은 정상 병합되었다.

### 실제 명령 및 출력 발췌

```text
# 민수/지윤 폴더에서
git remote -v
origin https://github.com/youmjjang/nextjs-memo-practice.git (fetch)
origin https://github.com/youmjjang/nextjs-memo-practice.git (push)

# 민수 로컬 main merge
Updating fb4a72b..3e7b4ac
Fast-forward
 minsu.md | 2 ++

# 지윤 로컬 main merge
Updating fb4a72b..47bc284
Fast-forward
 jiyun.md | 2 ++

# 첫 두 PR과 체크리스트 PR을 원격 병합한 후, 민수 폴더 main에서 pull
From https://github.com/youmjjang/nextjs-memo-practice
   fb4a72b..901f8b4  main -> origin/main
Updating 3e7b4ac..901f8b4
Fast-forward
 checklist.md | 4 ++++
 jiyun.md     | 2 ++
 minsu.md     | 1 +

# 지윤 폴더 main에서 pull
Updating 47bc284..901f8b4
Fast-forward
 checklist.md | 4 ++++
 minsu.md     | 3 +++

# 두 폴더 모두 파일 목록 확인
checklist.md
jiyun.md
minsu.md

# 최종 git status -sb (두 폴더 동일)
## main...origin/main
```

두 로컬 main은 최종 pull 후 origin/main과 일치한다. `feature/checklist` 로컬 브랜치는 삭제되었다. `feature/minsu`, `feature/jiyun` 로컬 브랜치 삭제 시에는 `branch not found`가 출력되었으므로 이미 존재하지 않는 상태였다.

**검증 범위:** GitHub의 원격 PR·병합 및 사용자가 제공한 CMD 로그를 통해 확인했다. 두 초기 PR 직후 별도의 pull이 수행됐다는 기록은 없고, **세 PR 병합 이후 최종 pull**은 확인했다.

## 두 질문

**main에서 `git merge feature/minsu`를 실행하면?**
현재 체크아웃된 `main` 브랜치가 `feature/minsu`의 변경을 받는다. 반대로 `feature/minsu`가 `main`의 변경을 받는 것은 아니다.

**GitHub에서 PR 병합 후에도 각 폴더에서 pull해야 하는 이유는?**
GitHub의 원격 `main`이 바뀌어도 각 로컬 폴더의 `main`은 자동으로 최신화되지 않는다. 두 폴더에서 각각 pull해야 같은 병합 결과를 받는다.

## Next.js 앱 검증과 구분

Git 기록 확인은 위와 같이 완료했다. `npm run build` 및 `npm run start`, 브라우저 클릭 테스트는 실행 성공 자료가 없어 **미검증** 상태이며, 검증한 것으로 표시하지 않는다. 자세한 항목은 `TEST_RESULTS.md` 참조.
