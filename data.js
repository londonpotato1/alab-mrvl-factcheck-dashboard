const alabResearch = {
	company: {
		ticker: "ALAB",
		name: "Astera Labs, Inc.",
		asOfDate: "2026-06-03",
		type: "AI 서버 안의 데이터 길을 넓히는 회사",
	},
	snapshot: {
		summary: "AI 서버 안에서 데이터가 막히지 않게 도와주는 반도체 회사",
		profile:
			"쉽게 말하면 ALAB는 AI 공장 안의 고속도로 공사 회사다. GPU와 메모리, 스위치 사이에 데이터가 아주 빠르게 오가야 하는데, 길이 좁거나 신호가 약하면 비싼 GPU가 놀게 된다. ALAB는 그 길을 넓히고 신호를 다시 깨끗하게 만들어 주는 칩을 판다.",
		character: "작지만 빠르게 크는 성장주",
		keyQuestion:
			"AI 서버가 더 많이 깔릴수록 ALAB의 데이터 길도 더 많이 필요할까?",
		researchRead:
			"매출 성장과 이익률은 매우 좋다. 다만 매출이 몇몇 큰 고객에게 몰려 있고 주가도 이미 많이 비싸다.",
		priceDiscipline:
			"좋은 회사인지보다 먼저 봐야 할 질문은 가격이 너무 앞서가지 않았는가다.",
		valuationWarning:
			"성장이 계속되면 비싼 가격이 설명될 수 있지만, 성장 속도가 조금만 느려져도 주가가 크게 흔들릴 수 있다.",
		tags: ["AI 데이터 이동", "GPU 서버", "고성장", "고객 집중"],
	},
	kpis: [
		{
			label: "최근 매출",
			value: "$308.4M",
			meta: "Q1 2026 · 1년 전보다 93% 증가",
		},
		{
			label: "이익률",
			value: "76.3%",
			meta: "GAAP Gross Margin · 칩을 비싸게 팔 수 있음",
		},
		{ label: "순이익", value: "$80.3M", meta: "Q1 2026 · GAAP 기준 흑자" },
		{
			label: "다음 분기 예상 매출",
			value: "$355M-$365M",
			meta: "Q2 2026 회사 가이던스",
		},
		{
			label: "주식시장 가격",
			value: "$64.45B",
			meta: "시가총액 · 2026-06-03 snapshot",
			risk: true,
		},
		{
			label: "가장 큰 걱정",
			value: "70%+",
			meta: "FY2025 최대 최종고객 비중",
			risk: true,
		},
	],
	business: {
		model: "Fabless · AI 연결 칩과 관리 소프트웨어 판매",
		body: "ALAB는 직접 공장을 운영하지 않고 칩을 설계한다. 고객은 AI 서버를 만드는 큰 회사들이다. ALAB 칩이 서버 설계에 들어가면, 그 서버가 많이 팔릴수록 ALAB 매출도 같이 늘어난다.",
		products: [
			{
				name: "Aries",
				label: "데이터 신호를 다시 또렷하게",
				body: "긴 길을 달리다 약해진 데이터 신호를 다시 깨끗하게 만들어 준다. AI 서버 안의 고속 신호 증폭기라고 보면 된다.",
			},
			{
				name: "Scorpio",
				label: "AI 칩들을 서로 연결하는 교차로",
				body: "여러 GPU와 AI accelerator가 서로 더 빠르게 말하게 해주는 스위치다. 앞으로 성장 기대가 큰 제품이다.",
			},
			{
				name: "Leo",
				label: "메모리 길을 넓히는 도구",
				body: "AI가 더 큰 데이터를 다룰 수 있도록 메모리 연결을 돕는다. 메모리가 부족해서 AI가 느려지는 문제를 겨냥한다.",
			},
			{
				name: "Taurus",
				label: "서버와 스위치 사이 케이블 보조",
				body: "데이터센터 안에서 케이블로 오가는 고속 데이터를 더 멀리, 더 안정적으로 보내도록 돕는다.",
			},
			{
				name: "COSMOS",
				label: "연결 상태를 보는 관리 화면",
				body: "칩과 케이블이 잘 작동하는지 보고, 문제가 생기면 찾을 수 있게 해주는 소프트웨어다.",
			},
		],
	},
	whyNow: [
		{
			title: "AI는 계산보다 연결도 중요하다",
			body: "GPU가 아무리 빨라도 데이터가 늦게 도착하면 기다려야 한다. 그래서 AI 데이터센터는 계산 칩만큼 연결 칩도 중요해졌다.",
		},
		{
			title: "서버 하나보다 랙 전체가 중요해졌다",
			body: "요즘 AI 시스템은 여러 서버와 여러 GPU가 한 팀처럼 움직인다. ALAB는 그 팀워크에 필요한 연결 부품을 판다.",
		},
		{
			title: "NVIDIA 생태계와 닿아 있다",
			body: "Blackwell, MGX, NVLink Fusion 같은 차세대 AI 인프라 발표에서 ALAB의 연결 기술이 언급된다.",
		},
	],
	competitiveEdge: {
		kicker: "좁지만 깊은 연결 전문성",
		summary:
			"ALAB의 무기는 AI 서버 안의 데이터 길만 집요하게 파는 집중력이다. GPU를 직접 만들지는 않지만, GPU가 놀지 않게 데이터 길을 열어주는 부품과 관리 소프트웨어를 같이 판다.",
		cards: [
			{
				label: "무기 1",
				title: "연결 병목만 파는 순수 노출",
				body: "PCIe, CXL, Ethernet, UALink, NVLink Fusion 접점에 집중한다. AI 서버가 복잡해질수록 연결 문제를 해결하는 회사의 가치가 커질 수 있다.",
				emphasis: true,
			},
			{
				label: "무기 2",
				title: "Scorpio가 단순 부품을 넘어 교차로가 됨",
				body: "Scorpio X-Series는 AI 칩들이 서로 말하는 fabric switch다. 회사는 320-lane 제품을 출하 중이며 H2 2026 ramp를 기대한다.",
			},
			{
				label: "무기 3",
				title: "COSMOS 소프트웨어",
				body: "칩만 파는 게 아니라 연결 상태를 설정, 관측, 진단하는 소프트웨어도 제공한다. 고객 시스템 안에 더 깊게 들어갈 수 있는 이유다.",
			},
			{
				label: "한계",
				title: "큰 고객 의존도는 아직 부담",
				body: "무기가 강해도 매출이 몇몇 고객에 몰려 있다. 그래서 성장성과 고객 다변화를 함께 봐야 한다.",
			},
		],
		verdict: {
			title: "초보자용 결론",
			body: "ALAB는 AI 공장 전체를 만들지는 않지만, 공장 안 고속도로와 교차로를 전문으로 까는 회사다. AI 서버 연결 문제가 커질수록 thesis가 강해진다.",
		},
	},
	financialMomentum: {
		rows: [
			{
				period: "Q3 2025",
				revenue: 230.6,
				gaapMargin: 76.2,
				nonGaapMargin: 76.4,
				netIncome: 91.1,
				growthLabel: "+104% YoY",
				profitLabel: "높은 이익률",
				takeaway: "AI 서버 수요가 매출을 빠르게 밀어 올림",
			},
			{
				period: "Q4 2025",
				revenue: 270.6,
				gaapMargin: 75.6,
				nonGaapMargin: 75.7,
				netIncome: 45.0,
				growthLabel: "FY2025 +115%",
				profitLabel: "흑자 유지",
				takeaway: "연간 기준으로 회사 규모가 두 배 이상 커짐",
			},
			{
				period: "Q1 2026",
				revenue: 308.4,
				gaapMargin: 76.3,
				nonGaapMargin: 76.4,
				netIncome: 80.3,
				growthLabel: "+93% YoY",
				profitLabel: "$80.3M 순이익",
				takeaway: "성장과 이익이 동시에 나온 최신 분기",
			},
		],
		annual: [
			{ period: "2023", revenue: 115.8 },
			{ period: "2024", revenue: 396.3 },
			{ period: "2025", revenue: 852.5 },
		],
		notes: [
			"초보자 해석: 매출이 빠르게 커지고, 칩을 팔 때 남는 마진도 높다.",
			"주의점: 고객이 몇 군데에 몰려 있어 큰 고객 주문이 줄면 매출도 크게 흔들릴 수 있다.",
		],
	},
	valuation: {
		marketDataAsOf: "Market data · 2026-06-03 00:15 UTC",
		stats: [
			{
				label: "시가총액",
				value: "$64.45B",
				detail: "시장이 회사 전체에 매긴 가격",
			},
			{ label: "주가", value: "$355.76", detail: "시장 데이터 snapshot" },
			{
				label: "매출 대비 가격",
				value: "44.8x",
				detail: "Q2 예상 매출을 1년치로 환산",
			},
		],
		lenses: [
			{
				title: "왜 비싸 보이나요?",
				body: "아직 연 매출 규모는 작지만 시장 가격은 매우 크다. 투자자는 앞으로 매출이 훨씬 더 커질 것이라고 미리 가격을 매긴 셈이다.",
			},
			{
				title: "비싼 가격이 괜찮으려면?",
				body: "Scorpio 같은 새 제품이 잘 팔리고, 고객이 더 다양해지고, 높은 이익률이 유지되어야 한다.",
			},
			{
				title: "초보자가 볼 신호",
				body: "다음 분기 매출 가이던스가 계속 올라가는지, 최대 고객 비중이 내려가는지, 이익률이 70%대에 머무는지 본다.",
			},
		],
	},
	growthDrivers: [
		{
			title: "AI 서버가 많아질수록 길도 필요하다",
			body: "GPU가 늘면 GPU끼리 대화하는 데이터 길도 늘어난다.",
		},
		{
			title: "Scorpio가 다음 성장 엔진",
			body: "단순 신호 보조를 넘어 AI 칩들을 연결하는 교차로 역할을 한다.",
		},
		{
			title: "차세대 표준 전환",
			body: "PCIe 6, CXL, UALink 같은 새 규격은 새 연결 칩 수요를 만든다.",
		},
		{
			title: "큰 고객 설계에 들어가면 빠르게 성장",
			body: "한 번 채택되면 고객 서버 출하량을 따라 매출이 커질 수 있다.",
		},
	],
	risks: [
		{
			name: "고객 집중",
			score: 5,
			evidence: "FY2025 최대 최종고객 70%+, 상위 3개 약 86%.",
		},
		{
			name: "가격 부담",
			score: 5,
			evidence: "미래 성장을 크게 선반영한 높은 시가총액.",
		},
		{ name: "공급망", score: 4, evidence: "TSMC 등 외부 제조 파트너 의존." },
		{
			name: "AI 투자 둔화",
			score: 4,
			evidence: "클라우드 회사들이 AI 서버 투자를 줄이면 매출에 영향.",
		},
		{
			name: "경쟁·대체",
			score: 4,
			evidence: "고객 자체 설계나 경쟁 제품으로 바뀔 수 있음.",
		},
	],
	investmentRead: {
		bull: [
			"AI 서버가 계속 늘고 Scorpio가 큰 제품으로 자리 잡는다.",
			"큰 고객 한두 곳 의존이 줄고 여러 고객으로 퍼진다.",
			"높은 이익률과 빠른 매출 성장이 함께 유지된다.",
		],
		base: [
			"회사는 계속 성장하지만 성장 속도는 점점 정상화된다.",
			"좋은 회사라는 점과 비싼 주가라는 점이 동시에 존재한다.",
		],
		bear: [
			"큰 고객 주문이 줄거나 다른 부품으로 바뀐다.",
			"AI 투자 열기가 식으면서 높은 가격이 내려온다.",
		],
		monitor: [
			"다음 분기 매출 전망",
			"Scorpio 매출",
			"최대 고객 비중",
			"이익률",
			"새 고객 채택",
		],
		goodEntry: [
			"성장 숫자는 유지되는데 시장 흔들림으로 가격이 내려올 때",
			"고객 다변화가 확인될 때",
		],
		avoidWhen: [
			"매출 전망이 낮아지는데 주가만 비싸질 때",
			"고객 집중이 더 심해질 때",
		],
	},
	sources: [
		{
			title: "Astera Labs Q1 2026 Results",
			type: "공식 실적",
			detail: "Q1 매출, 이익률, 순이익, Q2 가이던스",
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
			detail: "NVIDIA 생태계 협업",
			url: "https://www.asteralabs.com/news/astera-labs-expands-collaboration-with-nvidia-to-advance-nvlink-fusion-ecosystem/",
		},
		{
			title: "ALAB Market Data",
			type: "시장 데이터",
			detail: "주가와 시가총액 snapshot",
			url: "https://www.google.com/finance/quote/ALAB:NASDAQ",
		},
	],
};

const mrvlResearch = {
	company: {
		ticker: "MRVL",
		name: "Marvell Technology, Inc.",
		asOfDate: "2026-06-03",
		type: "AI 데이터센터에 필요한 여러 부품을 묶어 파는 회사",
	},
	snapshot: {
		summary: "AI 칩, 네트워크, 광통신을 함께 파는 큰 AI 인프라 회사",
		profile:
			"쉽게 말하면 MRVL은 AI 공장에 필요한 맞춤형 엔진과 통신 장비를 같이 만드는 회사다. 고객이 원하는 AI 칩을 설계해주고, 데이터센터 안에서 서버들이 빛처럼 빠르게 데이터를 주고받도록 optical DSP와 네트워크 칩도 판다.",
		character: "규모가 크고 제품이 넓은 AI 인프라 플랫폼",
		keyQuestion:
			"맞춤형 AI 칩과 광통신 수요가 Broadcom 같은 강한 경쟁사를 이길 만큼 커질까?",
		researchRead:
			"ALAB보다 회사 규모가 훨씬 크고 제품도 넓다. 대신 경쟁도 강하고, 시장은 이미 큰 성장을 기대하고 있다.",
		priceDiscipline:
			"MRVL은 'AI 인프라 전체 바구니'에 투자하는 느낌이다. 숫자로는 데이터센터 매출 성장률을 가장 먼저 본다.",
		valuationWarning:
			"장기 초강세 이야기는 가능성이지 확정 사실이 아니다. 실제 매출과 수주가 따라오는지 확인해야 한다.",
		tags: ["Custom AI chip", "Optical link", "Networking", "NVIDIA 투자"],
	},
	kpis: [
		{
			label: "최근 매출",
			value: "$2.418B",
			meta: "Q1 FY2027 · 1년 전보다 28% 증가",
		},
		{
			label: "데이터센터 비중",
			value: "76%",
			meta: "Q1 FY2027 · AI 노출이 매우 큼",
		},
		{ label: "이익률", value: "52.1%", meta: "GAAP Gross Margin" },
		{
			label: "다음 분기 예상 매출",
			value: "$2.70B ±5%",
			meta: "Q2 FY2027 회사 가이던스",
		},
		{
			label: "주식시장 가격",
			value: "$259.76B",
			meta: "시가총액 · 2026-06-03 snapshot",
			risk: true,
		},
		{
			label: "가장 큰 걱정",
			value: "82%",
			meta: "FY2026 상위 10개 고객 비중",
			risk: true,
		},
	],
	business: {
		model: "Fabless · 맞춤형 AI 칩 + 광통신 + 네트워크 칩",
		body: "MRVL은 직접 공장을 갖기보다 칩을 설계하고 외부 파트너가 제조한다. 고객은 클라우드 회사, 데이터센터 장비 회사, 네트워크 회사다. AI 데이터센터가 커질수록 맞춤형 칩, 광통신, 스위치 수요가 함께 커질 수 있다.",
		products: [
			{
				name: "Custom ASIC / XPU",
				label: "고객 맞춤 AI 엔진",
				body: "큰 클라우드 회사가 자기만의 AI 칩을 만들 때 MRVL이 설계 파트너가 될 수 있다.",
			},
			{
				name: "Optical DSP",
				label: "빛으로 데이터 보내기",
				body: "서버들이 엄청난 데이터를 멀리 주고받을 때 신호를 처리해주는 핵심 부품이다.",
			},
			{
				name: "Silicon photonics",
				label: "칩 안으로 들어오는 광통신",
				body: "전기를 덜 쓰면서 더 빠르게 데이터를 옮기려는 장기 기술이다.",
			},
			{
				name: "Ethernet switching",
				label: "데이터센터 교통정리",
				body: "수많은 서버가 동시에 데이터를 주고받을 때 길을 배정하고 혼잡을 줄인다.",
			},
			{
				name: "PCIe / CXL retimer",
				label: "서버 내부 연결 보조",
				body: "서버 안에서 고속 데이터 신호가 약해지지 않도록 돕는다.",
			},
			{
				name: "Storage / DPU",
				label: "데이터 보관과 이동 보조",
				body: "AI가 쓰는 데이터를 저장하고 옮기는 인프라 부품도 함께 보유한다.",
			},
		],
	},
	whyNow: [
		{
			title: "클라우드 회사들이 자기 AI 칩을 만든다",
			body: "GPU만 사는 것이 아니라, 비용과 전력 효율을 위해 자기 서비스에 맞춘 AI 칩을 만들려는 수요가 커지고 있다.",
		},
		{
			title: "AI 데이터센터는 빛의 통신이 필요하다",
			body: "클러스터가 커지면 전기 신호만으로는 거리와 전력 문제가 생긴다. MRVL의 optical DSP와 photonics가 여기서 중요해진다.",
		},
		{
			title: "NVIDIA가 전략적으로 연결됐다",
			body: "NVIDIA의 $2B 투자와 NVLink Fusion 협업은 MRVL의 custom silicon과 networking이 AI 생태계에서 중요해졌다는 신호다.",
		},
	],
	competitiveEdge: {
		kicker: "Broadcom을 전부 이기는 게 아니라, 다른 길을 뚫는 무기",
		summary:
			"MRVL의 핵심은 Broadcom보다 더 크다는 게 아니다. Broadcom은 이미 custom AI accelerator와 AI networking의 거인이다. MRVL의 무기는 custom AI 칩, 빛 통신, NVIDIA 생태계를 한 묶음으로 연결하는 능력이다.",
		cards: [
			{
				label: "무기 1",
				title: "NVIDIA가 $2B로 찍어준 생태계 연결",
				body: "NVIDIA는 Marvell에 $2B를 투자하고 NVLink Fusion 파트너십을 발표했다. Marvell custom XPU가 NVIDIA AI factory 안으로 들어갈 수 있다는 강한 신호다.",
				emphasis: true,
			},
			{
				label: "무기 2",
				title: "Custom XPU + optical을 같이 설계",
				body: "MRVL은 맞춤형 AI 칩만 보는 게 아니라 그 칩끼리 빛으로 연결하는 optical DSP, silicon photonics, CPO까지 함께 본다.",
				emphasis: true,
			},
			{
				label: "무기 3",
				title: "CPO와 silicon photonics 경험",
				body: "Marvell은 silicon photonics가 8년 이상 양산됐고 100억 시간 이상 현장 운용됐다고 설명한다. AI 클러스터가 커질수록 빛 통신은 더 중요해진다.",
			},
			{
				label: "무기 4",
				title: "AI 전용 switch로 정면 승부",
				body: "Teralynx T100 102.4Tbps switch는 AI 데이터센터의 전력과 지연시간을 줄이려는 제품이다. 다만 Broadcom Tomahawk 6와 정면 경쟁한다.",
			},
			{
				label: "현실",
				title: "Broadcom은 규모가 훨씬 크다",
				body: "Broadcom은 Q1 FY2026 AI revenue가 $8.4B, YoY +106%라고 밝혔다. MRVL이 전면전에서 바로 이긴다고 보긴 어렵다.",
			},
			{
				label: "승리 시나리오",
				title: "AI 시장이 너무 커져서 여러 승자가 생기는 것",
				body: "MRVL의 좋은 시나리오는 Broadcom을 대체하는 게 아니라, NVIDIA-compatible custom XPU와 optical interconnect 시장에서 큰 몫을 얻는 것이다.",
			},
		],
		verdict: {
			title: "초보자용 결론",
			body: "Broadcom은 거대한 AI 공장 건설사다. MRVL은 그 공장 안에 맞춤형 엔진과 빛의 고속도로를 같이 까는 전문팀이 되려 한다.",
		},
	},
	financialMomentum: {
		rows: [
			{
				period: "Q3 FY2026",
				revenue: 2075.0,
				gaapMargin: 51.6,
				nonGaapMargin: 59.7,
				netIncome: 1639.0,
				dataCenterShare: 75,
				growthLabel: "DC 75%",
				profitLabel: "이익 큰 폭",
				takeaway: "데이터센터가 회사 중심으로 이동",
			},
			{
				period: "Q4 FY2026",
				revenue: 2218.7,
				gaapMargin: 51.1,
				nonGaapMargin: 59.6,
				netIncome: 384.2,
				dataCenterShare: 76,
				growthLabel: "FY2026 +42.1%",
				profitLabel: "흑자",
				takeaway: "AI 데이터센터 매출이 연간 성장의 핵심",
			},
			{
				period: "Q1 FY2027",
				revenue: 2418.0,
				gaapMargin: 52.1,
				nonGaapMargin: 58.9,
				netIncome: 34.5,
				dataCenterShare: 76,
				growthLabel: "+28% YoY",
				profitLabel: "Non-GAAP $718M",
				takeaway: "데이터센터 매출 $1.833B, 비중 76%",
			},
		],
		annual: [
			{ period: "FY2024", revenue: 5507.7, dataCenterShare: 40 },
			{ period: "FY2025", revenue: 5766.3, dataCenterShare: 54 },
			{ period: "FY2026", revenue: 8194.6, dataCenterShare: 74 },
		],
		notes: [
			"초보자 해석: MRVL은 이미 큰 회사인데도 데이터센터 매출이 빠르게 커지고 있다.",
			"주의점: AI 데이터센터 비중이 높아진 만큼 AI 투자 사이클이 식으면 영향을 받을 수 있다.",
		],
	},
	valuation: {
		marketDataAsOf: "Market data · 2026-06-03 00:15 UTC",
		stats: [
			{
				label: "시가총액",
				value: "$259.76B",
				detail: "시장이 회사 전체에 매긴 가격",
			},
			{ label: "주가", value: "$290.79", detail: "시장 데이터 snapshot" },
			{
				label: "매출 대비 가격",
				value: "24.1x",
				detail: "Q2 예상 매출을 1년치로 환산",
			},
		],
		lenses: [
			{
				title: "왜 관심을 받나요?",
				body: "AI 칩, 광통신, 네트워크를 한 번에 가진 회사라 AI 데이터센터 성장의 여러 길에 동시에 노출된다.",
			},
			{
				title: "왜 조심해야 하나요?",
				body: "이미 큰 회사라 더 커지려면 훨씬 큰 매출이 필요하다. Broadcom 같은 강한 경쟁사도 있다.",
			},
			{
				title: "초보자가 볼 신호",
				body: "데이터센터 매출 비중과 성장률, custom chip 수주, optical DSP 800G/1.6T 전환을 본다.",
			},
		],
	},
	growthDrivers: [
		{
			title: "맞춤형 AI 칩 수요",
			body: "클라우드 회사가 자기 서비스에 맞춘 AI 칩을 만들수록 기회가 생긴다.",
		},
		{
			title: "800G / 1.6T 광통신",
			body: "AI 클러스터가 커질수록 더 빠른 빛 기반 연결이 필요하다.",
		},
		{
			title: "NVIDIA 생태계",
			body: "$2B 투자와 협업은 MRVL 기술의 전략적 가치를 보여준다.",
		},
		{
			title: "포트폴리오 폭",
			body: "custom silicon, optics, networking을 함께 제공해 여러 성장 경로가 있다.",
		},
	],
	risks: [
		{
			name: "고객 집중",
			score: 4,
			evidence: "FY2026 상위 10개 고객 82%, Distributor A 37%.",
		},
		{
			name: "가격 부담",
			score: 5,
			evidence: "미래 AI 성장을 크게 반영한 높은 시가총액.",
		},
		{
			name: "강한 경쟁",
			score: 4,
			evidence: "Broadcom 등 custom ASIC과 networking 경쟁이 강함.",
		},
		{
			name: "AI 투자 둔화",
			score: 4,
			evidence: "Q1 FY2027 데이터센터 매출 비중 76%.",
		},
		{ name: "지역 노출", score: 4, evidence: "FY2026 아시아 고객향 매출 77%." },
		{
			name: "인수 통합",
			score: 3,
			evidence: "Celestial AI, XConn 인수 이후 통합 필요.",
		},
	],
	investmentRead: {
		bull: [
			"Custom AI chip 수주가 늘고 optical DSP가 빠르게 성장한다.",
			"NVIDIA 협업이 실제 고객 설계 채택으로 이어진다.",
			"데이터센터 매출이 계속 높은 비중으로 성장한다.",
		],
		base: [
			"AI 데이터센터 수요는 좋지만 경쟁과 가격 부담도 함께 존재한다.",
			"큰 회사라 안정감은 있지만, 주가는 성장 기대에 민감하다.",
		],
		bear: [
			"Broadcom 등 경쟁사에 주요 custom chip 기회를 빼앗긴다.",
			"AI 투자 속도가 느려지고 높은 가격이 내려온다.",
		],
		monitor: [
			"데이터센터 매출",
			"custom chip 수주",
			"optical DSP 성장",
			"이익률",
			"고객 집중도",
		],
		goodEntry: [
			"데이터센터 성장률은 유지되는데 가격 부담이 낮아질 때",
			"새 수주가 공식 실적으로 확인될 때",
		],
		avoidWhen: [
			"장기 장밋빛 이야기만으로 주가가 급등할 때",
			"데이터센터 성장률이 둔화될 때",
		],
	},
	sources: [
		{
			title: "Marvell Q1 FY2027 Results",
			type: "공식 실적",
			detail: "Q1 매출, 데이터센터 비중, Q2 가이던스",
			url: "https://investor.marvell.com/news-events/press-releases/detail/1023/marvell-technology-inc-reports-first-quarter-of-fiscal-year-2027-financial-results",
		},
		{
			title: "Marvell FY2026 10-K",
			type: "SEC",
			detail: "연간 매출, 고객 집중도, 지역 노출",
			url: "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000011/mrvl-20260131.htm",
		},
		{
			title: "NVIDIA / Marvell NVLink Fusion",
			type: "공식 발표",
			detail: "$2B 투자와 전략적 협업",
			url: "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001193125-26-134462/d113606dex991.htm",
		},
		{
			title: "Marvell CPO Architecture",
			type: "공식 발표",
			detail: "custom XPU, CPO, silicon photonics 차별점",
			url: "https://www.marvell.com/company/newsroom/marvell-co-packaged-optics-architecture-custom-ai-accelerators.html",
		},
		{
			title: "Marvell Teralynx T100",
			type: "공식 발표",
			detail: "102.4Tbps AI 데이터센터 switch",
			url: "https://www.marvell.com/company/newsroom/marvell-announces-102-4-tbps-ai-cloud-data-center-switch.html",
		},
		{
			title: "Broadcom Q1 FY2026",
			type: "비교 기준",
			detail: "AI revenue $8.4B, YoY +106%",
			url: "https://investors.broadcom.com/node/63976/pdf",
		},
		{
			title: "MRVL Market Data",
			type: "시장 데이터",
			detail: "주가와 시가총액 snapshot",
			url: "https://www.google.com/finance/quote/MRVL:NASDAQ",
		},
	],
};

const compareResearch = {
	headline: {
		title: "ALAB는 좁고 빠른 길, MRVL은 큰 AI 인프라 백화점",
		body: "두 회사 모두 AI 데이터센터가 커질수록 좋아질 수 있다. 차이는 성격이다. ALAB는 AI 서버 안의 데이터 길에 집중한 작은 고성장 회사이고, MRVL은 맞춤형 AI 칩과 광통신, 네트워크를 함께 가진 큰 회사다. MRVL은 Broadcom과 정면승부도 하지만, 진짜 차별점은 NVIDIA 생태계와 빛 통신을 함께 묶는 데 있다.",
		researchView: "초보자에게 핵심은 '무엇에 베팅하는가'를 구분하는 것이다.",
		note: "ALAB는 연결 병목 해결, MRVL은 AI 데이터센터 전체 부품 묶음과 Broadcom을 비껴가는 optical/NVIDIA 전장에 가깝다.",
		cards: [
			{ title: "ALAB", body: "AI 서버 안 데이터 길을 넓히는 집중형 성장주" },
			{ title: "MRVL", body: "AI 칩, 광통신, 네트워크를 함께 가진 플랫폼" },
			{
				title: "MRVL vs AVGO",
				body: "Broadcom은 규모의 강자, Marvell은 custom XPU + optical + NVIDIA 연결이 무기",
			},
			{
				title: "공통점",
				body: "AI 데이터센터 투자가 계속 커져야 숫자가 좋아진다",
			},
		],
	},
	rows: [
		{
			axis: "어린아이 비유",
			alab: "AI 공장의 고속도로 공사 회사",
			mrvl: "AI 공장 부품 백화점과 맞춤 엔진 회사",
		},
		{
			axis: "무엇으로 돈을 버나",
			alab: "GPU와 메모리를 연결하는 칩",
			mrvl: "맞춤형 AI 칩, 광통신, 네트워크 칩",
		},
		{ axis: "최근 매출", alab: "Q1 2026 $308.4M", mrvl: "Q1 FY2027 $2.418B" },
		{
			axis: "성장 속도",
			alab: "+93% YoY로 매우 빠름",
			mrvl: "+28% YoY, 큰 회사치고 빠름",
		},
		{
			axis: "AI 노출",
			alab: "AI 연결 인프라에 매우 집중",
			mrvl: "데이터센터 비중 76%, 범위가 넓음",
		},
		{
			axis: "가장 큰 장점",
			alab: "작아서 성장 탄력이 큼",
			mrvl: "크고 제품이 많아 기회가 여러 개",
		},
		{
			axis: "독보적 무기",
			alab: "연결 병목을 깊게 파는 순수성",
			mrvl: "custom XPU + optical + NVIDIA 생태계",
		},
		{
			axis: "Broadcom과 비교",
			alab: "직접 비교보다 AI 연결 전문 기업",
			mrvl: "Broadcom은 규모 우위, MRVL은 빛 통신과 NVLink Fusion 차별화",
		},
		{
			axis: "가장 큰 걱정",
			alab: "고객 집중과 비싼 가격",
			mrvl: "경쟁 심화와 비싼 가격",
		},
		{
			axis: "어울리는 투자 성격",
			alab: "높은 성장과 변동성을 감수",
			mrvl: "더 큰 규모와 넓은 AI 노출 선호",
		},
	],
	investorFit: [
		{
			title: "ALAB가 더 쉬운 thesis",
			body: "AI 서버 안 데이터 길이 더 중요해질수록 ALAB가 필요해진다는 이야기다.",
			points: [
				"작은 회사의 빠른 성장을 보고 싶을 때",
				"고객 집중 위험을 이해하고 감수할 때",
				"Scorpio 같은 새 제품 성장을 믿을 때",
			],
		},
		{
			title: "MRVL이 더 쉬운 thesis",
			body: "AI 데이터센터가 커질수록 맞춤형 칩, 광통신, 네트워크가 함께 필요해진다는 이야기다. Broadcom을 전부 이기는 thesis가 아니라, Broadcom이 다 먹지 못하는 optical/NVIDIA-compatible 전장을 가져가는 thesis다.",
			points: [
				"더 큰 회사와 넓은 제품군을 선호할 때",
				"custom AI chip과 optical 성장에 관심 있을 때",
				"NVIDIA NVLink Fusion과 $2B 투자를 중요한 신호로 볼 때",
				"AI 인프라 전체 성장에 베팅하고 싶을 때",
			],
		},
	],
	decisionScores: [
		{ axis: "성장성", alab: 5, mrvl: 4 },
		{ axis: "이해 쉬움", alab: 4, mrvl: 3 },
		{ axis: "회사 규모", alab: 2, mrvl: 5 },
		{ axis: "AI 집중도", alab: 5, mrvl: 4 },
		{ axis: "분산도", alab: 2, mrvl: 4 },
		{ axis: "가격 부담", alab: 5, mrvl: 5 },
	],
	finalView: [
		{
			title: "ALAB",
			body: "작고 빠르다. AI 서버 연결 문제가 커진다는 데 집중 베팅하는 회사다.",
		},
		{
			title: "MRVL",
			body: "크고 넓다. AI 칩, 빛 통신, 네트워크가 함께 커진다는 데 베팅하는 회사다. Broadcom을 압도하기보다는 NVIDIA-compatible custom XPU와 optical interconnect에서 몫을 키우는지가 핵심이다.",
		},
		{
			title: "Broadcom 비교",
			body: "Broadcom은 이미 AI 매출 규모와 Ethernet/custom ASIC에서 매우 강하다. MRVL의 승리 조건은 시장이 커져서 여러 승자가 생기고, MRVL의 optical/CPO/NVLink Fusion 조합이 실제 매출로 이어지는 것이다.",
		},
		{
			title: "공통 결론",
			body: "둘 다 좋은 이야기가 있지만 이미 가격도 높다. 투자 판단은 성장 숫자가 계속 따라오는지 확인하는 과정이다.",
		},
	],
};

window.dashboardData = {
	tabs: [
		{ id: "ALAB", label: "ALAB", description: "AI 데이터 길" },
		{ id: "MRVL", label: "MRVL", description: "AI 인프라 묶음" },
		{ id: "Compare", label: "Compare", description: "쉽게 비교" },
	],
	activeTab: "ALAB",
	companies: {
		ALAB: alabResearch,
		MRVL: mrvlResearch,
	},
	compare: compareResearch,
};
