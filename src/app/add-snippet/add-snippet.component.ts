import { Component, OnInit } from '@angular/core';
import { Snippet } from '../snippet';
import { SnippetService } from '../snippet.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-add-snippet',
	templateUrl: './add-snippet.component.html',
	styleUrls: ['./add-snippet.component.css']
})
export class AddSnippetComponent implements OnInit {

	snippets: Snippet[] = [];
	errorMessage: string;

	constructor(private snippetService: SnippetService,
				private location: Location) { 
	}

	ngOnInit() {
	}

	addSnippet(nickname: string, language: string, tags: string, description: string, code: string) {
		if (!nickname) {return;}
		let tagsArray = tags.split(',');
		this.snippetService.create(nickname, language, tagsArray, description, code)
							.subscribe(
								snippet => this.snippets.push(snippet),
								error => this.errorMessage = <any> error);
		this.location.back();
	}

	goBack(): void {
		this.location.back();
	}

}
