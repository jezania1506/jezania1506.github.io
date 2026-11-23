import type { SidebarConfig } from "@/types/sidebarConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const sidebarConfig: SidebarConfig = withUserConfig("sidebar", {
	enable: true,
	arrangement: "single",
	side: "left",
	components: [
		{ type: "profile", enable: true, slot: "top" },
	],
});