(() => {
	const dashboard = window.dashboardData;
	const state = {
		activeTab: dashboard.activeTab,
		verdict: "All",
		selectedClaimIndex: 0,
	};
	const verdicts = [
		"All",
		"Confirmed",
		"Partially True",
		"Outdated",
		"Unsupported",
		"False",
	];

	const $ = (id) => document.getElementById(id);
	const slug = (value) => value.toLowerCase().replaceAll(" ", "-");
	const money = (value) =>
		value >= 1000 ? `$${(value / 1000).toFixed(2)}B` : `$${value.toFixed(1)}M`;
	const renderers = window.makeDashboardRenderers($, dashboard);

	function activeCompany() {
		return dashboard.companies[state.activeTab] ?? dashboard.companies.ALAB;
	}

	function sourceMap(company) {
		return new Map(company.sources.map((source) => [source.id, source]));
	}

	function renderTabs() {
		$("tabNav").innerHTML = dashboard.tabs
			.map(
				(tab) => `
					<button class="tab-button ${state.activeTab === tab.id ? "active" : ""}" data-tab="${tab.id}">
						<strong>${tab.label}</strong>
						<span>${tab.description}</span>
					</button>
				`,
			)
			.join("");

		$("tabNav")
			.querySelectorAll("button")
			.forEach((button) => {
				button.addEventListener("click", () => {
					state.activeTab = button.dataset.tab;
					state.verdict = "All";
					state.selectedClaimIndex = 0;
					render();
				});
			});
	}

	function renderHeader(company) {
		$("headerEyebrow").textContent =
			`NASDAQ: ${company.company.ticker} · 기준일 ${company.company.asOfDate}`;
		$("pageTitle").textContent = `${company.company.name} 팩트체크 대시보드`;
		document.title = `${company.company.ticker} Fact-Check Dashboard`;
	}

	function renderHero(company) {
		$("heroKicker").textContent = company.hero.kicker;
		$("heroTitle").textContent = company.hero.title;
		$("heroBody").textContent = company.hero.body;
		$("heroSplit").innerHTML = company.hero.splits
			.map(
				(item) =>
					`<div><strong>${item.title}</strong><span>${item.body}</span></div>`,
			)
			.join("");
	}

	function renderKpis(company) {
		$("kpiGrid").innerHTML = company.kpis
			.map(
				(kpi) => `
					<article class="kpi-card ${kpi.risk ? "risk" : ""}">
						<span>${kpi.label}</span>
						<strong>${kpi.value}</strong>
						<em>${kpi.meta}</em>
					</article>
				`,
			)
			.join("");
	}

	function renderSources(company) {
		$("primarySources").innerHTML = company.sources
			.map(
				(source) => `
					<li>
						<strong><a href="${source.url}" target="_blank" rel="noopener">${source.title}</a></strong>
						<span>${source.type} · ${source.detail}</span>
					</li>
				`,
			)
			.join("");
	}

	function renderFilters() {
		$("verdictFilters").innerHTML = verdicts
			.map(
				(verdict) => `
					<button class="filter-btn ${state.verdict === verdict ? "active" : ""}" data-verdict="${verdict}">
						${verdict}
					</button>
				`,
			)
			.join("");

		$("verdictFilters")
			.querySelectorAll("button")
			.forEach((button) => {
				button.addEventListener("click", () => {
					state.verdict = button.dataset.verdict;
					state.selectedClaimIndex = 0;
					renderClaims(activeCompany());
					renderEvidence(activeCompany());
				});
			});
	}

	function filteredClaims(company) {
		if (state.verdict === "All") return company.claimChecks;
		return company.claimChecks.filter(
			(claim) => claim.verdict === state.verdict,
		);
	}

	function renderClaims(company) {
		const claims = filteredClaims(company);
		$("claimRows").innerHTML = claims
			.map((claim, index) => {
				const sourceIndex = company.claimChecks.indexOf(claim);
				const active = index === state.selectedClaimIndex ? "active-row" : "";
				return `
					<tr class="${active}" data-claim-index="${sourceIndex}">
						<td>${claim.claim}</td>
						<td><span class="badge ${slug(claim.verdict)}">${claim.verdict}</span></td>
						<td>${claim.latest}</td>
						<td>${claim.dashboard}</td>
					</tr>
				`;
			})
			.join("");

		$("claimRows")
			.querySelectorAll("tr")
			.forEach((row, index) => {
				row.addEventListener("click", () => {
					state.selectedClaimIndex = index;
					renderClaims(company);
					renderEvidence(company);
				});
			});
	}

	function renderEvidence(company) {
		const claim =
			filteredClaims(company)[state.selectedClaimIndex] ??
			company.claimChecks[0];
		const sources = sourceMap(company);
		const links = claim.sourceIds
			.map((id) => sources.get(id))
			.filter(Boolean)
			.map(
				(source) =>
					`<a href="${source.url}" target="_blank" rel="noopener">${source.title}</a>`,
			)
			.join(" · ");

		$("evidenceDrawer").innerHTML = `
			<span class="badge ${slug(claim.verdict)}">${claim.verdict}</span>
			<div class="evidence-box"><strong>원문 주장</strong><p>${claim.claim}</p></div>
			<div class="evidence-box"><strong>검증 근거</strong><p>${claim.evidence}</p></div>
			<div class="evidence-box"><strong>최신 반영</strong><p>${claim.latest}</p></div>
			<div class="evidence-box"><strong>출처</strong><p>${links}</p></div>
		`;
	}

	function renderFinancialRows(company) {
		$("financialRows").innerHTML = company.financials
			.map(
				(item) => `
					<tr>
						<td>${item.period}</td>
						<td>${money(item.revenue)}</td>
						<td>${item.gaapMargin.toFixed(1)}%</td>
						<td>${money(item.netIncome)}</td>
					</tr>
				`,
			)
			.join("");
	}

	function renderCompany() {
		const company = activeCompany();
		renderHeader(company);
		renderHero(company);
		renderKpis(company);
		renderSources(company);
		renderFilters();
		renderClaims(company);
		renderEvidence(company);
		renderFinancialRows(company);
		renderers.renderCompanyLists(company);
		renderers.renderSidePanels(company);
		renderers.renderCompetitors(company);
		renderers.renderSectionLabels(company);
		window.createDashboardCharts(company);
	}

	function render() {
		renderTabs();
		const isCompare = state.activeTab === "Compare";
		$("companyPanel").hidden = isCompare;
		$("comparePanel").hidden = !isCompare;
		if (isCompare) renderers.renderCompare();
		else renderCompany();
	}

	window.addEventListener("DOMContentLoaded", render);
})();
