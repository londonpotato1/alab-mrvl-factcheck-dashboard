(() => {
	const dashboard = window.dashboardData;
	const state = {
		activeTab: dashboard.activeTab,
	};

	const $ = (id) => document.getElementById(id);
	const renderers = window.makeDashboardRenderers($, dashboard);

	function activeCompany() {
		return dashboard.companies[state.activeTab] ?? dashboard.companies.ALAB;
	}

	function render() {
		renderers.renderTabs(state.activeTab, (tab) => {
			state.activeTab = tab;
			render();
		});

		const isCompare = state.activeTab === "Compare";
		$("companyPanel").hidden = isCompare;
		$("comparePanel").hidden = !isCompare;

		if (isCompare) {
			renderers.renderCompare();
			window.createCompareChart(dashboard.compare);
			return;
		}

		const company = activeCompany();
		renderers.renderCompany(company);
		window.createCompanyCharts(company);
	}

	window.addEventListener("DOMContentLoaded", render);
})();
