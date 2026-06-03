function createDashboardCharts(data) {
	if (!window.Chart) {
		return;
	}

	const Chart = window.Chart;
	const grid = "rgba(102, 112, 133, 0.2)";
	for (const chart of Object.values(window.dashboardCharts ?? {})) {
		chart.destroy();
	}
	window.dashboardCharts = {};
	Chart.defaults.font.family = "'IBM Plex Sans KR', system-ui, sans-serif";
	Chart.defaults.color = "#172033";

	window.dashboardCharts.revenue = new Chart(
		document.getElementById("revenueChart"),
		{
			type: "bar",
			data: {
				labels: data.financials.map((item) => item.period),
				datasets: [
					{
						label: "Revenue ($M)",
						data: data.financials.map((item) => item.revenue),
						backgroundColor: ["#0f766e", "#2563eb", "#b45309"],
						borderRadius: 6,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					title: { display: true, text: "Quarterly Revenue" },
				},
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
				labels: data.financials.map((item) => item.period),
				datasets: [
					{
						label: "GAAP GM %",
						data: data.financials.map((item) => item.gaapMargin),
						borderColor: "#047857",
						backgroundColor: "rgba(4, 120, 87, 0.12)",
						tension: 0.28,
						yAxisID: "y",
					},
					{
						label: "GAAP Net Income ($M)",
						data: data.financials.map((item) => item.netIncome),
						borderColor: "#b45309",
						backgroundColor: "rgba(180, 83, 9, 0.12)",
						tension: 0.28,
						yAxisID: "y1",
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: { title: { display: true, text: "Margin and Profitability" } },
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

	const hasDataCenterShare = data.financials.some(
		(item) => item.dataCenterShare,
	);
	window.dashboardCharts.mix = new Chart(document.getElementById("mixChart"), {
		type: hasDataCenterShare ? "line" : "bar",
		data: {
			labels: hasDataCenterShare
				? data.financials.map((item) => item.period)
				: data.annualRevenue.map((item) => item.period),
			datasets: [
				{
					label: hasDataCenterShare
						? "Data Center Share %"
						: "Annual Revenue ($M)",
					data: hasDataCenterShare
						? data.financials.map((item) => item.dataCenterShare)
						: data.annualRevenue.map((item) => item.revenue),
					borderColor: "#2563eb",
					backgroundColor: "rgba(37, 99, 235, 0.14)",
					borderRadius: 6,
					tension: 0.28,
					fill: hasDataCenterShare,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: { display: false },
				title: {
					display: true,
					text: hasDataCenterShare
						? "Data Center Revenue Mix"
						: "Annual Revenue",
				},
			},
			scales: {
				y: {
					grid: { color: grid },
					ticks: {
						callback: (value) =>
							hasDataCenterShare ? `${value}%` : `$${value}M`,
					},
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
				labels: data.risks.map((risk) => risk.name),
				datasets: [
					{
						label: "Risk Score",
						data: data.risks.map((risk) => risk.score),
						borderColor: "#b91c1c",
						backgroundColor: "rgba(185, 28, 28, 0.13)",
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

window.createDashboardCharts = createDashboardCharts;
