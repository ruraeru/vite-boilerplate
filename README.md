# 🚀 Sado Training 프로젝트

이 문서는 Sado Training 프로젝트의 구조, 코딩 컨벤션 및 모범 사례를 알기 쉽게 설명합니다.

---

## 📂 1. 디렉토리 구조 (Directory Structure)

프로젝트는 깔끔하고 확장 가능한 코드베이스를 유지하기 위해 기능 중심의 디렉토리 구조를 따릅니다.

```
📁 src
├── 📁 api         // API 요청 함수 (axios 인스턴스 포함)
├── 📁 assets      // 이미지, 폰트 등 정적 파일
├── 📁 components  // 공통으로 사용되는 재사용 가능한 컴포넌트 (Button, Input 등)
│   ├── 📁 common
│   └── 📁 layout
├── 📁 constants   // 공통 상수 (API 경로, 메시지 등)
├── 📁 hooks       // 공통 커스텀 훅 (useInput, useDebounce 등)
├── 📁 lib         // 외부 라이브러리 관련 설정
├── 📁 pages       // 라우팅의 단위가 되는 페이지 컴포넌트
├── 📁 services    // 비즈니스 로직 (API 호출 조합 등)
├── 📁 store       // 전역 상태 관리 (Zustand, Recoil 등)
├── 📁 styles      // 전역 스타일 (GlobalStyle, theme 등)
├── 📁 types       // 공통 TypeScript 타입
└── 📁 utils       // 순수 함수 유틸리티 (formatDate 등)
```

## ✍️ 2. 컴포넌트 작성 규칙 (Component Rules)

- **하나의 파일, 하나의 컴포넌트:** 하나의 파일에서는 하나의 컴포넌트만 내보내는 것을 원칙으로 합니다.
- **비즈니스 로직 분리:** 복잡한 비즈니스 로직은 커스텀 훅으로 분리하여 컴포넌트는 UI와 상태 표시에만 집중하도록 합니다.
- **명확한 Props 타입 정의:** 컴포넌트의 Props 타입을 명확하게 정의합니다.

## 🏷️ 3. 네이밍 컨벤션 (Naming Conventions)

| 구분             | 규칙                   | 예시                           |
| ---------------- | ---------------------- | ------------------------------ |
| 컴포넌트 및 파일 | `PascalCase`           | `UserProfile`, `CommonButton`  |
| 변수, 함수, 훅   | `camelCase`            | `userName`, `fetchData`        |
| 이벤트 핸들러    | `handle` 접두사        | `const handleClick = () => {}` |
| Boolean 값       | `is` 또는 `has` 접두사 | `isLoading`, `hasError`        |

## 🧠 4. 상태 관리 (State Management)

- **Local State (`useState`):** 특정 컴포넌트에서만 사용되는 상태 (예: input 값, modal 열림 여부).
- **Global State (`Zustand`, `Recoil` 등):** 여러 페이지/컴포넌트에서 공유해야 하는 상태 (예: 로그인 유저 정보, 테마 설정).

## ✨ 5. 스타일링 (Styling)

- **Tailwind CSS:** Utility-First 접근 방식을 사용합니다.

## 🛠️ 6. 코드 품질 도구 (Code Quality Tools)

- **ESLint:** Airbnb 스타일 가이드 규칙을 적용합니다.
- **Prettier:** 저장 시 코드를 자동으로 포맷하여 일관된 스타일을 유지합니다.
- **Husky & lint-staged:** Git commit 전에 자동으로 ESLint와 Prettier를 실행하여 규칙에 맞지 않는 코드가 저장소에 올라가는 것을 방지합니다.
