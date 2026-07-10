<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 작업 완료 워크플로우

코드(또는 문서)를 변경했으면 매번 사용자에게 다시 묻지 말고 다음을 자동으로 수행한다:

1. 관련 문서를 함께 업데이트한다 — 특히 [manager.md](manager.md)/[manager.html](manager.html)에 정리된 항목(환경변수, DB 스키마, 배포 파이프라인, 기능 인벤토리, 알려진 리스크 등)에 영향을 주는 변경이면 두 파일 모두 갱신한다.
2. 앱 코드를 변경했다면 `npm run build`로 검증한다 (이 저장소는 CI 게이트가 없으므로 이것이 사실상 유일한 안전장치 — [manager.md](manager.md) 섹션 5 참고).
3. `git commit`으로 커밋한다.
4. `git push`로 `main`에 배포까지 진행한다 (Vercel이 push를 감지해 자동 배포).

사용자가 별도로 범위를 좁히거나(예: "커밋만 해줘") 되돌리라고 지시하지 않는 한, 코드 변경 작업의 기본 마무리 절차로 위 네 단계를 적용한다.
