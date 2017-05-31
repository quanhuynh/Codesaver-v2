import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Snippet } from '../snippet';
import { SnippetService } from '../snippet.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	snippets: Snippet[] = [];
	errorMessage: string;

	constructor(private router: Router, private snippetService: SnippetService) { }

	ngOnInit(): void {
		this.snippetService.getSnippets()
			.subscribe(snippets => this.snippets = snippets,
						error => this.errorMessage = <any> error);

	}

	onSelect(snippet: Snippet) {
		this.router.navigate(['/detail', snippet.nickname]);
	}
	

}
