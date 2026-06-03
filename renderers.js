function makeDashboardRenderers($, dashboard) {
	const formatMoney = (value) => {
		if (Math.abs(value) >= 1000) return `$${(value / 1000).toFixed(2)}B`;
		return `$${value.toFixed(1)}M`;
	};

	const list = (items) => items.map((item) => `<li>${item}</li>`).join("");

	function renderTabs(activeTab, onSelect) {
		$("tabNav").innerHTML = dashboard.tabs
			.map(
				(tab) => `
					<button class="tab-button ${activeTab === tab.id ? "active" : ""}" data-tab="${tab.id}">
						<strong>${tab.label}</strong>
						<span>${tab.description}</span>
					</button>
				`,
			)
			.join("");

		for (const button of $("tabNav").querySelectorAll("button")) {
			button.addEventListener("click", () => onSelect(button.dataset.tab));
		}
	}

	function renderHeader(company) {
		$("headerEyebrow").textContent =
			`NASDAQ: ${company.company.ticker} · 기준일 ${company.company.asOfDate}`;
		$("pageTitle").textContent = `${company.company.name} 쉬운 분석`;
		document.title = `${company.company.ticker} AI 반도체 쉬운 대시보드`;
	}

	function renderSnapshot(company) {
		$("companyTicker").textContent = company.company.ticker;
		$("companyType").textContent = company.company.type;
		$("snapshotSummary").textContent = company.snapshot.summary;
		$("snapshotProfile").textContent = company.snapshot.profile;
		$("snapshotCharacter").textContent = company.snapshot.character;
		$("snapshotQuestion").textContent = company.snapshot.keyQuestion;
		$("snapshotRead").textContent = company.snapshot.researchRead;
		$("priceDiscipline").textContent = company.snapshot.priceDiscipline;
		$("valuationWarning").textContent = company.snapshot.valuationWarning;
		$("heroTags").innerHTML = company.snapshot.tags
			.map((tag) => `<span>${tag}</span>`)
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

	function renderBusiness(company) {
		$("businessModel").textContent = company.business.model;
		$("businessBody").innerHTML = `<p>${company.business.body}</p>`;
		$("productGrid").innerHTML = company.business.products
			.map(
				(product) => `
					<article class="product-card">
						<div>
							<h3>${product.name}</h3>
							<span>${product.label}</span>
						</div>
						<p>${product.body}</p>
					</article>
				`,
			)
			.join("");
	}

	function renderWhyNow(company) {
		$("whyNowGrid").innerHTML = company.whyNow
			.map(
				(item) => `
					<article class="insight-item">
						<h3>${item.title}</h3>
						<p>${item.body}</p>
					</article>
				`,
			)
			.join("");
	}

	function renderFinancials(company) {
		$("financialRows").innerHTML = company.financialMomentum.rows
			.map(
				(row) => `
					<tr>
						<td>${row.period}</td>
						<td>${formatMoney(row.revenue)}</td>
						<td>${row.growthLabel ?? row.note}</td>
						<td>${row.profitLabel ?? `${row.gaapMargin.toFixed(1)}% GM`}</td>
						<td>${row.takeaway ?? (row.dataCenterShare ? `데이터센터 비중 ${row.dataCenterShare}%` : row.note)}</td>
					</tr>
				`,
			)
			.join("");

		$("financialNotes").innerHTML = company.financialMomentum.notes
			.map((note) => `<p>${note}</p>`)
			.join("");
	}

	function renderValuation(company) {
		$("marketDataAsOf").textContent = company.valuation.marketDataAsOf;
		$("valuationStats").innerHTML = company.valuation.stats
			.map(
				(stat) => `
					<article>
						<span>${stat.label}</span>
						<strong>${stat.value}</strong>
						<em>${stat.detail}</em>
					</article>
				`,
			)
			.join("");
		$("valuationLens").innerHTML = company.valuation.lenses
			.map(
				(item) => `
					<article>
						<h3>${item.title}</h3>
						<p>${item.body}</p>
					</article>
				`,
			)
			.join("");
	}

	function renderDrivers(company) {
		$("driverList").innerHTML = company.growthDrivers
			.map(
				(driver) => `
					<article>
						<h3>${driver.title}</h3>
						<p>${driver.body}</p>
					</article>
				`,
			)
			.join("");
	}

	function renderRisks(company) {
		$("riskList").innerHTML = company.risks
			.map(
				(risk) => `
					<div class="risk-item">
						<strong><span>${risk.name}</span><span>${risk.score}/5</span></strong>
						<p>${risk.evidence}</p>
					</div>
				`,
			)
			.join("");
	}

	function renderInvestmentRead(company) {
		const read = company.investmentRead;
		$("investmentRead").innerHTML = `
			<article class="read-card bull"><h3>좋게 풀리면</h3><ul>${list(read.bull)}</ul></article>
			<article class="read-card base"><h3>보통이면</h3><ul>${list(read.base)}</ul></article>
			<article class="read-card bear"><h3>나쁘게 풀리면</h3><ul>${list(read.bear)}</ul></article>
			<article class="read-card"><h3>꼭 확인할 숫자</h3><ul>${list(read.monitor)}</ul></article>
			<article class="read-card"><h3>관심 가질 상황</h3><ul>${list(read.goodEntry)}</ul></article>
			<article class="read-card"><h3>조심할 상황</h3><ul>${list(read.avoidWhen)}</ul></article>
		`;
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

	function renderCompany(company) {
		renderHeader(company);
		renderSnapshot(company);
		renderKpis(company);
		renderBusiness(company);
		renderWhyNow(company);
		renderFinancials(company);
		renderValuation(company);
		renderDrivers(company);
		renderRisks(company);
		renderInvestmentRead(company);
		renderSources(company);
	}

	function renderCompare() {
		const compare = dashboard.compare;
		$("headerEyebrow").textContent = "NASDAQ: ALAB · MRVL · 기준일 2026-06-03";
		$("pageTitle").textContent = "ALAB vs MRVL 쉬운 비교";
		document.title = "ALAB vs MRVL AI 반도체 쉬운 비교";
		$("compareHeadline").textContent = compare.headline.title;
		$("compareBody").textContent = compare.headline.body;
		$("compareResearchView").textContent = compare.headline.researchView;
		$("compareResearchNote").textContent = compare.headline.note;
		$("compareHeadlineGrid").innerHTML = compare.headline.cards
			.map(
				(card) => `
					<article>
						<span>${card.title}</span>
						<strong>${card.body}</strong>
					</article>
				`,
			)
			.join("");
		$("compareRows").innerHTML = compare.rows
			.map(
				(row) => `
					<tr>
						<td>${row.axis}</td>
						<td>${row.alab}</td>
						<td>${row.mrvl}</td>
					</tr>
				`,
			)
			.join("");
		$("investorFit").innerHTML = compare.investorFit
			.map(
				(fit) => `
					<article>
						<h3>${fit.title}</h3>
						<p>${fit.body}</p>
						<ul>${list(fit.points)}</ul>
					</article>
				`,
			)
			.join("");
		$("decisionScores").innerHTML = compare.decisionScores
			.map(
				(score) => `
					<div class="score-row">
						<span>${score.axis}</span>
						<strong>ALAB ${score.alab}</strong>
						<strong>MRVL ${score.mrvl}</strong>
					</div>
				`,
			)
			.join("");
		$("finalView").innerHTML = compare.finalView
			.map(
				(item) => `
					<article>
						<h3>${item.title}</h3>
						<p>${item.body}</p>
					</article>
				`,
			)
			.join("");
	}

	return {
		renderTabs,
		renderCompany,
		renderCompare,
	};
}

window.makeDashboardRenderers = makeDashboardRenderers;
