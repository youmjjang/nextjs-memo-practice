# Git 협업 수행 기록

저장소: https://github.com/youmjjang/nextjs-memo-practice

## 실제 실행 기록

아래 명령은 `git-practice-run.bat`에 구성되어 있다. 로컬에서 실행한 후 생성되는 `git-work-log.txt` 내용을 이 문서에 첨부한다. **실행 전에는 실제 실행한 것으로 간주하지 않는다.**

- 폴더 1: git-practice-minsu, origin: 위 저장소
- 폴더 2: git-practice-jiyun, origin: 위 저장소
- feature/minsu: minsu.md
- feature/jiyun: jiyun.md
- feature/checklist: checklist.md

| PR | 주소 | 검토한 변경 | 병합 상태 |
|---|---|---|---|
| 민수 | (생성 후 기입) | minsu.md 작성 및 보완 커밋 | (확인 후 기입) |
| 지윤 | (생성 후 기입) | jiyun.md | (확인 후 기입) |
| 체크리스트 | (생성 후 기입) | checklist.md | (확인 후 기입) |

### 질문

**main에서 `git merge feature/minsu`를 실행하면?** 현재 체크아웃된 main이 feature/minsu의 변경을 받는다. feature/minsu 브랜치 자체는 이동하지 않는다.

**GitHub에서 PR을 병합해도 pull이 필요한 이유는?** 원격 main의 병합 결과가 로컬 복제본에 자동으로 반영되지는 않기 때문이다. 각 폴더에서 main으로 이동해 pull하여 원격의 새 커밋을 가져와야 한다.

## PR 확인 절차

PR의 `Files changed` 탭에서 변경 파일 확인 후 본문이나 댓글에 직접 확인 결과를 쓴다. `Merge pull request` 메뉴의 **Create a merge commit**을 선택하고 두 폴더 main에서 pull한다. 자신의 PR Approve는 필요 없다.
