function makeDashboardRenderers($, dashboard) {
	function renderCards(containerId, items, itemRenderer) {
		$(containerId).innerHTML = items
			.map((item, index) => itemRenderer(item, index))
			.join("");
	}

	function renderCompanyLists(company) {
		renderCards(
			"productGrid",
			company.products,
			(product) => `
				<article class="product-card">
					<h3>${product.name}</h3>
					<span class="protocol">${product.protocol}</span>
					<p>${product.role}</p>
				</article>
			`,
		);
		renderCards(
			"valueChain",
			company.valueChain,
			(step, index) => `
				<article class="value-step ${step.active ? "active" : ""}">
					<span class="index">${String(index + 1).padStart(2, "0")}</span>
					<h3>${step.title}</h3>
					<p>${step.body}</p>
				</article>
			`,
		);
		renderCards(
			"timeline",
			company.timeline,
			(item) => `
				<article class="timeline-item">
					<div class="timeline-date">${item.date}</div>
					<div><h3>${item.title}</h3><p>${item.body}</p></div>
				</article>
			`,
		);
	}

	function renderSidePanels(company) {
		$("riskList").innerHTML = company.risks
			.map(
				(risk) =>
					`<div class="risk-item"><strong><span>${risk.name}</span><span>${risk.score}/5</span></strong><p>${risk.evidence}</p></div>`,
			)
			.join("");
		$("scenarioStack").innerHTML = company.scenarios
			.map(
				(scenario) =>
					`<article class="scenario ${scenario.className}"><h3>${scenario.name}</h3><p>${scenario.headline}</p><ul>${scenario.points.map((point) => `<li>${point}</li>`).join("")}</ul></article>`,
			)
			.join("");
		$("truthGrid").innerHTML = company.truth
			.map(
				(item) =>
					`<article class="truth-card"><strong>${item.title}</strong><p>${item.body}</p></article>`,
			)
			.join("");
	}

	function renderCompetitors(company) {
		$("competitorRows").innerHTML = company.competitors
			.map(
				(item) =>
					`<tr><td>${item.name}</td><td>${item.axis}</td><td>${item.point}</td></tr>`,
			)
			.join("");
	}

	function renderSectionLabels(company) {
		$("financials-title").textContent = company.sectionLabels.financials;
		$("portfolio-title").textContent = company.sectionLabels.portfolio;
		$("value-title").textContent = company.sectionLabels.valueChain;
		$("timeline-title").textContent = company.sectionLabels.timeline;
		$("truth-title").textContent = company.sectionLabels.truth;
	}

	function renderCompare() {
		$("headerEyebrow").textContent = "NASDAQ: ALAB · MRVL · 기준일 2026-06-03";
		$("pageTitle").textContent = "ALAB vs MRVL 비교 대시보드";
		document.title = "ALAB vs MRVL Compare Dashboard";
		$("compareSummary").innerHTML = dashboard.compare.summary
			.map(
				(item) =>
					`<div><strong>${item.title}</strong><span>${item.body}</span></div>`,
			)
			.join("");
		$("compareSources").innerHTML = dashboard.compare.sources
			.map(
				(item) =>
					`<li><strong>${item.title}</strong><span>${item.detail}</span></li>`,
			)
			.join("");
		$("compareRows").innerHTML = dashboard.compare.rows
			.map(
				(row) =>
					`<tr><td>${row.axis}</td><td>${row.alab}</td><td>${row.mrvl}</td></tr>`,
			)
			.join("");
	}

	return {
		renderCompanyLists,
		renderCompetitors,
		renderCompare,
		renderSectionLabels,
		renderSidePanels,
	};
}

window.makeDashboardRenderers = makeDashboardRenderers;
