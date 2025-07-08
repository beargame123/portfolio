import type React from "react"
import {
  Github,
  Mail,
  Globe,
  BrainCircuit,
  CodeXml,
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
  imageUrl?: string
}

export interface Project {
  id: string
  name: string
  shortDescription: string
  imageUrl?: string
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
  notionUrl?: string
  liveUrl?: string
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
    { name: "Email", url: "mailto:hoyoung7827@gmail.com", icon: Mail, text: "hoyoung7827@gmail.com" },
    { name: "GitHub", url: "https://github.com/beargame123", icon: Github, text: "beargame123" },
    { name: "Kmong", url: "https://kmong.com/gig/584801", icon: Globe, text: "Kmong Profile" },
  ],
  blogLinks: [
    {
      name: "공부일지 - Notion",
      url: "https://zinc-puppet-0e0.notion.site/d2ce7cf69c95450e97f5f105979836ee?v=9ce5322d678c4c799199b81ff37f8e30",
      icon: BrainCircuit,
      description: "개인 학습 내용을 정리하는 Notion 페이지입니다.",
    },
    {
      name: "개발 블로그 - Velog",
      url: "https://velog.io/@beargame/posts",
      icon: CodeXml,
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
        { name: "Spring Boot", icon: ServerCog },
        { name: "Spring MVC", icon: Server },
        { name: "Spring Data JPA", icon: Database },
        { name: "JPA", icon: Database },
        { name: "QueryDSL", icon: Database },
        { name: "Gradle", icon: Wrench },
        { name: "Intellij", icon: Laptop },
        { name: "RustRover", icon: Laptop },
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
    { company: "프리랜서 (크몽)", role: "Backend, Frontend Developer", period: "2024.05 ~ 현재" },
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
      id: "taropick",
      name: "타로픽(TAROPICK)",
      shortDescription: "타로 운세 상담 플랫폼",
      type: "work",
      icon: "🔮",
      period: "2025.04 ~ 현재",
      role: "백엔드 개발",
      liveUrl: "https://youtube.com/shorts/98QF26q2ncA",
      imageUrl: "/taropick-main-banner.png",
      overview: "타로 운세 상담 플랫폼입니다. 실시간 상담, 결제, 사용자 관리 기능을 제공합니다.",
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
        "OAuth를 통한 간편 SNS 로그인 기능 구현",
        "WebSocket을 사용하여 실시간으로 페이지 접속자 수 확인 기능 구현",
        "포트원(구 아임포트) API를 연동하여 KG이니시스 결제 시스템 안정적으로 구축",
        "QueryDsl 도입을 통한 데이터베이스 조회 성능 개선",
      ],
      tags: ["Java", "Spring Boot", "AWS", "WebSocket", "OAuth", "Payment Gateway"],
    },
    {
      id: "imott",
      name: "아임오티티(IMOTT)",
      shortDescription: "다양한 OTT 플랫폼 할인 판매 서비스",
      type: "work",
      icon: "📺",
      period: "2024.10 ~ 현재",
      role: "백엔드, 프론트엔드 개발",
      liveUrl: "https://imott.co.kr/",
      imageUrl: "/imott-logo.jpg",
      overview:
        "다양한 OTT 서비스를 저렴하게 구매할 수 있는 사이트입니다. 직원/어드민 관리 페이지 및 자동 주문 처리 기능을 포함합니다.",
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
      achievements: ["네이버 주문 연동 자동 주문 처리 및 메일 발송 시스템 구현", "Thymeleaf를 활용한 풀스택 개발 경험"],
      tags: ["Java", "Spring Boot", "Thymeleaf", "AWS"],
    },
    {
      id: "oheung",
      name: "(주)오O 자격진흥원",
      shortDescription: "자격증 발급 및 온라인 시험 서비스",
      type: "work",
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
        "MySQL",
        "OpenAPI",
        "Socket",
        "JavaScript",
        "HTML",
        "CSS",
        "Chrome Extension",
        "AI",
      ],
      period: "2025.04.06 ~ 진행중",
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
