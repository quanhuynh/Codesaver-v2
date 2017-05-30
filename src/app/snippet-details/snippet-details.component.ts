import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Snippet } from '../snippet';
import { SnippetService } from '../snippet.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-snippet-details',
	templateUrl: './snippet-details.component.html',
	styleUrls: ['./snippet-details.component.css']
})
export class SnippetDetailsComponent implements OnInit {
	snippet: Snippet;
	snippets: Snippet[];
	errorMessage: string;

	constructor(
		private snippetService: SnippetService,
		private route: ActivatedRoute,
		private router: Router,
		private location: Location) {}

	ngOnInit(): void {
		console.log(this.route.params);
		this.route.params
			.switchMap((params: Params) => this.snippetService.getSnippet(params['nickname']))
			.subscribe((snippet: Snippet) => this.snippet = snippet);
		this.snippetService.getSnippets()
			.subscribe(snippets => this.snippets = snippets,
						error => this.errorMessage = <any> error);
	}

	goBack(): void {
		this.router.navigate(['/dashboard']);
	}

	deleteSnippet() {
		if (!this.snippet) {return;}
		console.log(this.snippets);
		this.snippetService.remove(this.snippet.nickname)
							.subscribe(snippet => this.snippets.splice(this.snippets.findIndex(this.isEqual, 1)),
										error => this.errorMessage = <any> error);

		this.location.back();
	}

	isEqual(otherSnippet: Snippet) {
		return otherSnippet.nickname == "Alert code";
	}

}
