function destroyCharts() {
	for (const chart of Object.values(window.dashboardCharts ?? {})) {
		chart.destroy();
	}
	window.dashboardCharts = {};
}

function baseChartOptions(title) {
	return {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					boxWidth: 10,
					boxHeight: 10,
				},
			},
			title: {
				display: true,
				text: title,
			},
		},
	};
}

function createCompanyCharts(company) {
	if (!window.Chart) return;

	const Chart = window.Chart;
	Chart.defaults.font.family = "'IBM Plex Sans KR', system-ui, sans-serif";
	Chart.defaults.color = "#172033";
	const grid = "rgba(101, 116, 139, 0.22)";
	const rows = company.financialMomentum.rows;
	const annual = company.financialMomentum.annual;

	destroyCharts();

	window.dashboardCharts.revenue = new Chart(
		document.getElementById("revenueChart"),
		{
			type: "bar",
			data: {
				labels: rows.map((row) => row.period),
				datasets: [
					{
						label: "Revenue ($M)",
						data: rows.map((row) => row.revenue),
						backgroundColor: "#0f766e",
						borderRadius: 5,
					},
				],
			},
			options: {
				...baseChartOptions("매출이 커지는 속도"),
				scales: {
					y: {
						grid: { color: grid },
						ticks: { callback: (value) => `$${value}M` },
					},
					x: { grid: { display: false } },
				},
			},
		},
	);

	window.dashboardCharts.margin = new Chart(
		document.getElementById("marginChart"),
		{
			type: "line",
			data: {
				labels: rows.map((row) => row.period),
				datasets: [
					{
						label: "이익률 %",
						data: rows.map((row) => row.gaapMargin),
						borderColor: "#2563eb",
						backgroundColor: "rgba(37, 99, 235, 0.12)",
						tension: 0.25,
						yAxisID: "y",
					},
					{
						label: "순이익 ($M)",
						data: rows.map((row) => row.netIncome),
						borderColor: "#b45309",
						backgroundColor: "rgba(180, 83, 9, 0.12)",
						tension: 0.25,
						yAxisID: "y1",
					},
				],
			},
			options: {
				...baseChartOptions("이익률과 순이익"),
				scales: {
					y: {
						position: "left",
						grid: { color: grid },
						ticks: { callback: (value) => `${value}%` },
					},
					y1: {
						position: "right",
						grid: { display: false },
						ticks: { callback: (value) => `$${value}M` },
					},
					x: { grid: { display: false } },
				},
			},
		},
	);

	const hasMix = rows.some((row) => row.dataCenterShare);
	window.dashboardCharts.mix = new Chart(document.getElementById("mixChart"), {
		type: hasMix ? "line" : "bar",
		data: {
			labels: hasMix
				? rows.map((row) => row.period)
				: annual.map((row) => row.period),
			datasets: [
				{
					label: hasMix ? "Data Center Share %" : "Annual Revenue ($M)",
					data: hasMix
						? rows.map((row) => row.dataCenterShare)
						: annual.map((row) => row.revenue),
					borderColor: "#047857",
					backgroundColor: hasMix ? "rgba(4, 120, 87, 0.13)" : "#94a3b8",
					borderRadius: 5,
					fill: hasMix,
					tension: 0.25,
				},
			],
		},
		options: {
			...baseChartOptions(hasMix ? "데이터센터 매출 비중" : "연간 매출 성장"),
			plugins: {
				...baseChartOptions("").plugins,
				legend: { display: false },
				title: {
					display: true,
					text: hasMix ? "데이터센터 매출 비중" : "연간 매출 성장",
				},
			},
			scales: {
				y: {
					grid: { color: grid },
					ticks: { callback: (value) => (hasMix ? `${value}%` : `$${value}M`) },
				},
				x: { grid: { display: false } },
			},
		},
	});

	window.dashboardCharts.risk = new Chart(
		document.getElementById("riskChart"),
		{
			type: "radar",
			data: {
				labels: company.risks.map((risk) => risk.name),
				datasets: [
					{
						label: "Risk Score",
						data: company.risks.map((risk) => risk.score),
						borderColor: "#b91c1c",
						backgroundColor: "rgba(185, 28, 28, 0.12)",
						pointBackgroundColor: "#b91c1c",
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: { legend: { display: false } },
				scales: {
					r: {
						beginAtZero: true,
						max: 5,
						ticks: { stepSize: 1, backdropColor: "transparent" },
						grid: { color: grid },
						angleLines: { color: grid },
					},
				},
			},
		},
	);
}

function createCompareChart(compare) {
	if (!window.Chart) return;

	const Chart = window.Chart;
	Chart.defaults.font.family = "'IBM Plex Sans KR', system-ui, sans-serif";
	Chart.defaults.color = "#172033";
	destroyCharts();

	window.dashboardCharts.compare = new Chart(
		document.getElementById("compareScoreChart"),
		{
			type: "radar",
			data: {
				labels: compare.decisionScores.map((score) => score.axis),
				datasets: [
					{
						label: "ALAB",
						data: compare.decisionScores.map((score) => score.alab),
						borderColor: "#0f766e",
						backgroundColor: "rgba(15, 118, 110, 0.14)",
						pointBackgroundColor: "#0f766e",
					},
					{
						label: "MRVL",
						data: compare.decisionScores.map((score) => score.mrvl),
						borderColor: "#2563eb",
						backgroundColor: "rgba(37, 99, 235, 0.12)",
						pointBackgroundColor: "#2563eb",
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					r: {
						beginAtZero: true,
						max: 5,
						ticks: { stepSize: 1, backdropColor: "transparent" },
						grid: { color: "rgba(101, 116, 139, 0.22)" },
						angleLines: { color: "rgba(101, 116, 139, 0.22)" },
					},
				},
			},
		},
	);
}

window.createCompanyCharts = createCompanyCharts;
window.createCompareChart = createCompareChart;
