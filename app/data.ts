import type React from "react"
import {
  Github,
  Mail,
  Briefcase,
  BookOpen,
  PenLine,
  Code2,
  ServerCog,
  Server,
  Database,
  FlaskConical,
  Wrench,
  Laptop,
  Send,
  FileCode,
  Paintbrush,
  Puzzle,
  Leaf,
  Cloud,
  Archive,
  Network,
  DatabaseZap,
  Container,
  Box,
  GitFork,
  Users,
  FileText,
} from "lucide-react"

export interface ContactLink {
  name: string
  url: string
  icon: React.ElementType
  text?: string
}

export interface BlogLink extends ContactLink {
  description?: string
  imageUrl?: string
}

export interface Skill {
  name: string
  icon?: React.ElementType
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface Experience {
  company: string
  role: string
  period: string
  department?: string
  description?: string[]
}

export interface ProjectTask {
  title: string
  items: string[]
  imageUrl?: string | string[]
}

export interface Project {
  id: string
  name: string
  shortDescription: string
  imageUrl?: string
  imageFit?: "cover" | "contain"
  tags?: string[]
  period?: string
  role?: string
  overview?: string
  techStack?: string[]
  teamComposition?: string[]
  tasks?: ProjectTask[]
  achievements?: string[]
  figmaUrl?: string
  githubUrl?: string
  npmUrl?: string
  notionUrl?: string
  liveUrl?: string
  playStoreUrl?: string
  category?: "company" | "freelance"
  featured?: boolean
  type: "work" | "personal"
  icon?: string // Emoji or path
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  status?: string
}

export interface AwardItem {
  name: string
  date?: string
  project?: string
  issuer?: string
}

export interface CertificationItem {
  name: string
  issuer?: string
  date?: string
}

export interface PortfolioData {
  name: string
  title: string
  profileImageUrl: string
  coverImageUrl: string
  introduction: string[]
  contactLinks: ContactLink[]
  blogLinks: BlogLink[]
  skillCategories: SkillCategory[]
  experiences: Experience[]
  workProjects: Project[]
  personalProjects: Project[]
  education: EducationItem[]
  awards: AwardItem[]
  certifications: CertificationItem[]
}

const basePortfolioData: PortfolioData = {
  name: "김호영",
  title: "Backend 개발자",
  profileImageUrl: "/profile-image.jpg",
  coverImageUrl: "https://www.notion.so/images/page-cover/solid_yellow.png",
  introduction: [
    "새로운 기술을 배우는 것에 두려움 없이 새로운 것을 마다 하지 않습니다.",
    "커뮤니케이션이 중요하다고 생각하며, 항상 의견을 주고받으며 더 좋은 방향으로 가기위해 노력합니다.",
    "항상 더 효율적으로 코드를 짤 순 없는지 검토하고 더 좋은 기술이 있는지 고민하고 실행에 옮깁니다.",
  ],
  contactLinks: [
    { name: "Email", url: "mailto:hoyoung7827@gmail.com", icon: Mail, text: "hoyoung7827@gmail.com"},
    { name: "GitHub", url: "https://github.com/beargame123", icon: Github, text: "beargame123" },
    { name: "Kmong", url: "https://kmong.com/gig/584801", icon: Briefcase, text: "Kmong Profile" },
  ],
  blogLinks: [
    {
      name: "공부일지 - Notion",
      url: "https://zinc-puppet-0e0.notion.site/d2ce7cf69c95450e97f5f105979836ee?v=9ce5322d678c4c799199b81ff37f8e30",
      icon: BookOpen,
      description: "개인 학습 내용을 정리하는 Notion 페이지입니다.",
    },
    {
      name: "개발 블로그 - Velog",
      url: "https://velog.io/@beargame/posts",
      icon: PenLine,
      description: "beargame님이 작성한 포스트 시리즈들을 확인해보세요.",
      imageUrl: "https://images.velog.io/velog.png",
    },
  ],
  skillCategories: [
    {
      name: "Backend",
      skills: [
        { name: "Kotlin", icon: Code2 },
        { name: "Java", icon: Code2 },
        { name: "Rust", icon: Code2 },
        { name: "Python", icon: Code2 },
        { name: "Spring Boot", icon: ServerCog },
        { name: "Spring MVC", icon: Server },
        { name: "Spring Data JPA", icon: Database },
        { name: "JPA", icon: Database },
        { name: "QueryDSL", icon: Database },
        { name: "Junit5", icon: Database },
        { name: "Mockito", icon: Database },
        { name: "Gradle", icon: Wrench },
        { name: "Intellij", icon: Laptop },
        { name: "RustRover", icon: Laptop },
        { name: "Django", icon: Laptop },
        { name: "Postman", icon: Send },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "HTML", icon: FileCode },
        { name: "CSS", icon: Paintbrush },
        { name: "JavaScript", icon: FileCode },
        { name: "Thymeleaf", icon: Leaf },
      ],
    },
    {
      name: "DevOps",
      skills: [
        { name: "AWS EC2", icon: Cloud },
        { name: "AWS S3", icon: Archive },
        { name: "AWS Route53", icon: Network },
        { name: "AWS RDS", icon: DatabaseZap },
        { name: "GitHub Actions", icon: Github },
        { name: "Docker", icon: Container },
        { name: "Docker-Compose", icon: Container },
        { name: "Kubernetes", icon: Box },
        { name: "MySQL", icon: Database },
        { name: "MongoDB", icon: Database },
      ],
    },
    {
      name: "Collaboration",
      skills: [
        { name: "Git", icon: GitFork },
        { name: "GitHub", icon: Github },
        { name: "Microsoft Teams", icon: Users },
        { name: "Notion", icon: FileText },
      ],
    },
  ],
  experiences: [
    {
      company: "제론소프트엔(ZeronSoftn)",
      role: "Backend Developer",
      period: "2025.12 ~ 현재",
    },
    { company: "프리랜서 (크몽)", role: "Backend, Frontend Developer", period: "2024.05 ~ 2025.10" },
    { company: "휴라(HURA)", role: "Backend Developer", period: "2023.10 ~ 2024.04", department: "SW개발팀" },
    {
      company: "휴라(HURA)",
      role: "Backend Developer (현장실습)",
      period: "2023.07.24 ~ 2023.10.23",
      department: "SW개발팀",
    },
  ],
  workProjects: [
    {
      id: "zeroset",
      name: "제로셋(ZeroSet) 2.0 — IT 자산통합 관리 솔루션",
      shortDescription: "Ledger 기반 무결성·감사 구조로 재설계한 IT 자산통합 관리 솔루션(MSA)",
      type: "work",
      featured: true,
      category: "company",
      icon: "🗄️",
      period: "2025.12 ~ 현재",
      role: "백엔드 개발",
      liveUrl: "https://home.zeronsoftn.com/pro_zroset",
      imageUrl: "/zeroset/hero-dashboard.png",
      imageFit: "cover",
      overview:
        "제론소프트엔의 IT 자산통합 관리 자동화 솔루션 '제로셋'의 안정화 및 고도화 프로젝트입니다. 에이전트가 수집한 PC·모니터·프린터 등 물리 자산과 소프트웨어 자산을 실시간으로 관리하며, 데이터 오류 발생 시 복구가 불가능하던 기존 구조를 Diff Log + Snapshot 기반의 강건한 감사(Audit) 구조로 재설계했습니다. 기존 멀티 레포 MSA를 멀티모듈 단일 레포로 재구성하고, 변경 이력을 위변조 불가능하게 증명하는 Ledger 시스템을 직접 설계·구현했습니다.",
      techStack: [
        "Kotlin",
        "Spring Boot",
        "MongoDB",
        "RabbitMQ",
        "GraphQL",
        "Spring Cloud OpenFeign",
        "Protobuf",
        "Gradle (Multi-module)",
        "Docker",
        "Kubernetes",
        "Helm",
        "GitLab CI",
        "SHA-256 / Sparse Merkle Tree",
        "Testcontainers",
        "MapLibre",
        "TileServer GL",
        "Planetiler",
      ],
      teamComposition: ["제로셋(ZeroSet) 백엔드 개발"],
      tasks: [
        {
          title: "ZeroSet Project 구조 설계 — 멀티 레포 MSA를 멀티모듈 단일 레포로",
          items: [
            "데이터 신뢰성 한계(최신 상태만 저장 → 시점 복구 불가·로그 정합성 문제)와 멀티 레포의 버전 불일치 문제를 정의하고 신규 구조 설계",
            "기존 멀티 레포 MSA(수집/물리자산/SW자산/세팅 서비스)의 데이터 수집 flow 분석 후 multi-project + single-repository 구조(zeroset-module)로 재구성",
            "빌드 관리 체계 이원화 — Version Catalog(libs.versions.toml)로 라이브러리 버전·번들을 중앙 관리하고, buildSrc(Convention Plugins)로 공통 컴파일 옵션·GraphQL 코드 생성 로직을 캡슐화 (Spring Boot 2.7.18·Gradle 8.14.3 Kotlin DSL 기준 통일, 사용 가이드 문서화)",
            "RabbitMQ 송신(Collect)·수신(Tangible/SW) 간 중복 정의되던 DTO와 서비스마다 파편화된 Exception을 zeroset-interfaces 공통 모듈로 통합 설계",
            "레거시 병행 운영(Strangler Pattern)으로 점진 이관 — Frontend GraphQL 인터페이스는 그대로 유지해 클라이언트 수정 없이 백엔드만 교체",
            "ZeroSet 가이드 문서 생성, 데이터 흐름도 최신화 및 주석 정리",
          ],
        },
        {
          title: "Hexagonal + DDD 아키텍처 적용 및 설계 (서비스 5종 일괄)",
          items: [
            "Controller/Resolver가 Service와 Repository를 직접 엮던 레거시 구조를 UseCase/Service → outbound Port → Persistence Adapter → Repository 의존 방향으로 재설계",
            "Collect·Tangible·Software·Software-Meta·Setting 5개 서비스에 동일 원칙 일괄 적용 — Resolver는 GraphQL 요청/응답 변환만, Service는 비즈니스 로직만, 저장소 접근은 Port 뒤로 은닉",
            "swAsset 그룹핑처럼 Resolver 안에 섞여 있던 핵심 비즈니스 로직을 Service 계층으로 분리 (기존 GraphQL 응답 필드와 DB 동작은 그대로 유지)",
            "오류 리스크가 낮은 서비스부터 순차 전환하는 전략 수립 — setting → collect → tangible → software 순서로 진행해 장애 리스크 최소화",
            "변경한 주요 Service에 회귀 테스트 추가, 변경마다 zeron-ledger test·compileKotlin으로 빌드 안정성 검증",
          ],
        },
        {
          title: "FeignClient 걷어내기 — 서비스 간 결합 제거",
          items: [
            "(Software·Tangible) ↔ Collect 간 Feign 요청 삭제 및 내부 처리 전환",
            "(Software·Tangible) ↔ Setting 간 Feign 요청 삭제 및 남아있던 호출 정리",
            "ZerosetUni → ZerobackUni 공통 모듈 전환과 함께 잔여 Feign 의존 제거",
            "application service가 Feign client를 직접 의존하던 구조를 UseCase → outbound Port → Adapter → Client 흐름으로 정리 — Font/SW meta 호출도 동일 패턴(FontMetaPort·SoftwareMetaPort)으로 통일",
          ],
        },
        {
          title: "GitLab CI 통합 및 Dockerfile 정비",
          items: [
            "서비스별 제각각이던 GitLab CI 파이프라인을 zeroset-module 기준으로 통합, Dockerfile 수정으로 빌드/배포 흐름 일원화",
          ],
        },
        {
          title: "Ledger(감사 이력) 아키텍처 설계 및 도입",
          items: [
            "설계 리서치 문서화 — Event Sourcing·CQRS·MS SQL Database Ledger(Updatable ledger table/Digest) 개념을 스터디하고 사내 Docs(142페이지 규모)에 리서치·설계 페이지 다수 작성",
            "저장 구조 4개 설계안 비교(조회 시 aggregation 재계산 비용, Snapshot 컬렉션 운영 부담, S3 즉시 쿼리 불가 등 기준) 후 'Ledger(diff+current 통합 저장, append-only) + Current' 2-컬렉션 구조 채택",
            "Merkle Tree · Sparse Merkle Tree · Hitchhiker Tree 자료구조 비교 검토 후 depth-256 SMT 채택 — Trusted Storage 구현 방안, Snapshot 생성 방식까지 문서로 검증",
            "최신 상태만 저장하던 구조를 Current(최신 상태) + Ledger(append-only 변경 이력) 구조로 분리",
            "TangibleAsset·SwAsset·Software·Setting 등 도메인별 *Current 조회 Repository 신설 및 조회 경로 전환",
            "Ledger에 diff·current·audit(누가/언제/어디서)을 함께 저장해 변경점과 변경 후 최종 상태를 동시에 추적 — type(INSERT/UPDATE/DELETE/RESTORE)과 prevId 참조로 변경 종류·이력 연결성을 DB에서 바로 확인",
            "복원(rollback) 3모드 설계 — VERSION(특정 버전)·PREVIOUS(prevId 체인 역행)·POINT_IN_TIME(특정 시각), 복원조차 과거 이력을 수정하지 않는 append-only RESTORE 레코드로 기록",
            "updatedAt·createdAt·device.sync_time 등 운영 메타데이터만 바뀐 no-op 변경은 Ledger version을 올리지 않도록 처리",
            "Current root field를 snake_case(tenant_id·ledger_key)로 통일하되 legacy camelCase 문서도 읽도록 fallback 추가 → 조회 miss로 인한 중복 자산 생성 방지",
            "매일 00:30(KST) 스냅샷 생성 시 전체 CRUD를 차단하는 Global Lock으로 스냅샷 정합성 보장",
            "Ledger·Merkle Tree 구조 문서화 및 구조도 작성으로 팀 공유",
          ],
          imageUrl: ["/zeroset/asset-detail.png", "/zeroset/part-history.png", "/zeroset/delete-history.png"],
        },
        {
          title: "zeron-ledger 공통 라이브러리 구축 (무결성 증명)",
          items: [
            "Ledger 로직을 core / mongodb / spring-boot-starter / testkit 멀티모듈 라이브러리로 분리",
            "Diff(flattened path 기반 변경점 계산), 키 정렬 canonical JSON으로 직렬화한 data payload만 SHA-256 해싱하는 해시 체인 구현 (운영 메타데이터는 해시 대상에서 제외)",
            "LedgerConfiguration(Current+Ledger)만 쓰거나 SmtConfiguration을 더해 SMT root 영속화까지 선택 적용하는 구성 옵션 설계",
            "depth-256 Sparse Merkle Tree(SMT)로 inclusion / non-inclusion proof 생성 및 검증 구현 (Current 상태 무결성 증명)",
            "@EnableZeronLedger auto-configuration으로 호스트 프로젝트가 MongoOperations만 제공하면 동작하도록 설계",
          ],
        },
        {
          title: "SMT 성능 최적화 (트랜잭션 단위 버퍼링)",
          items: [
            "write마다 CurrentState 전체를 재계산하던 방식을 변경 경로(최대 256개)만 갱신하는 증분 업데이트로 개선",
            "smtRoots를 insert에서 tenant당 1건 upsert로 수정하고, 노드 저장을 bulkOps로 묶음",
            "한 트랜잭션 내 다수 write를 메모리에 버퍼링했다가 beforeCommit 훅에서 일괄 flush (aergoio SMT CacheDB 패턴 차용)",
            "같은 key 중복 write dedup + 경로 공유 노드 overlay 재사용으로 DB write를 write N회 → 트랜잭션당 1회로 축소, 롤백 원자성 확보",
          ],
        },
        {
          title: "software-meta-service 신규 모듈 및 감지 SW 그룹화",
          items: [
            "고유 소프트웨어 식별용 메타 카탈로그(SoftwareMeta) 서비스 신설 — 제론 운영 + 고객사 자체 추가 가능",
            "수백 건 SwAsset에 모든 정규식을 매번 평가하던 비용을 Trie 인덱싱(prefix 매칭 후보로 한정)으로 최적화",
            "기존 getSwAssets GraphQL에 grouped 인자(default true)만 추가해 프론트 변경 없이 같은 SW의 여러 버전을 한 row로 통합",
            "swAssetCurrent 1470건 → 495 그룹 자동 시드(매칭률 100%), 거친 prefix는 inclusion 알고리즘으로 자동 정리",
            "device union 기반 설치 수량 중복 카운트 및 페이지 단위 그룹화의 페이징 깨짐 문제 해결",
          ],
          imageUrl: ["/zeroset/license.png", "/zeroset/os-license.png"],
        },
        {
          title: "폰트(Font) 자산·라이선스 관리 기능 구현",
          items: [
            "pms-feature의 FontInfoPushData 수신 → collect-service → RabbitMQ → software-service 흐름의 폰트 수집 파이프라인 구축",
            "postscriptName을 고유 식별자로 FontAsset(Current/Ledger/SMT) upsert, 설치 PC별 filePath·installedUser 관리",
            "non-login 수집 시 active_users 기반으로 개인 폰트를 삭제로 오판하지 않도록 삭제 판단 로직 설계",
            "폰트 라이선스 등록/할당/회수 GraphQL 및 라이선스 연동 상태(INTERWORKED) 자동 처리 구현",
          ],
        },
        {
          title: "운영 안정화 — 데이터 정합성·버그 수정 시리즈",
          items: [
            "Tangible Chart NPE, \"null\" 문자열이 저장되는 버그, 자산 상태 수정 불가, 부품교체 이력 '제품' 표기 오류, PMG·Agent 설치 기기 리스트 버그 등 운영 버그 수정",
            "Ledger에서 version만 올라가는 문제 2건 추적·수정, (Soft·Tan·Sett) DreamChartInput GraphQL 바인딩 자동 변환 문제 해결",
            "SW 사용시간 추적(ProcessMileage) 데이터 계층 정비 — 할당됐지만 저사용·미사용인 라이선스를 찾아 회수해 고객 비용을 줄이는 기능: device_id+date+tenant_id 복합 유니크 키로 중복 저장 방지, val/var 구분으로 식별자(groupId·userId) 불변성을 타입으로 강제",
            "UserDetail 컬렉션 이름 변경 및 UserDetail-swAsset groupId 불일치 문제 수정",
          ],
        },
        {
          title: "DOCS 최신화 & 컴파일러 경고 정리",
          items: [
            "Feign·RabbitMQ 등 실제 동작과 어긋난 서비스별 README를 코드 실측 기반으로 최신화 — 각 서비스 README 완료 후 Root(zeroset-module) README 갱신",
            "Kotlin 1.9.22 → 2.3.20 업그레이드로 드러난 경고(KT-73255) 해결 — @Autowired·@Qualifier 생성자 주입 annotation에 '@param:' 타겟을 명시해 기존 동작을 유지하며 경고 제거",
          ],
        },
        {
          title: "PC 그룹 → 자산 그룹 동기화 기능 (고객사 요구)",
          items: [
            "Device-manage의 PC 그룹 구조를 자산(Tangible) 그룹으로 동기화하는 기능을 스프린트 내 설계·구현",
            "그룹 ID 변경 시 사용자 중복 매핑 검증 로직 처리",
            "zeroset-tangible-asset-service 5.0.3 릴리스로 배포 (MR 4건), 사용자 자산 동기화 스키마·프론트 수정 문서화",
          ],
        },
        {
          title: "내부망(폐쇄망) 지도 서버 개발 — zeroback-map-service",
          items: [
            "설계 원칙: \"빌드는 1회(사외), 런타임은 outbound 0\" — 인터넷이 필요한 단계를 사전 빌드와 지오코딩 서버 egress 한 곳으로 격리, 런타임 배경 지도는 완전히 내부망에서만 동작",
            "① 사전 빌드 파이프라인: OSM pbf 원본 → Planetiler로 전국 지도 타일(korea-full.mbtiles) 생성 → TileServer GL + 타일·글리프(폰트)·sprite(아이콘)·라이트/다크 스타일(style.json)을 Docker 이미지에 통째로 베이킹 — 타일 데이터만 담는 경량 이미지(Dockerfile.data)도 분리 구성",
            "② 런타임: 지도를 '그리는' 건 프론트(MapLibre·GPU), 서버(TileServer GL)는 화면에 보이는 영역의 타일·자산만 서빙 — 에이전트 점·클러스터링, POI 아이콘+한글 라벨, 클릭 정보 팝업, 라이트/다크 테마 구현",
            "③ 폐쇄망 지오코딩: 에이전트 공인 IP → geolocation-module이 서버에서 1회만 외부 Geolocation API 호출 → 좌표를 MongoDB에 저장하고 런타임엔 저장된 좌표만 조회 — 방식 자체를 docs(airgap-geocoding)로 문서화",
            "지도 샘플 프론트(2D/3D 빌딩 뷰, 장비 위치 마커) 개발 — IT 자산 '위치' 표시, 위치 이동 감지 시 자동 분실 처리 연계까지 고려한 설계 (MR 3건)",
          ],
        },
        {
          title: "GraphQL 예외 처리 정비 & Spring Boot 3.5.15 업그레이드",
          items: [
            "존재하지 않는 ID 조회 시 BadRequest가 500으로 반환되던 GraphQL 예외 처리 경로 수정 (에러 케이스를 직접 주입해 검증)",
            "ZeroSet 모듈·Device-manage 전반 Spring Boot 2.7.18 → 3.5.15 업그레이드 진행 및 GraphqlConfig 등 버전 이슈 대응 (진행 중) — 1월 모노레포 전환 시점부터 3.x 마이그레이션 실익을 검토해온 계획의 실행",
          ],
        },
        {
          title: "(진행 중) ZeroMon 동적 데이터 추출기 — 고객 셀프서비스 통계/리포트",
          items: [
            "수동 DB Query로 만들어 주던 고객 리포트를 고객사가 직접 원하는 형태로 추출할 수 있게 하는 기능 설계",
            "MongoDB aggregation 기반 동적 컬럼 구성 — 생산시점별 PC/모니터 목록, PC별 네트워크(DNS) 정보, NIC 그룹핑을 통한 미인가 장치 확인 등 고객 사례 대응",
            "서버 리소스 보호를 위해 1회성 실행으로 제한하되 preset은 저장 가능하도록 설계",
          ],
        },
      ],
      achievements: [
        "복구 불가·정합성 오류가 있던 기존 구조를 Current + Ledger + SMT 기반의 위변조 증명 가능한 감사 구조로 재설계",
        "Ledger 무결성 검증 로직을 core/mongodb/spring-boot-starter/testkit 멀티모듈 공통 라이브러리(zeron-ledger)로 추출",
        "SMT 갱신 비용을 전체 재계산에서 트랜잭션 단위 증분 + 버퍼링으로 최적화하여 DB write를 트랜잭션당 1회로 축소",
        "운영 메타데이터만 바뀌는 무의미한 Ledger version 증가와 Current 조회 miss로 인한 중복 자산 생성 제거",
        "Trie 매칭 메타 카탈로그로 감지 SW 자동 그룹화(매칭률 100%) 및 폰트 자산·라이선스 관리 기능 신규 도입",
        "고객사 요구사항(PC 그룹 동기화·내부망 지도·동적 리포트)을 2주 스프린트 단위로 릴리스 — tangible-asset-service 5.0.3 등 버전 릴리스 주도",
        "레거시 병행 운영(Strangler Pattern) + 00:30 Global Lock 스냅샷 정책으로 서비스 중단 없이 점진 전환 — 프론트 GraphQL 인터페이스 무변경 유지",
        "Event Sourcing·CQRS·SMT 리서치와 설계안 4종 비교 문서로 아키텍처 의사결정 주도 — '3월 설계 → 4월 개발 → 5월 초 릴리즈' 로드맵을 직접 수립하고 달성",
      ],
      tags: ["Kotlin", "Spring Boot", "MSA", "MongoDB", "Ledger", "Merkle Tree", "RabbitMQ", "GraphQL"],
    },
    {
      id: "zeron-feedback",
      name: "Zeron Space Portal — 고객 피드백 관리 시스템",
      shortDescription: "폐쇄망 고객사까지 지원하는 피드백 수집·답변 시스템 (백엔드 설계~관리 UI)",
      type: "work",
      featured: true,
      category: "company",
      icon: "💬",
      period: "2026.03 ~ 2026.06",
      role: "백엔드 개발 (스키마 설계 ~ 관리 기능)",
      overview:
        "제론소프트엔 제품(ZeroSet·ZeroMon 등) 사용 고객의 피드백을 수집하고 답변까지 관리하는 시스템입니다. 3월에 feedback-feature-service의 도메인·스키마 설계와 백엔드 최초 릴리스를 맡았고, 6월에 답변(Answer) 기능과 Zeron Space Portal 관리 화면, 서비스 고도화까지 완성했습니다. 인터넷이 차단된 내부망(폐쇄망) 고객사가 많은 제품 특성상, 실시간 연동 대신 export/import 기반의 오프라인 피드백 파이프라인으로 설계한 것이 핵심입니다.",
      techStack: ["Kotlin", "Spring Boot", "GraphQL", "MongoDB", "GitLab CI"],
      teamComposition: ["백엔드 1명 (본인), 관리 프론트 겸업"],
      tasks: [
        {
          title: "피드백 서비스 백엔드 설계 및 최초 릴리스 (Sprint 4)",
          items: [
            "피드백 도메인·스키마 구조 설계 문서 작성",
            "feedback-feature-service 0.0.2 릴리스 — 피드백 수집/조회 GraphQL API",
            "flags 체계 설계: new / answered / question / feature_request / bug (중복 가능)",
          ],
        },
        {
          title: "답변(Answer) 기능 및 export/import 파이프라인",
          items: [
            "CreateAnswerInput GraphQL API 추가 (feedback-feature-service 0.0.3)",
            "answer export(Portal) ↔ import(feedback service) 흐름 구현 — 폐쇄망 고객사가 오프라인으로 답변을 반입하는 구조",
            "export JSON 스키마 설계: status·deleted 필드 제외, deleted row 자체 제외, 고객사 식별용 tenant_id 포함",
            "중복 검사를 existsById 반복 호출 대신 findAllById 벌크 조회로 처리하는 등 쿼리 성능 검토",
          ],
        },
        {
          title: "Zeron Space Portal 피드백 관리 화면",
          items: [
            "피드백 리스트/분류/답변 상태/담당자/테넌트 컬럼 기반 관리 화면 개발",
            "답변 Export·Import 버튼 및 처리 흐름 연동",
          ],
        },
        {
          title: "서비스 고도화 (Sprint 12)",
          items: [
            "Tenant별 리스트 보기 및 답변 Export 기능 추가",
            "페이지 링크 기반 제품 카테고리(ZeroSet/ZeroMon 등) 자동 분류 — 판별 불가 시 수동 수정 가능하게 설계",
            "제품별 필터링, 리스트 내 스크린샷 미리보기 등 운영 편의 개선",
          ],
        },
      ],
      achievements: [
        "스키마 설계부터 관리 UI까지 피드백 시스템 전체 흐름을 3개월간 주도적으로 구축",
        "폐쇄망(내부망) 고객사를 위한 export/import 기반 오프라인 피드백 파이프라인 설계",
        "tenantId 1회 발급 등 내부망 제약을 반영한 인증·식별 흐름 설계",
      ],
      tags: ["Kotlin", "Spring Boot", "GraphQL", "MongoDB", "폐쇄망"],
    },
    {
      id: "taropick",
      name: "타로픽(TAROPICK)",
      shortDescription: "타로 운세 상담 플랫폼",
      type: "work",
      featured: true,
      category: "freelance",
      icon: "🔮",
      period: "2025.04 ~ 2025.05",
      role: "백엔드 개발",
      liveUrl: "https://youtube.com/shorts/98QF26q2ncA",
      imageUrl: "/taropick-main-banner.png",
      overview:
        "의뢰받아 개발한 실시간 타로 상담 플랫폼입니다. 개발은 완료했으나 클라이언트 사정으로 정식 출시까지 이어지지 못해 운영 지표는 없지만, 결제·실시간·인증을 포함한 백엔드 전반을 단독으로 설계·구현했습니다. 핵심 과제는 ① 상담사 상태와 페이지 접속자를 실시간으로 보여주기, ② 국내 결제(KG이니시스)를 안정적으로 붙이기, ③ Spring Boot 3에서 복잡한 동적 검색을 깔끔하게 처리하기였고, 각각 WebSocket · 포트원(PortOne) 결제 추상화 · QueryDsl로 해결했습니다.",
      techStack: [
        "Java",
        "Spring Boot",
        "RestClient",
        "QueryDsl",
        "Spring Security",
        "OAuth2",
        "WebSocket",
        "Docker",
        "AWS EC2",
        "AWS S3",
        "PortOne API (KG이니시스)",
      ],
      teamComposition: ["프론트엔드 1명", "백엔드 1명", "디자인 1명"],
      tasks: [
        {
          title: "메인 화면 및 상담사 목록 개발",
          items: [
            "메인 배너 및 UI 디자인 구현",
            "실시간 상담사 목록 표시 및 필터링 기능 (신규순 등)",
            "상담사 상태 (상담 가능/불가능) 표시",
          ],
          imageUrl: "/taropick-counselor-list.png",
        },
        {
          title: "상담사 프로필 및 후기 기능 개발",
          items: [
            "상담사 상세 정보 페이지 (소개, 전문분야, 경력)",
            "사용자 후기 작성 및 조회 기능",
            "실시간 페이지 조회수 표시",
          ],
          imageUrl: "/taropick-counselor-profile.png",
        },
        {
          title: "사용자 인증 및 결제 시스템 개발",
          items: ["OAuth를 통한 SNS 로그인 기능", "사용자 정보 관리 (포인트, 연락처)", "상담 요금제 선택 기능"],
          imageUrl: "/taropick-payment-selection.png",
        },
        {
          title: "결제 모듈 연동 (KG이니시스)",
          items: ["포트원 API를 활용한 KG이니시스 결제창 연동", "결제 성공/실패 로직 처리 및 사용자 알림"],
          imageUrl: "/taropick-payment-gateway.png",
        },
        {
          title: "실시간 기능 및 백엔드 핵심 로직 개발",
          items: [
            "WebSocket을 활용한 실시간 접속자 확인 기능",
            "Rest API 설계 및 개발 (Spring Boot)",
            "QueryDsl을 이용한 데이터베이스 쿼리 최적화",
            "Spring Boot 3 버전에 맞는 Security Config 및 Swagger 코드 리팩토링",
            "전역 에러 처리 로직 구현 (Enum 클래스 활용)",
          ],
        },
        {
          title: "인프라 구축 및 배포",
          items: ["Docker를 이용한 서비스 컨테이너화", "AWS EC2, S3를 활용한 안정적인 배포 및 운영 환경 구축"],
        },
      ],
      achievements: [
        "WebSocket으로 상담사 실시간 상태와 페이지 동시 접속자 표시 구현",
        "포트원(PortOne) API로 KG이니시스 결제 연동 — 성공/실패/취소 플로우와 사용자 알림까지 처리",
        "Spring Boot 3 마이그레이션에 맞춰 Security·Swagger 설정 리팩토링, Enum 기반 전역 예외 처리로 에러 응답 일관화",
        "QueryDsl로 동적 검색·정렬 쿼리의 타입 안정성과 가독성 확보",
        "(개발 완료 후 미출시 — 운영 트래픽 지표 없음)",
      ],
      tags: ["Java", "Spring Boot", "AWS", "WebSocket", "OAuth", "Payment Gateway"],
    },
    {
      id: "imott",
      name: "아임오티티(IMOTT)",
      shortDescription: "OTT 구독권 할인 판매 커머스 (풀스택 단독) · 운영 매출 약 1.2억 원",
      type: "work",
      featured: true,
      category: "freelance",
      icon: "📺",
      period: "2024.10 ~ 현재",
      role: "백엔드, 프론트엔드 개발",
      liveUrl: "https://imott.co.kr/",
      imageUrl: "/imott-logo.jpg",
      overview:
        "여러 OTT 구독권을 할인가에 판매하는 커머스 서비스로, 백엔드와 Thymeleaf 프론트를 단독으로 맡았습니다. 가장 큰 과제는 네이버 등으로 들어오는 주문을 사람이 일일이 접수·응대하던 수작업을 없애는 것이었습니다. 주문 자동 접수 + 고객 메일 자동 발송(주문 완료·재고 부족) 파이프라인으로 운영 부담을 줄였고, 재고·매출·커미션을 한눈에 보는 직원/어드민 대시보드를 구축했습니다. 별도 프론트 인력 없이 빠르게 출시하려고 Thymeleaf 서버 렌더링을 택했습니다.",
      techStack: [
        "Java",
        "Spring Boot",
        "Thymeleaf",
        "HTML",
        "CSS",
        "JavaScript",
        "Docker",
        "AWS EC2",
        "AWS RDS",
        "AWS S3",
        "MySQL",
      ],
      teamComposition: ["풀스택 1명 (본인)", "디자인 1명"],
      tasks: [
        {
          title: "로그인 페이지 개발",
          items: ["직원/어드민 로그인 기능", "권한에 따른 페이지 리다이렉션"],
          imageUrl: "/imott-login.png",
        },
        {
          title: "직원 페이지 개발",
          items: ["일일 재고 목표 및 등록 현황 확인", "기간별 커미션 조회", "총 등록 재고 및 재결제 재고 확인"],
          imageUrl: "/imott-employee-dashboard.png",
        },
        {
          title: "어드민 페이지 개발",
          items: [
            "총 재고 현황 대시보드",
            "잔액 계산기",
            "주문 날짜 필터",
            "매출/매입가/커미션 등 그래프 시각화",
            "대시보드 바로가기 버튼",
          ],
          imageUrl: "/imott-admin-dashboard.png",
        },
        {
          title: "판매된 계정 대시보드 개발",
          items: ["판매 계정 리스트 조회", "다국어 지원 (한국어/영어)"],
          imageUrl: "/imott-sold-accounts.png",
        },
        { title: "Thymeleaf를 이용한 프론트엔드 개발", items: ["단일 프로젝트 내 프론트엔드 구현"] },
        {
          title: "자동 주문 접수 및 메일 발송 기능 개발",
          items: ["네이버 주문 자동 접수", "고객 메일 자동 발송 (주문 완료/재고 부족 알림)"],
          imageUrl: "/imott-email-confirmation.png",
        },
      ],
      achievements: [
        "직접 구축·운영된 서비스가 약 1.2억 원의 매출을 처리 (실서비스 검증)",
        "네이버 주문 자동 접수 + 고객 메일 자동 발송으로 수작업 응대 제거",
        "재고·매출·매입가·커미션을 시각화한 직원/어드민 대시보드 구축 및 다국어(한/영) 지원",
        "Thymeleaf 기반 풀스택 단독 개발로 별도 프론트 인력 없이 빠르게 출시",
      ],
      tags: ["Java", "Spring Boot", "Thymeleaf", "AWS"],
    },
    {
      id: "oheung",
      name: "(주)오O 자격진흥원",
      shortDescription: "자격증 발급 및 온라인 시험 서비스",
      type: "work",
      category: "freelance",
      icon: "📜",
      period: "2024.08 ~ 2024.11",
      role: "풀스택 개발",
      imageUrl: "/oheung-subject-management.png",
      overview:
        "자격증 발급 및 온라인 시험을 제공하는 서비스입니다. OAuth 로그인, 자동 알림, 결제 시스템을 구축했습니다.",
      techStack: [
        "Kotlin",
        "Spring Boot",
        "Thymeleaf",
        "MySQL",
        "WebClient",
        "OAuth2",
        "PortOne API (KG이니시스)",
        "KakaoTalk API",
      ],
      teamComposition: ["풀스택 1명 (본인)"],
      tasks: [
        {
          title: "OAuth 기반 사용자 인증",
          items: ["Kakao, Google OAuth 연동 회원가입 및 인증 구현", "사용자 요청 기반 필터 및 정렬 기능"],
          imageUrl: "/oheung-kakao-login.png",
        },
        {
          title: "카카오톡 메시지 자동 전송 기능 구현",
          items: [
            "카카오톡 알림톡 API 연동 알림 전송 로직 설계",
            "시험 접수, 결과(합격/불합격 등) 자동 메시지 전송",
            "메시지 포맷 및 전송 조건 커스터마이징",
          ],
          imageUrl: "/oheung-kakaotalk-notifications.png",
        },
        {
          title: "결제 시스템 연동 (KG이니시스)",
          items: ["포트원 API를 통한 KG이니시스 결제 시스템 구축", "결제 성공/실패 페이지 처리 및 알림"],
          imageUrl: "/oheung-payment-gateway.png",
        },
        {
          title: "과목 및 시험 관리 기능 개발 (Thymeleaf 기반)",
          items: ["과목/시험 CRUD 기능 및 UI 구성 (관리자)", "Thymeleaf 템플릿 활용 관리자/사용자 페이지 동적 구성"],
          imageUrl: "/oheung-subject-management.png",
        },
      ],
      achievements: [
        "Kakao, Google OAuth를 통한 사용자 인증 시스템 구축",
        "카카오톡 API를 연동한 자동 알림 기능 구현 (시험 접수, 결과 안내 등)",
        "포트원 API를 활용한 KG이니시스 결제 시스템 연동",
        "Thymeleaf 기반의 관리자 페이지 및 사용자 시험 응시 플로우 개발",
      ],
      tags: ["Kotlin", "Spring Boot", "Thymeleaf", "OAuth", "Payment Gateway", "Kakao API"],
    },
    {
      id: "hura-bigdata",
      name: "(주)휴라 - 기정원 빅데이터",
      shortDescription: "데이터 저장 및 이상 신호 데이터 수집 서비스",
      type: "work",
      category: "company",
      icon: "📊",
      period: "2024.01 ~ 2024.04",
      role: "백엔드 개발 및 인프라 구성",
      imageUrl: "/hura-logo.jpg",
      overview: "(주)휴라에서 진행하는 서비스의 외부망, 내부망 데이터 송수신 서비스입니다.",
      techStack: ["Rust", "Docker", "MongoDB", "Kafka", "Ubuntu", "Ceph", "Milvus", "Kubernetes (NodePort)"],
      teamComposition: ["백엔드 2명"],
      tasks: [
        {
          title: "외부망, 내부망 작업",
          items: [
            "Ceph(S3, Dashboard), Milvus, Kafka, Mongo 외부 연결 구성",
            "NodePort를 이용한 Kubernetes Node 접근 및 포트 변경",
            "라우터 포트 허용 및 외부 접근 테스트",
          ],
        },
        { title: "OS 설치 및 인프라 구성", items: ["Ubuntu 설치 및 최적화", "Master Node 에러 해결"] },
      ],
      achievements: ["외부에서 MongoDB, Kafka 연결을 성공적으로 구성하여 서비스 안정성 확보"],
      tags: ["Rust", "Docker", "Kafka", "MongoDB"],
    },
    {
      id: "hura-pslte",
      name: "(주)휴라 - PSLTE",
      shortDescription: "실시간 LTE 신호 탐지 서비스",
      type: "work",
      featured: true,
      category: "company",
      icon: "📡",
      period: "2023.08 ~ 2024.03",
      role: "백엔드 개발",
      imageUrl: "/hura-logo.jpg",
      overview: "실시간 PS-LTE 신호 탐지를 통해 데이터 값, 신호 세기 등을 분석하여 위치를 계산하는 서비스입니다.",
      techStack: ["Rust", "Python", "gRPC", "Docker", "Ubuntu"],
      teamComposition: ["프론트엔드 2명", "백엔드 1명 (본인)", "Python 개발(AI) 1명"],
      tasks: [
        {
          title: "PSLTE 코드 개발",
          items: [
            "gRPC Stream 연결을 통한 실시간 데이터 처리",
            "Rust-Python 연동 모듈 작성 (알고리즘 Python 처리, 데이터 Rust 전송)",
            "gRPC 서버/클라이언트 통신 설계 및 구축",
            "Docker를 이용한 서비스 패키징 및 배포 자동화",
          ],
        },
        {
          title: "Mini PC 설치 및 세팅",
          items: [
            "Ubuntu 기반 Mini PC OS 설치 및 최적화",
            "네트워크 설정 (Static IP, 방화벽, 포트포워딩)",
            "Docker 환경 구성 및 자동 배포 스크립트 작성",
            "시스템 서비스 등록으로 부팅 시 자동 실행",
          ],
        },
        {
          title: "gRPC 속도 리팩토링",
          items: ["데이터 전송 주기 1초 → 0.1초로 개선", "Unary 방식(요청-응답) 코드 개발 및 개선"],
        },
        { title: "인수인계", items: ["코드 주석 처리 및 문서화", "테스트 코드 작성으로 구조 및 데이터 흐름 명확화"] },
        {
          title: "시스템 테스트 및 최적화",
          items: [
            "테스트 데이터 수집 및 성능 프로파일링",
            "신호 세기 오차율 분석 및 필터링 알고리즘 개선",
            "부하 테스트 및 운영 환경 최적화",
          ],
        },
      ],
      achievements: [
        "실시간 데이터 전송 지연 0.1초 이내 달성",
        "CPU 사용률 20% 이하 최적화 성공",
        "부팅 후 1분 이내 전체 서비스 자동 활성화 구현",
      ],
      tags: ["Rust", "Python", "gRPC", "IoT"],
    },
  ],
  personalProjects: [
    {
      id: "devdeck",
      name: "DevDeck",
      shortDescription: "일정·음악·Git를 터미널 한 곳에서 처리하는 개발자용 CLI · npm 1,000+ 다운로드",
      type: "personal",
      featured: true,
      icon: "🎴",
      imageUrl: "/devdeck-banner.png",
      imageFit: "contain",
      tags: ["Node.js", "CLI", "Git", "mpv", "yt-dlp", "i18n", "Terminal UI"],
      period: "2026.02 ~ 현재",
      role: "기획, 개발 (1인)",
      githubUrl: "https://github.com/KR-Devdeck/devdeck",
      npmUrl: "https://www.npmjs.com/package/@beargame/devdeck",
      overview:
        "회사/개인 개발 흐름을 끊지 않기 위해 만든 올인원 터미널 도구입니다. `deck` 하나로 Daily Dashboard, Terminal Jukebox, Git Manager를 실행하고, 시작 시 환경진단/업데이트 자동 점검까지 처리합니다.",
      techStack: ["Node.js", "JavaScript", "Inquirer", "Axios", "Chalk", "mpv", "yt-dlp", "npm"],
      teamComposition: ["1인 개발"],
      tasks: [
        {
          title: "Daily Dashboard 구현",
          items: [
            "Todo/Workflow 체크, 날짜/시간 표시를 터미널 박스 UI로 구성",
            "Open-Meteo 기반 날씨와 개발 명언 API(실패 시 fallback) 연동",
            "캐시 + 백그라운드 갱신으로 시작 속도 저하 최소화",
          ],
          imageUrl: "/devdeck-daily-shot.png",
        },
        {
          title: "Terminal Jukebox 구현",
          items: [
            "yt-dlp 기반 음악 검색 및 스트리밍 재생",
            "mpv 연동으로 백그라운드 재생/제어",
            "재생목록, 루프, 시크, 볼륨 조절, 재개 재생 등 플레이어 기능",
          ],
          imageUrl: "/devdeck-music-shot.png",
        },
        {
          title: "Git Manager 구현",
          items: [
            "트리 기반 다중 파일/폴더 선택 스테이징·언스테이징",
            "커밋/푸시/풀 메뉴형 흐름으로 반복 Git 작업 단순화",
            "상태 요약 및 변경 파일 탐색 UX 개선",
          ],
          imageUrl: "/devdeck-git-shot.png",
        },
        {
          title: "설정/자동화 고도화",
          items: [
            "시작 도구 선택, 자동 Doctor/자동 Update, 테마 설정 지원",
            "한국어/영어/일본어/중국어 i18n 적용",
            "초기 실행 시 환경 점검 및 업데이트 체크 자동화",
          ],
        },
      ],
      achievements: [
        "npm 배포 후 1,000+ 다운로드 달성 — 실제 사용자에게 검증된 도구",
        "`deck`, `deck m`, `deck g` 단일 진입점으로 사용성 개선",
        "개발 중 반복되는 일정/음악/Git 작업을 하나의 CLI로 통합",
        "다국어 및 자동 점검/업데이트 도입으로 유지보수성 강화",
      ],
    },
    {
      id: "haru2end-2.0",
      name: "하루의끝 2.0",
      shortDescription: "BackEnd, FrontEnd, Android 개발을 1인이 진행한 개인 프로젝트",
      type: "personal",
      featured: true,
      icon: "🌙",
      imageUrl: "/haru2end/logo.png",
      tags: [
        "Kotlin",
        "Spring Boot",
        "Java",
        "React",
        "i18next",
        "react-i18next",
        "React Native",
        "OAuth2.0",
        "JWT",
        "Self-hosting"
      ],
      period: "2025.07.02 ~ 2025.09.27",
      role: "Front-End, Back-End, Android, Design",
      overview:
        "하루를 기록하고 감정을 나누는 다이어리형 커뮤니티로, 백엔드·프론트·안드로이드·디자인을 1인이 맡았습니다. 이전 프로젝트들이 AWS(EC2/RDS/S3)에 의존했던 것과 달리, 이번엔 비용 없이 인프라를 직접 통제해보려고 자체 미니PC에 서버·DB·스토리지를 직접 구축해 운영했습니다(현재 haru2end.com 운영 중, Google Play 출시 완료). Java 대신 Kotlin을 택해 Null 안정성을 확보했고, OAuth2.0(카카오·구글)+JWT 인증, i18next 다국어, 댓글·좋아요·감정 카테고리 커뮤니티까지 구현했습니다.",
      techStack: ["Kotlin", "Spring Boot 3.x", "Java21", "Redis", "MySQL", "React", "react-i18next", "React Native", "OAuth2.0", "JWT", "Docker", "Self-hosted MiniPC"],
      teamComposition: ["1인 개발 (Front-End, Back-End, Android, Design)"],
      tasks: [
        {
          title: "DB 구축 및 환경 구성",
          items: ["DB 구축 및 환경구성 은 아래 문서 아이콘에서 확인해주세요."],
        },
        {
          title: "다크/라이트 모드",
          items: ["다크/ 라이트 버튼을 누르게 되면 다크 모드 또는 라이트 모드로 변경할 수 있습니다."],
          imageUrl: ["/haru2end/dark.png", "/haru2end/light.png"],
        },
        {
          title: "다양한 언어지원",
          items: ["i18next와 react-i18next를 사용하여 다양한 나라의 번역을 지원합니다."],
          imageUrl: [
            "/haru2end/china.png",
            "/haru2end/english.png",
            "/haru2end/japan.png",
          ],
        },
        {
          title: "로컬 회원가입 및 로그인 / SNS 로그인",
          items: [
            "하루의끝 사이트에서 계정을 만들 수 있고, 또는 SNS ( 카카오, 구글 )을 통하여 하루의끝 계정을 만들 수 있습니다.\n\n",
            "카카오 구글 로그인은 Oatuh2.0 code 방식으로 구현하였으며, 두 로그인 기능 모두 로그인을 하게 되면, jwt(atk, rtk)를 발급하여 인증을 하는 방식입니다.",
          ],
          imageUrl: "https://www.youtube.com/embed/vRXt4EmXfLc",
        },
        {
          title: "다양한 음악(mp3) 지원",
          items: ["사이트에 기본적으로 3가지 정도의 mp3를 들을 수 있으며, 사용자가 원한다면, 직접 자신의 mp3또는 mp4를 넣어 들을 수 있습니다."],
          imageUrl: "https://www.youtube.com/embed/mVVlhaOaeQQ",
        },
        {
          title: "일기 작성 및 일기 목록 , 일기 자세히 보기",
          items: [
            "일기 작성: 오늘 하루에 대한 일기를 작성할 수 있으며, “오늘의 감정”을 통해 자신이 느낀 오늘 하루의 감정을 선택하고, 사진을 추가하여 일기의 썸네일로 사용할 수 있고, 일기 제목과 내용을 작성하고 “오늘의 일기 저장하기” 버튼을 클릭하여 일기를 저장할 수 있습니다.\n\n",
            "일기 목록: 자신의 작성한 일기들을 최신순으로 볼 수 있으며, “커뮤니티에 공유” 버튼을 클릭하여 커뮤니티에 자신의 일기를 공유할 수 있고, “삭제” 버튼을 클릭하여 일기를 삭제할 수 있습니다.\n\n",
            "일기 자세히 보기: 일기 목록에서 일기를 클릭하게 되면, 제목과 내용, 언제 작성했는지, 그때의 감정, 내용은 몇자를 작성했는지가 나오게 됩니다. ( 사진이 있는 경우라면, 내용 위에 사진이 보이게 되고, 사진을 클릭하면, 사진을 자세히 볼 수 있게 됩니다. )",
          ],
          imageUrl: "https://www.youtube.com/embed/bogyxTg5Bds",
        },
        {
          title: "커뮤니티 탭",
          items: [
            "자신이 작성한 일기를 커뮤니티에 공유를 하며, 서로의 일기를 공유하고, 소통할 수 있는 커뮤니티 기능을 개발하였습니다.\n\n",
            "커뮤니티 탭은 최신순, 인기순, 각종 감정카테고리로 구성되어 있고, 글을 클릭하게 되면, 조회수, 댓글, 게시글 좋아요 수를 확인할 수 있고, 댓글을 작성하여 소통할 수 있게 되어있습니다.",
          ],
          imageUrl: "https://www.youtube.com/embed/2PbvPAeawrU",
        },
        {
          title: "공유하기",
          items: ["일기를 공유하기 버튼을 클릭하여, “하루의 끝”을 모르는 사람들에게 공유를 할 수 있습니다."],
          imageUrl: "https://www.youtube.com/embed/nn0hPVa2QRA",
        },
        {
          title: "구글스토어 출시",
          items: [
            "리엑티브 네이티브를 통하여, Android를 개발하였으며, 구글스토어에 “하루의끝” 으로 어플을 출시하게 되었습니다.",
          ],
          imageUrl: "/haru2end/google-play-screenshot.png",
        },
      ],
      achievements: [
        "먼저 개발을 진행하면서, 원래는 AWS에 있는 EC2, RDS, S3등을 사용하여, 서비스를 편하게 구축하였습니다. 하지만, 이번 프로젝트는 자체 서버 컴퓨터를 두어, EC2, RDS, S3등이 없이 직접 미니PC에 서버를 구축을 하며, 새로운 경험과 기술을 습득하게 되었습니다.\n\n",
        "Java21 + SpringBoot3.x를 보통 사용하였다면, 이번에는 Kotlin + SpringBoot3.x를 사용하여, Null에 대한 안정성등을 확보를 할 수 있었습니다.",
      ],
      githubUrl: "https://github.com/KR-TD",
      liveUrl: "https://haru2end.com",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.diaryphone&hl=ko",
      notionUrl: "https://haru2end.notion.site/Haru2End-26244522a025803b8cdfcbd90c3b0822?pvs=73",
    },
    {
      id: "ziti",
      name: "ZITI(지티)",
      shortDescription: "AI 기반 크롬 확장 프로그램 및 실시간 소통 앱",
      type: "personal",
      icon: "🤖",
      imageUrl: "/ziti-banner.jpg",
      tags: [
        "Java",
        "Spring Boot",
        "JPA",
        "MongoDB",
        "OpenAPI",
        "Socket",
        "JavaScript",
        "HTML",
        "CSS",
        "Chrome Extension",
        "AI",
      ],
      period: "2025.04.06 ~ 2025.06.02",
      role: "BackEnd (100%), FrontEnd (70%), PM",
      githubUrl: "https://github.com/KR-ZITI",
      overview:
        "Zealously Inspiring Together, Infinitely. 함께 무한히 성장하며 나아가는 나의 친구라는 의미를 담은 AI 크롬 확장형 앱 서비스입니다. 실시간 보이스 채팅, 스크린샷, 코드 지원 등 다양한 기능을 제공합니다.",
      techStack: [
        "Java",
        "Spring Boot",
        "JPA",
        "MySQL",
        "OpenAPI (AI 연동)",
        "WebSocket (실시간 채팅)",
        "JavaScript",
        "HTML",
        "CSS",
        "Chrome Extension API",
      ],
      teamComposition: ["총 2명 (프론트엔드 1명, 백엔드 1명)"],
      tasks: [
        {
          title: "AI 채팅 인터페이스 (다크모드 지원)",
          items: ["실시간 AI 응답 처리", "스크린샷, 텍스트, 음성 입력 방식 지원", "다크모드 UI/UX 디자인"],
          imageUrl: "/ziti-chat-dark.png",
        },
        {
          title: "코드 블록 지원 기능",
          items: ["AI가 생성한 코드 블록 표시", "코드 복사 기능 제공"],
          imageUrl: "/ziti-code-block.png",
        },
        {
          title: "Chrome 확장 프로그램 연동",
          items: ["브라우저 사이드바 형태로 UI 제공", "현재 웹페이지 컨텍스트 활용 (스크린샷 등)"],
          imageUrl: "/ziti-chrome-extension.png",
        },
        { title: "실시간 보이스 채팅 기능", items: ["음성 입력을 통한 AI 질의", "음성 답변 STT/TTS 연동 (예정)"] },
      ],
      achievements: [
        "AI 기반 실시간 질의응답 및 코드 지원 기능 구현",
        "Chrome 확장 프로그램 형태로 개발하여 브라우저 연동성 확보",
        "다크모드, 스크린샷, 음성 입력 등 사용자 편의 기능 제공",
      ],
      liveUrl: "https://www.youtube.com/watch?v=8i6-xsto214",
    },
    {
      id: "haru-kkeut",
      name: "하루의끝",
      shortDescription: "일기 작성 및 공유 플랫폼",
      type: "personal",
      icon: "📔",
      imageUrl: "/placeholder.svg?width=400&height=300&text=하루의끝", // Placeholder, will be updated
      tags: [
        "AWS EC2",
        "AWS RDS",
        "AWS S3",
        "Docker",
        "GitHub",
        "GitKraken",
        "Java",
        "JPA",
        "JWT",
        "MySQL",
        "Redis",
        "SMTP",
        "Spring Security",
        "SpringBoot",
        "Swagger",
      ],
      role: "BackEnd, PM",
      figmaUrl: "https://www.figma.com/file/zOygaz7oMUqTZvNX1Icvf6/하루의-끝?t=6ESJjQNiL7GPnxpd-0",
      githubUrl: "https://github.com/TodayIsDiary",
      notionUrl: "https://www.notion.so/c684c270c2b14ae7ae4a8e397efa740e?pvs=21",
    },
    {
      id: "mbook",
      name: "엠북(MBOOK)",
      shortDescription: "중고 도서 거래 및 독서 커뮤니티 앱", // Placeholder, will be updated
      type: "personal",
      icon: "📚",
      imageUrl: "/mbook-main.jpg", // Placeholder, will be updated
      tags: [
        // Placeholder, will be updated
        "AWS EC2",
        "AWS RDS",
        "AWS S3",
        "Docker",
        "GitHub",
        "GitKraken",
        "Java",
        "JPA",
        "JWT",
        "MySQL",
        "Redis",
        "SMTP",
        "STOMP",
        "Spring Security",
        "Socket",
        "SpringBoot",
        "Swagger",
      ],
      role: "BackEnd", // Placeholder, will be updated
      figmaUrl: "https://www.figma.com/file/twL3HuKwnLICwh2WNXkDxV/22회-앱잼?node-id=0%3A1&t=1NpEgPslWaFnxBto-0",
      githubUrl: "https://github.com/MBook-APPJAM",
      notionUrl: "https://www.notion.so/18c136345fb8458bbaeda81b846e94e2?pvs=21",
    },
    {
      id: "deconhub",
      name: "DECONHUB (대회&스터디APP)",
      shortDescription:
        "중학생이나 고등학생 같이 나이가 어린개발자들이 대회를 찾고, 참여할 수 있고, 스터디를 만들어 같이 향상할 수 있는 서비스입니다.",
      type: "personal",
      icon: "🏆",
      imageUrl: "/deconhub-banner.svg",
      tags: [
        "AWS EC2",
        "AWS RDS",
        "AWS S3",
        "Docker",
        "GitHub",
        "GitKraken",
        "Java",
        "JPA",
        "JWT",
        "MySQL",
        "Redis",
        "SMTP",
        "Spring Security",
        "SpringBoot",
        "Swagger",
      ],
      period: "2022.09.18",
      role: "BackEnd (API 개발 기여도 90%)",
      overview:
        "중학생 및 고등학생 개발자들이 대회를 찾고 참여하며, 스터디를 통해 함께 성장할 수 있는 플랫폼입니다. 주요 기능으로 대회 카테고리별 필터, Q&A, Swagger API 문서화 등을 구현했습니다. Redis 연동 시 서버 배포 환경에서 발생한 보호 모드 이슈를 해결한 경험이 있습니다.",
      techStack: [
        "Java",
        "SpringBoot",
        "JPA",
        "MySQL",
        "JWT",
        "Spring Security",
        "Redis",
        "SMTP",
        "Swagger",
        "AWS EC2",
        "AWS RDS",
        "AWS S3",
        "Docker",
        "Git",
        "GitHub",
        "GitKraken",
      ],
      teamComposition: ["총 4명 (프론트엔드, 백엔드, 안드로이드, 디자인)", "본인: 백엔드 (API 개발 기여도 90%)"],
      tasks: [
        {
          title: "대회 카테고리별 필터링 기능 구현",
          items: ["사용자가 원하는 분야의 대회를 쉽게 찾을 수 있도록 필터 기능 제공"],
        },
        { title: "대회 Q&A 기능 개발", items: ["대회 관련 질문과 답변을 공유할 수 있는 Q&A 게시판 기능 구현"] },
        {
          title: "Swagger API 문서화",
          items: ["이미지 관련 부분을 제외한 API 명세 대부분 직접 작성 및 관리"],
          imageUrl: "/deconhub-swagger-main.png",
        },
      ],
      achievements: [
        "Facade Pattern, CustomException 도입 등 코드 개선 경험",
        "자유로운 팀 분위기 속 명확한 의견 전달 능력 향상",
        "동료 개발자 코드 리뷰를 통한 학습 (@ResponseStatus 등 활용법 습득)",
        "Redis 보호 모드 관련 서버 배포 이슈 해결 및 실서버 배포 경험",
        "잦은 디자인 변경에 따른 API 명세 변경에 유연하게 대처하고, 회의를 통해 명확한 API 정의",
      ],
      figmaUrl: "https://www.figma.com/file/EMKMUB7Ha5sDB0kBtkaHR1/%F0%9F%97%A1%EF%B8%8F-DECONHUB?t=kV8Vf2uSoCJjJHTy-0",
      githubUrl: "https://github.com/DSM-DECONHUB",
      notionUrl: undefined,
    },
    {
      id: "mm-project", // This project will be updated by the map function below
      name: "MM Project",
      shortDescription: "동아리 프로젝트 관리 및 협업 도구",
      type: "personal",
      icon: "🛠️",
      imageUrl: "/placeholder.svg?width=400&height=300&text=MM+Project",
      tags: [
        "AWS EC2",
        "AWS RDS",
        "Docker",
        "GitHub",
        "GitKraken",
        "JPA",
        "JWT",
        "MySQL",
        "OAuth2.0",
        "Spring Security",
        "SpringBoot",
      ],
      role: "BackEnd",
      figmaUrl: "https://www.figma.com/file/G7Q8I4a1iCKv45qGrSpqCO/Club-Project?node-id=0%3A1&t=beQABKWXOHdQ37Ti-0",
      githubUrl: "https://github.com/DSM-MM",
      notionUrl: "노션 비공개",
    },
    {
      id: "openapi-travel",
      name: "OpenAPI를 이용한 나만의 여행 리스트 서비스",
      shortDescription: "Naver API를 활용한 개인 여행지 추천 및 관리 서비스. JDBC에서 JPA로 리팩토링.",
      type: "personal",
      icon: "✈️",
      imageUrl: "/openapi-travel-list.png",
      tags: ["Java", "Spring Boot", "JPA", "H2 DB", "Naver API", "Thymeleaf", "HTML", "CSS", "JavaScript"],
      period: "2022.04 ~ 2022.05",
      role: "BackEnd, FrontEnd (개인 프로젝트)",
      githubUrl: "https://github.com/beargame123/naverApiProject",
      overview:
        "강의를 통해 JDBC로 구현했던 Naver API 연동 지역 검색 및 여행지 관리 기능을 JPA로 개선하고, 개인 프로젝트로 발전시킨 서비스입니다. 사용자는 지역 정보를 검색하고, 원하는 장소를 위시리스트에 추가하거나 방문 기록을 관리할 수 있습니다.",
      techStack: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "H2 Database",
        "Naver Maps API",
        "Thymeleaf",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      teamComposition: ["개인 프로젝트 (1인 개발)"],
      tasks: [
        {
          title: "Naver 지역 검색 API 연동 및 여행지 관리",
          items: [
            "Naver API를 활용하여 지역 및 장소 정보 검색 기능 구현",
            "검색된 장소를 위시리스트에 추가/삭제",
            "방문 여부 및 방문일자 기록",
            "장소 상세 정보 표시 (주소, 카테고리 등)",
          ],
          imageUrl: "/openapi-travel-list.png",
        },
        {
          title: "백엔드 리팩토링 (JDBC to JPA)",
          items: [
            "기존 JDBC 기반 데이터 접근 로직을 Spring Data JPA로 전환",
            "엔티티 설계 및 리포지토리 구현",
            "데이터베이스 스키마 최적화",
          ],
        },
      ],
      achievements: [
        "Naver OpenAPI 연동 및 활용 경험",
        "Spring Boot 환경에서 JPA 및 CRUD API 구현 능력 향상",
        "JDBC에서 JPA로의 성공적인 코드 리팩토링",
        "개인 학습 프로젝트를 통해 JPA 심층 학습 및 적용",
      ],
    },
    {
      id: "mbtogether",
      name: "MBTogether",
      shortDescription:
        "MBTI 기반 소셜 매칭 및 커뮤니티 서비스. Django에서 Spring으로 전환하며 팀 협업 및 API 개발 경험.",
      type: "personal",
      icon: "🧑‍🤝‍🧑",
      imageUrl: "/mbtogether-logo.svg",
      tags: ["Java", "Spring Boot", "Spring Security", "JPA", "H2 DB", "Git", "GitHub", "GitKraken"],
      period: "2022.12 ~ 2023.03",
      role: "BackEnd",
      githubUrl: "https://github.com/MBTogether",
      notionUrl: "https://north-steam-d62.notion.site/MBTogether-8cbe22705ddf4adb9253bb426364b005",
      figmaUrl: "https://www.figma.com/file/G7Q8I4a1iCKv45qGrSpqCO/Club-Project?t=d3SrB4zolTK9IUPm-0",
      overview:
        "10~20대 사이에서 유행한 MBTI를 이용한 커뮤니티 팀 프로젝트입니다. Django 경험 후 Spring을 처음 접하며 Security 설정, 댓글 및 마이페이지 API 개발 등을 담당했습니다. Github 협업 과정에서의 실수와 해결 경험을 통해 성장할 수 있었습니다.",
      techStack: ["Java", "Spring Boot", "Spring Security", "JPA", "H2 Database", "Git", "GitHub", "GitKraken"],
      teamComposition: ["팀 프로젝트 (총 9명: 백엔드 5, 프론트엔드 4, 디자인 협업)", "본인: 백엔드 (기여도 35%)"],
      tasks: [
        { title: "Spring Security 설정", items: ["프로젝트 보안을 위한 Spring Security Config 구성"] },
        { title: "댓글 기능 개발", items: ["댓글 CRUD API 구현", "댓글 좋아요 기능 개발"] },
        { title: "마이페이지 기능 개발", items: ["사용자 정보 조회 및 수정 API 개발"] },
      ],
      achievements: [
        "Spring Boot 및 JPA를 활용한 첫 팀 프로젝트 참여",
        "API 개발 및 Spring Security 초기 설정 경험",
        "GitHub를 통한 팀 협업 및 버전 관리 실습 (실수와 복구 경험 포함)",
        "선배 개발자들의 코드 리뷰 및 피드백을 통한 학습",
        "프로젝트 실패 경험을 통한 교훈 습득",
      ],
    },
  ],
  education: [
    { institution: "한양사이버대학교", degree: "응용소프트웨어공학과", period: "2024.02 ~ 현재", status: "재학중" },
    { institution: "대덕SW마이스터고", degree: "소프트웨어개발학과", period: "2020.03 ~ 2024.01.12", status: "졸업" },
  ],
  awards: [{ name: "앱잼 장려상", date: "2022.12.17", project: "MBOOK" }],
  certifications: [{ name: "정보처리기능사" }, { name: "정보기기운용기능사" }, { name: "스크래치자격증" }],
}

export const portfolioData: PortfolioData = {
  ...basePortfolioData,
  personalProjects: basePortfolioData.personalProjects.map((p) => {
    if (p.id === "haru-kkeut") {
      return {
        ...p,
        name: "하루의끝",
        shortDescription: "새벽 감성 일기 커뮤니티 앱. SNS 로그인, 댓글 시스템, 어드민 기능 개발 및 PM 역할 수행.",
        imageUrl: "/haru-kkeut-banner.jpeg",
        tags: [
          "Java",
          "SpringBoot",
          "JPA",
          "MySQL",
          "JWT",
          "Spring Security",
          "Redis",
          "SMTP",
          "Swagger",
          "AWS EC2",
          "AWS RDS",
          "AWS S3",
          "Docker",
          "Git",
          "GitHub",
          "GitKraken",
          "WebClient",
        ],
        period: "2022.10.06 ~ 2023.03",
        role: "BackEnd, PM (API 개발 기여도 100%)",
        overview:
          "밤이나 새벽에 일기를 쓰는 사용자들을 위한 커뮤니티 앱 '하루의끝'의 백엔드 개발 및 PM을 담당했습니다. 주요 기능으로 SNS 간편 로그인, 중첩 댓글 시스템, 좋아요, 신고 기능, 어드민 페이지 등을 개발했습니다. 프로젝트 진행 중 OAuth2.0 구현 방식 변경 및 RestTemplate에서 WebClient로의 리팩토링 등 기술적 이슈를 해결하며 성장했습니다. PM으로서 회의 주관, 프로젝트 방향성 관리 등 팀 리딩 경험도 쌓았습니다.",
        techStack: [
          "Java",
          "SpringBoot",
          "JPA",
          "MySQL",
          "JWT",
          "Spring Security",
          "Redis",
          "SMTP",
          "Swagger",
          "WebClient",
          "AWS EC2",
          "AWS RDS",
          "AWS S3",
          "Docker",
        ],
        teamComposition: ["총 4명 (프론트엔드, 백엔드(본인), 안드로이드, 디자인)"],
        tasks: [
          {
            title: "SNS 간편 로그인 및 OAuth 리팩토링",
            items: [
              "Kakao/Google OAuth OpenAPI 직접 연동 (RestTemplate -> WebClient 리팩토링)",
              "프론트엔드 요구사항에 맞춰 OAuth2.0 구현 방식 변경",
            ],
            imageUrl: "/haru-kkeut-oauth-refactor.png",
          },
          {
            title: "댓글/대댓글 시스템 설계 및 구현",
            items: [
              "효율적인 중첩 댓글 구조 설계 (origin_chat, origin_chat_id, reply_chat_id 활용)",
              "댓글, 대댓글, 대대댓글 기능 구현",
              "좋아요 및 신고 기능 연동",
            ],
            imageUrl: "/haru-kkeut-db-comments.png",
          },
          {
            title: "주요 기능 및 어드민 페이지 개발",
            items: ["일기 작성 시간 표시 ('몇 분 전' 형식)", "사용자 및 게시글 관리를 위한 어드민 페이지 개발"],
          },
        ],
        achievements: [
          "첫 PM 역할 수행 및 백엔드 단독 개발 경험",
          "책임감을 갖고 주도적으로 프로젝트를 이끌며 문제 해결 능력 향상",
          "RestTemplate에서 WebClient로의 성공적인 기술 리팩토링",
          "팀원과의 적극적인 소통을 통한 의사소통 능력 증진",
          "코드에 대한 깊이 있는 고민을 통해 오류 최소화",
        ],
      }
    }
    if (p.id === "mm-project") {
      return {
        ...p,
        name: "MM Project",
        shortDescription: "멘토링 기반 실력 증진 및 프로젝트 경험 플랫폼. SNS/자체 로그인, 마이페이지 API 개발.",
        imageUrl: "/mm-project-banner.png",
        tags: [
          "SpringBoot",
          "JPA",
          "MySQL",
          "JWT",
          "Spring Security",
          "OAuth2.0",
          "AWS EC2",
          "AWS RDS",
          "Docker",
          "Git",
          "GitHub",
          "GitKraken",
        ],
        period: "2022.06 ~ 2022.09",
        role: "BackEnd (기여도 60%)",
        overview:
          "멘토링을 통해 실력 증진과 프로젝트 경험을 쌓을 수 있는 서비스입니다. 백엔드 개발자로서 SNS/자체 로그인, 마이페이지 API 등을 개발했으며, 동료 개발자와의 협업 및 프론트엔드와의 첫 API 연동 경험을 통해 기술적으로 성장했습니다. 특히 OAuth2.0 학습 과정은 도전적이었지만, 이를 통해 새로운 기술 습득의 중요성을 깨달았습니다.",
        techStack: [
          "SpringBoot",
          "JPA",
          "MySQL",
          "JWT",
          "Spring Security",
          "OAuth2.0",
          "AWS EC2",
          "AWS RDS",
          "Docker",
          "Git",
          "GitHub",
          "GitKraken",
        ],
        teamComposition: ["총 6명 (백엔드 2명, 프론트엔드 3명, PM 1명, 디자인 1명)"],
        tasks: [
          {
            title: "사용자 인증 시스템 개발 (SNS/자체 로그인, 회원가입)",
            items: [
              "Google OAuth 2.0을 활용한 SNS 간편 로그인 구현",
              "자체 이메일/비밀번호 기반 로그인 및 회원가입 기능 개발",
              "JWT를 이용한 인증 토큰 관리",
            ],
            imageUrl: "/mm-project-api-docs.png",
          },
          {
            title: "마이페이지 기능 개발",
            items: ["사용자 정보 조회 및 수정 API 개발", "비밀번호 변경 API 개발"],
            imageUrl: "/mm-project-api-docs.png",
          },
          {
            title: "멘토 목록 및 프로필 기능 (API 지원)",
            items: ["멘토링을 위한 멘토 목록 조회 API", "멘토 프로필 상세 정보 API"],
            imageUrl: "/mm-project-mentor-list.png",
          },
        ],
        achievements: [
          "동료 백엔드 개발자와의 협업을 통한 기술 공유 및 동반 성장 경험.",
          "첫 프론트엔드 API 연동 프로젝트를 통해 협업 및 다른 직군에 대한 이해도 향상 (CORS 처리 등).",
          "OAuth2.0 등 새로운 기술 학습 및 적용을 통한 문제 해결 능력 강화.",
          "API 명세 작성 및 관리를 통한 백엔드 시스템 설계 경험.",
        ],
      }
    }
    if (p.id === "mbook") {
      return {
        ...p,
        name: "엠북(MBOOK)",
        shortDescription: "태그 기반 작품 추천 및 리뷰 공유, 그룹 채팅 커뮤니티 플랫폼 (영화, 책 등)",
        imageUrl: "/mbook-main.jpg", // CHANGED: Using logo for testing
        tags: [
          "Java",
          "SpringBoot",
          "JPA",
          "MySQL",
          "JWT",
          "Spring Security",
          "Redis",
          "SMTP",
          "STOMP",
          "Socket",
          "Swagger",
          "AWS EC2",
          "AWS RDS",
          "AWS S3",
          "Docker",
          "Git",
          "GitHub",
          "GitKraken",
        ],
        period: "2022.12.17 ~ 2022.12.18 (해커톤)",
        role: "BackEnd (API 개발 및 서버 세팅)",
        overview:
          "MBOOK은 사용자가 시간, 날씨 등 다양한 태그를 통해 맞춤형 작품(영화, 책 등) 추천을 받고, 리뷰를 작성 및 공유하며, 그룹 채팅으로 관심사를 나누는 커뮤니티 플랫폼입니다. 앱잼 해커톤에서 백엔드 개발자로 참여하여 서버 초기 세팅 및 북마크, 리뷰, 사용자 인증 등 주요 API 개발을 담당했습니다. 짧은 시간 내에 많은 API를 개발하며 DB 관계 설정 오류를 해결하는 등 값진 경험을 했습니다.",
        techStack: [
          "Java",
          "SpringBoot",
          "JPA",
          "MySQL",
          "JWT",
          "Spring Security",
          "Redis",
          "SMTP",
          "STOMP",
          "Socket",
          "Swagger",
          "AWS EC2",
          "AWS RDS",
          "AWS S3",
          "Docker",
        ],
        teamComposition: ["총 5명 (프론트엔드(RN) 1명, 백엔드 2명(본인 포함), 디자인 1명, 기획 1명)"],
        tasks: [
          {
            title: "서버 초기 세팅 및 API 개발",
            items: [
              "Spring Boot 프로젝트 초기 환경 설정",
              "북마크, 리뷰, 태그 관련 CRUD API 개발",
              "사용자 로그인, 회원가입, 마이페이지 API 개발",
              "이미지 업로드(S3 연동) 기능 구현",
            ],
          },
          {
            title: "API 문서화 (Swagger)",
            items: ["채팅 기능을 제외한 대부분의 API 명세 작성 및 관리"],
          },
          {
            title: "수상 이미지",
            items: ["앱잼 장려상 수상"],
            imageUrl: "/mbook-award.jpg",
          },
        ],
        achievements: [
          "앱잼 해커톤 장려상 수상 (팀 프로젝트)",
          "제한된 시간(10시간 내 40개 API 목표) 내 다수 API 개발 경험",
          "DB 관계 설정 오류(즐겨찾기 ID와 영화 ID 불일치)를 ManyToOne/OneToMany 재설정으로 해결",
          "첫 해커톤 참여를 통해 개발 역량 및 문제 해결 능력 시험",
        ],
        liveUrl: "https://youtu.be/7xy7R073VuE",
      }
    }
    return p
  }),
}
