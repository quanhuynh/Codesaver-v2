import { InMemoryDbService } from 'angular-in-memory-web-api';

export class SnippetData implements InMemoryDbService {
	createDb() {
		let snippets = [
			{ nickname: "Alert code", language: "JavaScript", tags: ["js", "simple"], description: "alerting on browser", code: "alert('woo');" },
			{ nickname: "Div tag", language: "HTML", tags: ["html", "simple"], description: "div tags in HTML", code: "<div></div>" }
		];
		return {snippets};
	}

}
