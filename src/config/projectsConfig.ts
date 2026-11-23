import type { ProjectsConfig } from "@/types/projectsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const projectsConfig: ProjectsConfig = withUserConfig("projects", {
	enable: true,
	title: "$t:projects",
	description: "$t:projectsBanner",
	categories: [
		{
			key: "pengumpulan-analisis-data",
			label: "Pengumpulan dan Analisis Data",
			icon: "material-symbols:analytics-outline-rounded",
		},
		{
			key: "penulisan-ilmiah",
			label: "Penulisan Ilmiah",
			icon: "material-symbols:description-outline-rounded",
		},
		{
			key: "pengolahan-data-teknologi",
			label: "Pengolahan Data dan Teknologi",
			icon: "material-symbols:table-chart-outline-rounded",
		},
	],
});