const alabResearch = {
	company: {
		ticker: "ALAB",
		name: "Astera Labs, Inc.",
		asOfDate: "2026-06-03",
		type: "AI connectivity infrastructure",
	},
	snapshot: {
		summary: "AI 데이터센터 연결 인프라 순수 성장주",
		profile:
			"Astera Labs는 GPU, AI accelerator, CPU, 메모리, 스위치 사이의 고속 데이터 이동 병목을 줄이는 fabless 반도체 기업이다. 사업은 PCIe, CXL, Ethernet, UALink 기반 연결 칩과 COSMOS 관리 소프트웨어에 집중되어 있다.",
		character: "고성장 · 고집중도 · 고변동성",
		keyQuestion: "고객 집중도를 감수할 만큼 rack-scale AI 연결 수요가 강한가?",
		researchRead:
			"실적 모멘텀은 매우 강하지만, 현재 가격은 성장 둔화나 고객 믹스 변화에 민감한 구조다.",
		priceDiscipline:
			"진입 판단은 매출 성장률보다 고객 다변화와 Scorpio ramp 지속 여부를 함께 봐야 한다.",
		valuationWarning:
			"시가총액과 수익 배수가 이미 고성장 프리미엄을 크게 반영한다. 좋은 회사와 좋은 가격은 별도 질문이다.",
		tags: [
			"Pure AI connectivity",
			"Rack-scale",
			"NVIDIA ecosystem",
			"Customer concentration",
		],
	},
	kpis: [
		{ label: "Q1 2026 매출", value: "$308.4M", meta: "+93% YoY · GAAP" },
		{ label: "GAAP Gross Margin", value: "76.3%", meta: "Q1 2026" },
		{ label: "GAAP Net Income", value: "$80.3M", meta: "Q1 2026" },
		{
			label: "Q2 2026 가이던스",
			value: "$355M-$365M",
			meta: "매출 · GM 약 73%",
		},
		{
			label: "현재 시가총액",
			value: "$64.45B",
			meta: "2026-06-03 00:15 UTC",
			risk: true,
		},
		{
			label: "Run-rate P/S",
			value: "44.8x",
			meta: "Q2 guide midpoint annualized",
			risk: true,
		},
		{
			label: "최대 고객",
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
	business: {
		model: "Fabless · merchant connectivity silicon + software",
		body: "Astera는 AI 서버와 랙 안에서 신호 무결성, 메모리 확장, accelerator-to-accelerator 연결, cable reach, fleet 진단을 해결한다. 수익은 고객 플랫폼에 설계 채택된 반도체와 모듈 출하에서 발생하며, design win 이후 플랫폼 ramp가 매출을 좌우한다.",
		products: [
			{
				name: "Aries",
				label: "PCIe / CXL",
				body: "Smart DSP Retimer와 Smart Cable Module. GPU 서버 내부의 고속 신호를 복구해 보드와 케이블 연결 거리를 늘린다.",
			},
			{
				name: "Scorpio",
				label: "PCIe 6 / UALink-ready",
				body: "Smart Fabric Switch. rack-scale AI에서 accelerator 활용률과 scale-up 연결 밀도를 높이는 성장축이다.",
			},
			{
				name: "Leo",
				label: "CXL",
				body: "Memory Connectivity Controller. 메모리 확장, 공유, pooling을 통해 AI 워크로드의 메모리 병목을 완화한다.",
			},
			{
				name: "Taurus",
				label: "Ethernet SCM",
				body: "Smart Cable Module. copper media 기반 서버-스위치 연결의 대역폭과 reach를 확장한다.",
			},
			{
				name: "COSMOS",
				label: "Software",
				body: "Link, fleet, RAS 관리 계층. 칩·보드·모듈의 상태를 관측하고 진단하는 운영 소프트웨어다.",
			},
		],
	},
	whyNow: [
		{
			title: "서버 단위에서 rack-scale로 전환",
			body: "AI 클러스터는 개별 서버 성능보다 랙 전체의 accelerator 활용률과 데이터 이동 효율이 중요해지고 있다.",
		},
		{
			title: "고속 연결이 병목으로 부상",
			body: "GPU와 AI accelerator가 빨라질수록 PCIe, CXL, Ethernet, UALink, NVLink Fusion 접점의 신호 무결성과 switching 수요가 커진다.",
		},
		{
			title: "NVIDIA 플랫폼 접점",
			body: "Blackwell, MGX, NVLink Fusion ecosystem 관련 발표는 Astera가 AI 랙 아키텍처의 연결 계층에 들어갈 수 있음을 보여준다.",
		},
	],
	financialMomentum: {
		rows: [
			{
				period: "Q3 2025",
				revenue: 230.6,
				gaapMargin: 76.2,
				nonGaapMargin: 76.4,
				netIncome: 91.1,
				note: "+104% YoY",
			},
			{
				period: "Q4 2025",
				revenue: 270.6,
				gaapMargin: 75.6,
				nonGaapMargin: 75.7,
				netIncome: 45.0,
				note: "FY2025 매출 +115%",
			},
			{
				period: "Q1 2026",
				revenue: 308.4,
				gaapMargin: 76.3,
				nonGaapMargin: 76.4,
				netIncome: 80.3,
				note: "+93% YoY",
			},
		],
		annual: [
			{ period: "2023", revenue: 115.8 },
			{ period: "2024", revenue: 396.3 },
			{ period: "2025", revenue: 852.5 },
		],
		notes: [
			"Q1 2026 매출은 $308.4M으로 YoY +93%, Q2 2026 매출 가이던스 midpoint는 $360M이다.",
			"GAAP gross margin은 76%대지만 Q2 가이던스는 약 73%로 믹스와 ramp 비용을 확인해야 한다.",
		],
	},
	valuation: {
		marketDataAsOf: "Market data · 2026-06-03 00:15 UTC",
		stats: [
			{ label: "주가", value: "$355.76", detail: "latest trade snapshot" },
			{ label: "시가총액", value: "$64.45B", detail: "equity market value" },
			{ label: "TTM P/E", value: "240.4x", detail: "market data snapshot" },
			{
				label: "Run-rate P/S",
				value: "44.8x",
				detail: "$360M Q2 guide midpoint x4",
			},
		],
		lenses: [
			{
				title: "고성장 프리미엄이 정당화되는 조건",
				body: "Q2 이후에도 70%+ gross margin, Scorpio ramp, 고객 다변화, UALink/NVLink Fusion design win이 동시에 확인되어야 한다.",
			},
			{
				title: "밸류에이션 압축 리스크",
				body: "성장률이 90%대에서 빠르게 정상화되거나 특정 최종고객 주문이 둔화되면 매출 배수가 먼저 조정될 수 있다.",
			},
			{
				title: "좋은 가격의 기준",
				body: "단순 급락보다 다음 2~4개 분기 가이던스가 유지되는 상황에서 배수가 내려오는지가 중요하다.",
			},
		],
	},
	growthDrivers: [
		{
			title: "Scorpio ramp",
			body: "AI fabric switching 수요가 본격화되면 단일 retimer보다 더 큰 TAM으로 확장될 수 있다.",
		},
		{
			title: "PCIe 6 / CXL / UALink",
			body: "차세대 AI 서버와 랙 표준 전환은 고속 연결 칩 수요를 늘리는 구조적 요인이다.",
		},
		{
			title: "AI accelerator scale-up",
			body: "GPU와 proprietary accelerator 수가 늘수록 scale-up 연결과 케이블 관리의 복잡도가 커진다.",
		},
		{
			title: "Hyperscaler design win",
			body: "대형 고객 플랫폼에 채택되면 ramp 속도가 빠르지만, 반대로 고객 집중도도 높아진다.",
		},
	],
	risks: [
		{
			name: "고객 집중도",
			score: 5,
			evidence: "FY2025 한 최종고객 70%+, 상위 3개 최종고객 약 86%.",
		},
		{
			name: "밸류에이션",
			score: 5,
			evidence: "시가총액 $64.45B, run-rate P/S 약 44.8x.",
		},
		{
			name: "공급망 의존",
			score: 4,
			evidence: "TSMC 단일 IC 제조 파트너와 외부 OSAT 의존.",
		},
		{
			name: "AI CAPEX 둔화",
			score: 4,
			evidence: "Hyperscaler AI 서버 투자 사이클에 매출 민감도 높음.",
		},
		{
			name: "Design-out",
			score: 4,
			evidence: "고객 자체 설계 또는 경쟁 솔루션 전환 가능성.",
		},
		{
			name: "마진 정상화",
			score: 3,
			evidence: "Q2 2026 GAAP GM 가이던스는 약 73%로 Q1보다 낮음.",
		},
	],
	investmentRead: {
		bull: [
			"Scorpio와 Taurus가 Aries 이후의 두 번째 성장 엔진으로 자리 잡는다.",
			"NVIDIA, UALink, hyperscaler 설계 채택이 고객 다변화로 이어진다.",
			"매출 고성장과 70%대 gross margin이 함께 유지된다.",
		],
		base: [
			"Q2 가이던스는 달성하지만 성장률은 2025년 수준에서 점진적으로 정상화된다.",
			"고객 집중도는 당분간 유지되고 주가는 가이던스 민감도가 높다.",
		],
		bear: [
			"대형 최종고객 발주 둔화 또는 platform design-out이 발생한다.",
			"AI CAPEX 기대가 낮아지면서 높은 매출 배수가 압축된다.",
		],
		monitor: [
			"Q2/Q3 가이던스",
			"Scorpio 매출 기여",
			"최대 고객 비중",
			"GAAP GM",
			"신규 design win",
		],
		goodEntry: [
			"성장률 둔화가 아닌 시장 변동성으로 배수가 낮아질 때",
			"고객 다변화 증거가 나온 뒤 가격 부담이 완화될 때",
		],
		avoidWhen: [
			"단일 고객 의존이 더 높아지는데 주가만 앞서갈 때",
			"마진 가이던스가 내려가고 매출 가이던스도 둔화될 때",
		],
	},
	sources: [
		{
			title: "Astera Labs Q1 2026 Results",
			type: "공식 실적",
			detail: "Q1 매출, GAAP GM, GAAP 순이익, Q2 가이던스",
			url: "https://ir.asteralabs.com/news-releases/news-release-details/astera-labs-reports-first-quarter-2026-financial-results",
		},
		{
			title: "Astera Labs FY2025 10-K",
			type: "SEC",
			detail: "고객 집중도와 공급망 리스크",
			url: "https://ir.asteralabs.com/static-files/72301d16-1396-4171-be97-17ddb4c100e9",
		},
		{
			title: "Astera Labs NVLink Fusion",
			type: "공식 발표",
			detail: "NVIDIA ecosystem collaboration",
			url: "https://www.asteralabs.com/news/astera-labs-expands-collaboration-with-nvidia-to-advance-nvlink-fusion-ecosystem/",
		},
		{
			title: "UALink Consortium",
			type: "표준 생태계",
			detail: "Astera Labs leadership participation",
			url: "https://ualinkconsortium.org/boardofdirectors/",
		},
		{
			title: "ALAB Market Data",
			type: "시장 데이터",
			detail: "주가, 시가총액, P/E snapshot",
			url: "https://www.google.com/finance/quote/ALAB:NASDAQ",
		},
	],
};

const mrvlResearch = {
	company: {
		ticker: "MRVL",
		name: "Marvell Technology, Inc.",
		asOfDate: "2026-06-03",
		type: "Custom silicon + optics + networking platform",
	},
	snapshot: {
		summary: "custom silicon, optics, networking을 묶은 AI 인프라 플랫폼",
		profile:
			"Marvell은 hyperscaler custom ASIC/XPU, optical DSP, silicon photonics, Ethernet switching, PCIe/CXL retimer, storage, DPU를 제공하는 fabless data infrastructure 반도체 기업이다. 데이터센터 매출 비중이 빠르게 커지며 AI 인프라 복합 노출이 강해졌다.",
		character: "더 큰 규모 · 더 넓은 포트폴리오 · AI 데이터센터 복합 노출",
		keyQuestion:
			"Broadcom 경쟁 속에서 custom silicon과 optics 성장을 지속할 수 있는가?",
		researchRead:
			"AI 데이터센터 노출은 넓고 깊지만, 주가가 NVIDIA 투자와 장기 성장 기대를 빠르게 반영했다.",
		priceDiscipline:
			"진입 판단은 custom silicon backlog, optics ramp, 데이터센터 성장률 대비 배수의 균형을 봐야 한다.",
		valuationWarning:
			"텐버거 서사는 공식 전망이 아니라 초강세 시나리오다. 공식 가이던스와 시장 가격을 분리해야 한다.",
		tags: ["Custom XPU", "Optical DSP", "Ethernet switching", "NVLink Fusion"],
	},
	kpis: [
		{ label: "Q1 FY2027 매출", value: "$2.418B", meta: "+28% YoY · GAAP" },
		{ label: "GAAP Gross Margin", value: "52.1%", meta: "Q1 FY2027" },
		{ label: "Non-GAAP GM", value: "58.9%", meta: "Q1 FY2027" },
		{ label: "GAAP Net Income", value: "$34.5M", meta: "Non-GAAP $718.0M" },
		{ label: "Q2 FY2027 가이던스", value: "$2.70B ±5%", meta: "매출 midpoint" },
		{ label: "데이터센터 비중", value: "76%", meta: "Q1 FY2027 · $1.833B" },
		{
			label: "현재 시가총액",
			value: "$259.76B",
			meta: "2026-06-03 00:15 UTC",
			risk: true,
		},
		{
			label: "Run-rate P/S",
			value: "24.1x",
			meta: "Q2 guide midpoint annualized",
			risk: true,
		},
	],
	business: {
		model:
			"Fabless · hyperscaler custom silicon + merchant infrastructure chips",
		body: "Marvell은 대형 고객의 AI accelerator와 데이터센터 네트워크를 위한 custom silicon을 설계하고, optical DSP와 Ethernet switching으로 scale-out 연결 수요를 흡수한다. 스토리지와 DPU도 보유하지만 현재 투자 논리는 데이터센터 AI 매출 성장에 집중되어 있다.",
		products: [
			{
				name: "Custom ASIC / XPU",
				label: "Hyperscaler silicon",
				body: "대형 클라우드 고객이 자체 AI accelerator와 networking silicon을 구축할 때 설계 파트너 역할을 한다.",
			},
			{
				name: "Optical DSP",
				label: "800G / 1.6T",
				body: "AI cluster scale-out에 필요한 고속 optical link의 신호 처리 계층이다.",
			},
			{
				name: "Silicon photonics",
				label: "CPO / Photonic Fabric",
				body: "Celestial AI 인수로 photonic interconnect 노출이 확대되었다.",
			},
			{
				name: "Ethernet switching",
				label: "Teralynx / Prestera",
				body: "AI 데이터센터 네트워크의 bandwidth와 latency 요구를 처리하는 switching 포트폴리오다.",
			},
			{
				name: "PCIe / CXL retimer",
				label: "Connectivity",
				body: "서버 내부 고속 연결 신호 무결성을 보완하며 ALAB와 일부 비교되는 영역이다.",
			},
			{
				name: "Storage / DPU",
				label: "Data infrastructure",
				body: "데이터 이동, 보안, 스토리지 컨트롤러 영역까지 포트폴리오가 넓다.",
			},
		],
	},
	whyNow: [
		{
			title: "Hyperscaler custom silicon 확대",
			body: "대형 클라우드는 비용, 전력, 워크로드 최적화를 위해 custom accelerator와 networking silicon 설계를 늘리고 있다.",
		},
		{
			title: "Scale-out optics 전환",
			body: "AI 클러스터가 커질수록 800G와 1.6T optical link, DSP, silicon photonics 수요가 증가한다.",
		},
		{
			title: "NVLink Fusion 생태계",
			body: "NVIDIA의 $2B 투자와 strategic partnership은 Marvell custom XPU와 networking이 NVIDIA AI factory ecosystem에 연결될 수 있음을 보여준다.",
		},
	],
	financialMomentum: {
		rows: [
			{
				period: "Q3 FY2026",
				revenue: 2075.0,
				gaapMargin: 51.6,
				nonGaapMargin: 59.7,
				netIncome: 1639.0,
				dataCenterShare: 75,
				note: "데이터센터 중심 성장",
			},
			{
				period: "Q4 FY2026",
				revenue: 2218.7,
				gaapMargin: 51.1,
				nonGaapMargin: 59.6,
				netIncome: 384.2,
				dataCenterShare: 76,
				note: "FY2026 매출 +42.1%",
			},
			{
				period: "Q1 FY2027",
				revenue: 2418.0,
				gaapMargin: 52.1,
				nonGaapMargin: 58.9,
				netIncome: 34.5,
				dataCenterShare: 76,
				note: "+28% YoY",
			},
		],
		annual: [
			{ period: "FY2024", revenue: 5507.7, dataCenterShare: 40 },
			{ period: "FY2025", revenue: 5766.3, dataCenterShare: 54 },
			{ period: "FY2026", revenue: 8194.6, dataCenterShare: 74 },
		],
		notes: [
			"Q1 FY2027 데이터센터 매출은 $1.833B로 전체의 76%다.",
			"Q2 FY2027 매출 가이던스는 $2.700B ±5%, Non-GAAP GM 가이던스는 58.25%-59.25%다.",
			"FY2026 매출은 $8.195B로 전년 대비 +42.1%, 데이터센터 매출은 $6.100B로 전체의 74%다.",
		],
	},
	valuation: {
		marketDataAsOf: "Market data · 2026-06-03 00:15 UTC",
		stats: [
			{ label: "주가", value: "$290.79", detail: "latest trade snapshot" },
			{ label: "시가총액", value: "$259.76B", detail: "equity market value" },
			{ label: "TTM P/E", value: "99.9x", detail: "market data snapshot" },
			{
				label: "Run-rate P/S",
				value: "24.1x",
				detail: "$2.70B Q2 guide midpoint x4",
			},
		],
		lenses: [
			{
				title: "데이터센터 성장률 대비 가격",
				body: "Q1 FY2027 매출 +28%와 데이터센터 76% 비중은 강하지만, 시가총액은 이미 FY2027 run-rate 매출의 20배 이상이다.",
			},
			{
				title: "Broadcom 비교 프레임",
				body: "MRVL은 Broadcom보다 더 작은 규모에서 custom silicon과 optics 성장 탄력성을 사는 구조다. 다만 Broadcom과의 design win 경쟁이 배수 프리미엄을 제약할 수 있다.",
			},
			{
				title: "초강세 서사의 위치",
				body: "$1T 시총이나 장기 multi-bagger 시나리오는 공식 가이던스가 아니라 장기 bull case다. 공식 Q2 가이던스와 실제 수주가 먼저다.",
			},
		],
	},
	growthDrivers: [
		{
			title: "Custom XPU design win",
			body: "대형 hyperscaler의 custom AI silicon 확대는 Marvell의 가장 큰 성장 옵션이다.",
		},
		{
			title: "Optical DSP 800G / 1.6T",
			body: "AI cluster scale-out에서 optical bandwidth 전환이 지속될수록 매출 기여가 커진다.",
		},
		{
			title: "Silicon photonics",
			body: "Celestial AI Photonic Fabric은 장기적으로 전력과 latency 병목을 줄이는 선택지다.",
		},
		{
			title: "Ethernet switching",
			body: "AI 데이터센터 scale-out 네트워크가 커질수록 switching과 interconnect 수요가 확대된다.",
		},
		{
			title: "NVIDIA ecosystem",
			body: "$2B 투자와 NVLink Fusion 협업은 Marvell의 custom silicon을 NVIDIA AI factory와 연결한다.",
		},
	],
	risks: [
		{
			name: "고객 집중도",
			score: 4,
			evidence:
				"FY2026 상위 10개 고객 82%, Distributor A 37%, Direct Customer A 14%.",
		},
		{
			name: "밸류에이션",
			score: 5,
			evidence: "시가총액 $259.76B, run-rate P/S 약 24.1x, TTM P/E 약 99.9x.",
		},
		{
			name: "경쟁 심화",
			score: 4,
			evidence: "Broadcom 등 custom ASIC, Ethernet, optics 경쟁이 강하다.",
		},
		{
			name: "AI CAPEX 둔화",
			score: 4,
			evidence: "데이터센터 매출 비중이 Q1 FY2027 76%까지 상승.",
		},
		{ name: "지역 노출", score: 4, evidence: "FY2026 아시아 고객향 매출 77%." },
		{
			name: "인수 통합",
			score: 3,
			evidence: "Celestial AI와 XConn 인수 이후 기술·조직 통합 필요.",
		},
	],
	investmentRead: {
		bull: [
			"Custom XPU와 optics가 함께 ramp되며 FY2027 이후 매출 기반이 크게 커진다.",
			"NVIDIA 협업이 hyperscaler design win 확대로 이어진다.",
			"데이터센터 고성장에도 gross margin이 안정적으로 유지된다.",
		],
		base: [
			"Q2 FY2027 가이던스는 달성하지만 성장은 AI 데이터센터 capex와 고객 ramp 속도에 따라 변동한다.",
			"넓은 포트폴리오는 방어력을 주지만, 주가는 custom silicon 기대에 민감하다.",
		],
		bear: [
			"Broadcom 또는 고객 자체 설계로 주요 design win 경쟁에서 밀린다.",
			"AI capex 기대가 낮아지고 data center mix 확장이 밸류에이션을 정당화하지 못한다.",
		],
		monitor: [
			"Q2/Q3 매출 가이던스",
			"데이터센터 매출 성장률",
			"custom silicon 수주",
			"optics 800G/1.6T ramp",
			"gross margin",
		],
		goodEntry: [
			"데이터센터 성장률은 유지되는데 시장 변동성으로 매출 배수가 낮아질 때",
			"custom silicon design win이 공식 수치로 확인되고 과열 가격이 식을 때",
		],
		avoidWhen: [
			"장기 초강세 서사만으로 단기 가격이 급등할 때",
			"데이터센터 성장률 둔화와 고객 집중 리스크가 동시에 커질 때",
		],
	},
	sources: [
		{
			title: "Marvell Q1 FY2027 Results",
			type: "공식 실적",
			detail: "Q1 매출, GAAP/Non-GAAP GM, 순이익, Q2 가이던스",
			url: "https://investor.marvell.com/news-events/press-releases/detail/1023/marvell-technology-inc-reports-first-quarter-of-fiscal-year-2027-financial-results",
		},
		{
			title: "Marvell FY2026 10-K",
			type: "SEC",
			detail: "연간 매출, 데이터센터 비중, 고객 집중도, 지역 노출",
			url: "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000011/mrvl-20260131.htm",
		},
		{
			title: "NVIDIA / Marvell NVLink Fusion",
			type: "공식 발표",
			detail: "$2B 투자와 strategic partnership",
			url: "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001193125-26-134462/d113606dex991.htm",
		},
		{
			title: "Marvell Q1 FY2027 Presentation",
			type: "IR 자료",
			detail: "Celestial AI, XConn 인수와 데이터센터 성장 설명",
			url: "https://d1io3yog0oux5.cloudfront.net/_6c98e153147f20a85f8f719ed2bcb520/marvell/db/3715/35387/pdf/2026_05_27_Marvell_Q1_FY27_financial_business_results_FINAL.pdf",
		},
		{
			title: "MRVL Market Data",
			type: "시장 데이터",
			detail: "주가, 시가총액, P/E snapshot",
			url: "https://www.google.com/finance/quote/MRVL:NASDAQ",
		},
	],
};

const compareResearch = {
	headline: {
		title: "ALAB는 고성장 집중 베팅, MRVL은 AI 인프라 플랫폼 베팅",
		body: "둘 다 AI 데이터센터 수혜주지만 투자 논리는 다르다. ALAB는 연결 인프라 순수 노출과 고객 집중 리스크가 크고, MRVL은 규모와 포트폴리오 폭이 있지만 custom silicon 경쟁과 높은 기대치가 핵심 변수다.",
		researchView: "같은 AI 인프라라도 가격을 정당화하는 증거가 다르다.",
		note: "ALAB는 고객 다변화와 Scorpio ramp, MRVL은 custom silicon·optics 수주와 데이터센터 성장률을 우선 확인한다.",
		cards: [
			{ title: "ALAB", body: "Pure AI connectivity growth exposure" },
			{ title: "MRVL", body: "Custom silicon + optics + networking platform" },
			{
				title: "공통점",
				body: "AI 데이터센터 capex와 accelerator cluster 성장에 민감",
			},
		],
	},
	rows: [
		{
			axis: "사업 초점",
			alab: "PCIe/CXL/Ethernet/UALink 연결 솔루션",
			mrvl: "custom XPU, optics, Ethernet, storage, DPU",
		},
		{ axis: "매출 규모", alab: "Q1 2026 $308.4M", mrvl: "Q1 FY2027 $2.418B" },
		{ axis: "성장률", alab: "+93% YoY", mrvl: "+28% YoY" },
		{
			axis: "수익성",
			alab: "GAAP GM 76.3%, GAAP 흑자",
			mrvl: "GAAP GM 52.1%, Non-GAAP 이익 규모 큼",
		},
		{
			axis: "데이터센터 노출",
			alab: "AI connectivity에 매우 순수",
			mrvl: "데이터센터 매출 76%, 포트폴리오 넓음",
		},
		{
			axis: "고객 집중도",
			alab: "최대 고객 70%+, 상위 3개 약 86%",
			mrvl: "상위 10개 82%, Distributor A 37%",
		},
		{
			axis: "NVIDIA 연결성",
			alab: "Blackwell/MGX/NVLink Fusion 접점",
			mrvl: "$2B 투자와 NVLink Fusion partnership",
		},
		{
			axis: "밸류에이션 부담",
			alab: "run-rate P/S 약 44.8x",
			mrvl: "run-rate P/S 약 24.1x",
		},
		{
			axis: "리스크 성격",
			alab: "단일 제품군·고객 집중·design-out",
			mrvl: "경쟁 심화·AI capex·인수 통합",
		},
	],
	investorFit: [
		{
			title: "ALAB가 더 맞는 경우",
			body: "더 높은 성장률과 AI 연결 인프라 순수 노출을 원하고, 고객 집중도와 변동성을 감수할 수 있을 때.",
			points: [
				"Scorpio ramp를 핵심 thesis로 볼 때",
				"대형 고객 집중을 성장 초기 비용으로 볼 때",
				"배수 압축 리스크를 감내할 때",
			],
		},
		{
			title: "MRVL이 더 맞는 경우",
			body: "더 큰 규모, 넓은 포트폴리오, custom silicon·optics·networking을 함께 보고 싶을 때.",
			points: [
				"custom XPU design win을 핵심 thesis로 볼 때",
				"Broadcom 경쟁에도 platform breadth를 선호할 때",
				"AI 데이터센터 복합 노출을 원할 때",
			],
		},
	],
	decisionScores: [
		{ axis: "Growth", alab: 5, mrvl: 4 },
		{ axis: "Quality", alab: 4, mrvl: 4 },
		{ axis: "Valuation", alab: 2, mrvl: 2 },
		{ axis: "Risk", alab: 2, mrvl: 3 },
		{ axis: "AI Purity", alab: 5, mrvl: 4 },
		{ axis: "Diversification", alab: 2, mrvl: 4 },
	],
	finalView: [
		{
			title: "ALAB",
			body: "고성장 집중 베팅. 매출 성장과 마진은 뛰어나지만 고객 집중도와 배수 리스크가 핵심이다.",
		},
		{
			title: "MRVL",
			body: "AI 인프라 플랫폼 베팅. 규모와 포트폴리오는 강하지만 custom silicon 경쟁과 기대치 관리가 핵심이다.",
		},
		{
			title: "공통 결론",
			body: "둘 다 투자 추천이 아니라 관찰 대상이다. 다음 분기 가이던스와 고객·제품 믹스 증거가 가격보다 중요하다.",
		},
	],
};

window.dashboardData = {
	tabs: [
		{ id: "ALAB", label: "ALAB", description: "Pure AI connectivity" },
		{ id: "MRVL", label: "MRVL", description: "AI infra platform" },
		{ id: "Compare", label: "Compare", description: "투자 성격 비교" },
	],
	activeTab: "ALAB",
	companies: {
		ALAB: alabResearch,
		MRVL: mrvlResearch,
	},
	compare: compareResearch,
};
