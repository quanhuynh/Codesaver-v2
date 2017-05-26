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
	}

	goBack(): void {
		this.router.navigate(['/dashboard']);
	}

}
