const alabData = {
	company: {
		ticker: "ALAB",
		name: "Astera Labs, Inc.",
		asOfDate: "2026-06-03",
		summary:
			"Fabless semiconductor company providing purpose-built connectivity solutions for rack-scale AI infrastructure.",
	},
	hero: {
		kicker: "Blog Thesis Review",
		title:
			"“AI 데이터센터의 숨은 배관공” 서사는 맞지만, 수치와 직접 협력 주장은 다시 걸러야 합니다.",
		body: "블로그 글의 핵심 방향은 공식 자료와 대체로 일치합니다. 다만 최신 KPI는 Q3 2025가 아니라 Q1 2026 및 Q2 2026 가이던스로 갱신해야 하고, Google TPU 직접 협력과 Strong Buy 지배 서사는 보수적으로 표시해야 합니다.",
		splits: [
			{
				title: "확인된 축",
				body: "AI rack-scale connectivity, NVIDIA Blackwell/MGX, UALink 이사회, PCIe/CXL/Ethernet 포트폴리오",
			},
			{
				title: "주의할 축",
				body: "고객 집중도, TSMC 단일 IC 제조 파트너, 높은 밸류에이션, 컨센서스 표현 과장",
			},
		],
	},
	sectionLabels: {
		financials: "실적 추이",
		portfolio: "제품 포트폴리오 맵",
		valueChain: "AI 인프라 밸류체인 내 위치",
		timeline: "NVIDIA · UALink · OCP 이벤트 타임라인",
		truth: "검증된 사실 vs 투자 서사",
	},
	kpis: [
		{ label: "Q1 2026 매출", value: "$308.4M", meta: "GAAP · +93% YoY" },
		{
			label: "GAAP Gross Margin",
			value: "76.3%",
			meta: "Q1 2026 · +136 bps YoY",
		},
		{ label: "GAAP Net Income", value: "$80.3M", meta: "Q1 2026 · +152% YoY" },
		{ label: "Q2 2026 가이던스", value: "$355M-$365M", meta: "GM 약 73%" },
		{
			label: "최대 고객 집중도",
			value: "70%+",
			meta: "FY2025 최종고객 기준",
			risk: true,
		},
		{
			label: "상위 3개 고객",
			value: "~86%",
			meta: "FY2025 최종고객 기준",
			risk: true,
		},
	],
	sources: [
		{
			id: "blog",
			title: "블로그 원문",
			type: "starting point",
			detail: "추천 주식: AI 시대의 숨은 배관공",
			url: "https://mostech.tistory.com/161",
		},
		{
			id: "q1_release",
			title: "Astera Labs Q1 2026",
			type: "primary",
			detail: "공식 실적 발표 및 Q2 가이던스",
			url: "https://ir.asteralabs.com/news-releases/news-release-details/astera-labs-reports-first-quarter-2026-financial-results",
		},
		{
			id: "q1_10q",
			title: "SEC Form 10-Q",
			type: "primary",
			detail: "Q1 2026 재무제표와 MD&A",
			url: "https://www.sec.gov/Archives/edgar/data/1736297/000173629726000020/alab-20260331.htm",
		},
		{
			id: "fy2025_10k",
			title: "SEC Form 10-K",
			type: "primary",
			detail: "FY2025 고객 집중도와 공급망 리스크",
			url: "https://ir.asteralabs.com/static-files/72301d16-1396-4171-be97-17ddb4c100e9",
		},
		{
			id: "nvidia_nvlink",
			title: "NVIDIA NVLink Fusion 협업",
			type: "primary",
			detail: "Astera Labs 공식 발표",
			url: "https://ir.asteralabs.com/news-releases/news-release-details/astera-labs-expands-collaboration-nvidia-advance-nvlink-fusion",
		},
		{
			id: "ualink",
			title: "UALink Leadership",
			type: "primary",
			detail: "Astera Labs Board Director 등재",
			url: "https://ualinkconsortium.org/boardofdirectors/",
		},
		{
			id: "marketbeat",
			title: "MarketBeat Consensus",
			type: "secondary",
			detail: "23명 중 12 Buy, 11 Hold",
			url: "https://www.marketbeat.com/instant-alerts/astera-labs-inc-nasdaqalab-given-consensus-rating-of-moderate-buy-by-analysts-2026-05-30/",
		},
	],
	claimChecks: [
		{
			claim: "Astera Labs는 AI 데이터센터의 연결 솔루션 기업이다.",
			verdict: "Confirmed",
			evidence:
				"공식 실적 발표와 10-Q는 rack-scale AI infrastructure를 위한 purpose-built connectivity solutions라고 설명한다.",
			latest:
				"PCIe, CXL, Ethernet, UALink 기반 연결 제품과 COSMOS 관리 소프트웨어를 제공한다.",
			dashboard: "회사 개요, 밸류체인, 제품 맵",
			sourceIds: ["q1_release", "q1_10q"],
		},
		{
			claim:
				"핵심 제품은 PCIe Retimer, CXL Controller, Scorpio Smart Switch다.",
			verdict: "Confirmed",
			evidence:
				"10-K와 10-Q가 Aries PCIe/CXL Smart DSP Retimers, Leo CXL Controllers, Scorpio Smart Fabric Switches를 제품군으로 명시한다.",
			latest: "Taurus Ethernet SCM과 COSMOS도 최신 포트폴리오에서 중요하다.",
			dashboard: "제품 포트폴리오 맵",
			sourceIds: ["fy2025_10k", "q1_10q"],
		},
		{
			claim: "NVIDIA GPU 생태계와 연결성이 있다.",
			verdict: "Confirmed",
			evidence:
				"Astera Labs는 NVIDIA Blackwell/MGX, NVLink Fusion 관련 협업과 Aries/Scorpio 배포를 공식 발표했다.",
			latest:
				"Scorpio P-Series, Aries 6 Retimers, NVLink Fusion custom solutions가 핵심 연결 지점이다.",
			dashboard: "NVIDIA 이벤트 타임라인",
			sourceIds: ["nvidia_nvlink"],
		},
		{
			claim: "Google TPU 생태계와 직접 연결성이 있다.",
			verdict: "Partially True",
			evidence:
				"Astera와 Google은 UALink 이사회 생태계 안에 있으나, Google TPU에 대한 Astera 직접 공급 또는 직접 협력은 공식 자료로 확인하지 못했다.",
			latest:
				"공식 표현은 proprietary AI accelerators와 hyperscaler customers 수준으로 두는 것이 안전하다.",
			dashboard: "확인 필요 배지와 근거 패널",
			sourceIds: ["ualink", "q1_10q"],
		},
		{
			claim: "UALink 등 차세대 AI 인프라 표준에서 역할이 있다.",
			verdict: "Confirmed",
			evidence:
				"UALink Leadership 페이지는 Astera Labs의 Chris Petersen을 UALink Director로 표시한다.",
			latest:
				"Astera는 Promoter Member로 UALink open connectivity ecosystem을 지원한다고 발표했다.",
			dashboard: "표준 생태계 타임라인",
			sourceIds: ["ualink"],
		},
		{
			claim:
				"최근 Q3 매출 성장률 104%, Gross Margin 76.4%, 흑자 전환이 있었다.",
			verdict: "Outdated",
			evidence:
				"Q3 2025 발표 기준 매출 +104%는 맞다. 그러나 76.4%는 Non-GAAP GM이며 GAAP GM은 76.2%다.",
			latest:
				"Q1 2026 최신값은 매출 $308.4M, +93% YoY, GAAP GM 76.3%, GAAP 순이익 $80.3M이다.",
			dashboard: "실적 차트와 KPI 최신화",
			sourceIds: ["q1_release", "q1_10q"],
		},
		{
			claim: "애널리스트 컨센서스는 Strong Buy 중심이다.",
			verdict: "Partially True",
			evidence:
				"최신 보조자료 기준 Buy 성향은 있지만 Strong Buy 지배로 표현하기 어렵다. MarketBeat는 Moderate Buy, StockAnalysis는 Buy로 집계한다.",
			latest:
				"MarketBeat: 23명 중 12 Buy, 11 Hold, 평균 목표가 $233.75. 보조자료로만 표시한다.",
			dashboard: "컨센서스 보조 패널",
			sourceIds: ["marketbeat"],
		},
		{
			claim: "고평가 및 변동성 리스크가 있어 포트폴리오 비중 관리가 필요하다.",
			verdict: "Partially True",
			evidence:
				"비중 관리는 투자 원칙이라 공식 검증 대상은 아니지만, 고객 집중도와 beta/P-E 등은 변동성 리스크를 뒷받침한다.",
			latest:
				"FY2025 한 최종고객 70%+, 상위 3개 최종고객 약 86%. MarketBeat 보조자료 기준 beta 3.35.",
			dashboard: "리스크 레이더",
			sourceIds: ["fy2025_10k", "marketbeat"],
		},
	],
	financials: [
		{
			period: "Q3 2025",
			revenue: 230.575,
			gaapMargin: 76.2,
			nonGaapMargin: 76.4,
			netIncome: 91.114,
		},
		{
			period: "Q4 2025",
			revenue: 270.583,
			gaapMargin: 75.6,
			nonGaapMargin: 75.7,
			netIncome: 44.982,
		},
		{
			period: "Q1 2026",
			revenue: 308.361,
			gaapMargin: 76.3,
			nonGaapMargin: 76.4,
			netIncome: 80.31,
		},
	],
	annualRevenue: [
		{ period: "2021", revenue: 34.8 },
		{ period: "2022", revenue: 79.9 },
		{ period: "2023", revenue: 115.8 },
		{ period: "2024", revenue: 396.3 },
		{ period: "2025", revenue: 852.5 },
	],
	products: [
		{
			name: "Aries",
			protocol: "PCIe / CXL",
			role: "Smart DSP Retimer와 Smart Cable Module. 약해진 고속 신호를 복구해 서버 내부 연결 거리를 늘린다.",
		},
		{
			name: "Scorpio P/X",
			protocol: "PCIe 6 / UALink-ready",
			role: "Smart Fabric Switch. AI accelerator 활용률, rack-scale scale-up 연결, Scorpio X-Series 로드맵이 핵심이다.",
		},
		{
			name: "Leo",
			protocol: "CXL",
			role: "Memory Connectivity Controller. DRAM 확장, 공유, pooling으로 메모리 병목을 완화한다.",
		},
		{
			name: "Taurus",
			protocol: "Ethernet",
			role: "Smart Cable Module. copper media 기반 서버-스위치 연결의 대역폭과 reach를 확장한다.",
		},
		{
			name: "COSMOS",
			protocol: "Software",
			role: "Link management, fleet management, RAS. IC, board, module을 구성·관측·진단하는 관리 계층이다.",
		},
	],
	valueChain: [
		{
			title: "Compute",
			body: "GPU, TPU, ASIC, CPU. NVIDIA 및 proprietary accelerators가 수요의 중심이다.",
		},
		{
			title: "Connectivity",
			body: "ALAB 핵심 위치. PCIe/CXL/Ethernet/UALink 신호와 fabric을 관리한다.",
			active: true,
		},
		{
			title: "Memory",
			body: "CXL 기반 메모리 확장과 pooling. Leo가 이 병목을 겨냥한다.",
			active: true,
		},
		{
			title: "Network",
			body: "Ethernet scale-out과 rack-level cabling. Taurus가 노출된다.",
			active: true,
		},
		{
			title: "Operations",
			body: "COSMOS로 fleet 관측, 진단, link management를 제공한다.",
			active: true,
		},
	],
	timeline: [
		{
			date: "2025-03",
			title: "NVIDIA Blackwell MGX",
			body: "Scorpio Smart Fabric Switches for PCIe 6-ready NVIDIA Blackwell-based MGX platforms 공식 발표.",
		},
		{
			date: "2025-05",
			title: "NVLink Fusion",
			body: "NVIDIA NVLink Fusion ecosystem을 위한 scale-up connectivity collaboration 발표.",
		},
		{
			date: "2025-10",
			title: "OCP Global Summit",
			body: "PCIe, UALink, Ethernet, CXL, OpenBMC 기반 rack-scale AI connectivity portfolio를 시연.",
		},
		{
			date: "2026-05",
			title: "Q1 2026 Results",
			body: "매출 $308.4M, GAAP GM 76.3%, Q2 매출 가이던스 $355M-$365M 제시.",
		},
	],
	risks: [
		{
			name: "고객 집중도",
			score: 5,
			evidence: "FY2025 한 최종고객 70%+, 상위 3개 약 86%.",
		},
		{
			name: "공급망 의존",
			score: 4,
			evidence: "TSMC가 IC 단일 제조 파트너. ASE, Amkor 등 외부 패키징 의존.",
		},
		{
			name: "밸류에이션",
			score: 4,
			evidence:
				"고성장 기대가 주가에 크게 반영될 수 있음. 컨센서스와 주가 괴리 확인 필요.",
		},
		{
			name: "AI CAPEX 둔화",
			score: 3,
			evidence: "Hyperscaler AI capex cycle에 민감한 구조.",
		},
		{
			name: "Design-out",
			score: 4,
			evidence: "고객이 자체 설계 또는 경쟁사 제품으로 전환할 수 있음.",
		},
		{
			name: "제품 믹스 마진",
			score: 3,
			evidence: "Q2 2026 GAAP GM 가이던스는 약 73%로 Q1 76.3%보다 낮다.",
		},
		{
			name: "지정학·수출규제",
			score: 4,
			evidence: "대만, 중국, 싱가포르 등 지역 노출과 무역 규제 리스크.",
		},
	],
	competitors: [
		{
			name: "Credo",
			axis: "고속 연결, AEC, DSP",
			point: "AI cluster connectivity 수혜를 공유하는 직접 비교군.",
		},
		{
			name: "Marvell",
			axis: "Custom silicon, networking, optical DSP",
			point: "더 넓은 포트폴리오와 hyperscaler ASIC 노출.",
		},
		{
			name: "Broadcom",
			axis: "Ethernet, switching, custom ASIC",
			point: "규모와 고객 기반은 강하지만 ALAB보다 사업 범위가 넓다.",
		},
		{
			name: "Rambus",
			axis: "Memory interface/IP",
			point: "CXL과 메모리 병목 해소 관점에서 비교 가능.",
		},
		{
			name: "Astera Labs",
			axis: "PCIe/CXL/Ethernet/UALink + COSMOS",
			point: "AI 연결 인프라 순수 노출도가 높고 고객 집중도도 높다.",
		},
	],
	scenarios: [
		{
			name: "Bull",
			className: "bull",
			headline: "Rack-scale AI 전환이 가속되고 고객 기반이 넓어진다.",
			points: [
				"Scorpio/Aries/Taurus ramp 지속",
				"NVLink Fusion·UALink 관련 design win 확대",
				"고객 집중도 완화",
			],
		},
		{
			name: "Base",
			className: "base",
			headline: "고성장은 이어지지만 2025년의 폭발적 성장률은 정상화된다.",
			points: ["Q2 가이던스 충족", "GM은 73-76% 범위", "상위 고객 의존은 지속"],
		},
		{
			name: "Bear",
			className: "bear",
			headline: "주요 고객 수요 축소나 설계 전환이 발생한다.",
			points: [
				"한 대형 고객 발주 감소",
				"경쟁사 또는 자체 설계로 design-out",
				"밸류에이션 압축",
			],
		},
	],
	truth: [
		{
			title: "검증된 사실",
			body: "Q1 2026 매출 $308.4M, GAAP GM 76.3%, GAAP 순이익 $80.3M, Q2 매출 가이던스 $355M-$365M.",
		},
		{
			title: "강한 서사",
			body: "AI rack-scale 전환에서 연결 병목을 해결하는 picks-and-shovels 기업이라는 해석.",
		},
		{
			title: "검증이 약한 서사",
			body: "Google TPU 직접 협력, Strong Buy 지배, Astera 없이는 rack-scale AI가 절대 불가하다는 단정.",
		},
		{
			title: "모니터링 지표",
			body: "Scorpio 매출 기여, Q2/Q3 가이던스, 고객 집중도 변화, GAAP GM 하락 폭, 신규 표준 채택.",
		},
	],
};

const mrvlData = {
	company: {
		ticker: "MRVL",
		name: "Marvell Technology, Inc.",
		asOfDate: "2026-06-03",
		summary:
			"Fabless data infrastructure semiconductor company spanning custom silicon, optics, networking, compute and storage.",
	},
	hero: {
		kicker: "Blog Thesis Review",
		title:
			"“AI 시대의 맞춤 양복사” 서사는 강하지만, 텐버거 가격표는 사실과 분리해야 합니다.",
		body: "Marvell의 custom silicon, optics, Ethernet switching, NVLink Fusion 서사는 공식 자료로 확인됩니다. 다만 $1T 시총, $800~1,000 주가, 장기 $50B+ 매출 같은 내용은 공식 가이던스가 아니라 초강세 투자 서사입니다.",
		splits: [
			{
				title: "확인된 축",
				body: "Q1 FY2027 매출 $2.418B, 데이터센터 76%, NVIDIA $2B 투자, Celestial AI·XConn 인수 완료",
			},
			{
				title: "주의할 축",
				body: "상위 10개 고객 82%, 아시아 고객향 매출 77%, Broadcom 경쟁, 텐버거 시나리오 과장 가능성",
			},
		],
	},
	sectionLabels: {
		financials: "매출 · 마진 · 순이익 추이",
		portfolio: "제품 · 기술 포트폴리오 맵",
		valueChain: "AI 데이터센터 밸류체인 내 위치",
		timeline: "NVIDIA · NVLink Fusion · Celestial AI · XConn 타임라인",
		truth: "검증된 사실 vs 텐버거 서사",
	},
	kpis: [
		{ label: "Q1 FY2027 매출", value: "$2.418B", meta: "GAAP · +28% YoY" },
		{ label: "GAAP Gross Margin", value: "52.1%", meta: "Q1 FY2027" },
		{ label: "Non-GAAP GM", value: "58.9%", meta: "Q1 FY2027" },
		{ label: "GAAP Net Income", value: "$34.5M", meta: "Non-GAAP $718.0M" },
		{
			label: "Q2 FY2027 가이던스",
			value: "$2.70B ±5%",
			meta: "GAAP GM 52.1-53.1%",
		},
		{ label: "데이터센터 비중", value: "76%", meta: "Q1 FY2027 매출 $1.833B" },
		{ label: "상위 10개 고객", value: "82%", meta: "FY2026 기준", risk: true },
		{
			label: "아시아 고객향 매출",
			value: "77%",
			meta: "FY2026 기준",
			risk: true,
		},
	],
	sources: [
		{
			id: "blog_mrvl",
			title: "블로그 원문",
			type: "starting point",
			detail: "MRVL 맞춤 양복사 투자 서사",
			url: "https://mostech.tistory.com/169",
		},
		{
			id: "mrvl_q1_fy2027",
			title: "Marvell Q1 FY2027",
			type: "primary",
			detail: "공식 실적 발표와 Q2 가이던스",
			url: "https://investor.marvell.com/news-events/press-releases/detail/1023/marvell-technology-inc-reports-first-quarter-of-fiscal-year-2027-financial-results",
		},
		{
			id: "mrvl_fy2026",
			title: "Marvell FY2026 10-K",
			type: "primary",
			detail: "연간 실적, 고객 집중도, 지역 노출",
			url: "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000011/mrvl-20260131.htm",
		},
		{
			id: "mrvl_nvlink",
			title: "NVIDIA / Marvell NVLink Fusion",
			type: "primary",
			detail: "$2B 투자와 strategic partnership",
			url: "https://www.marvell.com/company/newsroom/nvidia-ai-ecosystem-expands-marvell-joins-forces-through-nvlink-fusion.html",
		},
		{
			id: "mrvl_consensus",
			title: "Analyst Targets",
			type: "secondary",
			detail: "목표가와 컨센서스는 시점 의존 보조자료",
			url: "https://www.marketbeat.com/stocks/NASDAQ/MRVL/forecast/",
		},
	],
	claimChecks: [
		{
			claim:
				"Marvell은 AI 시대의 맞춤 양복사로 hyperscaler custom silicon과 고속 연결 인프라를 제공한다.",
			verdict: "Confirmed",
			evidence:
				"Marvell 공식 제품군과 NVIDIA 발표는 custom XPUs, optical DSP, silicon photonics, Ethernet switching, PCIe retimer 등 데이터 인프라 포트폴리오를 확인한다.",
			latest:
				"Q1 FY2027 데이터센터 매출은 $1.833B로 전체의 76%이며, custom silicon·optics·networking이 핵심 성장축이다.",
			dashboard: "회사 개요, 제품 맵, 밸류체인",
			sourceIds: ["mrvl_q1_fy2027", "mrvl_nvlink"],
		},
		{
			claim:
				"2026년 2월 추천 당시 $80~82에서 2026년 4월 24일 $164.31로 약 100~105% 상승했다.",
			verdict: "Partially True",
			evidence:
				"주가와 수익률은 공식 회사 자료가 아니라 시장 데이터로 검증해야 한다. 대시보드에서는 성과 주장으로만 분리한다.",
			latest:
				"시점 의존 수치이므로 실시간 KPI가 아니라 가격 타임라인 또는 보조 메모로 표시한다.",
			dashboard: "가격 타임라인 보조 패널",
			sourceIds: ["blog_mrvl"],
		},
		{
			claim: "FY2026 매출은 약 $8.195B, 전년 대비 +42% 성장했다.",
			verdict: "Confirmed",
			evidence:
				"Marvell FY2026 공식 실적은 매출 $8.1946B, 전년 대비 약 +42.1%다.",
			latest: "FY2026 매출 $8.195B, FY2025 $5.767B.",
			dashboard: "KPI 카드와 연간 매출 차트",
			sourceIds: ["mrvl_fy2026"],
		},
		{
			claim: "데이터센터 부문이 전체 매출의 약 74%까지 확대되었다.",
			verdict: "Confirmed",
			evidence: "FY2026 데이터센터 매출은 $6.100B로 전체 매출의 74%다.",
			latest: "Q1 FY2027에는 데이터센터 매출 $1.833B, 비중 76%로 더 높아졌다.",
			dashboard: "데이터센터 매출 비중 차트",
			sourceIds: ["mrvl_q1_fy2027", "mrvl_fy2026"],
		},
		{
			claim: "FY2027 매출은 약 $11B, FY2028 매출은 약 $15B까지 성장할 수 있다.",
			verdict: "Partially True",
			evidence:
				"회사는 FY2027/2028 revenue outlook을 상향했다고 밝혔다. Q1 FY2027 이후 보조자료는 FY2027 nearly $11.5B, FY2028 약 $15B 이상을 언급한다.",
			latest:
				"공식 분기 가이던스는 Q2 FY2027 $2.700B ±5%이며, 장기 전망은 forward-looking statement로 표시해야 한다.",
			dashboard: "Base/Bull 시나리오",
			sourceIds: ["mrvl_q1_fy2027"],
		},
		{
			claim:
				"강세 시나리오에서는 FY2028 이후 매출 $20B~30B, 장기 $30B~50B도 가능하다.",
			verdict: "Unsupported",
			evidence:
				"해당 범위는 공식 가이던스나 확정된 회사 목표가 아니라 투자자의 외삽 시나리오다.",
			latest: "공식 확인 수치와 분리해 Bull case 상상력으로만 표시한다.",
			dashboard: "Bull 시나리오 경고",
			sourceIds: ["blog_mrvl"],
		},
		{
			claim:
				"텐버거 시나리오에서는 매출 $50B~80B, 시총 $1T+, 주가 $800~1,000+도 가능하다.",
			verdict: "Unsupported",
			evidence:
				"공식 자료로 확인되지 않는다. 밸류에이션 가정과 장기 성장률을 크게 외삽한 투자 서사다.",
			latest: "검증된 사실 vs 텐버거 서사 섹션에서 분리 표시한다.",
			dashboard: "텐버거 서사 패널",
			sourceIds: ["blog_mrvl"],
		},
		{
			claim:
				"Celestial AI 인수, NVIDIA의 $2B 투자, Google 등과의 custom chip 협력 소식이 성장 시나리오를 뒷받침한다.",
			verdict: "Partially True",
			evidence:
				"Celestial AI와 XConn 인수 완료, NVIDIA $2B 투자 및 NVLink Fusion 협업은 공식 확인된다. Google 직접 협력은 회사가 특정 고객을 공식 확인하지 않는 한 별도 검증이 필요하다.",
			latest:
				"NVIDIA와 인수 이벤트는 Confirmed, Google 직접 협력은 확인 필요로 나눠 표시한다.",
			dashboard: "이벤트 타임라인과 확인 필요 배지",
			sourceIds: ["mrvl_q1_fy2027", "mrvl_nvlink"],
		},
		{
			claim: "애널리스트 평균 목표가는 $122~128, 최고 목표가는 $170 수준이다.",
			verdict: "Outdated",
			evidence:
				"애널리스트 목표가는 매일 바뀌는 보조자료다. 특정 수치를 고정 KPI처럼 쓰면 최신성이 빠르게 떨어진다.",
			latest: "컨센서스는 보조자료 패널에 기준일과 출처를 붙여 표시한다.",
			dashboard: "컨센서스 보조 패널",
			sourceIds: ["mrvl_consensus"],
		},
		{
			claim: "고객 집중, 반도체 사이클, 경쟁 심화가 주요 리스크다.",
			verdict: "Confirmed",
			evidence:
				"FY2026 10-K는 Distributor A 37%, Direct Customer A 14%, 상위 10개 고객 82% 및 수요 변동·경쟁 리스크를 공시한다.",
			latest: "아시아 고객향 매출 77%도 지역 노출 리스크로 함께 모니터링한다.",
			dashboard: "리스크 레이더",
			sourceIds: ["mrvl_fy2026"],
		},
	],
	financials: [
		{
			period: "Q3 FY2026",
			revenue: 2075.0,
			gaapMargin: 51.6,
			nonGaapMargin: 59.7,
			netIncome: 1639.0,
			dataCenterShare: 75,
		},
		{
			period: "Q4 FY2026",
			revenue: 2218.7,
			gaapMargin: 51.1,
			nonGaapMargin: 59.6,
			netIncome: 384.2,
			dataCenterShare: 76,
		},
		{
			period: "Q1 FY2027",
			revenue: 2418.0,
			gaapMargin: 52.1,
			nonGaapMargin: 58.9,
			netIncome: 34.5,
			dataCenterShare: 76,
		},
	],
	annualRevenue: [
		{ period: "FY2024", revenue: 5507.7 },
		{ period: "FY2025", revenue: 5767.3 },
		{ period: "FY2026", revenue: 8194.6 },
	],
	products: [
		{
			name: "Custom ASIC / XPU",
			protocol: "Custom silicon",
			role: "Hyperscaler별 AI accelerator와 semi-custom compute를 설계하는 핵심 성장축.",
		},
		{
			name: "Optical DSP",
			protocol: "800G / 1.6T",
			role: "PAM, coherent, coherent-lite DSP로 scale-out optical interconnect 수요에 노출.",
		},
		{
			name: "Silicon Photonics",
			protocol: "CPO / Photonic Fabric",
			role: "Celestial AI 인수로 scale-up optical connectivity와 chiplet photonics 영역 확장.",
		},
		{
			name: "Ethernet Switching",
			protocol: "Teralynx / Prestera",
			role: "AI 클러스터 scale-out switching, 51.2T 및 차세대 100T 플랫폼 노출.",
		},
		{
			name: "PCIe / CXL / AEC",
			protocol: "Retimer / DSP",
			role: "XConn 인수와 PCIe/CXL 연결 포트폴리오로 서버 내부·랙 연결을 보완.",
		},
		{
			name: "Storage / DPU",
			protocol: "SSD / DPU / DCI",
			role: "데이터 저장, 보안, 이동, 처리까지 포함하는 더 넓은 data infrastructure 기반.",
		},
	],
	valueChain: [
		{
			title: "Custom Compute",
			body: "Custom XPU/ASIC으로 hyperscaler별 AI compute 요구를 맞춘다.",
			active: true,
		},
		{
			title: "Scale-up",
			body: "NVLink Fusion, silicon photonics, Celestial AI Photonic Fabric이 핵심.",
			active: true,
		},
		{
			title: "Scale-out",
			body: "Ethernet switching과 800G/1.6T optical DSP가 클러스터 확장을 담당한다.",
			active: true,
		},
		{
			title: "Storage / DPU",
			body: "데이터 이동, 보안, 저장 controller가 포트폴리오 폭을 만든다.",
			active: true,
		},
		{
			title: "Hyperscaler Demand",
			body: "고객 설계 채택과 AI capex가 성장률을 크게 좌우한다.",
		},
	],
	timeline: [
		{
			date: "2026-03",
			title: "FY2026 Results",
			body: "FY2026 매출 $8.195B, 데이터센터 $6.100B, 전체 74%로 성장.",
		},
		{
			date: "2026-03-31",
			title: "NVIDIA NVLink Fusion",
			body: "NVIDIA가 Marvell에 $2B 투자하고 NVLink Fusion strategic partnership 발표.",
		},
		{
			date: "Q1 FY2027",
			title: "Celestial AI · XConn 완료",
			body: "Q1 FY2027 중 두 인수 완료. Photonic Fabric과 PCIe/CXL 연결 포트폴리오 확장.",
		},
		{
			date: "2026-05",
			title: "Q1 FY2027 Results",
			body: "매출 $2.418B, GAAP GM 52.1%, Non-GAAP GM 58.9%, Q2 가이던스 $2.700B ±5%.",
		},
	],
	risks: [
		{
			name: "고객 집중도",
			score: 5,
			evidence:
				"FY2026 Distributor A 37%, Direct Customer A 14%, 상위 10개 고객 82%.",
		},
		{
			name: "데이터센터 집중",
			score: 4,
			evidence: "Q1 FY2027 데이터센터 매출 비중 76%로 AI capex cycle에 민감.",
		},
		{
			name: "Custom ASIC 경쟁",
			score: 5,
			evidence: "Broadcom 등 대형 경쟁사와 hyperscaler 자체 설계 리스크.",
		},
		{
			name: "아시아 노출",
			score: 4,
			evidence: "FY2026 아시아 고객향 매출 77% 및 제조·공급망 지역 노출.",
		},
		{
			name: "인수 통합",
			score: 3,
			evidence:
				"Celestial AI와 XConn 통합, 기술 로드맵 실행, milestone 리스크.",
		},
		{
			name: "마진 믹스",
			score: 3,
			evidence:
				"GAAP GM 52.1%, Non-GAAP GM 58.9%로 제품 믹스와 인수 회계 영향 모니터링 필요.",
		},
		{
			name: "텐버거 기대",
			score: 4,
			evidence: "$1T 시총·$800+ 주가는 공식 전망이 아닌 장기 외삽 서사.",
		},
	],
	competitors: [
		{
			name: "Broadcom",
			axis: "Custom ASIC, Ethernet switching",
			point: "가장 직접적인 custom silicon·AI networking 대형 경쟁 축.",
		},
		{
			name: "Astera Labs",
			axis: "PCIe/CXL/Ethernet connectivity",
			point: "더 순수한 AI 연결 인프라 노출. MRVL보다 작고 집중적.",
		},
		{
			name: "Credo",
			axis: "AEC, optical/electrical DSP",
			point: "AI cluster interconnect와 high-speed connectivity 비교군.",
		},
		{
			name: "Coherent / Lumentum",
			axis: "Optical components",
			point: "광부품·모듈 수요 관점에서 optics 노출을 비교.",
		},
		{
			name: "NVIDIA ecosystem",
			axis: "Complement / partner",
			point:
				"NVLink Fusion에서는 보완적 파트너지만 custom accelerator 생태계에서는 이해관계가 복합적.",
		},
	],
	scenarios: [
		{
			name: "Bull",
			className: "bull",
			headline: "AI custom silicon과 optics ramp가 동시에 가속된다.",
			points: [
				"FY2027/2028 outlook 상향 지속",
				"NVLink Fusion design win 확대",
				"Celestial AI Photonic Fabric 상용화 가속",
			],
		},
		{
			name: "Base",
			className: "base",
			headline: "데이터센터 성장은 강하지만 경쟁과 고객 집중 리스크가 남는다.",
			points: [
				"Q2 FY2027 $2.700B ±5% 가이던스 충족",
				"Non-GAAP GM 58-59%대 유지",
				"상위 고객 의존도는 완만히만 개선",
			],
		},
		{
			name: "Bear",
			className: "bear",
			headline: "AI capex 둔화나 custom ASIC design-out이 발생한다.",
			points: [
				"대형 고객 주문 축소",
				"Broadcom 또는 자체 설계로 share loss",
				"텐버거 기대가 빠르게 밸류에이션 압축으로 전환",
			],
		},
	],
	truth: [
		{
			title: "검증된 사실",
			body: "Q1 FY2027 매출 $2.418B, GAAP GM 52.1%, Non-GAAP GM 58.9%, 데이터센터 비중 76%, Q2 가이던스 $2.700B ±5%.",
		},
		{
			title: "강한 서사",
			body: "AI data center에서 custom silicon, optics, Ethernet switching, scale-up interconnect를 모두 제공하는 복합 플랫폼.",
		},
		{
			title: "검증이 약한 서사",
			body: "Google 직접 협력, $1T 시총, $800~1,000 주가, 장기 $50B+ 매출은 공식 사실이 아니라 외삽이다.",
		},
		{
			title: "모니터링 지표",
			body: "데이터센터 매출 성장률, custom XPU design win, optics ramp, 상위 고객 비중, GAAP/Non-GAAP GM 격차.",
		},
	],
};

const compareData = {
	summary: [
		{
			title: "ALAB",
			body: "더 작은 규모, 더 순수한 AI connectivity growth exposure, 고객 집중 리스크가 매우 선명한 구조.",
		},
		{
			title: "MRVL",
			body: "더 큰 규모, custom silicon + optics + networking + storage까지 포괄하는 복합 AI 인프라 플랫폼.",
		},
	],
	sources: [
		{ title: "ALAB", detail: "Q1 2026 실적과 FY2025 10-K 기반" },
		{ title: "MRVL", detail: "Q1 FY2027 실적과 FY2026 10-K 기반" },
		{ title: "Compare", detail: "투자 추천이 아닌 사업·리스크 노출 비교" },
	],
	rows: [
		{
			axis: "사업 초점",
			alab: "AI rack-scale connectivity",
			mrvl: "Custom silicon + optics + networking",
		},
		{ axis: "매출 규모", alab: "Q1 2026 $308.4M", mrvl: "Q1 FY2027 $2.418B" },
		{ axis: "성장률", alab: "Q1 2026 +93% YoY", mrvl: "Q1 FY2027 +28% YoY" },
		{
			axis: "데이터센터 노출",
			alab: "AI connectivity 순수 노출",
			mrvl: "Q1 FY2027 데이터센터 76%",
		},
		{
			axis: "고객 집중도",
			alab: "한 최종고객 70%+",
			mrvl: "상위 10개 고객 82%",
		},
		{
			axis: "NVIDIA 연결성",
			alab: "Blackwell/MGX, NVLink Fusion 접점",
			mrvl: "$2B 투자 + NVLink Fusion strategic partnership",
		},
		{
			axis: "포트폴리오 폭",
			alab: "좁고 깊은 connectivity",
			mrvl: "넓은 data infrastructure portfolio",
		},
		{
			axis: "핵심 리스크",
			alab: "고객 집중·밸류에이션·제품 ramp",
			mrvl: "Broadcom 경쟁·AI capex·인수 통합",
		},
	],
};

const dashboardData = {
	tabs: [
		{ id: "ALAB", label: "ALAB", description: "Astera Labs" },
		{ id: "MRVL", label: "MRVL", description: "Marvell Technology" },
		{ id: "Compare", label: "Compare", description: "ALAB vs MRVL" },
	],
	activeTab: "ALAB",
	companies: { ALAB: alabData, MRVL: mrvlData },
	compare: compareData,
};

window.dashboardData = dashboardData;
